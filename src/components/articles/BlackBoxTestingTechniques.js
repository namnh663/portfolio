import React from 'react';
import './Article.css';

const BlackBoxTestingTechniques = () => {
  return (
    <div className="article-detail">
      <h2>Black-Box Testing Techniques</h2>
      <p>
        <strong>Black-box testing</strong> focuses on external system behavior based on specifications, not internal code.
      </p>

      <h3>Common Techniques:</h3>
      
      <p>Equivalence Partitioning (EP):</p>
      <ul>
        <li>Divides data into partitions where all elements are treated similarly.</li>
        <li>Tests one value from each partition to ensure all values are processed correctly.</li>
        <li>Coverage: Percentage of partitions exercised by at least one test case.</li>
        <li>Works for various data types (inputs, outputs, configurations).</li>
      </ul>

      <p>Boundary Value Analysis (BVA):</p>
      <ul>
        <li>Focuses on testing the edges (boundaries) of equivalence partitions.</li>
        <li>Rationale: Developers are more prone to make mistakes at boundaries.</li>
        <li>Two versions:</li>
        <ul>
          <li>2-value BVA: Tests boundary value and its closest neighbor from adjacent partition.</li>
          <li>3-value BVA (more rigorous): Tests boundary value and both its neighbors.</li>
        </ul>
        <li>Coverage: Percentage of boundary values exercised by test cases.</li>
      </ul>

      <p>Decision Table Testing:</p>
      <ul>
        <li>Suitable for testing complex logic with multiple conditions and outcomes.</li>
        <li>Decision tables map combinations of conditions to resulting actions.</li>
        <li>Coverage: Percentage of feasible decision rule combinations exercised by test cases.</li>
        <li>Helps identify missing or contradictory requirements.</li>
      </ul>

      <p>State Transition Testing:</p>
      <ul>
        <li>Models system behavior using states and transitions triggered by events.</li>
        <li>Tests aim to cover different state transitions and ensure valid behavior.</li>
        <li>Various coverage criteria:</li>
        <ul>
          <li>All states coverage: All system states are visited at least once.</li>
          <li>Valid transitions coverage: All valid transitions between states are exercised.</li>
          <li>All transitions coverage: All valid and invalid transitions are attempted.</li>
        </ul>
      </ul>

      <h3>Choosing Techniques:</h3>
      <p>
        The appropriate technique depends on the testing context and objectives. Combining black-box techniques is often recommended for comprehensive testing.
      </p>
    </div>
  );
};

export default BlackBoxTestingTechniques;
