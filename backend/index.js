// ../../backend/index.js

const { db } = require("./db/db");
const express = require("express");
const cors = require("cors");
const app = express();
const transactionRouter = require("./routes/transactions");

require("dotenv").config();

// Middleware
app.use(cors({
  origin: ["https://budget-tracker-app-liard.vercel.app/"],
  methods: ["POST", "GET"],
  credentials: true,
}));
app.use(express.json());

// Routes
app.use("/api/v1/", transactionRouter);

const server = async () => {
  try {
    // Ensure the database connection is established before starting the server
    await db(); // Make sure to configure your database connection properly
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = server;
