import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const relatedArticles = [
  {
    title: 'Testing for Compatibility with Device Hardware',
    link: '/mobile-testing/device-compatibility-testing'
  },
  {
    title: 'Testing for App Interactions with Device Software',
    link: '/mobile-testing/app-interaction-testing'
  },
  {
    title: 'Testing for Various Connectivity Methods',
    link: '/mobile-testing/connectivity-testing'
  },
  {
    title: 'Installability Testing',
    link: '/mobile-testing/installability-testing'
  },
  {
    title: 'Stress Testing',
    link: '/mobile-testing/stress-testing'
  }
];

const TypesOfMobileTesting = () => {
  return (
    <div className="topic-detail">
      <h2>Types of Mobile Testing</h2>
      <ul>
        <li><strong>Functional Testing:</strong> Ensuring that the app functions as expected.</li>
        <li><strong>Usability Testing:</strong> Assessing the user experience and ease of use.</li>
        <li><strong>Compatibility Testing:</strong> Checking the app on different devices, OS versions, and screen resolutions.</li>
        <li><strong>Performance Testing:</strong> Evaluating the app's performance under various conditions.</li>
        <li><strong>Security Testing:</strong> Ensuring the app is secure from vulnerabilities and threats.</li>
        <li><strong>Localization Testing:</strong> Verifying the app's adaptability to different languages and regions.</li>
        <li><strong>Accessibility Testing:</strong> Ensuring the app is usable by people with disabilities.</li>
        <li><strong>Services Testing:</strong> Ensuring that all backend services are functioning correctly and efficiently.</li>
        <li><strong>Low-level resource Testing:</strong> Assessing the app's usage of device resources like memory, CPU, and battery.</li>
        <li><strong>Installation Testing:</strong> Verifying that the app installs and updates correctly on various devices.</li>
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

export default TypesOfMobileTesting;
