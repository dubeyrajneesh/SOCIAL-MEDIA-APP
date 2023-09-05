import logo from './logo.svg';
import './App.css';
import Login from './components/screen/Login';
import Signup from './components/screen/Signup';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router >

      <Navbar />
      <Routes>

        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />

      </Routes>


    </Router>
  );
}

export default App;
