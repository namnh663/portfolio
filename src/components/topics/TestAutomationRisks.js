import React from 'react';
import './Topic.css';

const TestAutomationRisks = () => {
  return (
    <div className="topic-detail">
      <h2>Risks Associated with Test Automation Development</h2>
      <h3>Analyze Deployment Risks and Plan Mitigation Strategies for Test Automation</h3>
      <p>
        The interfacing of the Test Automation Framework (TAF) with the System Under Test (SUT) is a critical consideration in the architectural design phase. This includes selecting appropriate tools for packaging, test logging, and the test harness.
      </p>
      <p>
        During the pilot implementation, the expansion and maintenance of test automation code are vital factors. These aspects can significantly impact the pilot evaluation and the final decision on the project's direction.
      </p>
      <p><b>Deployment Risks Identified from the Pilot:</b></p>
      <ul>
        <li><b>Firewall Openings</b>: Ensure proper configuration to allow necessary communications.</li>
        <li><b>Resource Utilization</b>: Monitor CPU and RAM usage to avoid performance issues.</li>
      </ul>
      <p>
        Preparation for deployment risks, such as firewall issues, resource utilization, and network reliability, is essential. These factors, although not directly related to test automation, are crucial for ensuring reliable and beneficial quality gates in the development process.
      </p>
      <p>Example: Mobile Test Automation Using Real Devices</p>
      <ul>
        <li>Ensure devices are powered on and have sufficient battery.</li>
        <li>Maintain network connectivity and access to the SUT.</li>
      </ul>
      <p><b>Technical Deployment Risks:</b></p>
      <ul>
        <li><b>Packaging</b>: Version control of test automation is as important as for the SUT. Testware should be uploaded to a repository for sharing within the organization, either on-premises or in the cloud.</li>
        <li><b>Logging</b>: Test logging provides critical information about test results. Various logging levels serve different purposes:
          <ul>
            <li><b>Fatal</b>: Logs error events that may abort test execution.</li>
            <li><b>Error</b>: Logs conditions or interactions that fail the test case.</li>
            <li><b>Warn</b>: Logs unexpected conditions/actions that do not break the test case flow.</li>
            <li><b>Info</b>: Logs basic information about test cases and execution.</li>
            <li><b>Debug</b>: Logs detailed execution specifics useful during test failure investigation.</li>
            <li><b>Trace</b>: Similar to Debug but with more detailed information.</li>
          </ul>
        </li>
        <li><b>Test Structuring</b>: The test harness and fixtures are essential for test execution. Test fixtures control the test environment and data, allowing for defining preconditions and postconditions. Test cases can be grouped into suites, creating repeatable and atomic automated tests.</li>
        <li><b>Updating</b>: Automatic updates on test harnesses (e.g., agents) and version changes on devices are common risks. These can be mitigated with proper power supplies, network connections, and device configuration plans.</li>
      </ul>
      <p>
        Evaluating these aspects during the pilot project helps ensure a robust and reliable test automation process, addressing potential risks effectively.
      </p>
    </div>
  );
};

export default TestAutomationRisks;
