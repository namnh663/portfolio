import React from 'react';
import './Topic.css';

const QaRole = () => {
    return (
        <div className="topic-detail">
            <h2>Make Testing Process Transparent</h2>
            <p>
                Transparency and visibility are core concepts in Agile. With your whole team working
                together towards both development and testing in timeboxed sprints, with rapidly
                evolving requirements ensuring everyone has easy access to up-to-date results and
                information is critical.
            </p>
            <p>
                The easiest way to accomplish this is by centralizing your QA processes with a test
                management platform.
            </p>

            <h3>Why use a test management platform for agile testing?</h3>
            <ul>
                <li>Provides a single source of truth that is accessible to your entire team.</li>
                <li>Integrates with project management tools such as Jira.</li>
                <li>Integrates with automation platforms to collect both manual and automated test results in one place.</li>
                <li>Makes it easy to view test results, generate reports, and track coverage and traceability.</li>
            </ul>
            <p className="important">
                However, not all test management platforms are created equal ensure you consider your options and choose one
                that integrates with the tools your team is already using, works for your budget, and provides the features that are a priority to your workflow.
            </p>

            <h3>How do you define “done?”</h3>
            <p>
                It's not enough to have all of your testing data visible to the entire team-your team
                must also have a common understanding of the definitions of "ready" and "done" to
                ensure that each sprint's goals are completed.
            </p>
            <ul>
                <li>For example, if one team member thinks a task is “done” when development is done, but you expect “done” to also encompass testing and documentation, you can easily see where a sprint might fall behind.</li>
                <li>Likewise, it is critical to define the criteria needed before a user story is ready for development-otherwise your team may waste valuable sprint time in developing and testing poorly-defined features.</li>
            </ul>
            <p>As part of testing's quality, QA should define a certain percentage of test coverage that needs to be achieved before a sprint is considered "done."</p>
            <ul>
                <li>QA can accomplish this by advocating for the development of unit tests, which have a code coverage percentage associated.</li>
                <li>QA can also refer to static code analysis, which should have a positive score.</li>
            </ul>
        </div>
    );
};

export default QaRole;
