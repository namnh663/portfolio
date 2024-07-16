import React from 'react';
import './Topic.css';

const ConfigurationForTestAutomation = () => {
    return (
        <div className="topic-detail">
            <h2>Configuration of an Infrastructure to Enable Test Automation</h2>

            <h3>Configuration Needs for Implementing Test Automation</h3>
            <p>The testability of the system under test (SUT) should be designed and implemented alongside other features of the SUT. This work is typically performed by a software architect with input from a Test Automation Engineer (TAE) to identify specific areas for improvement. Testability is a non-functional requirement that includes the following solutions and configuration needs:</p>
            <ul>
                <li><b>Accessibility Identifiers:</b> These can be generated automatically by development frameworks or set manually by developers.</li>
                <li><b>System Environment Variables:</b> Certain application parameters can be changed to facilitate easier testing through administration.</li>
                <li><b>Deployment Variables:</b> Similar to system variables but can be configured before starting the deployment.</li>
            </ul>
            <p>Key aspects of designing for SUT testability include:</p>
            <ul>
                <li><b>Observability:</b> The SUT should provide interfaces that offer insights, allowing test cases to determine if actual results match expected outcomes.</li>
                <li><b>Controllability:</b> The SUT should provide interfaces for performing actions, such as UI elements, function calls, communication elements (e.g., TCP/IP, USB protocols), or electronic signals for environment variables.</li>
                <li><b>Architecture Transparency:</b> Documentation should clearly outline components and interfaces that support observability and controllability at all test levels, promoting quality.</li>
            </ul>

            <h3>Leveraging Test Automation in Different Environments</h3>
            <p>Automated tests can be executed in various environments, which differ by project and methodology. Typical environments include:</p>
            <ul>
                <li><b>Local Development Environment:</b> This is where software is initially created and tested to verify functional suitability. Tests in this environment can include component testing, GUI testing, and API testing. Using an integrated development environment (IDE) on the local machine allows for white-box testing to identify coding issues early.</li>
                <li><b>Build Environment:</b> This environment is used to build the software and execute tests that verify the build's correctness in a DevOps ecosystem. It can be a local development environment or a CI/CD agent where low-level tests (e.g., component tests, component integration tests) and static analysis are performed without actual deployment.</li>
                <li><b>Integration Environment:</b> After low-level testing and static analysis, the system integration environment is used to test a fully integrated release candidate of the SUT with other systems. This environment supports fully automated test suites, either UI or API tests, and focuses on black-box testing (e.g., system integration and/or acceptance testing). Monitoring is essential here to investigate defects/failures efficiently.</li>
                <li><b>Preproduction Environment:</b> This environment assesses non-functional quality characteristics, such as performance efficiency, and resembles the production environment closely. User acceptance testing can be performed by business stakeholders, and the existing automated test suite can be executed if necessary. Monitoring is also crucial in this environment.</li>
                <li><b>Production/Operational Environment:</b> The production environment assesses functional and non-functional quality characteristics in real time as users interact with the deployed system. Monitoring and best practices like canary release, blue/green deployment, and A/B testing enable testing in production.</li>
            </ul>
            <p>Each environment offers unique advantages and serves specific testing needs to ensure the overall quality and reliability of the software throughout its lifecycle.</p>
        </div>
    );
}

export default ConfigurationForTestAutomation;
