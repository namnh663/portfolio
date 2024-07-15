import React from 'react';
import './Topic.css';

const TechniquesInAgileProjects = () => {
  return (
    <div className="topic-detail">
      <h2>Techniques in Agile Projects</h2>
      <p>Many of the test techniques and testing levels that apply to traditional projects can also be applied to Agile projects. However, for Agile projects, there are some specific considerations and variances in test techniques, terminologies, and documentation that should be considered.</p>

      <h3>Acceptance Criteria, Adequate Coverage, and Other Information for Testing</h3>
      <p>Agile projects outline initial requirements as user stories in a prioritized backlog at the start of the project. Initial requirements are short and usually follow a predefined format. Non-functional requirements, such as usability and performance, are also important and can be specified as unique user stories or connected to other functional user stories. Non-functional requirements may follow a predefined format or standard, such as [ISO25000], or an industry specific standard.</p>
      <p>The user stories serve as an important test basis. Other possible test bases include:</p>
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
      <p>During each iteration, developers create code which implements the functions and features described in the user stories, with the relevant quality characteristics, and this code is verified and validated via acceptance testing. To be testable, acceptance criteria should address the following topics where relevant:</p>
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
      <p>In Agile testing, many tests are created by testers concurrently with the developers' programming activities. Just as the developers are programming based on the user stories and acceptance criteria, so are the testers creating tests based on user stories and their acceptance criteria. Testers can apply traditional black box test design techniques such as equivalence partitioning, boundary value analysis, decision tables, and state transition testing to create these tests. For example, boundary value analysis could be used to select test values when a customer is limited in the number of items they may select for purchase.</p>
      <p>In many situations, non-functional requirements can be documented as user stories. Black box test design techniques (such as boundary value analysis) can also be used to create tests for non-functional quality characteristics. The user story might contain performance or reliability requirements. For example, a given execution cannot exceed a time limit or a number of operations may fail less than a certain number of times.</p>

      <h3>Exploratory Testing and Agile Testing</h3>
      <p>Exploratory testing is important in Agile projects due to the limited time available for test analysis and the limited details of the user stories. In order to achieve the best results, exploratory testing should be combined with other experience-based techniques as part of a reactive testing strategy, blended with other testing strategies such as analytical risk-based testing, analytical requirements-based testing...</p>
      <p>In exploratory testing, test design and test execution occur at the same time, guided by a prepared test charter. A test charter provides the test conditions to cover during a time-boxed testing session. During exploratory testing, the results of the most recent tests guide the next test. The same white box and black box techniques can be used to design the tests as when performing pre-designed testing.</p>
      <p>A test charter may include the following information:</p>
      <ul>
        <li><strong>Actor:</strong> Intended user of the system</li>
        <li><strong>Purpose:</strong> The theme of the charter including what particular objective the actor wants to achieve, i.e., the test conditions</li>
        <li><strong>Setup:</strong> What needs to be in place in order to start the test execution</li>
        <li><strong>Priority:</strong> Relative importance of this charter, based on the priority of the associated user story or the risk level</li>
        <li><strong>Reference:</strong> Specifications (e.g., user story), risks, or other information sources</li>
        <li><strong>Data:</strong> Whatever data is needed to carry out the charter</li>
        <li><strong>Activities:</strong> A list of ideas of what the actor may want to do with the system (e.g., “Log on to the system as a super user”) and what would be interesting to test (both positive and negative tests)</li>
        <li><strong>Notes:</strong> How to evaluate the product to determine correct results (e.g., to capture what happens on the screen and compare to what is written in the user’s manual)</li>
        <li><strong>Variations:</strong> Alternative actions and evaluations to complement the ideas described under activities</li>
      </ul>
      <p>To manage exploratory testing, a method called session-based test management can be used. A session is defined as an uninterrupted period of testing which could last from 60 to 120 minutes. Test sessions include the following:</p>
      <ul>
        <li>Survey session (to learn how it works)</li>
        <li>Analysis session (evaluation of the functionality or characteristics)</li>
      </ul>
      <p>Deep coverage (corner cases, scenarios, interactions)The quality of the tests depends on the testers ability to ask relevant questions about what to test. Examples include the following:</p>
      <ul>
        <li>What is most important to find out about the system?</li>
        <li>In what way may the system fail?</li>
        <li>What happens if...? What should happen when...?</li>
        <li>Are customer needs, requirements, and expectations fulfilled?</li>
        <li>Is the system possible to install (and remove if necessary) in all supported upgrade paths?</li>
      </ul>
      <p>During test execution, the tester uses creativity, intuition, cognition, and skill to find possible problems with the product. The tester also needs to have good knowledge and understanding of the software under test, the business domain, how the software is used, and how to determine when the system fails.</p>
      <p>A set of heuristics can be applied when testing. A heuristic can guide the tester in how to perform the testing and to evaluate the results. Examples include:</p>
      <ul>
        <li>Boundaries</li>
        <li>CRUD (Create, Read, Update, Delete)</li>
        <li>Interruptions (e.g., log off, shut down, or reboot)</li>
      </ul>
    </div>
  );
};

export default TechniquesInAgileProjects;
