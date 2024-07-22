import React from 'react';
import { Link } from 'react-router-dom';
import '../Topic.css';

const relatedArticles = [
  {
    title: 'Specific Differences in Design and Behavior of Android and iOS',
    link: '/mobile-testing/specific-differences-in-design-and-behavior-of-android-and-ios'
  }
];

const MobileAppTypes = () => {
  return (
    <div className="topic-detail">
      <h2>Types of Mobile Applications</h2>
      <p>
        There are three main types of mobile applications: <strong>Native</strong>, <strong>Browser-based</strong>, and <strong>Hybrid</strong>. Each type has its own set of advantages and disadvantages, influencing the business decisions made before starting application development.
      </p>
      <h3>Native Applications</h3>
      <ul>
        <li><strong>Development</strong>: Created using platform-specific software development kits (SDKs), tools, and sensors.</li>
        <li><strong>Distribution</strong>: Downloaded, installed, and updated from supplier stores (e.g., Apple App Store, Google Play Store).</li>
        <li><strong>Advantages</strong>:
          <ul>
            <li>Better performance.</li>
            <li>Full utilization of platform features.</li>
            <li>Compliance with platform expectations.</li>
          </ul>
        </li>
        <li><strong>Disadvantages</strong>:
          <ul>
            <li>Higher development costs.</li>
            <li>Need for multiple platform support.</li>
            <li>Installation and testing on numerous devices.</li>
          </ul>
        </li>
      </ul>
      <h3>Browser-based Applications</h3>
      <ul>
        <li><strong>Access</strong>: Accessed through mobile browsers using standard web-development technologies.</li>
        <li><strong>Development</strong>: Typically lower cost with easier multi-platform support.</li>
        <li><strong>Types</strong>:
          <ul>
            <li><strong>Mobile-specific versions (m(dot) sites)</strong>: Redirects to mobile versions (e.g., facebook.com to m.facebook.com).</li>
            <li><strong>Responsive web apps</strong>: Design adjusts to screen size (view ports).</li>
            <li><strong>Adaptive web apps</strong>: Design adjusts according to predefined sizes, with adjustable features.</li>
            <li><strong>Progressive web apps</strong>: Create shortcuts on the mobile home screen and can work offline.</li>
          </ul>
        </li>
        <li><strong>Advantages</strong>:
          <ul>
            <li>Easier development and management.</li>
            <li>Lower cost.</li>
          </ul>
        </li>
        <li><strong>Disadvantages</strong>:
          <ul>
            <li>Less feature-rich compared to native or hybrid apps.</li>
            <li>Limited access to native APIs and sensors.</li>
            <li>Requires browser compatibility testing instead of installability testing.</li>
          </ul>
        </li>
      </ul>
      <h3>Hybrid Applications</h3>
      <ul>
        <li><strong>Development</strong>: Combine native app and web app using a native app wrapper with a web view.</li>
        <li><strong>Distribution</strong>: Downloaded from supplier stores and can access all device features.</li>
        <li><strong>Advantages</strong>:
          <ul>
            <li>Easier development, updating, and maintenance without needing device updates.</li>
            <li>Similar skill set required as for web development.</li>
          </ul>
        </li>
        <li><strong>Disadvantages</strong>:
          <ul>
            <li>Potential performance issues due to the wrapper.</li>
            <li>Possible divergences from the expected look and feel due to platform-specific aspects.</li>
          </ul>
        </li>
        <li><strong>Features</strong>:
          <ul>
            <li>Installed physically on devices, making them available offline.</li>
            <li>Require testing for different devices, sensor and device features, network conditions, installability, compatibility, performance efficiency, and usability.</li>
          </ul>
        </li>
      </ul>
      <h3>Key Considerations for Testing</h3>
      <ul>
        <li><strong>Device Support</strong>: Ensure compatibility with various devices.</li>
        <li><strong>Sensor and Device Features</strong>: Test functionality with specific sensors and features.</li>
        <li><strong>Network Conditions</strong>: Verify performance under different network conditions.</li>
        <li><strong>Testing Parameters</strong>:
          <ul>
            <li>Installability</li>
            <li>Compatibility</li>
            <li>Performance Efficiency</li>
            <li>Usability</li>
          </ul>
        </li>
      </ul>
      <p>
        Understanding these distinctions and their implications ensures that the chosen type of mobile application aligns with business objectives and provides a seamless user experience.
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

export default MobileAppTypes;
