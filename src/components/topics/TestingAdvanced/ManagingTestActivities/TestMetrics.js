import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../Topic.css';

const TestMetrics = () => {
    return (
        <div className="topic-detail">
            <h2>Test Metrics</h2>
            <p>
                There's a saying in management: "What gets measured, gets done." Likewise, what is not measured is not likely to be done because it is easy to ignore. Therefore, it is important to establish a proper set of metrics for any endeavor, including testing.
            </p>
            <p>
                Test objectives are the answer to why we test (see Section <NavLink to="/testing-advanced/project-test-strategy">Project Test Strategy</NavLink>). To determine whether the test objectives have been met, one must define a way to measure them. Test metrics are the indicators that help us answer this question.
            </p>
            <p>
                Test metrics can be categorized as follows:
            </p>
            <ul>
                <li><b>Project Metrics:</b> Measure progress against existing project exit criteria, such as the percentage of tests executed, passed, and failed.</li>
                <li><b>Product Metrics:</b> Measure product attributes, such as the degree to which the product meets the quality expectations of the intended users.</li>
                <li><b>Process Metrics:</b> Measure the capability of the testing process and the effectiveness of testing. Process metrics are used to report process-related effectiveness and efficiency.</li>
            </ul>

            <h3>Metrics for Test Management Activities</h3>
            <p>
                The Advanced Level Test Management Syllabus focuses on the following generic test management activities:
            </p>
            <ul>
                <li>Test planning</li>
                <li>Test monitoring and test control</li>
                <li>Test completion (see Section 1.1, <em>The Test Process</em>).</li>
            </ul>
            <p>
                Test management must define a set of test metrics for test monitoring, test control, and test completion as part of the test planning activities. Each metric needs to be defined, measured, monitored, and reported.
            </p>
            <p>
                During test planning, appropriate test metrics are defined that match the test objectives from the project test strategy.
            </p>
            <p>
                The metrics used during test monitoring and test control may differ from those used at test completion. During test monitoring and test control, the metrics focus on the progress of the test activities. In test completion, the test objectives should be achieved. One or more metrics could be combined to measure test exit criteria assigned to specific test objectives.
            </p>

            <p>
                The following table provides examples of metrics (there are many more) used in test management activities:
            </p>

            <div className="table-container">
                <table className="rtm-table">
                    <thead>
                        <tr>
                            <th>Metric (planned/monitored for defined milestones)</th>
                            <th>Test Monitoring and Test Control</th>
                            <th>Test Completion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Requirements coverage</td>
                            <td>X</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>Product risk coverage</td>
                            <td>X</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>Code coverage</td>
                            <td>X</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Actual vs. planned estimation (in hours) for testing activities</td>
                            <td>X</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Percentage of executed test cases per status (e.g., failed, blocked) vs. planned test cases</td>
                            <td>X</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>Accumulated number of resolved defects vs. accumulated number of defects</td>
                            <td>X</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Actual automated test cases vs. planned automated test cases</td>
                            <td></td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>Actual vs. planned cost of testing</td>
                            <td>X</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p><strong>Table 2: Examples of Metrics Used in Test Management Activities</strong></p>

            <p>
                The table shows the metrics used in specific test activities. Metrics with an "X" in <em>Test Monitoring and Test Control</em> are primarily used to measure progress and are reported in test progress reports (CTFL). Metrics with an "X" in <em>Test Completion</em> are primarily used to measure the achievement of test objectives and are reported in the test completion report (CTFL). Metrics with an "X" in both columns can be used for either.
            </p>
            <p>
                There are also metrics for monitoring test effectiveness (e.g., defect detection percentage (DDP)).
            </p>

            <h3>Monitoring - Control - Completion</h3>
            <p>
                Test metrics are indicators that show how far the test has progressed and whether the exit criteria or related test tasks have been achieved.
            </p>

            <p>
                Test monitoring is the activity of collecting data regarding the test and the associated evaluation and assessment. It is used to evaluate the testing progress and to check the fulfillment of the exit criteria or the associated test activities. Exit criteria are derived from the test objectives.
            </p>

            <p>
                Test control uses the information from test monitoring to provide guidance and corrective actions to achieve effective and efficient testing. Examples of test control directives include:
            </p>
            <ul>
                <li>Re-prioritizing tests when an identified risk becomes an issue.</li>
                <li>Re-evaluating whether a test item meets the entry criteria or exit criteria due to rework.</li>
                <li>Adjusting the test schedule to account for a delay in the delivery of the test environment.</li>
                <li>Adding new resources when and where needed.</li>
            </ul>

            <p>
                Test completion collects data from completed test activities to consolidate lessons learned, testware, and other relevant information. Test completion occurs at project milestones, such as:
            </p>
            <ul>
                <li>The completion of a test level.</li>
                <li>The completion of an iteration.</li>
                <li>The completion (or cancellation) of a test project.</li>
                <li>The release of a product.</li>
                <li>The completion of a maintenance release.</li>
            </ul>

            <p>
                Common test metrics used in test management activities include project progress metrics and metrics that show progress against the planned schedule and budget, the current test item quality, and the effectiveness of testing against the test objectives or iteration objectives.
            </p>

        </div>
    );
};

export default TestMetrics;