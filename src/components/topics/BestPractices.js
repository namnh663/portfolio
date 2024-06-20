import React from 'react';
import './Topic.css';

const BestPractices = () => {
  return (
    <div className="topic-detail">
      <h2>Best Practices</h2>
      <ul>
        <li>Start testing early in the development lifecycle (Shift Left Testing).</li>
        <li>Focus on both functional and non-functional requirements.</li>
        <li>Use a combination of manual and automated testing.</li>
        <li>Maintain clear and comprehensive documentation.</li>
        <li>Regularly review and update test cases.</li>
        <li>Foster collaboration between testers, developers, and other stakeholders.</li>
      </ul>
    </div>
  );
};

export default BestPractices;
