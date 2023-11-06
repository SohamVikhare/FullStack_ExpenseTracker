const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Create an endpoint to get all expenses
router.get('/expenses', async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

// Create an endpoint to add an expense
router.post('/expenses', async (req, res) => {
  const newExpense = new Expense(req.body);
  await newExpense.save();
  res.json(newExpense);
});

module.exports = router;
