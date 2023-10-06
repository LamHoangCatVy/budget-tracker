const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const { addIncome, getIncomes, deleteIncome } = require('./controllers/income')
const { addExpense, getExpenses, deleteExpense } = require('./controllers/expense')

app.use(express.json());
mongoose.connect(
  "mongodb+srv://catvyisstudying:VIObLgGMntiEZUR6@cluster0.rb41xr6.mongodb.net/?retryWrites=true&w=majority"
);

app.use(
  cors({
    origin: ["https://budget-tracker-app-liard.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

// Add income routes
app.post('/api/v1/add-income', addIncome)
app.get('/api/v1/get-incomes', getIncomes)
app.delete('/api/v1/delete-income/:id', deleteIncome)

// Add expense routes
app.post('/api/v1/add-expense', addExpense)
app.get('/api/v1/get-expenses', getExpenses)
app.delete('/api/v1/delete-expense/:id', deleteExpense)

app.listen(3000, () => {
  console.log("Server is Running");
});
