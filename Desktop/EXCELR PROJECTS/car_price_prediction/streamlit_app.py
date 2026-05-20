
import streamlit as st
import pandas as pd
import pickle
import numpy as np
from category_encoders.target_encoder import TargetEncoder
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.ensemble import RandomForestRegressor # Added this import for type checking
import os

# --- 1. Streamlit App Configuration ---
st.set_page_config(layout="wide")
st.title('Car Price Predictor')

# --- 2. Load Model and Preprocessing Objects (Cached for Efficiency) ---
@st.cache_resource
def load_artifacts():
    try:
        model = pickle.load(open('artifacts/random_forest_model.pkl', 'rb'))
        # Add a type check for the loaded model
        if not isinstance(model, RandomForestRegressor):
            st.error(f"Error: Loaded model is not a RandomForestRegressor. Type is {type(model)}")
            st.stop()

        scaler = pickle.load(open('artifacts/scaler.pkl', 'rb'))
        column_transformer = pickle.load(open('artifacts/column_transformer.pkl', 'rb'))
        return model, scaler, column_transformer
    except Exception as e:
        st.error(f"Error loading model or preprocessing objects: {e}")
        st.stop()

model, scaler, column_transformer = load_artifacts()

# --- 3. Load Unique Values for Dropdowns (Cached for Efficiency) ---
@st.cache_data
def load_unique_values():
    try:
        # Assuming 'data/cleaned_cars_data.csv' contains the preprocessed data
        # from which unique categories can be derived.
        cleaned_df = pd.read_csv('data/cleaned_cars_data.csv')
        return {
            'make': sorted(cleaned_df['make'].unique()),
            'model': sorted(cleaned_df['model'].unique()),
            'year': sorted(cleaned_df['year'].unique().astype(int)),
            'ownernumber': sorted(cleaned_df['ownernumber'].unique().astype(int)),
            'fueltype': sorted(cleaned_df['fueltype'].unique()),
            'transmission': sorted(cleaned_df['transmission'].unique()),
            'bodytype': sorted(cleaned_df['bodytype'].unique()),
            'registrationcity': sorted(cleaned_df['registrationcity'].unique()),
            'registrationstate': sorted(cleaned_df['registrationstate'].unique())
        }
    except Exception as e:
        st.error(f"Error loading cleaned_cars_data.csv or extracting unique values: {e}")
        st.stop()

unique_values = load_unique_values()

# --- 4. Streamlit Input Form for Car Details ---
with st.form("prediction_form"):
    st.header("Enter Car Details")

    col1, col2, col3 = st.columns(3)

    with col1:
        make = st.selectbox('Make', unique_values['make'])
        model_input = st.selectbox('Model', unique_values['model']) # Renamed to avoid conflict with 'model' variable
        year = st.selectbox('Year', unique_values['year'])

    with col2:
        fueltype = st.selectbox('Fuel Type', unique_values['fueltype'])
        kilometerdriven = st.number_input('Kilometer Driven', min_value=0, value=50000, step=1000)
        ownernumber = st.selectbox('Owner Number', unique_values['ownernumber'])

    with col3:
        transmission = st.selectbox('Transmission', unique_values['transmission'])
        bodytype = st.selectbox('Body Type', unique_values['bodytype'])
        registrationcity = st.selectbox('Registration City', unique_values['registrationcity'])
        registrationstate = st.selectbox('Registration State', unique_values['registrationstate'])

    submit_button = st.form_submit_button("Predict Price")

    # --- 5. Prediction Logic (Executed on Form Submission) ---
    if submit_button:
        input_data = pd.DataFrame([{ # Create DataFrame from user inputs
            'make': make,
            'model': model_input, # Use model_input here
            'year': year,
            'fueltype': fueltype,
            'kilometerdriven': float(kilometerdriven),
            'ownernumber': int(ownernumber),
            'transmission': transmission,
            'bodytype': bodytype,
            'registrationcity': registrationcity,
            'registrationstate': registrationstate
        }])

        try:
            # Apply transformations using the loaded preprocessing objects
            # The column_transformer handles both target and one-hot encoding
            input_encoded = column_transformer.transform(input_data)

            # Scale numerical features using the loaded StandardScaler
            input_scaled = scaler.transform(input_encoded)

            # Make prediction using the loaded model
            prediction = model.predict(input_scaled)[0]
            st.success(f'Predicted Selling Price: ₹{prediction:,.2f}')
        except Exception as e:
            st.error(f"Error during prediction: {e}")

# To run this app:
# 1. Ensure all .pkl files and cleaned_cars_data.csv are in their respective directories ('artifacts', 'data').
# 2. Save this code as `streamlit_app.py`.
# 3. Open a terminal in your environment and run: `streamlit run streamlit_app.py`
