const mongoose = require("mongoose");
require("dotenv").config();

const dbURL = process.env.MONGODB_URI;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // You can choose to re-throw the error here if needed
  }
};

const disconnectFromDatabase = async () => {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error disconnecting from MongoDB:", error.message);
  }
};

// Listen for the 'SIGINT' event (Ctrl+C) to gracefully close the database connection
process.on("SIGINT", () => {
  disconnectFromDatabase().then(() => {
    process.exit(0);
  });
});

module.exports = { connectToDatabase, disconnectFromDatabase };
