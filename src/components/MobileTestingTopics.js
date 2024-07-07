import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const MobileTestingTopics = () => {
  return (
    <div className="sidebar">
      <h3>Topics</h3>
      <ul>
        <li><NavLink to="/mobile-testing/types-of-mobile-applications" activeClassName="active">Types of Mobile Applications</NavLink></li>
        <li><NavLink to="/mobile-testing/types-of-mobile-testing" activeClassName="active">Types of Mobile Testing</NavLink></li>
        <li><NavLink to="/mobile-testing/challenges-in-mobile-testing" activeClassName="active">Challenges in Mobile Testing</NavLink></li>
      </ul>
    </div>
  );
};

export default MobileTestingTopics;
