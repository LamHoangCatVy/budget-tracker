const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://budget-tracker-app-liard.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Include DELETE in the allowed methods.
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

const { addIncome, getIncomes, deleteIncome } = require("./controllers/income");
const {
  addExpense,
  getExpenses,
  deleteExpense,
} = require("./controllers/expense");

app.use(express.json());
mongoose.connect(
  process.env.MONGO_URL
);

app.use(
  cors({
    origin: ["https://budget-tracker-app-liard.vercel.app/"],
    methods: ["POST", "GET", "DELETE"],
    credentials: true,
  })
);

// Add income routes
app.post("/api/v1/add-income", addIncome);
app.get("/api/v1/get-incomes", getIncomes);
app.delete("/api/v1/delete-income/:id", deleteIncome);

// Add expense routes
app.post("/api/v1/add-expense", addExpense);
app.get("/api/v1/get-expenses", getExpenses);
app.delete("/api/v1/delete-expense/:id", deleteExpense);

app.listen(process.env.PORT, () => {
  console.log("Server is Running", process.env.PORT );
});
