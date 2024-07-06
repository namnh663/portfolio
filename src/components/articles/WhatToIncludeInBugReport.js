import React from 'react';
import './Article.css';

const WhatToIncludeInBugReport = () => {
  return (
    <div className="article-detail">
      <h2>What to Include in a Bug Report</h2>

      <h3>1. Title</h3>
      <p><strong>Description:</strong> A concise and descriptive title that summarizes the bug.</p>
      
      <h3>2. Bug ID</h3>
      <p><strong>Description:</strong> A unique identifier for tracking the bug.</p>

      <h3>3. Severity and Priority</h3>
      <p><strong>Severity:</strong> Indicates the impact of the bug on the system's functionality.</p>
      <p><strong>Priority:</strong> Indicates the urgency of fixing the bug.</p>

      <h3>4. Environment</h3>
      <p><strong>Description:</strong> Details about the environment in which the bug was found, including hardware, operating system, browser, and application version.</p>

      <h3>5. Preconditions</h3>
      <p><strong>Description:</strong> Any specific conditions that need to be met before the bug can be reproduced.</p>

      <h3>6. Steps to Reproduce</h3>
      <p><strong>Description:</strong> A step-by-step guide to reproducing the bug. Each step should be clear and detailed.</p>

      <h3>7. Expected Result</h3>
      <p><strong>Description:</strong> The expected behavior of the application if there were no bug.</p>

      <h3>8. Actual Result</h3>
      <p><strong>Description:</strong> The actual behavior observed when the bug occurs.</p>

      <h3>9. Screenshots/Videos</h3>
      <p><strong>Description:</strong> Visual evidence of the bug to help developers understand the issue.</p>

      <h3>10. Logs and Attachments</h3>
      <p><strong>Description:</strong> Any relevant logs, error messages, or files that can help diagnose the problem.</p>

      <h3>11. Additional Information</h3>
      <p><strong>Description:</strong> Any other information that might be relevant to the bug.</p>

      <h3>12. Status</h3>
      <p><strong>Description:</strong> The current status of the bug (e.g., New, In Progress, Resolved).</p>

      <h3>Example Bug Report:</h3>
      <div className="example-bug-report">
        <p><strong>Title:</strong> Login Button Unresponsive on Mobile App</p>
        <p><strong>Bug ID:</strong> BUG-00123</p>
        <p><strong>Severity:</strong> High</p>
        <p><strong>Priority:</strong> Critical</p>

        <p><strong>Environment:</strong></p>
        <ul>
          <li>Android 11</li>
          <li>Samsung Galaxy S21</li>
          <li>App Version 2.3.1</li>
        </ul>

        <p><strong>Preconditions:</strong> User must be logged into the application.</p>

        <p><strong>Steps to Reproduce:</strong></p>
        <ol>
          <li>Open the mobile application.</li>
          <li>Navigate to the login screen.</li>
          <li>Enter valid credentials.</li>
          <li>Tap the "Login" button.</li>
        </ol>

        <p><strong>Expected Result:</strong></p>
        <ul>
          <li>The user should be redirected to the dashboard upon tapping the "Login" button.</li>
        </ul>

        <p><strong>Actual Result:</strong></p>
        <ul>
          <li>The "Login" button remains unresponsive, and the user stays on the login screen.</li>
        </ul>

        <p><strong>Screenshots/Videos:</strong></p>
        <ul>
          <li>Attached screenshot of the unresponsive login screen.</li>
        </ul>

        <p><strong>Logs and Attachments:</strong></p>
        <ul>
          <li>Attached console logs.</li>
        </ul>

        <p><strong>Additional Information:</strong></p>
        <ul>
          <li>The issue occurs only when the device is in portrait mode.</li>
        </ul>

        <p><strong>Status:</strong> New</p>
      </div>
    </div>
  );
};

export default WhatToIncludeInBugReport;
