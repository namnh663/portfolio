import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const DynamicTestingTopics = () => {
  return (
    <div className="sidebar">
      <h3>Topics</h3>
      <ul>
        <li><NavLink to="/dynamic-testing/unit-testing" activeClassName="active">Unit Testing</NavLink></li>
        <li><NavLink to="/dynamic-testing/integration-testing" activeClassName="active">Integration Testing</NavLink></li>
      </ul>
    </div>
  );
};

export default DynamicTestingTopics;
