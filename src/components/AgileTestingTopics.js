import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const AgileTestingTopics = () => {
  return (
    <div className="sidebar">
      <h3>Topics</h3>
      <ul>
        <li><NavLink to="/agile-testing/agile-software-development-fundamentals" activeClassName="active">Agile Software Development Fundamentals</NavLink></li>
        <li><NavLink to="/agile-testing/aspects-of-agile-approaches" activeClassName="active">Aspects of Agile Approaches</NavLink></li>
        <li><NavLink to="/agile-testing/status-of-testing-in-agile-projects" activeClassName="active">Status of Testing in Agile Projects</NavLink></li>
        <li><NavLink to="/agile-testing/role-and-skills-of-tester" activeClassName="active">Role and Skills of Tester in Agile Team</NavLink></li>
        <li><NavLink to="/agile-testing/assessing-quality-risks-and-estimating-test-effort" activeClassName="active">Assessing Quality Risks and Estimating Test Effort</NavLink></li>
        <li><NavLink to="/agile-testing/techniques-in-agile-projects" activeClassName="active">Techniques in Agile Projects</NavLink></li>
        <li><NavLink to="/agile-testing/the-test-team" activeClassName="active">The Test Team</NavLink></li>
        <li><NavLink to="/agile-testing/test-approach" activeClassName="active">Adapt Test Approach</NavLink></li>
        <li><NavLink to="/agile-testing/make-testing-process-transparent" activeClassName="active">Make Testing Process Transparent</NavLink></li>
      </ul>
    </div>
  );
};

export default AgileTestingTopics;
