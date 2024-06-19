// src/pages/Projects.js
import React from 'react';
import './Projects.css';

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
    link: 'https://github.com/namnh663/mobile-nightwatch'
  },
  {
    name: 'Elfie',
    description: 'Automated testing for a mobile application using WebdriverIO.',
    link: 'https://github.com/namnh663/mobile-webdriverio'
  },
  {
    name: 'VELA',
    description: 'Automated testing for web using TestCafe.',
    link: 'https://github.com/namnh663/vela-testcafe',
  },
  {
    name: 'Amanotes',
    description: 'API testing using Karate.',
    link: 'https://github.com/namnh663/ama-karate',
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <div className="header">
        <h1>Projects</h1>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="card-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
