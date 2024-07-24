import React from 'react';
import './Topic.css';

const PerformanceTestingPrinciples = () => {
  return (
    <div className="topic-detail">
      <h2>Principles of Performance Testing</h2>
      <p>
        Performance efficiency is vital for ensuring a good user experience across various fixed and mobile platforms. Performance testing is essential for determining acceptable quality levels for end users and integrates closely with usability and performance engineering. It also helps identify load-specific issues that affect functional suitability and usability.
      </p>
      <h3>Scope</h3>
      <p>
        Performance testing applies beyond web-based domains, covering diverse application domains and system architectures like client-server, distributed, and embedded systems.
      </p>
      <h3>ISO 25010 Categorization</h3>
      <p>
        Performance efficiency is categorized as a non-functional quality characteristic in the ISO 25010 Product Quality Model. It has three sub-characteristics:
      </p>
      <ol>
        <li><strong>Time Behavior</strong>: Evaluates the system's response time to user or system inputs.</li>
        <li><strong>Resource Utilization</strong>: Assesses the utilization of system resources, such as RAM allocation.</li>
        <li><strong>Capacity</strong>: Examines system behavior under required capacity limits, like the number of users or data volumes.</li>
      </ol>
      <h3>Experimentation and Iteration</h3>
      <p>
        Performance testing involves experimentation to measure and analyze system parameters. This process supports system analysis, design, and implementation, helping make architectural decisions and shaping stakeholder expectations.
      </p>
      <h3>Key Principles</h3>
      <ol>
        <li><strong>Stakeholder Alignment</strong>: Tests must align with the expectations of users, system designers, and operations staff.</li>
        <li><strong>Reproducibility</strong>: Tests should produce statistically identical results when repeated on an unchanged system.</li>
        <li><strong>Understandable Results</strong>: Test results must be understandable and comparable to stakeholder expectations.</li>
        <li><strong>Representative Testing</strong>: Tests should be conducted on systems or environments representative of the production system.</li>
        <li><strong>Practical Execution</strong>: Tests must be affordable and executable within the project's timeframe.</li>
      </ol>
      <h3>Recommended Resources</h3>
      <p>
        Books by Molyneaux and Microsoft provide a solid background on the principles and practical aspects of performance testing.
      </p>
      <h3>Impact on System Scalability</h3>
      <p>
        All three sub-characteristics—time behavior, resource utilization, and capacity—impact the system's ability to scale effectively.
      </p>
    </div>
  );
};

export default PerformanceTestingPrinciples;
