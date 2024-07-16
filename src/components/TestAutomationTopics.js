import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const TestAutomationTopics = () => {
  return (
    <div className="sidebar">
      <h3>Topics</h3>
      <ul>
        <li><NavLink to="/test-automation/purpose" activeClassName="active">Purpose</NavLink></li>
        <li><NavLink to="/test-automation/test-automation-in-the-sdlc" activeClassName="active">Test Automation in the SDLC</NavLink></li>
        <li><NavLink to="/test-automation/configuration-of-an-infrastructure-to-enable-test-automation" activeClassName="active">Infrastructure configuration</NavLink></li>
        <li><NavLink to="/test-automation/evaluation-process-for-selecting-the-right-tools-and-strategies" activeClassName="active">Evaluation Process</NavLink></li>
        <li><NavLink to="/test-automation/design-concepts-leveraged-in-test-automation" activeClassName="active">Design Concepts</NavLink></li>
      </ul>
    </div>
  );
};

export default TestAutomationTopics;
