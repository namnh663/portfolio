import React from 'react';
import './Topic.css';

const RoleAndSkillsOfTester = () => {
  return (
    <div className="topic-detail">
      <h2>Role and Skills of a Tester in an Agile Team</h2>
      
      <h3>Agile Tester Skills</h3>
      <p>Testers in Agile teams need to possess the foundational skills outlined in the Foundation Level. Beyond these, they should be adept in:</p>
      <ul>
        <li>Test automation</li>
        <li>Test-driven development (TDD)</li>
        <li>Acceptance test-driven development (ATDD)</li>
        <li>White-box, black-box, and experience-based testing</li>
      </ul>
      <p>Key interpersonal skills for Agile testers include:</p>
      <ul>
        <li>Being positive and solution-oriented with team members and stakeholders</li>
        <li>Displaying critical and quality-oriented thinking about the product</li>
        <li>Actively acquiring information from stakeholders, rather than relying solely on written specifications</li>
        <li>Accurately evaluating and reporting test results, test progress, and product quality</li>
        <li>Defining testable user stories, especially acceptance criteria, with customer representatives and stakeholders</li>
        <li>Collaborating within the team, including pairing with programmers and other team members</li>
        <li>Responding swiftly to changes, such as modifying or improving test cases</li>
        <li>Planning and organizing their own work</li>
      </ul>
      <p>Continuous skill growth, particularly in interpersonal skills, is essential for Agile testers.</p>

      <h3>The Role of a Tester in an Agile Team</h3>
      <p>The role of a tester in an Agile team extends beyond traditional testing activities. It includes generating and providing feedback on test status, progress, product quality, and process quality. Key activities include:</p>
      <ul>
        <li>Understanding, implementing, and updating the test strategy</li>
        <li>Develop and optimize testing processes</li>
        <li>Measuring and reporting test coverage across all applicable dimensions</li>
        <li>Ensuring proper use of testing tools</li>
        <li>Configuring, using, and managing test environments and test data</li>
        <li>Reporting defects and collaborating with the team to resolve them</li>
        <li>Coaching team members on relevant aspects of testing</li>
        <li>Ensuring appropriate testing tasks are scheduled during release and iteration planning</li>
        <li>Collaborating with developers and business stakeholders to clarify requirements, focusing on testability, consistency, and completeness</li>
        <li>Proactively participating in team retrospectives, suggesting and implementing improvements</li>
        <li>Advise on strategy for automation, testability, test data, testing within the CI/CD pipeline, etc</li>
      </ul>
      <p>Each Agile team member is responsible for product quality and participates in test-related tasks. However, Agile organizations may face specific test-related risks, such as:</p>
      <ul>
        <li>Testers working too closely with developers, leading to a loss of the appropriate tester mindset</li>
        <li>Testers becoming tolerant of or silent about inefficient or low-quality practices</li>
        <li>Testers struggling to keep pace with changes during time-constrained iterations</li>
      </ul>
      <p>To mitigate these risks, organizations may consider preserving some level of tester independence as discussed in Section Organizational Options for Independent Testing.</p>
    </div>
  );
};

export default RoleAndSkillsOfTester;
