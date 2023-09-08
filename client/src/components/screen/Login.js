import React, {useState} from 'react'
import './Login.css';
import desktop_image from '../Images/desktop_image.jpg'
import mobile_image from '../Images/mobile_image.jpg'
import { NavLink } from 'react-router-dom';
import { LogInServices } from '../Services/API';
import { useNavigate } from 'react-router-dom';

const logininitialvale={
  email: "",
  password:""
}

const Login = () => {
  const navigate = useNavigate() ;

  const[login , setLogin] = useState(logininitialvale)
  const {email , password} = login ;
  const [loading , setLoading] = useState(false) ;

  const onInputChange=(e)=>{

    setLogin({...login , [e.target.name]: e.target.value}) ;

  }

  const LogIn=async()=>{

    setLoading(true) ;

    let response= await LogInServices(login) ;
    if(!response) return ;
    navigate('/profile')
    setLoading(false) ;

  }
  return (
    <div>

      <div className="row container">
        <div className=" logo-ctrl col-lg-7 col-md-7 col-sm-12  ">
          <img  src={desktop_image} height="450px" width="500px" alt="img-ctrl" className="desktop_image shadow-lg"></img>
          <img src={mobile_image} alt="imga-ctrl" className=" mobile_image shadow-lg"></img>


        </div>
        <div className=" form-ctrl col-lg-5 col-md-5 col-sm-12">
          <div className="right-ctrl shadow-lg">

          {loading ? <div className="spinner-border text-primary mt-2" text-center role="status" >
              <span class="visually-hidden">Loading...</span>
            </div> : ''}
            <div className="login-ctrl shadow-sm">Login</div>
            <form className="form-ctrl mt-4">
              <div className="mb-3">

                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' name="email" onChange={(e)=>{onInputChange(e)}} value={email} />

              </div>
              <div className="mb-2">

                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'  name="password" onChange={(e)=>{onInputChange(e)}} value={password}  />
              </div>

              <div class="d-grid gap-2 mt-3">
                <button class="btn btn-primary" type="button" onClick={()=>LogIn()}>Log In</button>

              </div>

              <div className= "mt-5">
                <hr></hr>
                <div className="or-ctrl">OR</div>
                <hr></hr>
              </div>
              <div className="d-grid mt-5 mb-5">

              <button  class="btn btn-outline-secondary shadow-lg ">
                <span className="text-muted">Don't have an account ?</span>
              <NavLink exact to='/signup' className="NavLink-ctrl">  <span className="text-info"> Sign Up</span> </NavLink>
              </button>
              </div>
            </form>

          </div>

        </div>


      </div>

    </div>
  )
}

export default Login
