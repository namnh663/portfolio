import React from 'react';
import '../Topic.css';

const TestLevelsAndTestTypes = () => {
  return (
    <div className="topic-detail">
      <h2>Test Levels and Test Types</h2>

      <h3>Test Levels</h3>
      <ul>
        <li>Groups of testing activities organized by development stage (component, system, etc.).</li>
        <li>Each level has specific objectives, test basis, and approaches.</li>
        <li>Levels may overlap in time and some iterative models may not have strict entry/exit criteria.</li>
      </ul>

      <h3>Common Test Levels</h3>
      <ul>
        <li><b>Component testing (unit testing):</b> Focuses on individual components in isolation.</li>
        <li><b>Component integration testing:</b> Tests interfaces and interactions between components.</li>
        <li><b>System testing:</b> Tests overall system behavior and capabilities, including functional and non-functional aspects.</li>
        <li><b>System integration testing:</b> Tests how the system interacts with external systems and services.</li>
        <li><b>Acceptance testing:</b> Validates if the system meets user needs and is ready for deployment (e.g., UAT).</li>
      </ul>

      <h3>Test Types</h3>
      <ul>
        <li>Groups of testing activities focused on specific quality characteristics.</li>
        <li>Can be applied at any test level, but with varying emphasis.</li>
      </ul>

      <h3>Common Test Types</h3>
      <ul>
        <li><b>Functional testing:</b> Evaluates if the system performs its intended functions correctly.</li>
        <li><b>Non-functional testing:</b> Evaluates non-functional aspects like performance, usability, and security.
          <ul>
            <li>Often starts early in the lifecycle (e.g., reviews) and can be derived from functional tests.</li>
          </ul>
        </li>
        <li><b>Black-box testing:</b> Tests based on external specifications, without considering internal structure.</li>
        <li><b>White-box testing:</b> Tests based on the system's internal structure (code, architecture).</li>
      </ul>

      <h3>Confirmation Testing and Regression Testing</h3>
      <ul>
        <li>Performed after changes are made to a component or system.</li>
        <li><b>Confirmation testing:</b> Ensures a fix for a defect actually addresses the issue.</li>
        <li><b>Regression testing:</b> Ensures changes haven't caused unintended consequences elsewhere.
          <ul>
            <li>Regression testing is a prime candidate for automation, especially with CI/CD (DevOps).</li>
          </ul>
        </li>
      </ul>

      <h3>Key Points</h3>
      <ul>
        <li>Test levels and types work together to comprehensively evaluate software quality.</li>
        <li>Choosing the right approach depends on the development stage, project needs, and resources.</li>
      </ul>
    </div>
  );
};

export default TestLevelsAndTestTypes;
