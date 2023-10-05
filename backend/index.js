const { db } = require("./db/db");
const { readdirSync } = require("fs");
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const { get } = require("http");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT; // Set a default port if PORT is not defined in .env

// Middleware
app.use(
  cors({
    origin: ["https://budget-tracker-eight-psi.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/test", (req, res) => {
  res.send("Hello")
})

app.use(express.json());

//routes
readdirSync("./routes").map((route) => {
  app.use("/api/v1", require("./routes/" + route));
  console.log(route)
});
const server = () => {
  db();
  app
    .listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
    .on("error", (err) => {
      console.error(`Error starting the server: ${err.message}`);
    });
};

server();
