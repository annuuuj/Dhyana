import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/Group 9.png'
 

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/journal">Journal</NavLink></li>
                <li><NavLink to="/ai">AI Search</NavLink></li>
                 <li><NavLink to="/talk">Talk To Us</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button onClick={() => navigate("/login")} className="login-btn">Register</button>
    
      </div>
    </nav>
  );
};

export default Navbar;
