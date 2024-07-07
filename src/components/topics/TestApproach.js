import React from 'react';
import './Topic.css';

const TestApproach = () => {
  return (
    <div className="topic-detail">
      <h2>Adapt Test Approach</h2>
      <p>The Agile Testing Quadrants help guide you to the type of testing you should do in any given sprint depending on the context of your project deliverables.</p>
      <ul>
        <li>First, determine if the work being produced is more business-facing or technology-facing.</li>
        <li>Then, determine if the testing is meant to guide development or critique the product based on the stage you are at in your development cycle or sprint.</li>
        <li>The quadrant you land in provides guidance toward what types of testing you should perform that sprint.</li>
      </ul>
      <div className="quadrant-container">
        <div className="quadrant">
          <h3>Q2</h3>
          <p>Examples<br />Story acceptance tests<br />UX (user experience) tests<br />Prototypes, simulations</p>
        </div>
        <div className="quadrant">
          <h3>Q3</h3>
          <p>Exploratory testing<br />Workflows, usability testing<br />UAT (user acceptance testing)<br />Monitoring and observability</p>
        </div>
        <div className="quadrant">
          <h3>Q1</h3>
          <p>Unit tests<br />Component tests (code level)</p>
        </div>
        <div className="quadrant">
          <h3>Q4</h3>
          <p>Performance tests<br />Load tests, Security tests<br />Recoverability</p>
        </div>
        <div className="labels">
          <span className="guide-development">Guide Development</span>
          <span className="technology-facing">Technology Facing</span>
          <span className="business-facing">Business Facing</span>
          <span className="critique-product">Critique Product</span>
        </div>
      </div>
      <section>
        <h3>Example</h3>
        <p>You're launching a new product, and you're still in the process of validating before creating a more consistent solution. This is business facing, as the product is nearing launch, and calls for testing that will both help guide development as well as critique the existing product. For this scenario, you'd invest more in the top two quadrants.
        </p>
        <h3>Why use the Agile Testing Quadrants?</h3>
        <ul>
          <li>Provides a common language for your team to think through testing approach together.</li>
          <li>Emphasizes Whole Team approach and highlights importance of involving QA throughout the development process.</li>
          <li>Allows you to plan testing for different levels of "done" (story done, feature done, release done) and for every step of the deployment pipeline.</li>
        </ul>
      </section>
    </div>

  );
};

export default TestApproach;
