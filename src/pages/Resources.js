import React from 'react';
import './Resources.css';

const resources = [
  {
    title: 'React Documentation',
    description: 'Comprehensive guide and reference for React.',
    link: 'https://reactjs.org/docs/getting-started.html'
  },
  {
    title: 'MDN Web Docs',
    description: 'Resources for developers, by developers.',
    link: 'https://developer.mozilla.org/en-US/'
  },
  {
    title: 'CSS Tricks',
    description: 'Tips, tricks, and techniques on using CSS.',
    link: 'https://css-tricks.com/'
  },
  {
    title: 'JSON Crack',
    description: 'Visualize your JSON data in a crack format.',
    link: 'https://jsoncrack.com/'
  },
  {
    title: 'Cobbl',
    description: 'Collaborate, build, and launch APIs faster.',
    link: 'https://cobbl.io/'
  },
  {
    title: 'Mobile Testing Checklist',
    description: 'Comprehensive checklist for Mobile Testing.',
    link: 'https://docs.google.com/spreadsheets/d/1YwL6Gc3uExZC4tf6sux6fL6Wft5RlLPgesJbKjb3DjU/edit?usp=sharing'
  },
  {
    title: 'Test Strategy Template',
    description: 'Sample Test Strategy for Mobile Application.',
    link: 'https://docs.google.com/document/d/1ejZL_045JMcN0AMf2fe06BFUQfpUCxiwz5QKFivjkQ0/edit?usp=sharing'
  }
];

const Resources = () => {
  return (
    <div className="resources-page">
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <div className="resource-card" key={index}>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
