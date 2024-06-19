import React from 'react';
import { Link } from 'react-router-dom';
import './Knowledge.css';

const knowledgeTopics = [
  {
    name: 'Automation Testing',
    path: '/knowledge/automation-testing',
    description: 'Learn the basics of automation testing.',
  },
  {
    name: 'Performance Testing',
    path: '/knowledge/performance-testing',
    description: 'Understand how to test the performance of applications.',
  },
  {
    name: 'Manual Testing',
    path: '/knowledge/manual-testing',
    description: 'Get started with manual testing techniques.',
  },
  {
    name: 'API Testing',
    path: '/knowledge/api-testing',
    description: 'Explore API testing methods and tools.',
  },
];

const Knowledge = () => {
  return (
    <div className="knowledge">
      <div className="header">
        <h1>Knowledge Topics</h1>
        <p>Explore various topics related to software testing.</p>
      </div>
      <div className="topics-grid">
        {knowledgeTopics.map((topic, index) => (
          <Link key={index} to={topic.path} className="topic-card">
            <div className="card-content">
              <h3>{topic.name}</h3>
              <p>{topic.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Knowledge;
