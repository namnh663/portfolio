import React from 'react';
import TestAutomationTopics from '../components/TestAutomationTopics';
import { Outlet } from 'react-router-dom';
import './TestingFoundation.css';

const TestAutomation = () => {
  return (
    <div className="foundation-page">
      <TestAutomationTopics />
      <div className="foundation-content">
        <div className="foundation-intro">
          <h2>Test Automation</h2>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default TestAutomation;
