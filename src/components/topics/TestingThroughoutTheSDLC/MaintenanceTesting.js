import React from 'react';
import '../Topic.css';

const MaintenanceTesting = () => {
  return (
    <div className="topic-detail">
      <h2>Maintenance Testing</h2>

      <h3>Software Maintenance</h3>
      <ul>
        <li>Involves fixing defects (corrective), adapting to environment changes (adaptive), or improving performance/maintainability.</li>
        <li>Can involve planned releases or hotfixes.</li>
        <li>Impact analysis helps assess potential consequences of changes before implementation.</li>
      </ul>

      <h3>Maintenance Testing</h3>
      <ul>
        <li>Evaluates the success of changes and checks for unintended regressions.</li>
        <li>Scope depends on risk of change, system size, and change size.</li>
      </ul>

      <h3>Triggers for Maintenance Testing</h3>
      <ul>
        <li>Modifications (planned enhancements, bug fixes, hotfixes).</li>
        <li>Upgrades or migrations of the operational environment (platform changes, data conversion).</li>
        <li>Retirement of a system (data archiving, restore/retrieval procedures).</li>
      </ul>

      <h3>Key Points</h3>
      <ul>
        <li>Maintenance testing is crucial to ensure continued system quality after changes.</li>
        <li>The scope of testing is balanced with the risk and resources available.</li>
        <li>Different triggers require different testing considerations (e.g., data migration testing during upgrades).</li>
      </ul>
    </div>
  );
};

export default MaintenanceTesting;
