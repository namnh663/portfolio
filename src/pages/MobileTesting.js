import React from 'react';
import MobileTestingTopics from '../components/MobileTestingTopics';
import { Outlet } from 'react-router-dom';
import './TestingFoundation.css';

const MobileTesting = () => {
  return (
    <div className="foundation-page">
      <MobileTestingTopics />
      <div className="foundation-content">
        <div className="foundation-intro">
          <h2>Mobile Testing</h2>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MobileTesting;
