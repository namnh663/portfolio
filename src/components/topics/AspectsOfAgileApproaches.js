import React from 'react';
import './Topic.css';

const AspectsOfAgileApproaches = () => {
  return (
    <div className="topic-detail">
      <h2>Aspects of Agile Approaches</h2>
      <p>Agile approaches are diverse but share common practices such as collaborative user story creation, retrospectives, continuous integration, and iteration and release planning. This section describes various Agile approaches.</p>

      <h3>Extreme Programming (XP):</h3>
      <p>XP, introduced by Kent Beck, emphasizes values (communication, simplicity, feedback, courage, respect) and principles (humanity, mutual benefit, self-similarity, improvement, etc.) that guide development. It includes practices like:</p>
      <ul>
        <li>Sit together</li>
        <li>Whole team</li>
        <li>Informative workspace</li>
        <li>Energized work</li>
        <li>Pair programming</li>
        <li>Stories</li>
        <li>Weekly cycle</li>
        <li>Quarterly cycle</li>
        <li>Slack</li>
        <li>Ten-minute build</li>
        <li>Continuous integration</li>
        <li>Test-first programming</li>
        <li>Incremental design</li>
      </ul>
      <p>XP has influenced many other Agile approaches, including Scrum.</p>

      <h3>Scrum:</h3>
      <p>Scrum is an Agile management framework consisting of:</p>
      <ul>
        <li><strong>Sprint:</strong> Fixed-length iterations (2-4 weeks).</li>
        <li><strong>Product Increment:</strong> Potentially releasable product at each sprint's end.</li>
        <li><strong>Product Backlog:</strong> Prioritized list of planned product items managed by the product owner.</li>
        <li><strong>Sprint Backlog:</strong> Highest priority items selected for the sprint by the Scrum team.</li>
        <li><strong>Definition of Done:</strong> Criteria for sprint completion to ensure releasable products.</li>
        <li><strong>Timeboxing:</strong> Tasks expected to be finished within the sprint, with time-limited meetings.</li>
        <li><strong>Transparency:</strong> Daily updates on sprint status through meetings called daily scrums.</li>
      </ul>
      <p>Scrum defines three roles:</p>
      <ul>
        <li><strong>Scrum Master:</strong> Ensures Scrum practices are followed and resolves impediments.</li>
        <li><strong>Product Owner:</strong> Represents the customer and manages the product backlog.</li>
        <li><strong>Development Team:</strong> Self-organized, cross-functional team developing and testing the product.</li>
      </ul>
      <p>Scrum does not specify software development techniques but focuses on managing work.</p>

      <h3>Kanban:</h3>
      <p>Kanban, a management approach, visualizes and optimizes the flow of work using:</p>
      <ul>
        <li><strong>Kanban Board:</strong> Visualizes the value chain with columns for each activity (e.g., development, testing).</li>
        <li><strong>Work-in-Progress Limit:</strong> Limits the number of active tasks to control flow.</li>
        <li><strong>Lead Time:</strong> Aims to minimize the average time for tasks to move through the value stream.</li>
      </ul>
      <p>Kanban allows releasing deliverables item by item and does not require timeboxing or iterations like Scrum.</p>

      <h3>Collaborative User Story Creation</h3>
      <p>User stories capture requirements from developers, testers, and business representatives' perspectives. This collaborative approach ensures a shared vision and includes acceptance criteria for functional and non-functional characteristics.</p>
      <p>Techniques like brainstorming and mind mapping, and the INVEST criteria (Independent, Negotiable, Valuable, Estimable, Small, Testable) help in user story creation. User stories include:</p>
      <ul>
        <li><strong>Card:</strong> Describes the requirement and acceptance criteria.</li>
        <li><strong>Conversation:</strong> Explains how the software will be used, with inputs from testers.</li>
        <li><strong>Confirmation:</strong> Uses acceptance criteria to confirm the story is done.</li>
      </ul>
      <p>Documentation should be concise and sufficient.</p>

      <h3>Retrospectives</h3>
      <p>Retrospectives, held at the end of each iteration, discuss successes and improvements. They focus on processes, people, tools, and relationships, driving continuous improvement in development and testing.</p>
      <p>Testers play a crucial role, bringing unique perspectives and contributing to both testing and non-testing activities. Retrospectives must be professional and trust-based to be effective.</p>

      <h3>Continuous Integration</h3>
      <p>Continuous integration ensures reliable, integrated software at the end of every sprint. It involves merging and testing code changes regularly through an automated process, including:</p>
      <ul>
        <li>Static code analysis</li>
        <li>Compilation</li>
        <li>Unit testing</li>
        <li>Deployment</li>
        <li>Integration testing</li>
        <li>Reporting</li>
      </ul>
      <p>Benefits include early defect detection, regular feedback, reduced regression risk, and visible progress. However, it requires maintaining tools and processes and thorough test coverage.</p>

      <h3>Release and Iteration Planning</h3>
      <p><strong>Release Planning:</strong> Looks ahead to the product release, defining and prioritizing the product backlog, and planning testing for all iterations. Testers help define user stories, perform risk analyses, estimate testing effort, and plan the testing approach.</p>
      <p><strong>Iteration Planning:</strong> Focuses on the iteration backlog, selecting and elaborating user stories, performing risk analysis, and estimating work. Testers create acceptance tests, break down stories into tasks, and estimate testing effort.</p>
      <p>Plans may change due to internal and external factors, requiring flexibility and careful test strategy decisions. Testing scope, environment, timing, and risks should be addressed in planning, with sufficient time and effort allocated for testing activities.</p>
    </div>
  );
};

export default AspectsOfAgileApproaches;
