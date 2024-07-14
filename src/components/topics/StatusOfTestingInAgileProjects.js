import React from 'react';
import './Topic.css';

const StatusOfTestingInAgileProjects = () => {
    return (
        <div className="topic-detail">
            <h2>Status of Testing in Agile Projects</h2>
            <p>In Agile projects, change happens rapidly, affecting test status, progress, and product quality. Testers need to continuously communicate this evolving information to help the team stay on track for successful iteration completion. They also need to update manual and automated tests to manage regression risk from changes made in previous iterations.</p>

            <h3>Communicating Test Status, Progress, and Product Quality</h3>
            <p>Agile teams focus on delivering working software at the end of each iteration. To achieve this, they monitor the progress of work items through various methods, such as:</p>
            <ul>
                <li>Test automation results</li>
                <li>Test tasks and stories on the Agile task board</li>
                <li>Burndown charts</li>
            </ul>
            <p>Test status and progress are communicated using tools like wiki dashboards, dashboard-style emails, and verbally during stand-up meetings. Automated tools often generate status reports based on test results and task progress, updating dashboards and emails. This automation allows testers to focus more on designing and executing test cases.</p>

            <p><strong>Burndown charts</strong> are used to track progress against the time allocated for a release or iteration, showing the amount of work left to be done.</p>

            <p><strong>Agile task boards</strong> visually represent the team's status, including testing tasks, which move across columns like to do, work in progress, verify, and done. Testing tasks relate to acceptance criteria for user stories and are updated as test scripts, manual tests, and exploratory tests pass.</p>

            <p>During <strong>daily stand-up meetings</strong>, team members, including testers, discuss:</p>
            <ul>
                <li>Completed tasks since the last meeting</li>
                <li>Tasks planned for the next meeting</li>
                <li>Any blockers to progress</li>
            </ul>

            <h3>Managing Regression Risk with Evolving Manual and Automated Test Cases</h3>
            <p>As each iteration in an Agile project is completed, the product grows, increasing the scope of testing. Testers must verify that new code changes do not introduce regressions in previously developed features, despite extensive code churn. To maintain velocity and minimize technical debt, teams should invest in test automation early and keep all test assets up-to-date.</p>

            <p><strong>Configuration management tools</strong> are recommended for maintaining version control and ease of access to test assets, supporting changes while preserving historical information.</p>

            <p>Since complete repetition of all tests is often impractical, testers need to:</p>
            <ul>
                <li>Review and update manual and automated test cases</li>
                <li>Select relevant test cases for the regression test suite</li>
                <li>Retire obsolete test cases</li>
                <li>Automate suitable test cases</li>
            </ul>
            <p><strong>Automated unit tests</strong> are run before source code is checked into the mainline of the configuration management system to ensure the code changes do not break the software build. To reduce build breaks, which can slow down the progress of the whole team, code should not be checked in unless all automated unit tests pass. Automated unit test results provide immediate feedback on code and build quality, but not on product quality.</p>
            <p><strong>Automated acceptance tests</strong> are run regularly as part of the continuous integration full system build. These tests are run against a complete system build at least daily, but are generally not run with each code check-in as they take longer to run than automated unit tests and could slow down code check-ins. The test results from automated acceptance tests provide feedback on product quality with respect to regression since the last build, but they do not provide status of overall product quality.</p>
            <p>Automated tests can be run continuously against the system. An initial subset of automated tests to cover critical system functionality and integration points should be created immediately after a new build is deployed into the test environment. These tests are commonly known as build verification tests. Results from the <strong>build verification tests</strong> will provide instant feedback on the software after deployment, so teams don't waste time testing an unstable build.</p>
            <p>Automated tests contained in the regression test set are generally run as part of the daily main build in
                the continuous integration environment, and again when a new build is deployed into the test
                environment. As soon as an automated regression test fails, the team stops and investigates the
                reasons for the failing test. The test may have failed due to legitimate functional changes in the
                current iteration, in which case the test and/or user story may need to be updated to reflect the new
                acceptance criteria. Alternatively, the test may need to be retired if another test has been built to
                cover the changes. However, if the test failed due to a defect, it is a good practice for the team to fix
                the defect prior to progressing with new features.</p>

            <p>In addition to test automation, tasks like test data generation, loading test data, deploying builds, restoring test environments, and comparing data outputs can also be automated, reducing overhead and allowing the team to focus on new features.</p>
        </div>
    );
};

export default StatusOfTestingInAgileProjects;
