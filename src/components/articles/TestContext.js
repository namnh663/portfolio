import React from 'react';
import './Article.css';

const TestContext = () => {
    return (
        <div className="article-detail">
            <h2>The Context of Testing</h2>
            <p>
                The context of testing encompasses unique conditions and constraints influencing the test process. Test managers must align testing with the specific needs and objectives of the project, which may vary based on product type, industry, regulatory requirements, and the SDLC model employed. Understanding this context ensures pertinent, effective, and efficient testing.
            </p>

            <h3>Test Stakeholders</h3>
            <p>
                Test stakeholders have a direct or indirect interest in the product's quality. Key stakeholders include:
            </p>
            <ul>
                <li><b>Developers, Development Leads, and Managers:</b> Implement the system and conduct unit testing.</li>
                <li><b>Testers, Test Leads, and Managers:</b> Develop test plans, execute tests, track defects, and report progress.</li>
                <li><b>Project Managers, Product Owners, and Business Users:</b> Define requirements, quality levels, and participate in UAT.</li>
                <li><b>Operations Team:</b> Ensure system readiness for production and define non-functional requirements.</li>
                <li><b>Customers and Users:</b> Define requirements and participate in UAT.</li>
            </ul>
            <p>
                Conducting a stakeholder analysis is crucial for creating a comprehensive test strategy and plan.
            </p>

            <h3>Importance of Stakeholders' Knowledge in Test Management</h3>
            <p>
                Effective test management requires considering stakeholder perspectives and influence. The stakeholder matrix helps prioritize engagement and manage expectations, comprising four quadrants:
            </p>
            <ul>
                <li><b>Promoters (High Influence, High Interest):</b> Key collaborators shaping the test strategy.</li>
                <li><b>Latents (High Influence, Low Interest):</b> Crucial for resource allocation and high-level direction.</li>
                <li><b>Defenders (Low Influence, High Interest):</b> Provide qualitative feedback, kept engaged through updates.</li>
                <li><b>Apathetics (Low Influence, Low Interest):</b> Occasionally updated for insights.</li>
            </ul>
            <p>
                Test managers should compile a detailed stakeholder list and use the stakeholder matrix to enhance test management practices.
            </p>

            <h3>Test Management in a Hybrid Software Development Model</h3>
            <p>
                Hybrid models integrate elements from traditional sequential approaches and Agile practices, often used for transitioning to Agile or fitting specific project needs. Test management in hybrid settings involves:
            </p>
            <ul>
                <li>Evaluating team capability to transition between methodologies.</li>
                <li>Enhancing collaboration between test team and stakeholders.</li>
                <li>Participating in coordinated efforts like scrum-of-scrums for testers.</li>
                <li>Tracking and reviewing test efforts within sprints to align with Agile practices.</li>
            </ul>

            <h3>Test Management Activities for Various Software Development Lifecycle Models</h3>
            <p>
                Test managers must align testing within different SDLC models. Key differences in test management activities include:
            </p>

            <div className="table-container">
                <table className="rtm-table">
                    <thead>
                        <tr>
                            <th>Aspect</th>
                            <th>Sequential Model (e.g., V-Model)</th>
                            <th>Iterative Model (e.g., SCRUM)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Estimation</td>
                            <td>Early detailed estimation</td>
                            <td>Iterative estimation per story planning</td>
                        </tr>
                        <tr>
                            <td>Testware</td>
                            <td>Comprehensive documentation</td>
                            <td>Focus on acceptance criteria</td>
                        </tr>
                        <tr>
                            <td>Roles</td>
                            <td>Test manager oversees</td>
                            <td>Integrated roles, facilitator or coach</td>
                        </tr>
                        <tr>
                            <td>Tools</td>
                            <td>Phase-based tools</td>
                            <td>CI/CD and automation tools</td>
                        </tr>
                        <tr>
                            <td>Testing Approach</td>
                            <td>Scheduled in advance</td>
                            <td>Embedded within iterations</td>
                        </tr>
                        <tr>
                            <td>Test Automation</td>
                            <td>Strategic implementation</td>
                            <td>Built-in from inception</td>
                        </tr>
                        <tr>
                            <td>Monitoring and Reporting</td>
                            <td>Milestone-based, optional dashboards</td>
                            <td>Continuous reporting, real-time updates</td>
                        </tr>
                        <tr>
                            <td>Metrics</td>
                            <td>Traditional metrics (e.g., defect rates)</td>
                            <td>Agile and traditional metrics (e.g., velocity)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Test Management Activities at Various Test Levels</h3>
            <p>
                Test management varies across test levels:
            </p>
            <ul>
                <li><b>Component Testing:</b> Define scope and objectives, involve testers in code reviews, coordinate with developers.</li>
                <li><b>Component Integration Testing:</b> Determine sequences and combinations, oversee progress, manage cooperatively with developers.</li>
                <li><b>System Integration Testing:</b> Ensure clear scope and objectives, maintain oversight of progress and outcomes.</li>
                <li><b>System Testing:</b> Tailor planning to SDLC model, integrate with iterative story testing in Agile.</li>
                <li><b>Acceptance Testing:</b> Collaborate with stakeholders to confirm criteria, coordinate logistics, facilitate UAT.</li>
            </ul>

            <h3>Test Management Activities for Different Test Types</h3>
            <p>
                Effective test management integrates functional, non-functional, black-box, and white-box testing:
            </p>
            <ul>
                <li><b>Functional Testing:</b> Craft detailed strategy, allocate resources, track progress.</li>
                <li><b>Non-Functional Testing:</b> Establish benchmarks, ensure compliance with standards.</li>
                <li><b>Black-Box Testing:</b> Ensure user scenario coverage, gather feedback.</li>
                <li><b>White-Box Testing:</b> Optimize code coverage, integrate technical insights into planning.</li>
            </ul>

            <h3>Test Management Activities to Plan, Monitor, and Control</h3>
            <p>
                Key activities include:
            </p>
            <ul>
                <li><b>Test Planning:</b> Define scope, conduct risk assessment, allocate resources, plan comprehensively.</li>
                <li><b>Test Monitoring:</b> Oversee execution, optimize tool usage, collaborate with development teams.</li>
                <li><b>Test Control:</b> Adapt processes, manage quality gates, adjust strategies based on real-time insights.</li>
            </ul>
            <p>
                By focusing on these activities, test managers can ensure effective, efficient, and adaptable testing processes tailored to project needs.
            </p>
        </div>
    );
};

export default TestContext;
