import React from 'react';
import './Topic.css';

const TestMonitoringControlCompletion = () => {
  return (
    <div className="topic-detail">
      <h2>Test Monitoring, Test Control, Test Completion</h2>
      <p>In Agile projects, effective test monitoring, control, and completion are crucial for ensuring testing aligns with project goals and quality standards. Each phase involves distinct activities and metrics to guide the testing process.</p>

      <h3>Metrics Used in Testing</h3>
      <p><strong>Test monitoring</strong> gathers information to assess test progress and measure whether test exit criteria are met, such as coverage of product risks, requirements, or acceptance criteria.</p>
      <p><strong>Test control</strong> uses this information to guide corrective actions for effective and efficient testing. Examples include:</p>
      <ul>
        <li>Reprioritizing tests when risks become issues</li>
        <li>Re-evaluating entry or exit criteria due to rework</li>
        <li>Adjusting the test schedule for delays in test environment delivery</li>
        <li>Adding new resources as needed</li>
      </ul>
      <p><strong>Test completion</strong> consolidates data from completed test activities, including testware and other relevant information. This occurs at project milestones, such as the end of a test level, Agile iteration, or when a system is released.</p>
      <p>Common <strong>test metrics</strong> include:</p>
      <ul>
        <li><strong>Project progress metrics:</strong> Task completion, resource usage, test effort</li>
        <li><strong>Test progress metrics:</strong> Test case implementation, test environment preparation, number of test cases run/not run, passed/failed, test execution time</li>
        <li><strong>Product quality metrics:</strong> Availability, response time, mean time to failure</li>
        <li><strong>Defect metrics:</strong> Number and priorities of defects found/fixed, defect density, defect detection percentage</li>
        <li><strong>Risk metrics:</strong> Residual risk level</li>
        <li><strong>Coverage metrics:</strong> Requirements coverage, code coverage</li>
        <li><strong>Cost metrics:</strong> Cost of testing, organizational cost of quality</li>
      </ul>

      <h3>Purpose, Content, and Audience for Test Reports</h3>
      <p><strong>Test reporting</strong> summarizes and communicates test information during and after testing. Reports support ongoing test control and provide data for future testing.</p>
      <p><strong>Test progress reports</strong> keep stakeholders informed, typically generated regularly (e.g., daily, weekly). They include:</p>
      <ul>
        <li>Test period</li>
        <li>Test progress (e.g., ahead or behind schedule), including notable deviations</li>
        <li>Impediments and workarounds</li>
        <li>Test metrics (as listed above)</li>
        <li>New and changed risks</li>
        <li>Planned testing for the next period</li>
      </ul>
      <p><strong>Test completion reports</strong> are prepared when a project, test level, or test type is complete, ideally meeting exit criteria. They include:</p>
      <ul>
        <li>Test summary</li>
        <li>Evaluation of testing and product quality based on the original test plan</li>
        <li>Deviations from the test plan</li>
        <li>Testing impediments and workarounds</li>
        <li>Test metrics</li>
        <li>Unmitigated risks, defects not fixed</li>
        <li>Lessons learned</li>
      </ul>
      <p>Different audiences require tailored information. Internal team reports are often informal and frequent, while reports for completed projects follow a set template and occur once. The ISO/IEC/IEEE 29119-3 standard provides templates for test status and completion reports.</p>

      <h3>Communicating the Status of Testing</h3>
      <p>Communication methods for test status vary based on management concerns, organizational strategies, regulatory standards, and team preferences. Options include:</p>
      <ul>
        <li>Verbal communication with team members and stakeholders</li>
        <li>Dashboards (e.g., CI/CD dashboards, task boards, burn-down charts)</li>
        <li>Electronic channels (e.g., email, chat)</li>
        <li>Online documentation</li>
        <li>Formal test reports</li>
      </ul>
      <p>Multiple methods may be used. Formal communication is more suitable for distributed teams due to geographical and time differences. Communication should be tailored to different stakeholders' interests.</p>
    </div>
  );
};

export default TestMonitoringControlCompletion;
