import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const KarateTopics = () => {
  return (
    <div className="sidebar">
      <h3>Topics</h3>
      <ul>
        <li><NavLink to="/karate/what-is-karate" activeClassName="active">What is Karate</NavLink></li>
        <li><NavLink to="/karate/what-is-json" activeClassName="active">What is JSON</NavLink></li>
      </ul>
    </div>
  );
};

export default KarateTopics;
