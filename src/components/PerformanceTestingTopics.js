import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const PerformanceTestingTopics = () => {
  return (
    <div className="sidebar">
      <h3>Topics</h3>
      <ul>
        <li><NavLink to="/performance-testing/performance-testing-principles" activeClassName="active">Performance Testing Principles</NavLink></li>
        <li><NavLink to="/performance-testing/performance-testing-types" activeClassName="active">Performance Testing Types</NavLink></li>
        <li><NavLink to="/performance-testing/the-concept-of-load-generation" activeClassName="active">The Concept of Load Generation</NavLink></li>
        <li><NavLink to="/performance-testing/performance-efficiency-failure-modes" activeClassName="active">Performance Efficiency Failure Modes</NavLink></li>
      </ul>
    </div>
  );
};

export default PerformanceTestingTopics;
