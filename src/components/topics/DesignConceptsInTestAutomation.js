import React from 'react';
import gTAAImage from '../../assets/images/gTAA_diagram.png';
import './Topic.css';

const DesignConceptsInTestAutomation = () => {
    return (
        <div className="topic-detail">
            <h2>Design Concepts Leveraged in Test Automation</h2>

            <h3>Generic Test Automation Architecture (gTAA)</h3>
            <p>The gTAA is a high-level design concept that provides an abstract view of the communication between test automation and the systems that test automation is connected to, i.e., the SUT, project management, test management, and configuration management (see figure 1). It also provides the capabilities that are necessary to cover when designing a test automation architecture (TAA).</p>
            <p>The interfaces of gTAA describe the following:</p>
            <ul>
                <li>The SUT interface describes the connection between the SUT and the TAF.</li>
                <li>The project management interface describes the test automation development progress.</li>
                <li>The test management interface describes the mapping of test case definitions and automated test cases.</li>
                <li>Configuration management interface describes the CI/CD pipelines, environments and testware.</li>
            </ul>

            <img src={gTAAImage} alt="gTAA diagram" className="responsive-image" />

            <h3>Capabilities provided by test automation tools and libraries</h3>
            <p>Core test automation capabilities should be identified and selected from available tools as required for a given project.</p>

            <p><b>Test generation:</b></p>
            <p>Supports the automated design of test cases based on a test model. Model-based testing tools can be leveraged in the generation process (see the ISTQB CT-MBT Syllabus). Test generation is an optional capability.</p>

            <p><b>Test definition:</b></p>
            <p>Supports the definition and implementation of test cases and/or test suites, which optionally can be derived from a test model. It separates the test definition from the SUT and/or test tools. It contains the means to define high-level and low-level tests, which are handled in the test data, test cases, and test library components or combinations thereof.</p>

            <p><b>Test execution:</b></p>
            <p>Supports test execution and test logging. It provides a test execution tool to run the selected tests automatically, and a test logging and test reporting component.</p>

            <p><b>Test adaptation:</b></p>
            <p>Provides the necessary functionality to adapt the automated tests for the various components or interfaces of the SUT. It provides different adaptors for connecting to the SUT via APIs, protocols, and services.</p>

            <h3>How to Design a Test Automation Solution</h3>
            <p>A Test Automation Solution (TAS) is defined by an understanding of functional, non-functional, and technical requirements of the SUT, existing or required tools that are necessary to implement a solution. A TAS is implemented with commercial or open-source tools and may need additional SUT-specific adaptors.</p>
            <p>The TAA defines the technical design for the overall TAS. It should address:</p>
            <ul>
                <li>Selecting test automation tools and tool specific libraries</li>
                <li>Developing plugins and/or components</li>
                <li>Identifying connectivity and interface requirements (e.g., firewalls, database, uniform resource locators (URLs)/connections, mocks/stubs, message queues, and protocols)</li>
                <li>Connecting to the test management and defect management tools</li>
                <li>Utilizing a version control system and repositories</li>
            </ul>
        </div>
    );
}

export default DesignConceptsInTestAutomation;
