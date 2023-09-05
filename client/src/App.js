import logo from './logo.svg';
import './App.css';
import Login from './components/screen/Login';
import Signup from './components/screen/Signup';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div >
      <Login/>
      <Signup/>
      <Navbar/>
      
    </div>
  );
}

export default App;
