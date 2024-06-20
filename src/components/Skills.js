import React from 'react';
import './Skills.css';

const skills = [
  'Xray', 'Testmo', 'Qase', 'Karate', 'TestCafe', 'Playwright',
  'WebdriverIO', 'Robot', 'Continuous Testing',
  'Amazon S3', 'Custom Frameworks', 'Automation Strategy', 'SDLC',
  'STLC', 'Test Case Design', 'Test Case Management', 'Testing Tools', 'Test Plan',
  'Testing Techniques', 'Functional Testing', 'Non-Functional Testing', 'Regression Testing',
  'Mobile Testing', 'iOS', 'Android', 'Integration Testing', 'Usability Testing',
  'Performance Testing', 'UAT', 'API', 'SQL', 'Reporting', 'Documentation', 'Team Leadership',
  'Team Coordination', 'Project Management', 'Scrum', 'Agile', 'Defect Analysis',
  'Root Cause Analysis', 'Analytical', 'Problem-Solving', 'Training', 'Communication'
];

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
