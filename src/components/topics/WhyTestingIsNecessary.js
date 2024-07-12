import React from 'react';
import './Topic.css';

const WhyTestingIsNecessary = () => {
  return (
    <div className="topic-detail">
      <h2>Why Testing is Necessary?</h2>

      <h3>Benefits of Testing:</h3>
      <ul>
        <li><strong>Cost-effective defect detection:</strong> Testing helps identify issues early, saving time and money compared to fixing them later.</li>
        <li><strong>Quality evaluation:</strong> Testing provides measurements to assess the quality of software at different development stages.</li>
        <li><strong>User representation:</strong> Testers act as a voice for users throughout the development process.</li>
        <li><strong>Compliance:</strong> Testing may be required to meet legal, contractual, or regulatory standards.</li>
      </ul>

      <h3>Testing vs. Quality Assurance (QA)</h3>
      <ul>
        <li><strong>Testing:</strong> A quality control (QC) activity focused on finding and fixing defects in the product itself (software, documentation, etc.)</li>
        <li><strong>QA:</strong> A broader process aimed at preventing defects by ensuring good development and testing processes are followed.</li>
      </ul>

      <h3>Errors, Defects, Failures, Root Causes</h3>
      <ul>
        <li><strong>Errors (mistakes):</strong> Human actions that lead to defects.</li>
        <li><strong>Defects (faults, bugs):</strong> Issues in software, documentation, or other artifacts caused by errors.</li>
        <li><strong>Failures:</strong> When a defect causes the software to malfunction.</li>
        <li><strong>Root Cause:</strong> The underlying reason behind an error or defect. Identifying the root cause helps prevent similar issues in the future.</li>
      </ul>
    </div>
  );
};

export default WhyTestingIsNecessary;
