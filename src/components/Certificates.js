// src/components/Certificates.js
import React from 'react';
import './Certificates.css';

const certificates = [
  {
    name: 'Time Management',
    issuer: 'LinkedIn',
  },
  {
    name: 'Performance Management',
    issuer: 'LinkedIn',
  },
  {
    name: 'Communication Skills',
    issuer: 'LinkedIn',
  },
  {
    name: 'Google Data Analytics',
    issuer: 'Coursera',
  },
  {
    name: 'Google Project Management',
    issuer: 'Coursera',
  },
  {
    name: 'PMI Agile Certified Practitioner (PMI-ACP)',
    issuer: 'LinkedIn & PMI',
  },
  {
    name: 'Technical Product Management',
    issuer: 'LinkedIn',
  },
  {
    name: 'LambdaTest Software Testing Professional',
    issuer: 'LambdaTest',
  },
  {
    name: 'SQL',
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
