import React from 'react';
import './Article.css';

const ExperienceBasedTestTechniques = () => {
  return (
    <div className="article-detail">
      <h2>Experience-Based Test Techniques</h2>
      <h3>Leveraging Tester's Expertise</h3>
      <ul>
        <li>Techniques rely on the tester's knowledge and experience to design and execute tests.</li>
        <li>Useful for finding defects missed by other approaches.</li>
        <li>Adaptable to various testing contexts.</li>
      </ul>

      <h3>Common Techniques</h3>
      
      <p>Error Guessing:</p>
      <ul>
        <li>Anticipates errors based on past experiences, developer tendencies, and similar applications.</li>
        <li>Focuses on common error categories (input, output, logic, computation, interfaces, data).</li>
        <li><strong>Fault Attacks:</strong> Methodical approach to error guessing using lists of potential defects.</li>
        <li>References: Whittaker (2002, 2003), Andrews (2006).</li>
      </ul>

      <p>Exploratory Testing:</p>
      <ul>
        <li>Tests are designed, executed, and evaluated simultaneously as the tester learns about the system.</li>
        <li>Useful when specifications are lacking, time is limited, or to complement formal testing.</li>
        <li><strong>Session-Based Testing:</strong> Structures exploratory testing within a time frame and objectives.</li>
        <li>Requires experienced testers with strong analytical, problem-solving, and creative skills.</li>
        <li>References: Kaner (1999), Whittaker (2009), Hendrickson (2013).</li>
      </ul>

      <p>Checklist-Based Testing:</p>
      <ul>
        <li>Uses checklists of test conditions to guide test design, execution, and evaluation.</li>
        <li>Checklists can be based on experience, user needs, or common software failure patterns.</li>
        <li>Should not include automatable checks, entry/exit criteria, or overly generic items.</li>
        <li>Checklist items are typically phrased as questions for clear and direct verification.</li>
        <li>May cover functional and non-functional aspects (e.g., usability testing).</li>
        <li>Requires regular updates based on defect analysis to maintain effectiveness and avoid bloat.</li>
        <li>References: Brykczynski (1999), Nielsen (1994), Gawande (2009).</li>
      </ul>

      <h3>Disadvantages</h3>
      <ul>
        <li>Effectiveness depends heavily on tester's skills and experience.</li>
        <li>Checklists and exploratory testing results may lack repeatability due to inherent variability.</li>
      </ul>
    </div>
  );
};

export default ExperienceBasedTestTechniques;
