// const express = require("express");
// const app = express();
// const transactionRouter = require("./routes/transactions");
// const mongoose = require("mongoose"); // Import mongoose properly

// require("dotenv").config();

// app.use(express.json());
// mongoose.connect("mongodb+srv://catvyisstudying:VIObLgGMntiEZUR6@cluster0.rb41xr6.mongodb.net/?retryWrites=true&w=majority");

// // Routes
// app.use("/api/v1/", transactionRouter);

// // Middleware

// app.listen(3000, () => {
//   console.log("Server is Running")
// })

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors"); 

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

app.get("/get-incomes", (req, res) => {
  res.send("This is the server");
});

app.get("/add-expense", (req, res) => {
  res.send("This is add-expense");
});

app.listen(3000, () => {
  console.log("Server is Running");
});
