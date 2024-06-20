import React from 'react';
import './Topic.css';

const Process = () => {
  return (
    <div className="topic-detail">
      <h2>Testing Process</h2>
      <ol>
        <li><strong>Requirement Analysis</strong>: Understanding what needs to be tested.</li>
        <li><strong>Test Planning</strong>: Defining the scope, approach, resources, and schedule.</li>
        <li><strong>Test Case Development</strong>: Writing detailed test cases and preparing test data.</li>
        <li><strong>Environment Setup</strong>: Setting up the hardware and software environment.</li>
        <li><strong>Test Execution</strong>: Running the test cases and logging defects.</li>
        <li><strong>Test Cycle Closure</strong>: Analyzing test results, assessing test coverage, and learning from the testing process.</li>
      </ol>
    </div>
  );
};

export default Process;
