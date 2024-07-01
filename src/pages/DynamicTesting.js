import React from 'react';
import DynamicTestingTopics from '../components/DynamicTestingTopics';
import { Outlet } from 'react-router-dom';
import './TestingFoundation.css';

const DynamicTesting = () => {
  return (
    <div className="foundation-page">
      <DynamicTestingTopics />
      <div className="foundation-content">
        <div className="foundation-intro">
          <h2>Dynamic Testing</h2>
          <p>This page contains information about the dynamic testing.</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DynamicTesting;
