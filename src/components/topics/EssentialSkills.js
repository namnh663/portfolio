import React from 'react';
import './Topic.css';

const EssentialSkills = () => {
  return (
    <div className="topic-detail">
      <h2>Essential Skills in Testing</h2>

      <h3>Essential Skills for Testers</h3>
      <ul>
        <li><strong>Testing knowledge:</strong> Understanding different testing techniques to improve effectiveness.</li>
        <li><strong>Thoroughness and attention to detail:</strong> To identify even hard-to-find defects.</li>
        <li><strong>Communication skills:</strong> To effectively interact with stakeholders and report issues.</li>
        <li><strong>Analytical and critical thinking:</strong> To analyze problems and design better tests.</li>
        <li><strong>Technical and domain knowledge:</strong> To understand the system and user needs.</li>
      </ul>

      <h3>Whole Team Approach</h3>
      <p>
        Effective teamwork is crucial for testers. In a whole-team approach, everyone contributes to quality. This approach fosters collaboration, communication, and knowledge sharing within the team. Testers work with developers, business representatives, and others to achieve quality goals.
      </p>

      <h3>Importance of Test Independence</h3>
      <p>
        A certain level of independence helps testers find defects due to different perspectives. Testers can be the developer, peers, testers from within the organization, or external testers. The optimal level of independence depends on the project context (e.g., safety-critical systems).
      </p>
      <ul>
        <li><strong>Benefits of independence</strong></li>
        <ul>
          <li>Testers identify different types of failures due to varying backgrounds and biases.</li>
          <li>They can verify or challenge assumptions made during development.</li>
        </ul>
        <li><strong>Drawbacks of independence:</strong></li>
        <ul>
          <li>Potential communication issues or an adversarial relationship with developers.</li>
          <li>Developers may feel less responsible for quality.</li>
          <li>Testers may be seen as a bottleneck for releases.</li>
        </ul>
      </ul>

      <p className="important">In summary, good testers possess a combination of technical skills, soft skills, and the ability to work effectively within a team or independently depending on the project needs.</p>
    </div>
  );
};

export default EssentialSkills;
