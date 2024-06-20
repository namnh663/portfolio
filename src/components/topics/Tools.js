import React from 'react';
import './Topic.css';

const Tools = () => {
  return (
    <div className="topic-detail">
      <h2>Tools and Technologies</h2>
      <ul>
        <li><strong>Test Management Tools</strong>: Jira, Azure, Xray, Qase, Monday</li>
        <li><strong>Automation Tools</strong>: Selenium, Katalon, Karate</li>
        <li><strong>Continuous Integration Tools</strong>: Jenkins, Bitbucket, GitLab</li>
        <li><strong>Bug Tracking Tools</strong>: Jira, Azure, Qase, Monday, Bugzilla</li>
      </ul>
    </div>
  );
};

export default Tools;
