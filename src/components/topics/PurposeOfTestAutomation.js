import React from 'react';
import './Topic.css';

const PurposeOfTestAutomation = () => {
    return (
        <div className="topic-detail">
            <h2>Purpose of Test Automation</h2>
            <p>Test automation involves the use of purpose-built software tools to control and set up test suites for test execution, executing tests in an automated manner, and comparing actual results to expected outcomes. It provides a wide range of features and capabilities that can interact with a system under test (SUT), covering various software types including those with or without a user interface (UI), mobile applications, network protocols, and connections.</p>

            <h3>Advantages and Disadvantages of Test Automation</h3>
            <p>Advantages:</p>
            <ul>
                <li><b>Increased Test Coverage:</b> Allows more tests to be run per build compared to manual testing.</li>
                <li><b>Complex Test Execution:</b> Enables the creation and execution of tests that cannot be performed manually, such as real-time response, remote testing, and parallel testing.</li>
                <li><b>Speed:</b> Executes tests faster than manual testing.</li>
                <li><b>Reduced Human Error:</b> Less prone to human error.</li>
                <li><b>Efficient Resource Use:</b> More effective and efficient use of test resources.</li>
                <li><b>Quick Feedback:</b> Provides quicker feedback regarding the quality of the SUT.</li>
                <li><b>System Reliability:</b> Helps improve system reliability, including availability and recoverability.</li>
                <li><b>Consistency:</b> Improves the consistency of test execution across test cycles.</li>
            </ul>

            <p>Disadvantages:</p>
            <ul>
                <li><b>Cost:</b> Additional costs may be incurred for hiring a test automation engineer (TAE), purchasing new hardware, and setting up training.</li>
                <li><b>Initial Investment:</b> Requires an initial investment to set up a test automation solution.</li>
                <li><b>Development and Maintenance Time:</b> Time is needed to develop and maintain the test automation solution.</li>
                <li><b>Clear Objectives Needed:</b> Requires clear test automation objectives to ensure success.</li>
                <li><b>Rigidity:</b> Tests can be rigid and less adaptable to changes in the SUT.</li>
                <li><b>Potential for New Defects:</b> Test automation may introduce additional defects.</li>
            </ul>

            <p>Limitations:</p>
            <ul>
                <li><b>Not All Tests Can Be Automated:</b> Some manual tests cannot be automated.</li>
                <li><b>Verification Scope:</b> Automated tests can only verify what they are programmed to do.</li>
                <li><b>Quality Characteristics:</b> Some quality characteristics may not be testable with automation, as test automation can only check machine-interpretable test results.</li>
            </ul>
        </div>
    );
}

export default PurposeOfTestAutomation;
