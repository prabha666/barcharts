import React from 'react'
import Barcharts from './Barcharts'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom'


export default function Navbar(){
    return (
        <>
        <Router>

        <nav class="navbar navbar-expand-lg navbar-light bg-info">
            <div className='container-fluid'>
  <Link class="navbar-brand" to="/">DevOps Team</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/barcharts">BarCharts</Link>
      </li>
    
      </ul>

    <form class="form-inline my-2 my-lg-3">
      {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
      <button class="btn btn-outline-success " type="submit">Search</button>
    </form>
   </div>
  </div>
</nav>


</Router></>
    )
}