import React from 'react';
import './Topic.css';

const TypesOfMobileApplications = () => {
  return (
    <div className="topic-detail">
      <h2>Types of Mobile Applications</h2>
      <ul>
        <li><strong>Native Apps:</strong> Developed specifically for a particular operating system (iOS, Android).</li>
        <li><strong>Web Apps:</strong> Accessible via web browsers on mobile devices.</li>
        <li><strong>Hybrid Apps:</strong> A combination of native and web apps, utilizing web technologies within a native app container.</li>
      </ul>
    </div>
  );
};

export default TypesOfMobileApplications;
