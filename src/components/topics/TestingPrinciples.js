import React from 'react';
import './Topic.css';

const TestingPrinciples = () => {
  return (
    <div className="topic-detail">
      <h2>Testing Principles</h2>

      <ul>
        <li><strong>Testing reveals defects, not their absence:</strong> Testing helps identify issues but cannot guarantee a defect-free system.</li>
        <li><strong>Exhaustive testing is unrealistic:</strong> It's impossible to test every scenario, so prioritize and leverage techniques.</li>
        <li><strong>Early testing saves resources:</strong> Catching defects early reduces rework and costs later in development.</li>
        <li><strong>Defects tend to cluster:</strong> A small number of components often contain most of the defects.</li>
        <li><strong>Tests can become ineffective over time:</strong> Regularly update tests to maintain their value.</li>
        <li><strong>Testing approach depends on context:</strong> There's no one-size-fits-all approach to testing.</li>
        <li><strong>Absence of defects is not a guarantee of success:</strong> A well-tested system may still not meet user needs or business goals.</li>
      </ul>

      <h3>Additional Notes:</h3>
      <p>
        The Pareto principle (80/20 rule) applies to defect clustering, where 80% of defects may be found in 20% of components.
      </p>
      <p>
        Validation (checking if the system meets user needs) is crucial alongside verification (checking if the system meets requirements).
      </p>
    </div>
  );
};

export default TestingPrinciples;
