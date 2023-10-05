const mongoose = require("mongoose");
require("dotenv").config();
const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection ERROR", error.message);
  }
};

module.exports = { db };
