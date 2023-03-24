const ExpenseSchema = require("../models/ExpenseSchema")

exports.addExpense = async (req, res) => {
    const { title, amount, category, descripton, date } = req.body
    const income = IncomeSchema({
        title, amount, category, descripton, date
    })
    try {
        //validations
        if (!title || !amount || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' })
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'Amount must be a positive number' })
        }
        await income.save()
        res.status(200).json({ message: "Expense added" })
    } catch (error) {

        res.status(500).json({ message: "Server Error" })
    }
}


