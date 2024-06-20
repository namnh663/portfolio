// src/components/Certificates.js
import React from 'react';
import './Certificates.css';

const certificates = [
  {
    name: 'Prompt Engineering With ChatGPT Certificate',
    issuer: 'LinkedIn',
    date: '2024'
  },
  {
    name: 'Web3 Design and Security Essentials Certificate',
    issuer: 'LinkedIn',
    date: '2024'
  },
  {
    name: 'Google Data Analytics Certificate',
    issuer: 'Coursera',
    date: '2023'
  },
  {
    name: 'Google Project Management Certificate',
    issuer: 'Coursera',
    date: '2023'
  },
  {
    name: 'LambdaTest Software Testing Professional Certificate',
    issuer: 'LambdaTest',
    date: '2023'
  },
  {
    name: 'Scrum Advanced Certificate',
    issuer: 'LinkedIn',
    date: '2023'
  }
];

const Certificates = () => {
  return (
    <div className="certificates">
      <h2>Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-card">
            <div className="card-content">
              <h3>{certificate.name}</h3>
              <p>{certificate.issuer}</p>
              <p>{certificate.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
