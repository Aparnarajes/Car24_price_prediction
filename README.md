
# Car Price Prediction Project

## Project Overview
This project predicts used car prices using Machine Learning techniques on the Cars24 dataset.  
The project includes data preprocessing, exploratory data analysis (EDA), feature engineering, model training, evaluation, and deployment using a Streamlit web application.

The best-performing model selected for deployment is:

- Random Forest Regressor

## Table of Contents
1. [Project Structure](#project-structure)
2. [Dataset](#dataset)
3. [Data Preprocessing and Feature Engineering](#data-preprocessing-and-feature-engineering)
4. [Models Used](#models-used)
5. [Streamlit Application Setup](#streamlit-application-setup)
6. [How to Run the Streamlit Application](#how-to-run-the-streamlit-application)

## Project Structure
# Project Root
├── streamlit_app.py
├── car_price_prediction_withStreamlit.ipynb
│
├── data/
│ ├── cars24_data.csv
│ └── cleaned_cars_data.csv
│
├── artifacts/
│ ├── random_forest_model.pkl
│ ├── scaler.pkl
│ └── column_transformer.pkl
│
└── README.md

## Dataset
The dataset `cars24_data.csv` contains used car information such as:

- make
- model
- year
- fueltype
- transmission
- bodytype
- kilometerdriven
- ownernumber
- registrationcity
- registrationstate
- selling price

The raw dataset is cleaned and transformed during preprocessing.

## Data Preprocessing and Feature Engineering
The following preprocessing steps were performed:

- Handling missing values
- Removing duplicate records
- Feature engineering
- Outlier handling
- Encoding categorical variables
- Scaling numerical features

### Encoding Techniques
- Target Encoding
- One Hot Encoding

### Feature Scaling
- StandardScaler

## Models Used
Several regression models were trained and evaluated:

- Linear Regression
- Gradient Boosting Regressor
- Random Forest Regressor
- XGBoost Regressor
- KNeighbors Regressor

### Best Model
Random Forest Regressor achieved the best performance and was selected for deployment.

## Streamlit Application Setup
The project uses a Streamlit web application (`streamlit_app.py`) to predict car prices.

The application loads:

- Random Forest model
- StandardScaler
- ColumnTransformer

from the `artifacts` folder for preprocessing and prediction.

The UI allows users to:

- Select car make
- Select model
- Choose fuel type
- Select transmission
- Enter kilometers driven
- Predict car selling price

## Recommended Python Version
This project is recommended to run on:

```text
Python 3.11
Create Virtual Environment

Open terminal inside project folder and run:

py -3.11 -m venv .venv

Activate virtual environment:

.venv\Scripts\activate
Install Required Libraries

Install all required dependencies:

pip install pandas numpy scikit-learn==1.6.1 streamlit category_encoders xgboost matplotlib seaborn joblib
Run the Notebook

Open:

car_price_prediction_withStreamlit.ipynb

Run all notebook cells.

This will generate:

artifacts/random_forest_model.pkl
artifacts/scaler.pkl
artifacts/column_transformer.pkl
How to Run the Streamlit Application
Ensure all notebook cells have been executed successfully.
Ensure all .pkl files are available inside the artifacts folder.
Open terminal inside project folder.

Run:

python -m streamlit run streamlit_app.py
Access the Application

After running Streamlit, open:

http://localhost:8501

in your browser.

Important Notes
The .pkl files and installed sklearn version must match.
This project uses:
scikit-learn==1.6.1
Using a different sklearn version may cause compatibility issues.
Author

Aparna Rajesh

Artificial Intelligence and Machine Learning Student
