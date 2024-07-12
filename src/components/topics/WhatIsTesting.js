import React from 'react';
import './Topic.css';

const WhatIsTesting = () => {
    return (
        <div className="topic-detail">
            <h2>What is Testing?</h2>
            <p>
                <strong>Software testing</strong> is crucial to ensure software quality and reduce the risk of failures.
                It involves activities to find defects and assess the quality of software components (test objects).
                Testing is not just about running the software and checking results, but also planning, managing, and analyzing the process.
            </p>
            <p>
                There are two main types of testing:
            </p>
            <ul>
                <li><strong>Dynamic testing</strong> involves executing the software to identify issues.</li>
                <li><strong>Static testing</strong> analyzes the software code without running it (e.g., reviews, static analysis).</li>
            </ul>
            <p>
                Testing is a combination of technical skills and critical thinking to ensure software meets user needs.
            </p>

            <h3>Test Objectives</h3>
            <ul>
                <li><strong>Evaluate various stages of software development:</strong> This includes requirements, user stories, designs, and the code itself.</li>
                <li><strong>Find and expose defects:</strong> Testing aims to uncover problems and bugs in the software.</li>
                <li><strong>Ensure thorough coverage:</strong> Tests should be designed to cover different aspects of the software.</li>
                <li><strong>Reduce software quality risks:</strong> By finding defects early, testing helps prevent major issues later.</li>
                <li><strong>Verify requirements:</strong> Testing confirms that the software meets the specified functional needs.</li>
                <li><strong>Compliance checks:</strong> Testing ensures adherence to legal, contractual, and regulatory requirements.</li>
                <li><strong>Inform decision-making:</strong> Test results provide data for stakeholders to make informed decisions.</li>
                <li><strong>Build confidence in quality:</strong> Successful testing builds trust in the software's overall quality.</li>
                <li><strong>Validate user expectations:</strong> Testing confirms that the software works as stakeholders intended.</li>
            </ul>

            <h3>Testing vs. Debugging</h3>
            <p>
                These are distinct activities:
            </p>
            <ul>
                <li><strong>Testing:</strong> Identifies failures caused by defects (dynamic testing) or directly finds issues (static testing).</li>
                <li><strong>Debugging:</strong> Focuses on understanding and fixing the root cause of the failures discovered during testing.</li>
            </ul>

            <h3>Debugging Process</h3>
            <ul>
                <li><strong>Reproducing the failure:</strong> Re-creating the issue to consistently analyze it.</li>
                <li><strong>Diagnosing the cause:</strong> Identifying the exact reason behind the failure.</li>
                <li><strong>Fixing the cause:</strong> Correcting the code or design flaw that caused the problem.</li>
                <li><strong>Confirmation testing:</strong> Verifying that the fix resolves the original issue, ideally by the same tester.</li>
                <li><strong>Regression testing (optional):</strong> Checking if the fix introduced unintended problems elsewhere.</li>
            </ul>

            <h3>Static Testing vs. Debugging</h3>
            <p>
                When static testing identifies a defect, there's no need for reproduction or diagnosis as it directly finds the issue without causing a failure.
            </p>
        </div>
    );
};

export default WhatIsTesting;
