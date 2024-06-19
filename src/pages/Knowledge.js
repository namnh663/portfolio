// src/pages/Knowledge.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Knowledge.css';

const knowledgeTopics = [
  {
    name: 'Automation Testing',
    path: '/knowledge/automation-testing',
  },
  {
    name: 'Performance Testing',
    path: '/knowledge/performance-testing',
  },
  {
    name: 'Manual Testing',
    path: '/knowledge/manual-testing',
  },
  {
    name: 'API Testing',
    path: '/knowledge/api-testing',
  },
];

const Knowledge = () => {
  return (
    <div className="knowledge">
      <h2>Knowledge Topics</h2>
      <div className="topics-grid">
        {knowledgeTopics.map((topic, index) => (
          <div key={index} className="topic-item">
            <Link to={topic.path}>{topic.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Knowledge;
