import React from 'react'
import './Navbar.css';
import logo from '../Images/logo.jpg'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate() ;

  const LogOut=()=>{
    navigate('/login')

  }
  return (
    <div>

      <nav className=" nav-ctrl navbar bg-body-tertiary">
        <div className="container-fluid">
          <NavLink exact to='/posts' className="navbar-brand"><img className="img-ctrl" src={logo} alt="img" width="120px" height="40px" /></NavLink>
          <form className="d-flex form-ctrl2" role="search">
        
            <input className="form-control search-ctrl" type="search" placeholder="Search" aria-label="Search" />
            <i className="fa-solid fa-magnifying-glass p-2 fs-4"></i>

            <div className="icon-ctrl">
           <NavLink exact to ='/posts' className="nav-last-ctrl"> <i className="fa-solid fa-house p-2 fs-4 mr-3"></i> </NavLink>
              <i className="fa-regular fa-heart p-2 fs-4 mr-3"></i>
            

              <div class="dropdown">
                <div data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-circle p-2 fs-4 lm-ctrl"></i>
                </div>
                <ul class="dropdown-menu">
                 <NavLink className="nav-last-ctrl" exact to = '/profile'><li><button class="dropdown-item" type="button">My Profile</button></li></NavLink> 
                  <li><button class="dropdown-item" type="button" onClick={()=>{LogOut()}}><i class="fa-solid fa-right-from-bracket"></i>&nbsp;Logout</button></li>
                  
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
