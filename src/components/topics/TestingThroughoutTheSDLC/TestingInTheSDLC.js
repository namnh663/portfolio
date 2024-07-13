import React from 'react';
import '../Topic.css';

const TestingInTheSDLC = () => {
  return (
    <div className="topic-detail">
      <h2>Testing in the SDLC</h2>

      <h3>SDLC and Testing</h3>
      <ul>
        <li>The chosen SDLC model impacts how testing is conducted (scope, timing, documentation, etc.).</li>
        <li>Sequential models: Testing starts later in the lifecycle due to emphasis on upfront design.</li>
        <li>Iterative/Incremental models: Testing happens throughout each iteration with a focus on early feedback.</li>
        <li>Agile models: Testing is lightweight and emphasizes automation due to frequent changes.</li>
      </ul>

      <h3>Good Testing Practices (Independent of SDLC)</h3>
      <ul>
        <li>Every development activity has a corresponding testing activity.</li>
        <li>Different test levels have specific objectives to avoid redundancy.</li>
        <li>Test analysis and design begin during the corresponding development phase to enable early testing.</li>
        <li>Testers participate in reviewing work products as soon as drafts are available.</li>
      </ul>

      <h3>Testing as a Driver for Development</h3>
      <ul>
        <li>TDD, ATDD, and BDD are development approaches where tests are written first to guide development.</li>
        <li>These approaches promote early testing and a shift-left strategy.</li>
      </ul>

      <h3>DevOps and Testing</h3>
      <ul>
        <li>DevOps aims to create collaboration between development (including testing) and operations.</li>
        <li>Benefits of DevOps for testing:
          <ul>
            <li>Faster feedback on code quality.</li>
            <li>Shift-left testing through CI/CD pipelines.</li>
            <li>More focus on non-functional testing.</li>
            <li>Reduced regression testing effort.</li>
          </ul>
        </li>
        <li>Challenges of DevOps for testing:
          <ul>
            <li>Requires defining and establishing the DevOps pipeline.</li>
            <li>Requires investment in CI/CD tools and test automation.</li>
            <li>Manual testing is still needed, especially for user-centric testing.</li>
          </ul>
        </li>
      </ul>

      <h3>Shift-Left Approach</h3>
      <ul>
        <li>Early testing principle where testing starts earlier in the SDLC.</li>
        <li>Examples of achieving a shift-left approach:
          <ul>
            <li>Reviewing specifications for testability.</li>
            <li>Writing test cases before code implementation.</li>
            <li>Performing static analysis and non-functional testing earlier.</li>
          </ul>
        </li>
        <li>Benefits:
          <ul>
            <li>Saves effort and costs later in the development process.</li>
          </ul>
        </li>
      </ul>

      <h3>Retrospectives and Process Improvement</h3>
      <ul>
        <li>Meetings held to discuss project successes, failures, and improvement opportunities.</li>
        <li>Involve various stakeholders (testers, developers, etc.).</li>
        <li>Outcomes are documented and used to improve future projects.</li>
        <li>Benefits for testing:
          <ul>
            <li>Increased test effectiveness and efficiency.</li>
            <li>Improved quality of testware and test basis.</li>
            <li>Stronger team collaboration and learning.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default TestingInTheSDLC;
