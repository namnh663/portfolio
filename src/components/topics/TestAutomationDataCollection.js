import React from 'react';
import './Topic.css';

const TestAutomationDataCollection = () => {
  return (
    <div className="topic-detail">
      <h2>Collection, Analysis, and Reporting of Test Automation Data</h2>
      <h3>Apply Data Collection Methods from the Test Automation Solution and the System Under Test</h3>
      <p>
        Data collection is a critical aspect of test automation, gathered from various sources including:
      </p>
      <ul>
        <li><b>SUT Logs</b>: Data from web/mobile UIs, APIs, applications, web servers, and database servers.</li>
        <li><b>TAF Logs</b>: Provide an audit trail.</li>
        <li><b>Build and Deployment Logs</b>: Track the build and deployment processes.</li>
        <li><b>Production Logs</b>: Monitor data in production, including performance monitoring for trend analysis and efficiency test logs.</li>
        <li><b>Screenshots and Screen Recordings</b>: Captured either natively by the automation tool or via third-party tools.</li>
      </ul>
      <p>
        Enhancements to the test automation framework (TAF) can record additional information such as test start and end times, applicable to all higher-level automated scripts.
      </p>
      <p>Features Supporting Measurement and Reporting:</p>
      <ul>
        <li><b>Scripting Languages</b>: Many test tools offer facilities to record and log information before, during, and after test execution.</li>
        <li><b>Test Reporting</b>: Needs analysis features to compare results of previous test runs, highlighting trends and changes in success rates.</li>
        <li><b>Assertions</b>: Used by test tools to compare actual and expected results, with appropriate reporting levels for test statuses and failures.</li>
      </ul>
      <p>Test Logging:</p>
      <ul>
        <li><b>TAS Logging</b>: Includes detailed information about test execution, such as test case IDs, execution status (passed, failed, TAS failure), timing details, dynamic SUT information, counters for repeated test cycles, random elements, and actions for reproducibility.</li>
        <li><b>SUT Logging</b>: Correlates test automation results with SUT logs to identify root causes of defects. Logs should include necessary information for defect analysis, configuration information at startup, searchable logs, and synchronized timestamps.</li>
      </ul>
      <p>Integration with Third-Party Tools:</p>
      <p>Information from automated test cases can be used in other tools for tracking and reporting, often achieved through export formats or customized reporting.</p>
      <p>Visualization of Test Results:</p>
      <p>Test results can be visualized using charts and colored icons (e.g., traffic lights) to indicate overall status, aiding in decision-making.</p>
      <h3>Analyze Data from the Test Automation Solution and the System Under Test to Better Understand Test Results</h3>
      <p>
        Post-test execution analysis is crucial for identifying failures in both the SUT and TAS:
      </p>
      <ul>
        <li><b>Test Environment Data</b>: Supports proper sizing of test automation, considering clusters, resources, and cross-browser execution.</li>
        <li><b>Comparison of Test Results</b>: Previous executions provide context for understanding failures.</li>
        <li><b>Web Logs</b>: Monitor software usage.</li>
      </ul>
      <p><b>Steps to Analyze Test Execution Failures:</b></p>
      <ol>
        <li>Check for recurring failures from previous executions.</li>
        <li>Identify the specific test case and its purpose.</li>
        <li>Determine the test step where the failure occurred.</li>
        <li>Analyze the SUT's state using logs, screenshots, and other relevant data.</li>
        <li>Log defects in the defect management system with necessary information and supporting logs.</li>
      </ol>
      <p><b>Correlation IDs</b>: Help trace and analyze system behavior and test results by linking user interactions.</p>
      <h3>How a Test Progress Report is Constructed and Published</h3>
      <p>Content of a Test Progress Report:</p>
      <ul>
        <li>Test results</li>
        <li>SUT information</li>
        <li>Documentation of the test environment</li>
        <li>History of test executions</li>
        <li>Responsible individuals for each test case</li>
        <li>Analysis of failures, including defect logging and follow-up actions</li>
      </ul>
      <p>Publishing Test Reports:</p>
      <p>
        Reports should be shared with relevant stakeholders, such as management, operational, and technical roles. Methods of publication include websites, emails, cloud uploads, and integration with test management tools.
      </p>
      <p>Dashboards:</p>
      <p>Modern reporting tools offer dashboards with charts, log collections, and automated analysis, helping stakeholders make informed decisions based on trends and data aggregation.</p>
      <p>AI/ML in Test Logs:</p>
      <p>
        Some test automation tools use AI/ML for automated log analysis, reducing the time spent identifying issues and grouping common defects.
      </p>
      <p>
        By implementing these data collection, analysis, and reporting strategies, test automation can be more effective, providing valuable insights and ensuring the quality of the system under test.
      </p>
    </div>
  );
};

export default TestAutomationDataCollection;
