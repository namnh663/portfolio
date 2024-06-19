// src/pages/Experience.js
import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Live Payments',
      role: 'Senior QA Engineer',
      duration: 'Nov 2023 - Jun 2024',
    },
    {
      company: 'ITL (In Do Trans Logistics Corporation)',
      role: 'Senior QA Engineer',
      duration: 'Oct 2022 - Oct 2023',
    },
    {
      company: 'Home Credit Vietnam',
      role: 'Software Test Engineer',
      duration: 'Mar 2021 - Sep 2022',
    },
    {
      company: 'Orient Commercial Joint Stock Bank (OCB)',
      role: 'QA Analyst',
      duration: 'Mar 2020 - Feb 2021',
    },
    {
      company: 'HDBank',
      role: 'Software Tester',
      duration: 'Sep 2018 - Feb 2020',
    },
  ];

  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.role} - <span>{exp.company}</span></h3>
            <p className="duration">{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
