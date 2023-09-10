import React from 'react'
import './Navbar.css';
import logo from '../Images/logo.jpg'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const Profileimage = "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  const navigate = useNavigate();
  const dispatch= useDispatch() ;

  const LogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: "LOGIN_ERROR" });
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
              <NavLink exact to='/posts' className="nav-last-ctrl"> <i className="fa-solid fa-house p-2 fs-4 mr-3"></i> </NavLink>
              {localStorage.getItem("token") != null ? <i className="fa-regular fa-heart p-2 fs-4 mr-3"></i> : ''}


              <div class="dropdown">
                {localStorage.getItem("token") != null ?<>  <div data-bs-toggle="dropdown" aria-expanded="false">
                  {/* <i className="fa-solid fa-circle p-2 fs-4 lm-ctrl"></i> */}
                  <img src={Profileimage} alt="img" className="lm-ctrl"/>
                </div>
                <ul class="dropdown-menu">
                  <NavLink className="nav-last-ctrl" exact to='/profile'><li><button class="dropdown-item" type="button">My Profile</button></li></NavLink>
                  <li><button class="dropdown-item" type="button" onClick={() => { LogOut() }}><i class="fa-solid fa-right-from-bracket"></i>&nbsp;Logout</button></li>

                </ul> </> :''}
               
              </div>

              

            </div>

          </form>
        </div>
      </nav>




    </div>
  )
}

export default Navbar
