import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const relatedArticles = [
  {
    title: 'Handling Bug Disagreements',
    link: '/testing-foundation/handle-bug-disagreement'
  },
  {
    title: 'What to Include in Bug Report',
    link: '/testing-foundation/what-to-include-in-bug-report'
  }
];

const DefectManagement = () => {
  return (
    <div className="topic-detail">
      <h2>Defect Management</h2>
      
      <p>One of the primary objectives of testing is to identify defects, making an established defect management process essential. The term "defects" encompasses reported anomalies, which may later be confirmed as actual defects or reclassified (e.g., false positives, change requests). Anomalies can be reported at any phase of the SDLC, with the form and process tailored to the specific SDLC.</p>

      <h3>Defect Management Process</h3>
      <ul>
        <li><strong>Workflow:</strong> The process includes a sequence of activities for handling anomalies from discovery to closure. It involves logging, analyzing, classifying, deciding on a response (e.g., fix, defer), and closing the defect report.</li>
        <li><strong>Stakeholder Involvement:</strong> All stakeholders must follow the process. It's also advisable to handle defects from static testing similarly.</li>
      </ul>

      <h3>Objectives of Defect Reports:</h3>
      <ul>
        <li>Provide sufficient information for resolving reported defects.</li>
        <li>Track the quality of the work product.</li>
        <li>Offer insights for improving development and testing processes.</li>
      </ul>

      <h3>Typical Defect Report Components</h3>
      <ul>
        <li><strong>Unique Identifier:</strong> Each defect has a unique ID for tracking.</li>
        <li><strong>Title:</strong> A short summary of the anomaly.</li>
        <li><strong>Date:</strong> When the anomaly was observed.</li>
        <li><strong>Issuing Organization and Author:</strong> Including the author's role.</li>
        <li><strong>Test Object and Environment Identification:</strong> Specifies what and where the defect was found.</li>
        <li><strong>Context:</strong> Details like the test case being run, test activity, SDLC phase, and relevant test techniques, checklists, or test data used.</li>
        <li><strong>Description of Failure:</strong> Steps to reproduce and resolve the anomaly, including test logs, database dumps, screenshots, or recordings.</li>
        <li><strong>Expected vs. Actual Results:</strong> Clearly delineates what was expected and what occurred.</li>
        <li><strong>Severity:</strong> The impact degree on stakeholders' interests or requirements.</li>
        <li><strong>Priority:</strong> The urgency of fixing the defect.</li>
        <li><strong>Status:</strong> Current state of the defect (e.g., open, deferred, duplicate, waiting for a fix, awaiting confirmation testing, re-opened, closed, rejected).</li>
        <li><strong>References:</strong> Links to related test cases or documents.</li>
      </ul>

      <p><strong>Automated Data in Defect Management Tools:</strong></p>
      <p>Defect management tools may automatically include certain data, such as identifier, date, author, and initial status.</p>

      <p>For detailed templates and examples, refer to the ISO/IEC/IEEE 29119-3 standard, which labels defect reports as incident reports.</p>

      <section className="related-articles">
        <h3>Related Articles</h3>
        <ul>
          {relatedArticles.map((article, index) => (
            <li key={index}>
              <Link to={article.link}>{article.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DefectManagement;