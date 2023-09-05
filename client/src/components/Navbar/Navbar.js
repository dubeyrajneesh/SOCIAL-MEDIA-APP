import React from 'react'
import './Navbar.css' ;
import logo from '../Images/logo.jpg'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>

<nav class=" nav-ctrl navbar bg-body-tertiary">
  <div class="container-fluid">
    <NavLink  class="navbar-brand"><img className="img-ctrl" src={logo} alt="img" width="120px" height="40px"/></NavLink>
    <form className="d-flex form-ctrl2" role="search">
      {/* <div className="search-icon-ctrl"> */}
      <input className="form-control me-2 search-ctrl" type="search" placeholder="Search" aria-label="Search"/>
      <i className="fa-solid fa-magnifying-glass p-2 fs-4"></i>
      
      <div className="icon-ctrl">
      <i className="fa-solid fa-house p-2 fs-4 mr-3"></i>
      <i className="fa-regular fa-heart p-2 fs-4 mr-3"></i>
      <i className="fa-solid fa-circle p-2 fs-4"></i>
      </div>

    </form>
  </div>
</nav>

      
       
      
    </div>
  )
}

export default Navbar
