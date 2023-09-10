import logo from './logo.svg';
import './App.css';
import Login from './components/screen/Login';
import Signup from './components/screen/Signup';
import Navbar from './components/Navbar/Navbar';
import Postoverview from './components/Pages/Postoverview';
// import Profile from './components/Pages/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Pages/Profile';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {

  function DynamicRouting(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.userReducer);

    useEffect(() => {

      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {//when user has a login active session
        dispatch({ type: "LOGIN_SUCCESS", payload: userData });
        navigate("/posts");
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGIN_ERROR" });
        navigate("/login");
      }
    }, []);

    return (
      <Routes>

        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/posts' element={<Postoverview/>}/>
        <Route exact path='/profile' element= {<Profile/>}/>

      </Routes>


    )



  }
  return (
    <Router >

      <Navbar />
      <DynamicRouting/>
      


    </Router>
  );
}

export default App;
