import React from 'react';
import './Topic.css';

const StaticTestingBenefits = () => {
  return (
    <div className="topic-detail">
      <h2>Benefits of Static Testing</h2>
      <ul>
        <li><strong>Early Detection of Defects</strong>: Finds defects before the code is executed or deployed, which can help prevent complex issues later in the development process.</li>
        <li><strong>Cost-Effective</strong>: It is generally less costly to find and fix defects in the early stages than during later stages of testing or post-release.</li>
        <li><strong>Improves Quality</strong>: Helps improve both the code quality and the quality of other software artifacts like requirements and design documents.</li>
        <li><strong>Reduces Dynamic Testing Effort</strong>: By catching defects early, it can reduce the burden and scope of dynamic testing needed later.</li>
      </ul>
    </div>
  );
};

export default StaticTestingBenefits;
