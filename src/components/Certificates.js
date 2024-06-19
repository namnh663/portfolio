// src/components/Certificates.js
import React from 'react';
import './Certificates.css';

const certificates = [
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
