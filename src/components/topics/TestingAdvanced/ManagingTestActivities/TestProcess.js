import React from 'react';
import { Link } from 'react-router-dom';
import '../../Topic.css';

const relatedArticles = [
  {
    title: 'The Context of Testing',
    link: '/testing-advanced/test-context'
  },
  {
    title: 'Fundamentals of API Testing',
    link: '/testing-advanced/fundamentals-of-api-testing'
  },
  {
    title: 'Performing API Testing',
    link: '/testing-advanced/performing-api-testing'
  },
  {
    title: 'Important Aspects of API Testing',
    link: '/testing-advanced/important-aspects-of-api-testing'
  },
  {
    title: 'Verifying Authentication and Authorization in API Testing',
    link: '/testing-advanced/authentication-and-authorization-in-api-testing'
  }
];

const TestProcess = () => {
  return (
    <div className="topic-detail">
      <h2>The Test Process</h2>

      <h3>Test Planning Activities</h3>
      <p>
        Test planning involves identifying activities and resources to achieve test objectives, starting as early as possible and updating as the project progresses. Key tasks include:
      </p>
      <ul>
        <li><b>Understanding the Context:</b> Organize planning based on organizational strategy, scope, and test item.</li>
        <li><b>Identifying and Analyzing Product Risks:</b> Assess potential impacts and likelihoods.</li>
        <li><b>Identifying Risk Treatment Approaches:</b> Select and document appropriate actions to address risks.</li>
        <li><b>Defining Test Approach and Allocating Resources:</b> Estimate and allocate resources based on organizational strategy and project constraints.</li>
        <li><b>Establishing the Test Plan:</b> Ensure acceptance by all stakeholders.</li>
      </ul>

      <h3>Test Monitoring and Control Activities</h3>
      <p>
        To provide efficient test control, establish a testing schedule and monitoring framework, including detailed measures and targets. Activities include:
      </p>
      <ul>
        <li><b>Implementing the Test Plan:</b> Manage deviations and address newly identified risks.</li>
        <li><b>Managing Deviations from Planned Testing:</b> Ensure readiness to begin testing and grant approval for test completion.</li>
        <li><b>Test Monitoring:</b> Collect and record results, identify deviations, and monitor changes for identified risks.</li>
      </ul>

      <h3>Test Completion Activities</h3>
      <p>
        Test completion typically occurs at project milestones. Key tasks include:
      </p>
      <ul>
        <li><b>Creating and Approving the Test Completion Report:</b> Collect relevant information and communicate to stakeholders.</li>
        <li><b>Archiving Testware:</b> Identify and make accessible reusable test cases and other testware.</li>
        <li><b>Handing Over Testware:</b> Deliver valuable work products to those who need them.</li>
        <li><b>Cleaning the Test Environment:</b> Ensure readiness for the next testing cycle or project.</li>
        <li><b>Documenting Lessons Learned:</b> Conduct retrospectives to improve future processes.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>
        The test process encompasses planning, monitoring and control, and completion activities. Effective test management involves understanding the context, planning appropriately, monitoring progress, managing deviations, and finalizing test activities while identifying improvements.
      </p>

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

export default TestProcess;
