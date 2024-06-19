import React from 'react';
import './Resources.css';

const resources = [
  {
    name: 'Automation Testing Tools',
    description: 'List of tools for automation testing.',
    link: '#'
  },
  {
    name: 'Mobile Testing Checklist',
    description: 'Checklist for manual testing.',
    link: '#'
  },
  {
    name: 'API Testing Tools',
    description: 'List of tools for API testing.',
    link: '#'
  },
];

const Resources = () => {
  return (
    <div className="resources">
      <div className="header">
        <h1>Shared Resources</h1>
        <p>Here are some useful resources for software testing.</p>
      </div>
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <a key={index} href={resource.link} target="_blank" rel="noopener noreferrer" className="resource-card">
            <div className="card-content">
              <h3>{resource.name}</h3>
              <p>{resource.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Resources;
