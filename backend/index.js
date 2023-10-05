// ../../backend/index.js

const { db } = require("./db/db");
const express = require("express");
const cors = require("cors");
const app = express();
const transactionRouter = require("./routes/transactions");

require("dotenv").config();
app.use(
  cors({
    origin: ["https://budget-tracker-app-liard.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

// Routes
app.use("/api/v1/", transactionRouter);

// Middleware
app.use(express.json());

const server = () => {
  db(); // Make sure to configure your database connection properly
};

module.exports = server; // Export the server function

// If you have other exports, you can add them here.
