const mongoose = require("mongoose")

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect("mongodb+srv://catvyisstudying:VIObLgGMntiEZUR6@cluster0.rb41xr6.mongodb.net/?retryWrites=true&w=majority")
        console.log("DB Connected")
    } catch (error) {
        console.log("DB Connection ERROR", error.message)
    }
}

module.exports = { db }