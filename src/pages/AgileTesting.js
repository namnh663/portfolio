import React from 'react';
import AgileTestingTopics from '../components/AgileTestingTopics';
import { Outlet } from 'react-router-dom';
import './TestingFoundation.css';

const AgileTesting = () => {
  return (
    <div className="foundation-page">
      <AgileTestingTopics />
      <div className="foundation-content">
        <div className="foundation-intro">
          <h2>Agile Testing</h2>
          <p>This page contains information about the agile testing.</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AgileTesting;
