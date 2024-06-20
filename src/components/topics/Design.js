import React from 'react';
import './Topic.css';

const Design = () => {
  return (
    <div className="topic-detail">
      <h2>Test Design Techniques</h2>
      <ul>
        <li><strong>Equivalence Partitioning</strong>: Dividing input data into valid and invalid partitions to reduce the number of test cases.</li>
        <li><strong>Boundary Value Analysis</strong>: Testing the boundaries between partitions.</li>
        <li><strong>Decision Table Testing</strong>: Using tables to represent combinations of inputs and their corresponding outputs.</li>
        <li><strong>State Transition Testing</strong>: Testing changes in input conditions that trigger state changes in the application.</li>
      </ul>
    </div>
  );
};

export default Design;
