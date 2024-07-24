import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleToggle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Nam's Portfolio</Link>
      </div>
      <div className="navbar-toggle" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
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
              <Link to="/dynamic-testing">Dynamic Testing</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/agile-testing">Agile Testing</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/mobile-testing">Mobile Testing</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/performance-testing">Performance Testing</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/test-automation">Test Automation</Link>
            </li>
            <li className="dropdown-item">
              <a href="https://namnh663.notion.site/Fundamentals-of-MySQL-20c21c24460b4edda116358dd2d7bce7" target="_blank" rel="noopener noreferrer">MySQL</a>
            </li>
          </ul>
        </li>
        <li className="navbar-item">
          <Link to="/experience">Experience</Link>
        </li>
        <li className="navbar-item">
          <Link to="/blog">Blog</Link>
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
