import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const StaticTestingTopics = () => {
  return (
    <div className="sidebar">
      <h3>Topics</h3>
      <ul>
        <li><NavLink to="/static-testing/type" activeClassName="active">Types of Static Testing</NavLink></li>
        <li><NavLink to="/static-testing/benefits" activeClassName="active">Benefits of Static Testing</NavLink></li>
      </ul>
    </div>
  );
};

export default StaticTestingTopics;
