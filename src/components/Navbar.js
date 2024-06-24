import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Nam's Portfolio</Link>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item dropdown">
          <span>Knowledge</span>
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <Link to="/testing-foundation">Testing Foundation</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/manual-testing">Manual Testing</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/automated-testing">Automated Testing</Link>
            </li>
          </ul>
        </li>
        <li className="navbar-item">
          <Link to="/experience">Experience</Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="navbar-item">
          <Link to="/resources">Resources</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
