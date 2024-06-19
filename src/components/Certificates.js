// src/components/Certificates.js
import React from 'react';

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
    <div className="certificates section">
      <h2>Certificates</h2>
      <ul>
        {certificates.map((certificate, index) => (
          <li key={index} className="certificate-item">
            <h3>{certificate.name}</h3>
            <p>{certificate.issuer}</p>
            <p>{certificate.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certificates;
