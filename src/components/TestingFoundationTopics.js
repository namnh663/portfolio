import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const TestingFoundationTopics = () => {
  return (
    <div className="sidebar">
      <h3>Topics</h3>
      <ul>
        <li><NavLink to="/testing-foundation/terminology" activeClassName="active">Terminology</NavLink></li>
        <li><NavLink to="/testing-foundation/definition" activeClassName="active">Definition and Purpose</NavLink></li>
        <li><NavLink to="/testing-foundation/principles" activeClassName="active">Testing Principles</NavLink></li>
        <li><NavLink to="/testing-foundation/sdlc-testing" activeClassName="active">SDLC Testing</NavLink></li>
        <li><NavLink to="/testing-foundation/types" activeClassName="active">Types of Testing</NavLink></li>
        <li><NavLink to="/testing-foundation/levels" activeClassName="active">Levels of Testing</NavLink></li>
        <li><NavLink to="/testing-foundation/techniques" activeClassName="active">Testing Techniques</NavLink></li>
        <li><NavLink to="/testing-foundation/design" activeClassName="active">Test Design Techniques</NavLink></li>
        <li><NavLink to="/testing-foundation/process" activeClassName="active">Testing Process</NavLink></li>
        <li><NavLink to="/testing-foundation/documentation" activeClassName="active">Test Documentation</NavLink></li>
        <li><NavLink to="/testing-foundation/defects" activeClassName="active">Defect Lifecycle</NavLink></li>
        <li><NavLink to="/testing-foundation/tools" activeClassName="active">Tools and Technologies</NavLink></li>
        <li><NavLink to="/testing-foundation/best-practices" activeClassName="active">Best Practices</NavLink></li>
      </ul>
    </div>
  );
};

export default TestingFoundationTopics;
