import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const MobileTestingTopics = () => {
  return (
    <div className="sidebar">
      <h3>Topics</h3>
      <ul>
        <li><NavLink to="/mobile-testing/mobile-analytics-data-and-business-models" activeClassName="active">Mobile Analytics Data and Business Models</NavLink></li>
        <li><NavLink to="/mobile-testing/mobile-device-types" activeClassName="active">Mobile Device Types</NavLink></li>
        <li><NavLink to="/mobile-testing/types-of-mobile-applications" activeClassName="active">Types of Mobile Applications</NavLink></li>
        <li><NavLink to="/mobile-testing/mobile-application-architecture" activeClassName="active">Mobile Application Architecture</NavLink></li>
        <li><NavLink to="/mobile-testing/types-of-mobile-testing" activeClassName="active">Types of Mobile Testing</NavLink></li>
        <li><NavLink to="/mobile-testing/test-strategy-for-mobile-apps" activeClassName="active">Test Strategy for Mobile Apps</NavLink></li>
        <li><NavLink to="/mobile-testing/end-to-end-mobile-testing" activeClassName="active">End-to-End Mobile Testing</NavLink></li>
        <li><NavLink to="/mobile-testing/challenges-of-mobile-testing" activeClassName="active">Challenges of Mobile Testing</NavLink></li>
      </ul>
    </div>
  );
};

export default MobileTestingTopics;
