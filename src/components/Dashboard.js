import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Certificates from './Certificates';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <h1>Nam Nguyen Hoai</h1>
        <p>Welcome to my website</p>
      </div>
      <div className="container">
        <AboutMe />
        <Skills />
        <Certificates />
      </div>
    </div>
  );
};

export default Dashboard;
