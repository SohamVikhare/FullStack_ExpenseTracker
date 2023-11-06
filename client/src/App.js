import React from 'react';
import Trans from './pages/Trans';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import About from './pages/About';
import Home from './pages/Home';
import View from './pages/View';

function App() {
  return (
    <Router>
      <div>
        <div><h1 style={{"text-align":"center"}}>Expense Tracker</h1></div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/transaction' element={<Trans/>}/>
          <Route exact path='/view' element={<View/>}/>
          <Route exact path='/about' element={<About/>}/>
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
