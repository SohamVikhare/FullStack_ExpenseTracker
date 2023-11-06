import React from 'react'
import Navbar from '../component/Navbar'

export default function Home() {
  return (
    
    <div>
        <div><Navbar/></div>
        <div style={{"text-align":"center","margin":"10%"}}>
        <h1>Welcome to the Expense Tracker</h1>
        </div>
    </div>
  )
}
