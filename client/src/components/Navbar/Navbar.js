import React from 'react'
import './Navbar.css';
import logo from '../Images/logo.jpg'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>

      <nav className=" nav-ctrl navbar bg-body-tertiary">
        <div className="container-fluid">
          <NavLink exact to='/posts' className="navbar-brand"><img className="img-ctrl" src={logo} alt="img" width="120px" height="40px" /></NavLink>
          <form className="d-flex form-ctrl2" role="search">
        
            <input className="form-control search-ctrl" type="search" placeholder="Search" aria-label="Search" />
            <i className="fa-solid fa-magnifying-glass p-2 fs-4"></i>

            <div className="icon-ctrl">
            <i className="fa-solid fa-house p-2 fs-4 mr-3"></i>
              <i className="fa-regular fa-heart p-2 fs-4 mr-3"></i>
            

              <div class="dropdown">
                <div data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-circle p-2 fs-4 lm-ctrl"></i>
                </div>
                <ul class="dropdown-menu">
                  <li><button class="dropdown-item" type="button">My Profile</button></li>
                  <li><button class="dropdown-item" type="button"><i class="fa-solid fa-right-from-bracket"></i>&nbsp;Logout</button></li>
                  
                </ul>
              </div>

             
              
            </div>

          </form>
        </div>
      </nav>




    </div>
  )
}

export default Navbar
