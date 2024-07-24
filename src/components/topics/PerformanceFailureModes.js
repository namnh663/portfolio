import React from 'react';
import './Topic.css';

const PerformanceFailureModes = () => {
  return (
    <div className="topic-detail">
      <h2>Common Performance Efficiency Failure Modes and Their Causes</h2>
      <p>
        Performance efficiency failure modes can significantly impact system functionality and user experience. These failures, identified during dynamic testing, have various underlying causes. Below are common performance failure modes along with typical causes and examples.
      </p>
      <h3>Common Failure Modes and Causes</h3>
      <ol>
        <li><strong>Slow Response Under All Load Levels</strong>
          <ul>
            <li><strong>Cause</strong>: Poor database design or implementation, network latency, background loads.</li>
            <li><strong>Identification</strong>: Can be found during functional and usability testing.</li>
          </ul>
        </li>
        <li><strong>Slow Response Under Moderate-to-Heavy Load Levels</strong>
          <ul>
            <li><strong>Cause</strong>: Resource saturation, varying background loads.</li>
            <li><strong>Scenario</strong>: Response degrades with moderate-to-heavy load, even within normal ranges.</li>
          </ul>
        </li>
        <li><strong>Degraded Response Over Time</strong>
          <ul>
            <li><strong>Cause</strong>: Memory leaks, disk fragmentation, increasing network load, file repository growth, unexpected database growth.</li>
            <li><strong>Scenario</strong>: Gradual or severe response degradation over time.</li>
          </ul>
        </li>
        <li><strong>Inadequate or Graceless Error Handling Under Heavy or Over-Limit Load</strong>
          <ul>
            <li><strong>Cause</strong>: Insufficient resource pools, undersized queues and stacks, rapid timeout settings.</li>
            <li><strong>Scenario</strong>: Acceptable response time but poor error handling at high and beyond-limit loads.</li>
          </ul>
        </li>
      </ol>
      <h3>Specific Examples of Failures</h3>
      <ol>
        <li><strong>Slow Web Application Response</strong>
          <ul>
            <li><strong>Example</strong>: A web application fails to respond within seven seconds, not meeting industry standards under specific load conditions.</li>
            <li><strong>Cause</strong>: Poor system performance efficiency.</li>
          </ul>
        </li>
        <li><strong>System Crash During High User Requests</strong>
          <ul>
            <li><strong>Example</strong>: A system crashes during a sudden surge in user requests (e.g., ticket sales for a major event).</li>
            <li><strong>Cause</strong>: Inadequate system capacity to handle high user numbers.</li>
          </ul>
        </li>
        <li><strong>Degraded Response for Large Data Requests</strong>
          <ul>
            <li><strong>Example</strong>: Significant response time degradation when users download large reports.</li>
            <li><strong>Cause</strong>: Insufficient system capacity for handling large data volumes.</li>
          </ul>
        </li>
        <li><strong>Incomplete Batch Processing</strong>
          <ul>
            <li><strong>Example</strong>: Batch processing fails to complete before online processing is needed.</li>
            <li><strong>Cause</strong>: Execution time of batch processes is insufficient for the allowed time period.</li>
          </ul>
        </li>
        <li><strong>RAM Shortage in Real-Time System</strong>
          <ul>
            <li><strong>Example</strong>: A real-time system runs out of RAM due to high demands from parallel processes.</li>
            <li><strong>Cause</strong>: Inadequate RAM dimensioning or poor memory request prioritization.</li>
          </ul>
        </li>
        <li><strong>Update Rate Failure in Real-Time Components</strong>
          <ul>
            <li><strong>Example</strong>: Real-time system component A fails to supply updates to component B at the required rate, causing overall system failure.</li>
            <li><strong>Cause</strong>: Inefficient code in component A, requiring performance profiling and modifications.</li>
          </ul>
        </li>
      </ol>
      <p>
        Understanding and addressing these common performance efficiency failure modes and their causes is crucial for maintaining system stability and providing a satisfactory user experience. Early identification and mitigation during testing phases can prevent these issues from impacting the production environment.
      </p>
    </div>
  );
};

export default PerformanceFailureModes;
