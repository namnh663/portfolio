// src/pages/TestingFramework.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TopicDetail.css';

const TestingFramework = () => {
  const [showSubTopics, setShowSubTopics] = useState(false);

  const toggleSubTopics = () => {
    setShowSubTopics(!showSubTopics);
  };

  return (
    <div className="topic-detail">
      <h2>Testing Framework</h2>
      <p>
        Testing frameworks are an essential part of test automation and are a set of guidelines or rules used for creating and designing test cases.
      </p>
      <div className="subtopics">
        <button onClick={toggleSubTopics}>
          {showSubTopics ? 'Hide Subtopics' : 'Show Subtopics'}
        </button>
        {showSubTopics && (
          <ul>
            <li>
              <Link to="/knowledge/automation-testing/testing-framework/karate">Karate</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default TestingFramework;
