import logo from './logo.svg';
import './App.css';
import Login from './components/screen/Login';
import Signup from './components/screen/Signup';
import Navbar from './components/Navbar/Navbar';
import Postoverview from './components/Pages/Postoverview';
// import Profile from './components/Pages/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Pages/Profile';

function App() {
  return (
    <Router >

      <Navbar />
      <Routes>

        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/post' element={<Postoverview/>}/>
        <Route exact path='/profile' element= {<Profile/>}/>

      </Routes>


    </Router>
  );
}

export default App;
