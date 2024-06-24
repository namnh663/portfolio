import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import './TestingFoundation.css';

const TestingFoundation = () => {
  return (
    <div className="foundation-page">
      <Sidebar />
      <div className="foundation-content">
        <div className="foundation-intro">
          <h2>Testing Foundation</h2>
          <p>This page contains information about the foundations of testing.</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default TestingFoundation;
