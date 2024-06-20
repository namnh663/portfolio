import React from 'react';
import './Topic.css';

const Levels = () => {
  return (
    <div className="topic-detail">
      <h2>Levels of Testing</h2>
      <ul>
        <li><strong>Unit Testing</strong>: Testing individual components or modules.</li>
        <li><strong>Integration Testing</strong>: Testing the interaction between integrated units/modules.</li>
        <li><strong>System Testing</strong>: Testing the complete and integrated software system.</li>
        <li><strong>Acceptance Testing</strong>: Testing the system against user requirements.</li>
      </ul>
    </div>
  );
};

export default Levels;
