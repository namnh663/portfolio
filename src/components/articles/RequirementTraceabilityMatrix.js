import React from 'react';
import './Article.css';

const RequirementTraceabilityMatrix = () => {
  return (
    <div className="article-detail">
      <h2>Requirement Traceability Matrix (RTM)</h2>
      <p>A Requirement Traceability Matrix (RTM) is a document that maps and traces user requirements with the test cases designed to validate those requirements. It ensures that all requirements defined for a system are tested in the test protocols.</p>
      
      <h3>Benefits:</h3>

      <p><strong>1. Ensures Coverage:</strong></p>
      <p>It ensures that all requirements are covered by test cases. This helps in identifying any missing requirements or test cases early in the development cycle.</p>

      <p><strong>2. Tracks Requirements:</strong></p>
      <p>It tracks the status of each requirement throughout the project lifecycle, providing a clear view of progress and completion. This is crucial for project management and reporting.</p>

      <p><strong>3. Manages Changes:</strong></p>
      <p>It helps in managing changes to the requirements by maintaining a clear link between requirements and test cases. This ensures that any changes in requirements are reflected in the corresponding test cases.</p>

      <p><strong>4. Facilitates Impact Analysis:</strong></p>
      <p>It aids in impact analysis when a requirement changes. By showing the dependencies, it helps in assessing the impact of changes on the test cases and the overall project.</p>

      <p><strong>5. Enhances Quality:</strong></p>
      <p>It enhances the quality of the product by ensuring that all specified requirements are tested and validated, reducing the risk of defects and ensuring customer satisfaction.</p>

      <p><strong>6. Provides Documentation:</strong></p>
      <p>It serves as a comprehensive documentation that provides a traceable path from requirements to test cases. This is valuable for audits, compliance, and regulatory requirements.</p>

      <h3>Example:</h3>

      <p>Imagine a project for developing a comprehensive e-commerce platform. The RTM for this project might include the following columns:</p>

      <div className="table-container">
        <table className="rtm-table">
          <thead>
            <tr>
              <th>Req ID</th>
              <th>Requirement Description</th>
              <th>Module</th>
              <th>Priority</th>
              <th>Risk Level</th>
              <th>Test Case ID</th>
              <th>Test Case Description</th>
              <th>Test Type</th>
              <th>Status</th>
              <th>Defect ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>R1</td>
              <td>User can register an account</td>
              <td>Auth</td>
              <td>High</td>
              <td>Medium</td>
              <td>TC1</td>
              <td>Verify user registration with valid details</td>
              <td>Functional</td>
              <td>Passed</td>
              <td>-</td>
            </tr>
            <tr>
              <td>R2</td>
              <td>User can log in</td>
              <td>Auth</td>
              <td>High</td>
              <td>High</td>
              <td>TC2</td>
              <td>Verify login with valid credentials</td>
              <td>Functional</td>
              <td>Failed</td>
              <td>BUG-123</td>
            </tr>
            <tr>
              <td>R3</td>
              <td>User can add items to cart</td>
              <td>Shopping</td>
              <td>Medium</td>
              <td>Low</td>
              <td>TC3</td>
              <td>Verify adding items to the shopping cart</td>
              <td>Functional</td>
              <td>Passed</td>
              <td>-</td>
            </tr>
            <tr>
              <td>R4</td>
              <td>User can checkout</td>
              <td>Checkout</td>
              <td>High</td>
              <td>High</td>
              <td>TC4</td>
              <td>Verify the checkout process with valid details</td>
              <td>End-to-End</td>
              <td>In Progress</td>
              <td>-</td>
            </tr>
            <tr>
              <td>R5</td>
              <td>Payment processing</td>
              <td>Payment</td>
              <td>Critical</td>
              <td>High</td>
              <td>TC5</td>
              <td>Verify payment processing with valid credit card</td>
              <td>Performance</td>
              <td>Not Started</td>
              <td>-</td>
            </tr>
            <tr>
              <td>R6</td>
              <td>Order confirmation email</td>
              <td>Notification</td>
              <td>Medium</td>
              <td>Medium</td>
              <td>TC6</td>
              <td>Verify order confirmation email is sent</td>
              <td>Functional</td>
              <td>Not Started</td>
              <td>-</td>
            </tr>
            <tr>
              <td>R7</td>
              <td>User can filter products</td>
              <td>Product</td>
              <td>Medium</td>
              <td>Low</td>
              <td>TC7</td>
              <td>Verify product filtering based on category</td>
              <td>Functional</td>
              <td>In Progress</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequirementTraceabilityMatrix;
