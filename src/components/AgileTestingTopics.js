import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const AgileTestingTopics = () => {
  return (
    <div className="sidebar">
      <h3>Topics</h3>
      <ul>
        <li><NavLink to="/agile-testing/qa-role" activeClassName="active">Get Aligned with QA Role</NavLink></li>
        <li><NavLink to="/agile-testing/test-approach" activeClassName="active">Adapt Test Approach</NavLink></li>
        <li><NavLink to="/agile-testing/make-testing-process-transparent" activeClassName="active">Make Testing Process Transparent</NavLink></li>
      </ul>
    </div>
  );
};

export default AgileTestingTopics;
