import React from 'react';

const frameworks = [
    'Karate', 'TestCafe', 'Playwright', 'WebdriverIO', 'Robot', 'K6', 'React'
  ];

const Frameworks = () => {
  return (
    <div className="skills-section">
      <h2>Frameworks</h2>
      <div className="skills-container">
        {frameworks.map((framework, index) => (
          <span key={index} className="skill-tag">{framework}</span>
        ))}
      </div>
    </div>
  );
};

export default Frameworks;
