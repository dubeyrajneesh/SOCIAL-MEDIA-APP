import React, { useState } from 'react'
import './Signup.css';
import desktop_image from '../Images/desktop_image.jpg'
import mobile_image from '../Images/mobile_image.jpg'
import { NavLink } from 'react-router-dom';
import { SignUpServices } from '../Services/API';
import Swal from 'sweetalert2' ;


const signupinitailvalue = {

  mobile: '',
  fullname: '',
  email: "",
  password: ""

};
const Signup = () => {
  const [signup, setSignup] = useState(signupinitailvalue)
  const { fullname, password, email, mobile } = signup;
  const [loading , setLoading] = useState(false) ;

  const onFormSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);
  }

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value })

  }

  const SignUp = async () => {
    setLoading(true) ;

    let response = await SignUpServices(signup);
    if (!response) return;
    setSignup(signupinitailvalue) ;
    setLoading(false) ;
    Swal.fire({
      icon: 'success',
      title: 'User successfully registered , Now You can login'
  })
  


  }
  return (
    <div>
      <div className="row container">
        <div className=" logo-ctrl col-lg-7 col-md-7 col-sm-12  ">
          <img src={desktop_image} height="450px" width="500px" alt="img-ctrl" className="desktop_image shadow-lg"></img>
          <img src={mobile_image} alt="imga-ctrl" className=" mobile_image shadow-lg"></img>


        </div>
        <div className=" form-ctrl22 col-lg-5 col-md-5 col-sm-12">
          <div className="right-ctrl shadow-lg">

           {loading ? <div className="spinner-border text-primary mt-2" text-center role="status" >
              <span class="visually-hidden">Loading...</span>
            </div> : ''}
            <div className="login-ctrl shadow-sm">Sign Up</div>
            <form onSubmit={(e) => onFormSubmit(e)} className="form-ctrl mt-4">

              <div className="mb-2">

                <input type="number" className="form-control" id="exampleInputPhone1" aria-describedby="emailHelp" placeholder='Mobile Number' name="mobile" value={mobile} onChange={(e) => { onInputChange(e) }} />

              </div>
              <div className="mb-2">

                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' name="email" value={email} onChange={(e) => { onInputChange(e) }} />

              </div>

              <div className="mb-2">

                <input type="string" className="form-control" id="exampleInputFullName1" aria-describedby="emailHelp" placeholder='Full Name' name="fullname" value={fullname} onChange={(e) => { onInputChange(e) }} />

              </div>
              <div className="mb-2">

                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' name="password" value={password} onChange={(e) => { onInputChange(e) }} />
              </div>

              <div class="d-grid gap-2 mt-3">
                <button class="btn btn-primary" type="button" onClick={() => SignUp()} >Sign Up</button>

              </div>

              <div className="mt-5">
                <hr></hr>
                <div className="or-ctrl">OR</div>
                <hr></hr>
              </div>
              <div className="d-grid mt-5 mb-5">

                <button class="custom-btn custom-btn-white shadow-lg "><span className="text-muted">Already have an account ?</span>
                  <NavLink exact to='/login' className="NavLink-ctrl"> <span className="text-info"> Log In</span> </NavLink>
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
