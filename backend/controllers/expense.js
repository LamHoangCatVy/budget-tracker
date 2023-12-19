const ExpenseSchema = require("../models/ExpenseSchema")

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body
    const user_id = req.user._id
    const expense = ExpenseSchema({
        title, amount, category, description, date, user_id
    })
    try {
        //validations
        if (!title || !amount || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' })
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'Amount must be a positive number' })
        }

        await expense.save()
        res.status(200).json({ message: "Expense added" })
    } catch (error) {
        res.status(500).json({ message: "Server Errorrrrr" })
    }
}


exports.getExpenses = async (req, res) => {
    try {
        const user_id = req.user._id
        const expenses = await ExpenseSchema.find({ user_id }).sort({ createdAt: -1 })
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => {
            res.status(200).json({ message: 'Expense Deleted' })
        })
        .catch((error) => {
            res.status(500).json({ message: "Server Error" })
        })
}