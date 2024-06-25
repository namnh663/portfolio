import React from 'react';
import StaticTestingTopics from '../components/StaticTestingTopics';
import { Outlet } from 'react-router-dom';
import './TestingFoundation.css';

const StaticTesting = () => {
  return (
    <div className="foundation-page">
      <StaticTestingTopics />
      <div className="foundation-content">
        <div className="foundation-intro">
          <h2>Static Testing</h2>
          <p>This page contains information about the static testing.</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default StaticTesting;
