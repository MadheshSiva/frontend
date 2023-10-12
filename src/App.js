import HomePage from "./HomePage/HomePage";
import LoginPage from "./authorization/login";
import SignUp from "./authorization/signUp";
import HeaderPage from "./header/Header";
import './App.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App " style={{ fontFamily: "'Montserrat', 'Poppins', 'Work Sans', sans-serif,",}}>
      <HeaderPage/>
      <Router>
        <Routes>
         <Route  path="/" element={<HomePage/>}>  </Route>
        </Routes>

        
      </Router>
    </div>
  );
}

export default App;
