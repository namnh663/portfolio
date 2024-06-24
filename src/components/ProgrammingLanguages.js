import React from 'react';
import { FaJava, FaJs, FaPython } from 'react-icons/fa';
import { SiCsharp, SiTypescript } from 'react-icons/si';
import './ProgrammingLanguages.css';

const languages = [
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'C#', icon: <SiCsharp /> }
];

const ProgrammingLanguages = () => {
  return (
    <div className="programming-languages">
      <h2>Programming Languages</h2>
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

export default ProgrammingLanguages;
