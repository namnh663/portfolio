import React from 'react';
import './ProgrammingLanguagesAndTechnologies.css';

const ProgrammingLanguagesAndTechnologies = () => {
  const languages = ['JavaScript', 'TypeScript', 'Java', 'Python', 'C#'];
  const technologies = [
    'React', 'Node.js','Docker', 'Grafana', 'K6', 'AWS', 'Jira', 'Azure', 'Git', 'GitLab', 'Bitbucket', 'CI/CD'
  ];

  return (
    <div className="programming-languages-and-technologies">
      <h2>Programming Languages & Technologies</h2>
      <div className="content">
        <div className="languages">
          <h3>Languages</h3>
          <div className="badges">
            {languages.map((language, index) => (
              <span key={index} className="badge">{language}</span>
            ))}
          </div>
        </div>
        <div className="technologies">
          <h3>Technologies</h3>
          <div className="badges">
            {technologies.map((technology, index) => (
              <span key={index} className="badge">{technology}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingLanguagesAndTechnologies;
