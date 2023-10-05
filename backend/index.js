const { db } = require("./db/db");
const { readdirSync } = require("fs");
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const transactionRouter = require('./routes/transactions')


require("dotenv").config();
const PORT = process.env.PORT || 3000; // Use the provided PORT or default to 3000

// Routes
app.use('/api/v1/', transactionRouter)

// Middleware
app.use(express.json());


const server = () => {
  db(); // Make sure to configure your database connection properly
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

server();
