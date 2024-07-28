import React from 'react';
import './Article.css';

const MobileAppTestingRisks = () => {
  return (
    <div className="article-detail">
      <h2>Risks in Mobile Application Testing</h2>
      <p>The challenges mentioned in Challenges of Mobile Testing can appear in isolation or in combination with others. This may result in additional risks for a mobile application.</p>
      
      <div className="table-container">
        <table className="rtm-table">
          <thead>
            <tr>
              <th>Risk</th>
              <th>Possible Mitigation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Market fragmentation</td>
              <td>Choose an appropriate selection of devices for test execution, e.g., testing the most commonly used devices</td>
            </tr>
            <tr>
              <td>Cost of supporting multiple platforms</td>
              <td>Perform analysis to understand most used platforms, thus avoiding testing of those no longer in scope.</td>
            </tr>
            <tr>
              <td>Introduction of new technologies, platforms and devices</td>
              <td>Use pre-production versions of those technologies</td>
            </tr>
            <tr>
              <td>Lack of availability of devices for test execution</td>
              <td>Apply remote device access services or crowd testing services</td>
            </tr>
            <tr>
              <td>Risks from the expected usage patterns of mobile applications used while on the go</td>
              <td>Applying appropriate testing approaches such as field testing</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MobileAppTestingRisks;
