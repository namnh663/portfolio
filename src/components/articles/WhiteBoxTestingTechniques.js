import React from 'react';
import './Article.css';

const WhiteBoxTestingTechniques = () => {
  return (
    <div className="article-detail">
      <h2>White-Box Test Techniques</h2>
      <p><strong>Focus:</strong> Code structure and logic</p>

      <h3>Common Techniques</h3>
      
      <p>Statement Testing:</p>
      <ul>
        <li>Aims to execute all executable statements in the code at least once.</li>
        <li>Coverage metric: Percentage of statements exercised by test cases.</li>
        <li>Limitations:</li>
        <ul>
          <li>Doesn't guarantee all defects are found (e.g., data-dependent issues).</li>
          <li>Doesn't ensure all decision logic is tested.</li>
        </ul>
      </ul>

      <p>Branch Testing:</p>
      <ul>
        <li>Focuses on executing all branches (code paths) in the code.</li>
        <li>Coverage metric: Percentage of branches exercised by test cases.</li>
        <li>Limitations:</li>
        <ul>
          <li>Executing a branch doesn't guarantee defect detection (specific paths might be missed).</li>
        </ul>
        <li>Stronger than statement testing: 100% branch coverage implies 100% statement coverage.</li>
      </ul>

      <h3>Advantages of White-Box Testing</h3>
      <ul>
        <li>Can find defects even with vague or incomplete specifications.</li>
        <li>Useful for static testing (code reviews) and early testing phases.</li>
        <li>Provides objective code coverage measurement to guide further testing.</li>
      </ul>

      <h3>Disadvantages of White-Box Testing</h3>
      <ul>
        <li>May miss defects related to missing requirements (implementation doesn't cover everything).</li>
      </ul>

      <h3>When to Use White-Box Testing</h3>
      <ul>
        <li>When internal code structure and logic are available.</li>
        <li>To complement black-box testing for a more comprehensive approach.</li>
      </ul>
    </div>
  );
};

export default WhiteBoxTestingTechniques;
