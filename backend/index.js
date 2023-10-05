const express = require("express");
const cors = require("cors");
const app = express();
const transactionRouter = require("./routes/transactions");
const mongoose = require("mongoose"); // Import mongoose properly

require("dotenv").config();
app.use(
  cors({
    origin: ["https://budget-tracker-app-liard.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

mongoose.connect("mongodb+srv://catvyisstudying:VIObLgGMntiEZUR6@cluster0.rb41xr6.mongodb.net/?retryWrites=true&w=majority");

// Routes
app.use("/api/v1/", transactionRouter);

// Middleware
app.use(express.json());

// Export the server function as the entry point
const server = () => {
  const port = process.env.PORT || 3000;
  app.listen(port, (req,res) => {
    console.log(port);
  });
};

module.exports = server;
server()
