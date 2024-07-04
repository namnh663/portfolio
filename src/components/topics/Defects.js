import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const relatedArticles = [
  {
    title: 'Handling Bug Disagreements',
    link: '/testing-foundation/handle-bug-disagreement'
  }
];

const Defects = () => {
  return (
    <div className="topic-detail">
      <h2>Defect Lifecycle</h2>
      <ul>
        <li><strong>Defect Identification</strong>: Finding and documenting a defect.</li>
        <li><strong>Defect Reporting</strong>: Logging the defect with all necessary details.</li>
        <li><strong>Defect Triage</strong>: Prioritizing defects based on severity and impact.</li>
        <li><strong>Defect Fixing</strong>: Developers fixing the defect.</li>
        <li><strong>Defect Verification</strong>: Testing the fix to ensure the defect is resolved.</li>
        <li><strong>Defect Closure</strong>: Closing the defect if the fix is successful.</li>
      </ul>

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

export default Defects;
