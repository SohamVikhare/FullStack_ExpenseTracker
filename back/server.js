const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8080;

// Define your Expense model (create a models/Expense.js file)
const Expense = require('./models/Expense');

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Mini')
.then(() => console.log("Connected to DB"))
.catch((err) => console.error(err));



// Define API routes (create a routes/api.js file)
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Add this route in your server.js file
app.get('/api/expenses-by-type/:type', async (req, res) => {
  const type = req.params.type;

  try {
    const expenses = await Expense.find({ type: type });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching expenses.' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
