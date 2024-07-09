import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const relatedArticles = [
  {
    title: 'Specific Differences in Design and Behavior of Android and iOS',
    link: '/mobile-testing/specific-differences-in-design-and-behavior-of-android-and-ios'
  }
];

const TypesOfMobileApplications = () => {
  return (
    <div className="topic-detail">
      <h2>Types of Mobile Applications</h2>
      <ul>
        <li><strong>Native Apps:</strong> Developed specifically for a particular operating system (iOS, Android).</li>
        <li><strong>Web Apps:</strong> Accessible via web browsers on mobile devices.</li>
        <li><strong>Hybrid Apps:</strong> A combination of native and web apps, utilizing web technologies within a native app container.</li>
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

export default TypesOfMobileApplications;
