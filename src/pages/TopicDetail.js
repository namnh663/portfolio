// src/pages/TopicDetail.js
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './TopicDetail.css';

const topicDetails = {
  'automation-testing': {
    name: 'Automation Testing',
    description: 'Automation testing is a software testing technique that performs using special automated testing software tools to execute a test case suite.',
    subTopics: [
      {
        name: 'Testing Framework',
        path: '/knowledge/automation-testing/testing-framework',
        subTopics: [
          {
            name: 'Karate',
            path: '/knowledge/automation-testing/testing-framework/karate',
          },
        ],
      },
    ],
  },
  'performance-testing': {
    name: 'Performance Testing',
    description: 'Performance testing is a type of testing to ensure software applications will perform well under their expected workload.',
  },
  'manual-testing': {
    name: 'Manual Testing',
    description: 'Manual testing is the process of manually testing software for defects. It requires a tester to play the role of an end user whereby they use most of the application\'s features to ensure correct behavior.',
  },
  'api-testing': {
    name: 'API Testing',
    description: 'API testing is a type of software testing that involves testing application programming interfaces (APIs) directly and as part of integration testing to determine if they meet expectations for functionality, reliability, performance, and security.',
  },
};

const TopicDetail = () => {
  const { topicId } = useParams();
  const topic = topicDetails[topicId];
  const [showSubTopics, setShowSubTopics] = useState(false);

  if (!topic) {
    return <div>Topic not found</div>;
  }

  const toggleSubTopics = () => {
    setShowSubTopics(!showSubTopics);
  };

  return (
    <div className="topic-detail">
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>
      {topic.subTopics && (
        <div className="subtopics">
          <button onClick={toggleSubTopics}>
            {showSubTopics ? 'Hide Subtopics' : 'Show Subtopics'}
          </button>
          {showSubTopics && (
            <ul>
              {topic.subTopics.map((subTopic, index) => (
                <li key={index}>
                  <Link to={subTopic.path}>{subTopic.name}</Link>
                  {subTopic.subTopics && (
                    <ul>
                      {subTopic.subTopics.map((subSubTopic, subSubIndex) => (
                        <li key={subSubIndex}>
                          <Link to={subSubTopic.path}>{subSubTopic.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default TopicDetail;
