// src/pages/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'Live Payments',
      description: 'API testing using Karate.',
      link: 'https://github.com/namnh663/live-karate',
    },
    {
      name: 'Para Bank',
      description: 'Automated testing for web using Playwright.',
      link: 'https://github.com/namnh663/parabank-playwright',
    },
    {
      name: 'Airport Gap',
      description: 'Performance testing for API using K6.',
      link: 'https://github.com/namnh663/k6',
    },
    {
      name: 'Sauce Labs',
      description: 'Automated testing for a mobile application using Nightwatch.',
      link: 'https://github.com/namnh663/mobile-nightwatch',
    },
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
