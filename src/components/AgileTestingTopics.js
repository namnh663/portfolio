import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const AgileTestingTopics = () => {
  return (
    <div className="sidebar">
      <h3>Topics</h3>
      <ul>
        <li><a href="https://namnh663.notion.site/fd337bc6d99d41edb38aa14e7fbb54c5?v=cebd5be793ef498aaf93efc1cd71e3a5" target="_blank" rel="noopener noreferrer">Scrum Foundation</a></li>
        <li><NavLink to="/agile-testing/status-of-testing-in-agile-projects" activeClassName="active">Status of Testing in Agile Projects</NavLink></li>
        <li><NavLink to="/agile-testing/role-and-skills-of-tester" activeClassName="active">Role and Skills of Tester in Agile Team</NavLink></li>
        <li><NavLink to="/agile-testing/qa-role" activeClassName="active">Get Aligned with QA Role</NavLink></li>
        <li><NavLink to="/agile-testing/test-approach" activeClassName="active">Adapt Test Approach</NavLink></li>
        <li><NavLink to="/agile-testing/make-testing-process-transparent" activeClassName="active">Make Testing Process Transparent</NavLink></li>
      </ul>
    </div>
  );
};

export default AgileTestingTopics;
