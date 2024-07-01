// src/components/Certificates.js
import React from 'react';
import './Certificates.css';

const certificates = [
  {
    name: 'Time Management Certificate',
    issuer: 'LinkedIn',
  },
  {
    name: 'Prompt ChatGPT Certificate',
    issuer: 'LinkedIn',
  },
  {
    name: 'Web3 Design and Security Essentials Certificate',
    issuer: 'LinkedIn',
  },
  {
    name: 'Google Data Analytics Certificate',
    issuer: 'Coursera',
  },
  {
    name: 'Google Project Management Certificate',
    issuer: 'Coursera',
  },
  {
    name: 'Software Project Manager Certificate',
    issuer: 'LinkedIn',
  },
  {
    name: 'LambdaTest Software Testing Professional Certificate',
    issuer: 'LambdaTest',
  },
  {
    name: 'Software Testing Certificate',
    issuer: 'LinkedIn',
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
