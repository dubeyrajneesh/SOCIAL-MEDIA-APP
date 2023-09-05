import React from 'react'
import './Signup.css';
import desktop_image from '../Images/desktop_image.jpg'
import mobile_image from '../Images/mobile_image.jpg'
import { NavLink } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <div className="row container">
        <div className=" logo-ctrl col-lg-7 col-md-7 col-sm-12  ">
          <img src={desktop_image} height="450px" width="500px" alt="img-ctrl" className="desktop_image shadow-lg"></img>
          <img src={mobile_image} alt="imga-ctrl" className=" mobile_image shadow-lg"></img>


        </div>
        <div className=" form-ctrl col-lg-5 col-md-5 col-sm-12">
          <div className="right-ctrl shadow-lg">
            <div className="login-ctrl shadow-sm">Sign Up</div>
            <form className="form-ctrl mt-4">

              <div className="mb-2">

                <input type="number" className="form-control" id="exampleInputPhone1" aria-describedby="emailHelp" placeholder='Mobile Number' />

              </div>
              <div className="mb-2">

                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />

              </div>

              <div className="mb-2">

                <input type="string" className="form-control" id="exampleInputFullName1" aria-describedby="emailHelp" placeholder='Full Name' />

              </div>
              <div className="mb-2">

                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
              </div>

              <div class="d-grid gap-2 mt-3">
                <button class="btn btn-primary" type="button">Sign Up</button>

              </div>

              <div className="mt-5">
                <hr></hr>
                <div className="or-ctrl">OR</div>
                <hr></hr>
              </div>
              <div className="d-grid mt-5 mb-5">

                <button class="btn btn-outline-secondary shadow-lg "><span className="text-muted">Already have an account ?</span>
               <NavLink exact to ='/login' className="NavLink-ctrl"> <span className="text-info"> Log In</span> </NavLink>
                </button>
              </div>
            </form>

          </div>

        </div>


      </div>


    </div>
  )
}

export default Signup
