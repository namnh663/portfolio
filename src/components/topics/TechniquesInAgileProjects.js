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
        <li><strong>Unit Testing:</strong></li>
        <ul>
          <li>100% decision coverage where possible, with careful reviews of any infeasible paths</li>
          <li>Static analysis performed on all code</li>
          <li>No unresolved major defects</li>
          <li>No known unacceptable technical debt remaining in the design and the code</li>
          <li>All code, unit tests, and unit test results reviewed</li>
          <li>All unit tests automated</li>
          <li>Important characteristics are within agreed limits (e.g., performance)</li>
        </ul>

        <li><strong>Integration Testing:</strong></li>
        <ul>
          <li>All functional requirements tested, including both positive and negative tests, with the number of tests based on size, complexity, and risks</li>
          <li>All interfaces between units tested</li>
          <li>All quality risks covered according to the agreed extent of testing</li>
          <li>No unresolved major defects (prioritized according to risk and importance)</li>
          <li>All defects found are reported</li>
          <li>All regression tests automated, where possible, with all automated tests stored in a common repository</li>
        </ul>

        <li><strong>System Testing:</strong></li>
        <ul>
          <li>End-to-end tests of user stories, features, and functions</li>
          <li>All user personas covered</li>
          <li>The most important quality characteristics of the system covered (e.g., performance, robustness, reliability)</li>
          <li>Testing done in a production-like environment(s), including all hardware and software for all supported configurations, to the extent possible</li>
          <li>All quality risks covered according to the agreed extent of testing</li>
          <li>All regression tests automated, where possible, with all automated tests stored in a common repository</li>
          <li>All defects found are reported and possibly fixed</li>
          <li>No unresolved major defects (prioritized according to risk and importance)</li>
        </ul>
        <li><strong>User Story:</strong> The definition of done for user stories may be determined by the following criteria:</li>
        <ul>
          <li>The user stories selected for the iteration are complete, understood by the team, and have detailed, testable acceptance criteria</li>
          <li>All the elements of the user story are specified and reviewed, including the user story acceptance tests, have been completed</li>
          <li>Tasks necessary to implement and test the selected user stories have been identified and estimated by the team</li>
        </ul>
        <li><strong>Feature:</strong> The definition of done for features, which may span multiple user stories or epics, may include:</li>
        <ul>
          <li>All constituent user stories, with acceptance criteria, are defined and approved by the customer</li>
          <li>The design is complete, with no known technical debt</li>
          <li>The code is complete, with no known technical debt or unfinished refactoring</li>
          <li>Unit tests have been performed and have achieved the defined level of coverage</li>
          <li>Integration tests and system tests for the feature have been performed according to the defined coverage criteria</li>
          <li>No major defects remain to be corrected</li>
          <li>Feature documentation is complete, which may include release notes, user manuals, and on-line help functions</li>
        </ul>

        <li><strong>Iteration:</strong> The definition of done for the iteration may include the following:</li>
        <ul>
          <li>All features for the iteration are ready and individually tested according to the feature level criteria</li>
          <li>Any non-critical defects that cannot be fixed within the constraints of the iteration added to the product backlog and prioritized</li>
          <li>Integration of all features for the iteration completed and tested</li>
          <li>Documentation written, reviewed, and approved</li>
        </ul>

        <li><strong>Release:</strong></li>
        <ul>
          <li>All relevant test basis elements for all contents of the release have been covered by testing. The adequacy of the coverage is determined by what is new or changed, its complexity and size, and the associated risks of failure</li>
          <li>The defect intensity (e.g., how many defects are found per day or per transaction), the defect density (e.g., the number of defects found compared to the number of user stories, effort, and/or quality attributes), estimated number of remaining defects are within acceptable limits, the consequences of unresolved and remaining defects (e.g., the severity and priority) are understood and acceptable, the residual level of risk associated with each identified quality risk is understood and acceptable</li>
          <li>If the pre-determined delivery date has been reached, the business considerations associated with releasing and not releasing need to be considered</li>
          <li>The estimated lifecycle cost should be used to calculate the return on investment for the delivered system (i.e., the calculated development and maintenance cost should be considerably lower than the expected total sales of the product). The main part of the lifecycle cost often comes from maintenance after the product has been released, due to the number of defects escaping to production</li>
        </ul>
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
