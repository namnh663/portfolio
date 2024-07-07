import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const relatedArticles = [
  {
    title: 'How to Write Effective Test Cases',
    link: '/testing-foundation/effective-test-cases'
  },
  {
    title: 'Writing Test Cases Without Clear Requirements Documentation',
    link: '/testing-foundation/writing-test-cases-without-requirements'
  },
  {
    title: 'Requirement Traceability Matrix (RTM)',
    link: '/testing-foundation/requirement-traceability-matrix'
  }
];

const Documentation = () => {
  return (
    <div className="topic-detail">
      <h2>Test Documentation</h2>
      <ul>
        <li><strong>Test Plan</strong>: Document outlining the objectives, scope, and focus of a testing effort.</li>
        <li><strong>Test Cases</strong>: Detailed steps for testing specific functionality.</li>
        <li><strong>Test Scripts</strong>: Scripts used in automated testing.</li>
        <li><strong>Test Report</strong>: Summarizes the testing activities and results.</li>
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

export default Documentation;
