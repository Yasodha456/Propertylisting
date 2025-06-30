const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./Routes/auth");
const propertyRoutes = require("./Routes/Property");
const cors = require("cors");
const connectDB = require('./Config/db'); 

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);
app.get('/', (req, res) => {
  res.send('API is running!');
});
const PORT = process.env.PORT || 3000;
console.log(`Server running on port ${PORT} (env: ${process.env.PORT})`);

