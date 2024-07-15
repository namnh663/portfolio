import React from 'react';
import './Topic.css';

const AgileSoftwareDevelopmentFundamentals = () => {
  return (
    <div className="topic-detail">
      <h2>Agile Software Development Fundamentals</h2>

      <h3>Agile Values (Agile Manifesto)</h3>
      <ul>
        <li><strong>Individuals and interactions over processes and tools:</strong> Focus on effective human collaboration.</li>
        <li><strong>Working software over comprehensive documentation:</strong> Deliver working software early and iterate based on feedback.</li>
        <li><strong>Customer collaboration over contract negotiation:</strong> Collaborate with customers to understand their needs.</li>
        <li><strong>Responding to change over following a plan:</strong> Embrace changes to deliver more value.</li>
      </ul>

      <h3>Agile Principles</h3>
      <ul>
        <li>Deliver valuable software frequently (weeks/months).</li>
        <li>Business and developers collaborate daily throughout the project.</li>
        <li>Build projects around motivated individuals (trust and empower them).</li>
        <li>Face-to-face communication is most efficient.</li>
        <li>Working software is the primary measure of progress.</li>
        <li>Sustainable development pace for sponsors, developers, and users.</li>
        <li>Continuous attention to technical excellence and good design.</li>
        <li>Simplicity - maximize the work not done.</li>
        <li>Best architectures, requirements, and designs emerge from self-organizing teams.</li>
        <li>Regularly reflect on how to be more effective and adjust behavior.</li>
      </ul>

      <h3>Whole-Team Approach</h3>
      <ul>
        <li>Involves everyone with necessary skills for project success (customers, developers, testers).</li>
        <li>Team size is small (3-9 people ideally).</li>
        <li>Co-location (shared workspace) is preferred for better communication.</li>
      </ul>
      <p>Benefits:</p>
      <ul>
        <li>Enhanced communication and collaboration.</li>
        <li>Leverage diverse team skills.</li>
        <li>Shared responsibility for quality.</li>
      </ul>
      <p>Testers collaborate with developers and business representatives on:</p>
      <ul>
        <li>Acceptance criteria creation.</li>
        <li>Testing strategy.</li>
        <li>Test automation approaches.</li>
      </ul>
      <p>Power of Three: Involve testers, developers, and business representatives in feature discussions.</p>

      <h3>Early and Frequent Feedback</h3>
      <ul>
        <li>Agile iterations enable continuous feedback throughout the lifecycle.</li>
      </ul>
      <p>Benefits:</p>
      <ul>
        <li>Avoid misunderstandings in requirements.</li>
        <li>Clarify customer requests and deliver features early.</li>
        <li>Discover, isolate, and resolve quality problems early.</li>
        <li>Improve team productivity and delivery capability.</li>
        <li>Maintain consistent project momentum.</li>
      </ul>
    </div>
  );
};

export default AgileSoftwareDevelopmentFundamentals;
