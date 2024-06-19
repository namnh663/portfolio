// src/components/Skills.js
import React from 'react';

const skills = [
  'Jira', 'Azure', 'Xray', 'Testmo', 'Qase', 'Karate', 'TestCafe', 'Playwright', 
  'K6', 'WebdriverIO', 'Robot', 'JavaScript', 'TypeScript', 'Java', 
  'Continuous Testing', 'Bitbucket', 'GitLab', 'Amazon S3', 'Custom Frameworks', 
  'Automation Strategy', 'SDLC', 'STLC', 'Test Case Design', 'Test Case Management', 
  'Testing Tools', 'Test Plan', 'Testing Techniques', 'Functional Testing', 
  'Non-Functional Testing', 'Regression Testing', 'Mobile Testing', 'iOS', 'Android', 
  'Integration Testing', 'Usability Testing', 'Performance Testing', 'UAT', 'API', 
  'SQL', 'Reporting', 'Documentation', 'Team Leadership', 'Team Coordination', 
  'Project Management', 'Scrum', 'Agile', 'Defect Analysis', 'Root Cause Analysis', 
  'Analytical', 'Problem-Solving', 'Training', 'Communication'
];

const Skills = () => {
  return (
    <div className="skills">
      <h2>Highlighted Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;