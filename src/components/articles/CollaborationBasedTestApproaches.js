import React from 'react';
import './Article.css';

const CollaborationBasedTestApproaches = () => {
  return (
    <div className="article-detail">
      <h2>Collaboration-based Test Approaches</h2>
      <p>Focus: Defect avoidance through collaboration and communication.</p>

      <h3>Techniques:</h3>
      <p>Collaborative User Story Writing:</p>
      <ul>
        <li>Involves stakeholders from business, development, and testing.</li>
        <li>User stories define features with three key aspects:</li>
        <ul>
            <li>Card - the medium describing a user story (e.g., an index card, an entry in an electronic board).</li>
            <li>Conversation - explains how the software will be used (can be documented or verbal).</li>
            <li>Confirmation - the acceptance criteria.</li>
          </ul>
        <li>"INVEST" principles (Independent, Negotiable, Valuable, Estimable, Small, Testable) ensure user stories are clear, testable, and valuable.</li>
        <li>Collaboration helps create a shared vision of the desired functionality.</li>
      </ul>

      <p>Acceptance Criteria:</p>
      <ul>
        <li>Define conditions a user story implementation must meet for stakeholder approval.</li>
        <li>Essentially test conditions derived from user story discussions.</li>
        <li>Used for:
          <ul>
            <li>Defining user story scope</li>
            <li>Reaching stakeholder consensus</li>
            <li>Describing positive and negative scenarios</li>
            <li>Guiding user story acceptance testing</li>
            <li>Planning and estimation</li>
          </ul>
        </li>
        <li>Common formats:
          <ul>
            <li>Scenario-oriented (e.g., Given/When/Then)</li>
            <li>Rule-oriented (e.g., bullet points, tables)</li>
          </ul>
        </li>
      </ul>

      <p>Acceptance Test-driven Development (ATDD):</p>
      <ul>
        <li>Test-first approach where tests are created before user story implementation.</li>
        <li>Involves team members from various backgrounds (customers, developers, testers).</li>
        <li>Steps:
          <ul>
            <li><strong>Specification Workshop:</strong> Discuss, analyze, and write user stories and acceptance criteria.</li>
            <li><strong>Test Case Creation:</strong> Based on acceptance criteria, examples of how the software should work.
              <ul>
                <li>Techniques from sections Black-Box, White-Box, Experience-Based, can be applied during test design.</li>
              </ul>
            </li>
            <li><strong>Test Execution:</strong>
              <ul>
                <li>Starts with positive tests confirming expected behavior.</li>
                <li>Followed by negative testing (error conditions, edge cases).</li>
                <li>May cover non-functional aspects (performance, usability).</li>
                <li>Tests should be clear and understandable for stakeholders (natural language).</li>
              </ul>
            </li>
            <li><strong>Test Automation:</strong> If supported by the framework, developers can automate tests during implementation.</li>
          </ul>
        </li>
      </ul>

      <h3>Advantages</h3>
      <ul>
        <li>Proactive defect prevention through collaboration and communication.</li>
        <li>Clear and well-defined acceptance criteria for user stories.</li>
        <li>Promotes shared understanding of desired functionality among stakeholders.</li>
      </ul>

      <h3>Disadvantages</h3>
      <ul>
        <li>Requires active participation from various team members.</li>
        <li>Success depends on the quality of user stories and acceptance criteria.</li>
      </ul>
    </div>
  );
};

export default CollaborationBasedTestApproaches;
