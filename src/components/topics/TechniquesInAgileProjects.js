import React from 'react';
import './Topic.css';

const TechniquesInAgileProjects = () => {
  return (
    <div className="topic-detail">
      <h2>Techniques in Agile Projects</h2>
      
      <h3>Acceptance Criteria, Adequate Coverage, and Other Information for Testing</h3>
      <p>
        Agile projects start with a prioritized backlog of user stories outlining initial requirements, including both functional and non-functional aspects. The user stories serve as the test basis, supplemented by:
      </p>
      <ul>
        <li>Experience from previous projects</li>
        <li>Existing functions, features, and system quality characteristics</li>
        <li>Code, architecture, and design</li>
        <li>User profiles</li>
        <li>Defect information from past projects</li>
        <li>Defect taxonomy categorization</li>
        <li>Applicable standards</li>
        <li>Quality risks</li>
      </ul>
      <p>Acceptance criteria should cover:</p>
      <ul>
        <li><strong>Functional behavior:</strong> Observable behavior with user actions as inputs.</li>
        <li><strong>Quality characteristics:</strong> Performance, reliability, usability, etc.</li>
        <li><strong>Scenarios:</strong> Use cases describing sequences of actions.</li>
        <li><strong>Business rules:</strong> Conditions under which activities can be performed.</li>
        <li><strong>External interfaces:</strong> Connections between the system and the outside world.</li>
        <li><strong>Constraints:</strong> Design and implementation restrictions.</li>
        <li><strong>Data definitions:</strong> Format, data type, and allowed values for data items.</li>
      </ul>
      <p>Other relevant information includes system operation, interface access, tool support, and tester skills. Collaboration is essential to obtain additional information throughout iterations, determining the "definition of done" for various test levels:</p>
      <ul>
        <li><strong>Unit Testing:</strong> 100% decision coverage, Static analysis on all code, No unresolved major defects, Automated unit tests</li>
        <li><strong>Integration Testing:</strong> All functional requirements tested, All interfaces tested, Automated regression tests</li>
        <li><strong>System Testing:</strong> End-to-end tests of user stories and features, Testing in production-like environments, Automated regression tests</li>
        <li><strong>User Story:</strong> Complete and understood user stories with testable acceptance criteria, Specified and reviewed user story elements</li>
        <li><strong>Feature:</strong> Defined and approved constituent user stories, Complete design and code without technical debt, Unit and integration tests performed</li>
        <li><strong>Iteration:</strong> Ready and tested features, Integration of all features completed</li>
        <li><strong>Release:</strong> Coverage of all relevant test basis elements, Acceptable defect intensity, density, and remaining defects, Acceptable risk levels and business considerations</li>
      </ul>

      <h3>Applying Acceptance Test-Driven Development</h3>
      <p>Acceptance test-driven development is a test-first approach. Test cases are created prior to implementing the user story. The test cases are created by the Agile team, including the developer, the tester, and the business representatives and may be manual or automated. The first step is a specification workshop where the user story is analyzed, discussed, and written by developers, testers, and business representatives. Any incompleteness, ambiguities, or errors in the user story are fixed during this process.</p>
      <p>The next step is to create the tests. This can be done by the team together or by the tester individually. In any case, an independent person such as a business representative validates the tests. The tests are examples that describe the specific characteristics of the user story. These examples will help the team implement the user story correctly. Since examples and tests are the same, these terms are often used interchangeably. The work starts with basic examples and open questions.</p>
      <p>Typically, the first tests are the positive tests, confirming the correct behavior without exception or error conditions, comprising the sequence of activities executed if everything goes as expected. After the positive path tests are done, the team should write negative path tests and cover non-functional attributes as well (e.g., performance, usability). Tests are expressed in a way that every stakeholder is able to understand, containing sentences in natural language involving the necessary preconditions, if any, the inputs, and the related outputs.</p>
      <p>The examples must cover all the characteristics of the user story and should not add to the story. This means that an example should not exist which describes an aspect of the user story not documented in the story itself. In addition, no two examples should describe the same characteristics of the user story.</p>

      <h3>Functional and Non-Functional Black Box Test Design</h3>
      <p>
        In Agile testing, black box test design techniques like equivalence partitioning, boundary value analysis, decision tables, and state transition testing are used to create tests based on user stories and acceptance criteria. Non-functional requirements can also be documented as user stories and tested using black box techniques.
      </p>

      <h3>Exploratory Testing and Agile Testing</h3>
      <p>
        Exploratory testing is crucial in Agile projects due to limited test analysis time and user story details. It combines test design and execution guided by a prepared test charter. Session-based test management organizes exploratory testing into uninterrupted periods, including survey and analysis sessions. Testers use heuristics to guide testing and document the process thoroughly to capture test coverage, observations, risks, and anomalies.
      </p>
      <p>
        Exploratory testing results are logged and summarized into status management tools for stakeholder visibility.
      </p>
    </div>
  );
};

export default TechniquesInAgileProjects;
