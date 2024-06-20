import React from 'react';
import './Topic.css';

const Techniques = () => {
  return (
    <div className="topic-detail">
      <h2>Testing Techniques</h2>
      <ul>
        <li><strong>Black Box Testing</strong>: Testing without knowing the internal workings of the application. Focuses on input and output.</li>
        <li><strong>White Box Testing</strong>: Testing with knowledge of the internal workings. Focuses on code structure, conditions, loops, etc.</li>
        <li><strong>Grey Box Testing</strong>: Combination of both black box and white box testing techniques.</li>
      </ul>
    </div>
  );
};

export default Techniques;
