import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const relatedArticles = [
  {
    title: 'How to Write Effective Test Cases',
    link: '/testing-foundation/effective-test-cases'
  },
  {
    title: 'Writing Test Cases Without Clear Requirements Documentation',
    link: '/testing-foundation/writing-test-cases-without-requirements'
  },
  {
    title: 'Requirement Traceability Matrix (RTM)',
    link: '/testing-foundation/requirement-traceability-matrix'
  }
];

const TestActivities = () => {
  return (
    <div className="topic-detail">
      <h2>Test Activities, Testware, Test Roles</h2>

      <h3>Test Process</h3>
      <p>
        Testing is a set of activities following a process that can be adapted based on the project context. Key test process activities include:
      </p>
      <ul>
        <li><strong>Planning:</strong> Defining objectives and choosing the best approach.</li>
        <li><strong>Monitoring & Control:</strong> Tracking progress and making adjustments.</li>
        <li><strong>Analysis:</strong> Identifying what needs to be tested (test conditions).</li>
        <li><strong>Design:</strong> Creating detailed test cases and other testware.</li>
        <li><strong>Implementation:</strong> Building the test environment and data for execution.</li>
        <li><strong>Execution:</strong> Running the tests and recording results.</li>
        <li><strong>Completion:</strong> Wrapping up the testing phase and reporting outcomes.</li>
      </ul>

      <h3>Impact of Context on Testing</h3>
      <p>The way testing is conducted depends on various factors:</p>
      <ul>
        <li>Stakeholders involved and their expectations.</li>
        <li>Team skills and experience.</li>
        <li>Project constraints like time, budget, and resources.</li>
        <li>Technical aspects of the software and development process.</li>
      </ul>

      <h3>Testware</h3>
      <p>Testware refers to the various products generated during testing activities. Examples of testware include:</p>
      <ul>
        <li>Test plans, schedules, risk registers, and reports.</li>
        <li>Test conditions, defect reports, and test case documentation.</li>
        <li>Test scripts, data sets, and environment configurations.</li>
      </ul>

      <h3>Traceability in Testing</h3>
      <p>
        Traceability links testware elements back to the test basis (requirements, etc.). This helps track coverage, identify the impact of changes, and improve communication.
      </p>

      <h3>Testing Roles</h3>
      <p>Two main testing roles are covered:</p>
      <ul>
        <li><strong>Test Management:</strong> Oversees the entire testing process and team.</li>
        <li><strong>Testing:</strong> Focuses on the technical aspects of test design, execution, etc.</li>
      </ul>
      <p>The specific responsibilities of these roles can vary depending on the project and organization.</p>

      <section className="related-articles">
        <h3>Related Articles</h3>
        <ul>
          {relatedArticles.map((article, index) => (
            <li key={index}>
              <Link to={article.link}>{article.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TestActivities;
