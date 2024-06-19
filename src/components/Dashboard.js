// src/components/Dashboard.js
import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Certificates from './Certificates';

const Dashboard = () => {
  return (
    <div className="dashboard container">
      <h1>QA Test Lead Portfolio</h1>
      <AboutMe />
      <Skills />
      <Certificates />
    </div>
  );
}

export default Dashboard;
