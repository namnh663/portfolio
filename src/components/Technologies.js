import React from 'react';
import { FaDocker, FaNodeJs, FaAws, FaGit, FaGitlab, FaBitbucket } from 'react-icons/fa';
import { SiGrafana, SiAzuredevops } from 'react-icons/si';
import './ProgrammingLanguages.css';

  const languages = [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Grafana', icon: <SiGrafana /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Git', icon: <FaGit /> },
    { name: 'GitLab', icon: <FaGitlab /> },
    { name: 'Bitbucket', icon: <FaBitbucket /> },
    { name: 'Azure', icon: <SiAzuredevops /> }
  ];
  
  const Technologies = () => {
    return (
      <div className="programming-languages">
        <h2>Technologies</h2>
        <div className="language-icons">
          {languages.map((language, index) => (
            <div key={index} className="language-item">
              <div className="icon">{language.icon}</div>
              <div className="name">{language.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Technologies;
