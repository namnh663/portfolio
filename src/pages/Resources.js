// src/pages/Resources.js
import React from 'react';
import './Resources.css';

const resources = [
  {
    name: 'Automation Testing Guide',
    description: 'A comprehensive guide to automation testing.',
    link: '#'
  },
  {
    name: 'Performance Testing Tools',
    description: 'List of tools for performance testing.',
    link: '#'
  },
  {
    name: 'Manual Testing Checklist',
    description: 'Checklist for manual testing.',
    link: '#'
  },
  {
    name: 'API Testing with Postman',
    description: 'Guide on API testing using Postman.',
    link: '#'
  },
];

const Resources = () => {
  return (
    <div className="resources">
      <h2>Shared Resources</h2>
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <div key={index} className="resource-item">
            <h3>{resource.name}</h3>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">Access Resource</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
