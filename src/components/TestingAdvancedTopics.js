import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const TestingAdvancedTopics = () => {
  return (
    <div className="sidebar">
      <h3>Topics</h3>
      <ul>
        <li><NavLink to="/testing-advanced/test-process" activeClassName="active">Test Process</NavLink></li>
        <li><NavLink to="/testing-advanced/project-test-strategy" activeClassName="active">Project Test Strategy</NavLink></li>
        <li><NavLink to="/testing-advanced/improving-the-test-process" activeClassName="active">Improving the Test Process</NavLink></li>
        <li><NavLink to="/testing-advanced/test-tools" activeClassName="active">Test Tools</NavLink></li>
      </ul>
    </div>
  );
};

export default TestingAdvancedTopics;
