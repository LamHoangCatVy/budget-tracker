const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const { addIncome, getIncomes, deleteIncome } = require("./controllers/income");
const {
  addExpense,
  getExpenses,
  deleteExpense,
} = require("./controllers/expense");
const userRouter = require("./routes/user");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// middleware
app.use(express.json());

app.use(
  cors({
    origin: [
      "https://budget-tracker-app-liard.vercel.app/",
      "http://localhost:3001",
    ],
    methods: ["POST", "GET", "DELETE"],
    credentials: true,
  })
);

app.use("/api/v1/", userRouter);

// Add income routes
app.post("/api/v1/add-income", addIncome);
app.get("/api/v1/get-incomes", getIncomes);
app.delete("/api/v1/delete-income/:id", deleteIncome);

// Add expense routes
app.post("/api/v1/add-expense", addExpense);
app.get("/api/v1/get-expenses", getExpenses);
app.delete("/api/v1/delete-expense/:id", deleteExpense);

app.listen(3000, () => {
  console.log("Server is Running");
});

mongoose.connect("mongodb+srv://catvyisstudying:sHfo1bx99U54oq7A@cluster0.rb41xr6.mongodb.net/?retryWrites=true&w=majority").then(() => {
  console.log("Connected to MongoDB");
})
