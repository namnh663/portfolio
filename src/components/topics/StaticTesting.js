import React from 'react';
import './Topic.css';

const StaticTesting = () => {
  return (
    <div className="topic-detail">
      <h2>Static Testing</h2>
      <h3>Definition and Objectives</h3>
      <p>
        Static testing is the process of evaluating software without executing it. This can involve manual examination (reviews) or using tools (static analysis). The main goals are to improve quality, detect defects, and assess characteristics like readability, completeness, correctness, testability, and consistency. Static testing supports both verification and validation efforts.
      </p>

      <h3>Collaborative Practices</h3>
      <p>
        In static testing, testers, business representatives, and developers work together during sessions like example mappings, collaborative user story writing, and backlog refinement. They ensure user stories and related work products meet defined criteria, such as the Definition of Ready.
      </p>

      <h3>Static Analysis</h3>
      <p>
        Static analysis identifies issues before dynamic testing, often requiring less effort as it doesn't need test cases. It's integrated into CI frameworks and used to detect code defects, evaluate maintainability, and assess security.
      </p>

      <h3>Work Products</h3>
      <p>
        Almost any work product can be examined through static testing, including requirement documents, source code, test plans, and models. However, products that are difficult to interpret or legally restricted, like third-party executable code, are not suitable.
      </p>

      <h3>Value of Static Testing</h3>
      <p>
        Static testing helps detect defects early in the SDLC, fulfilling the principle of early testing. It finds issues that dynamic testing might miss, like unreachable code and design flaws in non-executable work products. It ensures requirements meet stakeholders' needs and improves communication among stakeholders. Despite potentially high implementation costs, static testing usually reduces overall project costs by minimizing late-stage defect fixes.
      </p>

      <h3>Differences from Dynamic Testing</h3>
      <p>
        Static testing complements dynamic testing but differs in several ways:
      </p>
      <ul>
        <li>Finds defects directly, unlike dynamic testing, which identifies failures to trace back to defects.</li>
        <li>Can detect defects in rarely executed code paths and in non-executable work products.</li>
        <li>Measures quality characteristics independent of code execution, such as maintainability.</li>
      </ul>

      <h3>Typical Defects Found</h3>
      <ul>
        <li>Requirement defects: inconsistencies, ambiguities, omissions.</li>
        <li>Design defects: poor modularization, inefficient database structures.</li>
        <li>Coding defects: undefined variables, unreachable code.</li>
        <li>Standard deviations: non-adherence to coding conventions.</li>
        <li>Interface mismatches: incorrect parameter specifications.</li>
        <li>Security vulnerabilities: buffer overflows.</li>
        <li>Test basis gaps: missing tests for acceptance criteria.</li>
      </ul>

      <h2>Feedback and Review Process</h2>
      <h3>Early Stakeholder Feedback</h3>
      <p>
        Frequent feedback throughout the SDLC prevents misunderstandings about requirements and ensures changes are correctly implemented. It helps the development team focus on valuable features and manage risks effectively.
      </p>

      <h3>Review Process Activities</h3>
      <p>
        The review process includes:
      </p>
      <ol>
        <li><strong>Planning:</strong> Define the review scope, purpose, work product, quality characteristics, exit criteria, and supporting information.</li>
        <li><strong>Review Initiation:</strong> Ensure all participants are prepared with access to the work product and understand their roles.</li>
        <li><strong>Individual Review:</strong> Reviewers assess the work product individually, logging anomalies and recommendations.</li>
        <li><strong>Communication and Analysis:</strong> Analyze and discuss anomalies in a review meeting to decide on their status and required actions.</li>
        <li><strong>Fixing and Reporting:</strong> Document defects, follow up on corrective actions, and report review results once exit criteria are met.</li>
      </ol>

      <h3>Roles and Responsibilities</h3>
      <ul>
        <li><strong>Manager:</strong> Decides the review scope and provides resources.</li>
        <li><strong>Author:</strong> Creates and fixes the work product.</li>
        <li><strong>Moderator:</strong> Facilitates review meetings, ensuring effective communication.</li>
        <li><strong>Scribe:</strong> Records anomalies and review information.</li>
        <li><strong>Reviewer:</strong> Performs the review.</li>
        <li><strong>Review Leader:</strong> Organizes the review process.</li>
      </ul>

      <h3>Review Types</h3>
      <ul>
        <li><strong>Informal Review:</strong> Detects anomalies without a defined process or documented output.</li>
        <li><strong>Walkthrough:</strong> Led by the author, serves multiple objectives like quality evaluation and reviewer education.</li>
        <li><strong>Technical Review:</strong> Performed by technical experts to make decisions and detect anomalies.</li>
        <li><strong>Inspection:</strong> The most formal type, follows a complete process to find maximum anomalies and improve the SDLC.</li>
      </ul>

      <h3>Success Factors</h3>
      <ul>
        <li>Clear objectives and measurable exit criteria.</li>
        <li>Appropriate review type for the work product and context.</li>
        <li>Small review chunks to maintain concentration.</li>
        <li>Management support and organizational culture promoting reviews.</li>
        <li>Adequate training for participants and proper meeting facilitation.</li>
      </ul>
    </div>
  );
};

export default StaticTesting;