import React from 'react';

const tools = [
    'Jira', 'Azure', 'Xray', 'TestRail', 'Testmo', 'Qase'
  ];

const Tools = () => {
  return (
    <div className="skills-section">
      <h2>Tools</h2>
      <div className="skills-container">
        {tools.map((tool, index) => (
          <span key={index} className="skill-tag">{tool}</span>
        ))}
      </div>
    </div>
  );
};

export default Tools;
