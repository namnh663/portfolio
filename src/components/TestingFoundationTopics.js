import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const TestingFoundationTopics = () => {
  return (
    <div className="sidebar">
      <h3>Topics</h3>
      <ul>
        <li><NavLink to="/testing-foundation/what-is-testing" activeClassName="active">What is Testing</NavLink></li>
        <li><NavLink to="/testing-foundation/why-testing-is-necessary" activeClassName="active">Why Testing is Necessary</NavLink></li>
        <li><NavLink to="/testing-foundation/principles" activeClassName="active">Testing Principles</NavLink></li>
        <li><NavLink to="/testing-foundation/test-activities" activeClassName="active">Test Activities</NavLink></li>
        <li><NavLink to="/testing-foundation/essential-skills" activeClassName="active">Essential Skills in Testing</NavLink></li>
        <li><NavLink to="/testing-foundation/testing-in-sdlc" activeClassName="active">Testing in the SDLC</NavLink></li>
        <li><NavLink to="/testing-foundation/test-levels-and-test-types" activeClassName="active">Test Levels and Test Types</NavLink></li>
        <li><NavLink to="/testing-foundation/maintenance-testing" activeClassName="active">Maintenance Testing</NavLink></li>
        <li><NavLink to="/testing-foundation/static-testing" activeClassName="active">Static Testing</NavLink></li>
        <li><NavLink to="/testing-foundation/test-techniques" activeClassName="active">Test Techniques</NavLink></li>
        <li><NavLink to="/testing-foundation/test-planning" activeClassName="active">Test Planning</NavLink></li>
        <li><NavLink to="/testing-foundation/risk-management" activeClassName="active">Risk Management</NavLink></li>
        <li><NavLink to="/testing-foundation/test-monitoring-control-completion" activeClassName="active">Test Monitoring</NavLink></li>
        <li><NavLink to="/testing-foundation/defect-management" activeClassName="active">Defect Management</NavLink></li>
        <li><NavLink to="/testing-foundation/tools" activeClassName="active">Test Tools</NavLink></li>
      </ul>
    </div>
  );
};

export default TestingFoundationTopics;
