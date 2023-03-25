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


exports.getExpenses = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 })
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({ message: 'Expense Deleted' })
        })
        .catch((error) => {
            res.status(500).json({ message: "Server Error" })
        })
}