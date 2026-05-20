const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/booking", (req, res) => {
  console.log("Booking received:", req.body);
  res.json({ message: "Booking successful" });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
