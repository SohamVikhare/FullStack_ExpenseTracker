
import React, { useEffect, useState } from 'react';

const SumByType = () => {
  const [type, setType] = useState('Saving');
  const [type2, setType2] = useState('Expense');
  const [expenses, setExpenses] = useState([]);
  const [expenses2, setExpenses2] = useState([]);
  const [sum, setSum] = useState(0);
  const [sum2, setSum2] = useState(0);


// for savings
  useEffect(() => {
    // Fetch expenses of a specific type from the backend
    fetch(`/api/expenses-by-type/${type}`)
      .then((res) => res.json())
      .then((data) => setExpenses(data));
  }, [type]);

  useEffect(() => {
    // Calculate the sum when expenses change
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    setSum(total);
  }, [expenses]);
//for Expense
useEffect(() => {
    // Fetch expenses of a specific type from the backend
    fetch(`/api/expenses-by-type/${type2}`)
      .then((res) => res.json())
      .then((data) => setExpenses2(data));
  }, [type2]);

  useEffect(() => {
    // Calculate the sum when expenses change
    const total = expenses2.reduce((acc, expense) => acc + expense.amount, 0);
    setSum2(total);
  }, [expenses]);
  return (
    <div className="container">
      <h2 className="title">Total {type}</h2>
      <p className="total">Total: Rs.{sum}</p>
      <div className="typeContainer">
        <h2 className="typeTitle">Total {type2}</h2>
        <p className="typeTotal">Total: Rs.{sum2}</p>
      </div>
    </div>
  );
};

export default SumByType;

