const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user");

// Connect to MongoDB database
const mongoURI =
  "mongodb+srv://catvyisstudying:VIObLgGMntiEZUR6@cluster0.rb41xr6.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB database");
});

// Set the correct CORS configuration
app.use(
  cors({
    origin: "https://budget-tracker-gules-omega.vercel.app", // Remove trailing slash
    methods: ["POST", "GET", "DELETE"],
    credentials: true,
  })
);

const { addIncome, getIncomes, deleteIncome } = require("./controllers/income");
const {
  addExpense,
  getExpenses,
  deleteExpense,
} = require("./controllers/expense");

app.use(express.json());

// API v1 routes
app.use("/api/v1", userRoutes);

// Add income routes
app.post("/api/v1/add-income", addIncome);
app.get("/api/v1/get-incomes", getIncomes);
app.delete("/api/v1/delete-income/:id", deleteIncome);

// Add expense routes
app.post("/api/v1/add-expense", addExpense);
app.get("/api/v1/get-expenses", getExpenses);
app.delete("/api/v1/delete-expense/:id", deleteExpense);

// Listen for requests on the specified port
app.listen(process.env.PORT, () => {
  console.log("Connected to DB and listening on port", process.env.PORT);
});
