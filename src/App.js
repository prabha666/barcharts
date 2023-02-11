import React from 'react'
import './index.css';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom'
import Navbar from './Navbar';
import Barcharts from './Barcharts';
  
export default function App() {
  
  // // Sample data
  // const sampleData = [

  return (
    <div>
    <Navbar />
    <hr />
    <Router>
      <Routes>
      <Route exact path='/' element={<Barcharts />} ></Route>
        <Route exact path='/barcharts' element={<Barcharts />} ></Route>
      </Routes>
    </Router>
   

    </div >
  );
}