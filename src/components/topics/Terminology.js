import React from 'react';
import './Topic.css';

const Terminology = () => {
  return (
    <div className="topic-detail">
      <h2>Terminology</h2>

      <section>
        <ul>
          <li><strong>Test Case</strong>: A set of conditions or variables under which a tester determines whether a system or one of its components is working as intended.</li>
          <li><strong>Bug</strong>: An error, flaw, failure, or fault in a computer program or system that causes it to produce an incorrect or unexpected result.</li>
          <li><strong>Regression Testing</strong>: A type of software testing that ensures that previously developed and tested software still performs the same way after it is changed or interfaced with other software.</li>
          <li><strong>Integration Testing</strong>: Testing in which individual software modules are combined and tested as a group.</li>
          <li><strong>Unit Testing</strong>: Testing individual units or components of a software.</li>
          <li><strong>Acceptance Testing</strong>: Testing conducted to determine if the requirements of a specification or contract are met.</li>
          <li><strong>Functional Testing</strong>: A type of testing that verifies that each function of the software application operates in conformance with the requirement specification.</li>
          <li><strong>Non-Functional Testing</strong>: Testing to check non-functional aspects (performance, usability, reliability, etc.) of a software application.</li>
          <li><strong>UAT (User Acceptance Testing)</strong>: The process of verifying that a solution works for the user.</li>
          <li><strong>API Testing</strong>: Testing that focuses on the business logic layer of the software architecture.</li>
          <li><strong>Performance Testing</strong>: Testing to determine the performance, such as the speed, responsiveness, and stability, of a computer, network, software program or device under a workload.</li>
        </ul></section>
    </div>
  );
};

export default Terminology;
