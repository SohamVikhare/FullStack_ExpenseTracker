const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  description: String,
  amount: Number,
  date: Date,
  type: String,
});

module.exports = mongoose.model('Expense', expenseSchema);
