import React from 'react';
import KarateTopics from '../components/KarateTopics';
import { Outlet } from 'react-router-dom';
import './TestingFoundation.css';

const Karate = () => {
  return (
    <div className="foundation-page">
      <KarateTopics />
      <div className="foundation-content">
        <div className="foundation-intro">
          <h2>Karate</h2>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Karate;
