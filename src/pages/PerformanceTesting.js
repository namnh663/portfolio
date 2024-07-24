import React from 'react';
import PerformanceTestingTopics from '../components/PerformanceTestingTopics';
import { Outlet } from 'react-router-dom';
import './TestingFoundation.css';

const PerformanceTesting = () => {
  return (
    <div className="foundation-page">
      <PerformanceTestingTopics />
      <div className="foundation-content">
        <div className="foundation-intro">
          <h2>Performance Testing</h2>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default PerformanceTesting;
