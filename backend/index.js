const { db } = require("./db/db");
const { readdirSync } = require("fs");
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000; // Use the provided PORT or default to 3000

// Middleware
app.use(express.json());

// Routes
readdirSync("./routes").map((route) => {
  app.use("/api/v1", require("./routes/" + route));
  console.log(route);
});

const server = () => {
  db(); // Make sure to configure your database connection properly
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

server();
