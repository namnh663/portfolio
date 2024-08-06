import React from 'react';
import TestingAdvancedTopics from '../components/TestingAdvancedTopics';
import { Outlet } from 'react-router-dom';
import './TestingFoundation.css';

const TestingAdvanced = () => {
  return (
    <div className="foundation-page">
      <TestingAdvancedTopics />
      <div className="foundation-content">
        <div className="foundation-intro">
          <h2>Testing Advanced</h2>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default TestingAdvanced;
