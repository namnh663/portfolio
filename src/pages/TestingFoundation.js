import React from 'react';
import TestingFoundationTopics from '../components/TestingFoundationTopics';
import { Outlet } from 'react-router-dom';
import './TestingFoundation.css';

const TestingFoundation = () => {
  return (
    <div className="foundation-page">
      <TestingFoundationTopics />
      <div className="foundation-content">
        <div className="foundation-intro">
          <h2>Testing Foundation</h2>
          <p>Testing is the process of evaluating a system or its components to determine whether it satisfies specified requirements.</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default TestingFoundation;
