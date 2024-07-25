import React from 'react';
import './Topic.css';

const TestAutomationDevelopment = () => {
  return (
    <div className="topic-detail">
      <h2>Test Automation Development</h2>
      <h3>Apply Guidelines that Support Effective Test Automation Pilot and Deployment Activities</h3>
      <p>
        Defining the scope of validation for a test automation pilot is crucial for its success. A pilot project, though brief, can significantly influence the project's direction. To optimize test automation efforts, the following aspects should be evaluated:
      </p>
      <ul>
        <li><strong>Programming languages</strong>: Determine which languages will be used.</li>
        <li><strong>Tools</strong>: Select suitable commercial off-the-shelf or open-source tools.</li>
        <li><strong>Test levels</strong>: Identify which test levels to cover.</li>
        <li><strong>Test cases</strong>: Choose which test cases to develop.</li>
        <li><strong>Development approach</strong>: Decide on the approach for developing test cases.</li>
      </ul>
      <p>
        Based on these evaluations, Test Automation Engineers (TAEs) can define an initial approach and create prototypes to compare different methods. This helps in deciding the best path forward.
      </p>
      <p>
        Setting timelines is essential for meeting schedules and ensuring the pilot's success. Regular progress checks can help identify and mitigate risks.
      </p>
      <p>
        During the pilot, integrating the solution and existing code into the CI/CD pipeline is recommended. This early integration can expose issues in the System Under Test (SUT), the Test Automation Solution (TAS), or the overall tool integration within the organization. As the number of test cases grows, the initial CI/CD setup may need adjustments to run tests differently and at different times.
      </p>
      <p>
        Non-technical aspects also need evaluation during the pilot, including:
      </p>
      <ul>
        <li>The knowledge and experience of team members</li>
        <li>The team structure</li>
        <li>Licensing and organizational rules</li>
        <li>The type and levels of planned testing for test case automation</li>
      </ul>
      <p>
        Once the pilot is complete, TAEs and test managers should evaluate the effort to assess success or failure and make informed decisions for the project's future.
      </p>
    </div>
  );
};

export default TestAutomationDevelopment;
