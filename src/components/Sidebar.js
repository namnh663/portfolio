import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Topics</h3>
      <ul>
        <li><NavLink to="/knowledge/terminology" activeClassName="active">Terminology</NavLink></li>
        <li><NavLink to="/knowledge/definition" activeClassName="active">Definition and Purpose</NavLink></li>
        <li><NavLink to="/knowledge/principles" activeClassName="active">Testing Principles</NavLink></li>
        <li><NavLink to="/knowledge/types" activeClassName="active">Types of Testing</NavLink></li>
        <li><NavLink to="/knowledge/levels" activeClassName="active">Levels of Testing</NavLink></li>
        <li><NavLink to="/knowledge/methods" activeClassName="active">Testing Methods</NavLink></li>
        <li><NavLink to="/knowledge/techniques" activeClassName="active">Testing Techniques</NavLink></li>
        <li><NavLink to="/knowledge/design" activeClassName="active">Test Design Techniques</NavLink></li>
        <li><NavLink to="/knowledge/process" activeClassName="active">Testing Process</NavLink></li>
        <li><NavLink to="/knowledge/documentation" activeClassName="active">Test Documentation</NavLink></li>
        <li><NavLink to="/knowledge/defects" activeClassName="active">Defect Lifecycle</NavLink></li>
        <li><NavLink to="/knowledge/tools" activeClassName="active">Tools and Technologies</NavLink></li>
        <li><NavLink to="/knowledge/best-practices" activeClassName="active">Best Practices</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
