require("dotenv").config();
<<<<<<< HEAD

=======
// const db = require("./db");
>>>>>>> b13a2297719fb004860a83370a22ee9e104ada1b
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user");
<<<<<<< HEAD

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://budget-tracker-app-liard.vercel.app/"); // Remove trailing slash
=======


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://budget-tracker-app-liard.vercel.app"); // Remove trailing slash
>>>>>>> b13a2297719fb004860a83370a22ee9e104ada1b
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

const { addIncome, getIncomes, deleteIncome } = require("./controllers/income");
const {
  addExpense,
  getExpenses,
  deleteExpense,
} = require("./controllers/expense");

app.use(express.json());

app.use(
  cors({
<<<<<<< HEAD
    origin: ["https://budget-tracker-app-liard.vercel.app/"], // Remove trailing slash
=======
    origin: ["https://budget-tracker-app-liard.vercel.app"], // Remove trailing slash
>>>>>>> b13a2297719fb004860a83370a22ee9e104ada1b
    methods: ["POST", "GET", "DELETE"],
    credentials: true,
  })
);

app.use("/api/v1", userRoutes);

// Add income routes
app.post("/api/v1/add-income", addIncome);
app.get("/api/v1/get-incomes", getIncomes);
app.delete("/api/v1/delete-income/:id", deleteIncome);

// Add expense routes
app.post("/api/v1/add-expense", addExpense);
app.get("/api/v1/get-expenses", getExpenses);
app.delete("/api/v1/delete-expense/:id", deleteExpense);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
<<<<<<< HEAD
=======

//db()
>>>>>>> b13a2297719fb004860a83370a22ee9e104ada1b
