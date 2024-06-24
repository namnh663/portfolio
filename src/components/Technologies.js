import React from 'react';

const technologies = [
    'React', 'Node.js', 'Docker', 'Grafana', 'K6', 'AWS', 'Amazon S3', 'Jira', 'Azure', 'Git', 'GitLab', 'Bitbucket', 'CI/CD',
    'Xray', 'Testmo', 'Qase', 'Karate', 'TestCafe', 'Playwright', 'WebdriverIO', 'Robot'
  ];

const Technologies = () => {
  return (
    <div className="skills-section">
      <h2>Technologies</h2>
      <div className="skills-container">
        {technologies.map((technology, index) => (
          <span key={index} className="skill-tag">{technology}</span>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
