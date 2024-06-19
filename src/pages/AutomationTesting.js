// src/pages/AutomationTesting.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TopicDetail.css';

const AutomationTesting = () => {
  const [showSubTopics, setShowSubTopics] = useState(false);

  const toggleSubTopics = () => {
    setShowSubTopics(!showSubTopics);
  };

  return (
    <div className="topic-detail">
      <h2>Automation Testing</h2>
      <p>
        Automation testing is a software testing technique that performs using special automated testing software tools to execute a test case suite.
      </p>
      <div className="subtopics">
        <button onClick={toggleSubTopics}>
          {showSubTopics ? 'Hide Subtopics' : 'Show Subtopics'}
        </button>
        {showSubTopics && (
          <ul>
            <li>
              <Link to="/knowledge/automation-testing/testing-framework">Testing Framework</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default AutomationTesting;
