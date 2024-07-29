import React from 'react';
import './Topic.css';

const IntegrationToCICDPipelines = () => {
  return (
    <div className="topic-detail">
      <h2>Integration to CI/CD Pipelines</h2>
      <h3>Apply Test Automation at Different Test Levels within Pipelines</h3>
      <p>
        Test automation's primary benefit is the ability to run tests unattended, making it ideal for integration into CI/CD pipelines. The integration of various test levels within these pipelines can be summarized as follows:
      </p>
      <ul>
        <li><strong>Configuration Tests for TAF/TAS</strong>: These tests run during the build of a test automation project, ensuring that file paths used in test scripts are correct and that files exist at the specified locations. They are a subset of component tests.</li>
        <li><strong>Component Tests</strong>: Executed during the build step, these tests assess individual components like library classes and web components. They serve as quality gates in continuous integration pipelines.</li>
        <li><strong>Component Integration Tests</strong>: These tests may be included in continuous integration pipelines when they involve low-level components or the system under test (SUT), running alongside component tests.</li>
        <li><strong>System Tests</strong>: Integrated into continuous deployment pipelines, these tests act as the final quality gate for the delivered SUT.</li>
        <li><strong>System Integration Tests</strong>: Part of continuous delivery pipelines, these tests ensure that independently developed system components function together.</li>
      </ul>
      <p>
        CI/CD systems typically distinguish between build and deployment phases. Component and component integration tests occur in the build phase, followed by deployment if successful. For system integration, system testing, and acceptance testing, two main integration approaches exist:
      </p>
      <ol>
        <li><strong>Deployment Phase Execution</strong>: Test cases run after component deployment. This allows deployment rollback based on test results but requires redeployment for test reruns.</li>
        <li><strong>Separate Pipeline Execution</strong>: Test cases run in a separate pipeline triggered by successful deployment. This approach allows different test suites and automation code to run but does not serve as a quality gate, necessitating manual rollback actions for unsuccessful deployments.</li>
      </ol>
      <p>
        Other test automation purposes for pipelines include running different test suites periodically (e.g., nightly regression tests) and non-functional tests to monitor system performance characteristics.
      </p>
      <h3>Configuration Management for Testware</h3>
      <p>
        Configuration management is vital in test automation due to the execution on multiple test environments and SUT versions. It encompasses:
      </p>
      <ul>
        <li><strong>Test Environment Configuration</strong>: Each test environment may have different configurations, such as URLs or credentials. These are stored with the testware or in a shared repository for multiple projects.</li>
        <li><strong>Test Data</strong>: Specific to the test environment or SUT release/feature set, stored with TAFs, or managed via test data management systems.</li>
        <li><strong>Test Suites/Test Cases</strong>: Different test suites are set up based on their purpose, executed in separate test levels using various pipelines and environments. Feature toggles or configuration management systems ensure testware matches the SUT version for each release.</li>
      </ul>
      <h3>Test Automation Dependencies for an API Infrastructure</h3>
      <p>
        API test automation requires understanding dependencies to develop a proper strategy:
      </p>
      <ul>
        <li><strong>API Connections</strong>: Grasping the business logic for automated testing and the relationship between APIs.</li>
        <li><strong>API Documentation</strong>: Serving as a baseline with details like parameters, headers, and request-response types.</li>
      </ul>
      <p>
        Integrated automated API testing, ideally performed with a shift-left approach, involves component integration and system integration testing, extended by contract testing.
      </p>
      <h3>Contract Testing</h3>
      <p>
        This type of integration testing verifies service communication and data consistency between systems. It stores interaction details in a contract to ensure both parties adhere to the agreed rules, detecting defects early and facilitating their identification. In consumer-driven contract testing, the consumer sets expectations for the provider's responses. In provider-driven testing, the provider defines the contract showing its service operations.
      </p>
    </div>
  );
};

export default IntegrationToCICDPipelines;
