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
          <p>Mobile testing involves testing mobile applications on various devices to ensure their functionality, usability, and consistency. This type of testing can be complex due to the diversity of mobile devices, operating systems, and network conditions.</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MobileTesting;
