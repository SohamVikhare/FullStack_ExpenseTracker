import React, { useState, useEffect } from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import Navbar from '../component/Navbar';


export default function Trans() {

    const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type,setType]=useState('');
  const [date,setDate]=useState('');



  useEffect(() => {
    // Fetch expenses from the backend
    fetch('/api/expenses')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setExpenses(data);
      });
      }, []);

     
        

  const addExpense = () => {
    fetch('/api/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description,
        amount,
        type,
        date,
      })
    })
      .then((res) => res.json())
      .then((data) => {
        setExpenses([...expenses, data]);
        setDescription('');
        setAmount('');
       setDate('');
        
      });
  };
  return (
    <div>
        
      
      <Navbar/>
      <div >
      <form>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select onChange={(e)=>setType(e.target.value)}>
            <option value=''>Select Type</option>
            <option value={'Saving'}>Saving</option>
            <option value={'Expense'}>Expense</option>
        </select>
        <button onClick={addExpense}>Add Expense</button>
        </form>
      </div>
      
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id}>
         {expense.description} - Rs.{expense.amount} - {expense.type}
          </li>
        ))}
      </ul>
    </div>
  )
}
