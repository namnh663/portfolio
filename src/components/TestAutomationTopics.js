import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const TestAutomationTopics = () => {
  return (
    <div className="sidebar">
      <h3>Topics</h3>
      <ul>
        <li><NavLink to="/test-automation/unit-testing" activeClassName="active">Unit Testing</NavLink></li>
      </ul>
    </div>
  );
};

export default TestAutomationTopics;
