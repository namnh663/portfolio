import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const TestAutomationTopics = () => {
  return (
    <div className="sidebar">
      <h3>Topics</h3>
      <ul>
        <li><NavLink to="/test-automation/purpose" activeClassName="active">Purpose</NavLink></li>
      </ul>
    </div>
  );
};

export default TestAutomationTopics;
