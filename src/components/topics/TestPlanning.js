import React from 'react';
import './Topic.css';

const TestPlanning = () => {
  return (
    <div className="topic-detail">
      <h2>Test Planning</h2>

      <p>A test plan outlines the objectives, resources, and processes for a test project, serving several key purposes:</p>
      <ul>
        <li><strong>Documentation:</strong> It details the means and schedule for achieving test objectives.</li>
        <li><strong>Assurance:</strong> Ensures test activities meet established criteria.</li>
        <li><strong>Communication:</strong> Acts as a communication tool among team members and stakeholders.</li>
        <li><strong>Adherence:</strong> Demonstrates adherence to the test policy and strategy or explains deviations.</li>
      </ul>
      <p>The process of preparing a test plan helps testers think through challenges related to risks, schedules, resources, tools, costs, and effort.</p>

      <p><strong>Typical Content of a Test Plan:</strong></p>
      <ul>
        <li><strong>Context of Testing:</strong> Scope, test objectives, constraints, test basis.</li>
        <li><strong>Assumptions and Constraints:</strong> Related to the test project.</li>
        <li><strong>Stakeholders:</strong> Roles, responsibilities, relevance to testing, hiring, and training needs.</li>
        <li><strong>Communication:</strong> Forms and frequency of communication, documentation templates.</li>
        <li><strong>Risk Register:</strong> Product and project risks.</li>
        <li><strong>Test Approach:</strong> Test levels, types, techniques, deliverables, entry and exit criteria, independence, metrics, test data and environment requirements, deviations from the test policy and strategy.</li>
        <li><strong>Budget and Schedule</strong></li>
      </ul>
      <p>Refer to the ISO/IEC/IEEE 29119-3 standard for more details on test plan content.</p>

      <h3>Tester's Contribution to Iteration and Release Planning</h3>
      <p>In iterative SDLCs, two types of planning occur: release planning and iteration planning.</p>

      <p><strong>Release Planning:</strong></p>
      <ul>
        <li>Looks ahead to the product release.</li>
        <li>Defines and refines the product backlog.</li>
        <li>Basis for the test approach and test plan across iterations.</li>
        <li>Involves writing testable user stories and acceptance criteria.</li>
        <li>Participates in project and quality risk analyses.</li>
        <li>Estimates test effort and plans testing for the release.</li>
      </ul>

      <p><strong>Iteration Planning:</strong></p>
      <ul>
        <li>Focuses on the iteration backlog.</li>
        <li>Involves detailed risk analysis of user stories.</li>
        <li>Determines the testability of user stories.</li>
        <li>Breaks down user stories into tasks, particularly testing tasks.</li>
        <li>Estimates test effort and identifies functional and non-functional aspects of the test object.</li>
      </ul>

      <h3>Entry Criteria and Exit Criteria</h3>
      <p><strong>Entry Criteria:</strong></p>
      <ul>
        <li>Define the preconditions for undertaking a given activity. If entry criteria are not met, it is likely that the activity will prove to be more difficult, time-consuming, costly, and riskier.</li>
        <li>Typical entry criteria include: availability of resources (e.g., people, tools, environments, test data, budget, time), availability of testware (e.g., test basis, testable requirements, user stories, test cases), and initial quality level of a test object (e.g., all smoke tests have passed).</li>
      </ul>

      <p><strong>Exit Criteria:</strong></p>
      <ul>
        <li>Define what must be achieved in order to declare an activity completed.</li>
        <li>Typical exit criteria include: measures of thoroughness (e.g., achieved level of coverage, number of unresolved defects, defect density, number of failed test cases), and completion criteria (e.g., planned tests have been executed, static testing has been performed, all defects found are reported, all regression tests are automated).</li>
        <li>Running out of time or budget can also be viewed as valid exit criteria. Even without other exit criteria being satisfied, it can be acceptable to end testing under such circumstances, if the stakeholders have reviewed and accepted the risk to go live without further testing.</li>
      </ul>
      <p>Entry criteria and exit criteria should be defined for each test level, and will differ based on the test objectives.</p>
      <p>In Agile development, exit criteria are often called <strong>Definition of Done</strong>, and entry criteria are known as <strong>Definition of Ready</strong>.</p>

      <h3>Estimation Techniques</h3>
      <p>Test effort estimation predicts the amount of test-related work needed to meet test project objectives. Four estimation techniques are described:</p>

      <p><strong>1. Estimation Based on Ratios:</strong></p>
      <ul>
        <li>Uses standard ratios derived from previous projects within the organization.</li>
        <li>Example: If the development-to-test effort ratio was 3:2 in a previous project and the current development effort is 600 person-days, the test effort can be estimated at 400 person-days.</li>
      </ul>

      <p><strong>2. Extrapolation:</strong></p>
      <ul>
        <li>Uses early measurements from the current project to gather data.</li>
        <li>Suitable for iterative SDLCs.</li>
        <li>Example: Extrapolate test effort for upcoming iterations based on the average effort from the last three iterations.</li>
      </ul>

      <p><strong>3. Wideband Delphi:</strong></p>
      <ul>
        <li>Expert-based iterative technique.</li>
        <li>Experts make experience-based estimations individually, discuss deviations, and iterate until consensus is reached.</li>
        <li>Planning Poker is a variant commonly used in Agile.</li>
      </ul>

      <p><strong>4. Three-Point Estimation:</strong></p>
      <ul>
        <li>Experts provide three estimates: optimistic (a), most likely (m), and pessimistic (b).</li>
        <li>Final estimate (E) is the weighted mean: E = (a + 4*m + b) / 6.</li>
        <li>Allows calculation of measurement error: SD = (b – a) / 6.</li>
      </ul>

      <h3>Test Case Prioritization</h3>
      <p>Test cases are prioritized based on different strategies:</p>

      <p><strong>1. Risk-Based Prioritization:</strong></p>
      <ul>
        <li>Order of test execution is based on the results of risk analysis.</li>
        <li>Test cases covering the most important risks are executed first.</li>
      </ul>

      <p><strong>2. Coverage-Based Prioritization:</strong></p>
      <ul>
        <li>Order of test execution is based on coverage.</li>
        <li>Test cases achieving the highest coverage are executed first.</li>
      </ul>

      <p><strong>3. Requirements-Based Prioritization:</strong></p>
      <ul>
        <li>Order of test execution is based on the priorities of the requirements.</li>
        <li>Stakeholders define requirement priorities, and test cases for the most important requirements are executed first.</li>
      </ul>

      <p><strong>Considerations:</strong></p>
      <ul>
        <li>Dependencies between test cases.</li>
        <li>Availability of resources like test tools, environments, and people.</li>
      </ul>

      <h3>Test Pyramid</h3>
      <p>The test pyramid is a model that illustrates different granularity levels of tests:</p>
      <ul>
        <li><strong>Bottom Layer:</strong> Small, isolated, fast tests (e.g., unit tests).</li>
        <li><strong>Middle Layer:</strong> Integration tests.</li>
        <li><strong>Top Layer:</strong> High-level, end-to-end tests.</li>
      </ul>
      <p>Higher layers represent tests with lower granularity, isolation, and execution speed. The model supports test automation and test effort allocation.</p>

      <h3>Testing Quadrants</h3>
      <p>Defined by Brian Marick, the testing quadrants group test levels with appropriate test types, activities, techniques, and work products in Agile development:</p>

      <p><strong>Quadrant Q1:</strong> Technology-facing, supports the team.</p>
      <ul>
        <li>Component and component integration tests.</li>
        <li>Automated and included in CI.</li>
      </ul>

      <p><strong>Quadrant Q2:</strong> Business-facing, supports the team.</p>
      <ul>
        <li>Functional tests, user story tests, API testing, simulations.</li>
        <li>Manual or automated.</li>
      </ul>

      <p><strong>Quadrant Q3:</strong> Business-facing, critiques the product.</p>
      <ul>
        <li>Exploratory testing, usability testing, user acceptance testing.</li>
        <li>Often manual.</li>
      </ul>

      <p><strong>Quadrant Q4:</strong> Technology-facing, critiques the product.</p>
      <ul>
        <li>Smoke tests, non-functional tests (except usability).</li>
        <li>Often automated.</li>
      </ul>

      <p>This model helps test management ensure appropriate test types and levels are included in the SDLC, providing a clear differentiation and description for stakeholders.</p>
    </div>
  );
};

export default TestPlanning;
