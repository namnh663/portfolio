import React from 'react';
import gTAAImage from '../../assets/images/gTAA_diagram.png';
import TAFLayersImage from '../../assets/images/TAF_layers.png';
import MutipleTAFsImage from '../../assets/images/Multiple_TAFs.png';
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
            <p>Supports the automated design of test cases based on a test model. Model-based testing tools can be leveraged in the generation process. Test generation is an optional capability.</p>

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

            <h3>Apply Layering of Test Automation Frameworks</h3>
            <p><b>Test Automation Frameworks:</b></p>
            <p>The TAF is the foundation of a TAS. It often includes a test harness, also known as test runner, and test libraries, test scripts and test suites.</p>

            <p><b>TAF Layers:</b></p>
            <p>TAF layers define a distinct border of classes that have similar purposes such as test cases, test reporting, test logging, encryption, and test harnesses. By introducing a layer for each single purpose, the design can become complicated. Therefore, it is recommended to keep the number of TAF layers low.</p>

            <img src={TAFLayersImage} alt="TAF layers" className="responsive-image" />

            <p><b>Test scripts:</b></p>
            <p>Its purpose is to provide a test case repository of the SUT and test suite annotations. It calls the services of the business logic layer which may involve test steps, user flows, or API calls. However, no direct calls should be made to the core libraries from test scripts.</p>

            <p><b>Business logic:</b></p>
            <p>All the SUT dependent libraries are stored in this layer. These libraries will inherit the class files of the core libraries or use the facades provided by them. The business logic layer is used to set up the TAF to run against the SUT and the additional configurations.</p>

            <p><b>Core libraries:</b></p>
            <p>All the libraries that are independent of any SUT are stored in this layer. These core libraries can be reused in any type of project that shares the same development stack.</p>

            <img src={MutipleTAFsImage} alt="Mutiple TAFs" className="responsive-image" />

            <p><b>Scaling test automation:</b></p>
            <p>The following example (figure 3) shows how the core libraries provide a reusable base for multiple TAFs. In Project #1 there are two TAFs built on top of the core libraries, and a separate project leverages the already existing core libraries to build their TAF for testing App #3. One TAE builds the TAFs for Project #1, while a second TAE builds the TAF for Project #2.</p>

            <h3>Apply Different Approaches for Automating Test Cases</h3>
            <p>There are several development approaches that teams can choose from to produce automated test cases. These can include interactive scripting languages or compiled programming languages. The different approaches provide different benefits of automation and can be leveraged in different circumstances. Although test-driven development (TDD) and behavior-driven development (BDD) are development methodologies, if followed correctly, they result in automated test case development.</p>

            <p><b>Capture/playback</b></p>
            <p>Capture/playback is an approach that captures interactions with the SUT while a sequence of actions is performed manually. These tools produce test scripts during the capturing, and depending on the tool used, test automation code may be modifiable. The tools that do not expose code are sometimes referred to as no-code test automation, while the tools exposing code are referred to as low-code test automation.</p>
            <p><b>Pros:</b> Initially easy to set up and use</p>
            <p><b>Cons:</b></p>
            <ul>
                <li>Hard to maintain, scale and evolve</li>
                <li>The SUT needs to be available while capturing a test case</li>
                <li>Only feasible for a small scope and an SUT that rarely changes</li>
                <li>The captured SUT execution depends highly on the SUT version from which the capture has been taken</li>
                <li>Recording each individual test case instead of reusing existing building blocks is time consuming</li>
            </ul>

            <p><b>Linear scripting</b></p>
            <p>Linear scripting is a programming activity that does not require custom test libraries made by a TAE and is used for writing and executing the test scripts. A TAE can leverage any test scripts that are recorded by a capture/playback tool, which then can be modified.</p>
            <p><b>Pros:</b></p>
            <ul>
                <li>Easy to set up and to start writing test scripts</li>
                <li>Compared to capture/playback, the test scripts can be modified more easily</li>
            </ul>
            <p><b>Cons:</b></p>
            <ul>
                <li>Hard to maintain, scale and evolve</li>
                <li>The SUT needs to be available while capturing a test case</li>
                <li>Only feasible for a small scope and an SUT that rarely changes</li>
                <li>Compared to capture/playback, some programming knowledge is necessary</li>
            </ul>

            <p><b>Structured scripting</b></p>
            <p>Test libraries are introduced with reusable elements, test steps and/or user journeys. Programming knowledge is necessary for the creation and maintenance of test scripts in this approach.</p>
            <p><b>Pros:</b></p>
            <ul>
                <li>Easy to maintain, scale, port, adapt and evolve</li>
                <li>Business logic can be separated from the test scripts</li>
            </ul>
            <p><b>Cons:</b></p>
            <ul>
                <li>Programming knowledge is necessary</li>
                <li>Initial investment into TAF development and defining the testware is time consuming</li>
            </ul>

            <p><b>Test-driven development</b></p>
            <p>Test cases are defined as part of the development process before a new feature of the SUT is implemented. The TDD approach is test, code, and refactor or otherwise known as red, green, and refactor. A developer identifies and creates one test case that will fail (red). Then he/she develops functionality that will satisfy the test case (green). The code is then refactored to optimize it and to abide by clean code principles. The process continues with the next test and next increment of functionality.</p>
            <p><b>Pros:</b></p>
            <ul>
                <li>Simplifies component level test case development</li>
                <li>Improves code quality and the structure of the code</li>
                <li>Improves testability</li>
                <li>Makes it easier to achieve a desired code coverage</li>
                <li>Reduces defect propagation to higher test levels</li>
                <li>Improves communication between developers, business representatives and testers</li>
                <li>User stories that are not verified using GUI testing and API testing can quickly achieve exit criteria by following TDD</li>
            </ul>
            <p><b>Cons:</b></p>
            <ul>
                <li>Initially takes more time to get accustomed to TDD</li>
                <li>Not following TDD properly can result in false confidence in code quality</li>
            </ul>

            <p><b>Data-driven testing</b></p>
            <p>Data-driven testing (DDT) builds upon the structured scripting approach. The test scripts are provided with test data (e.g., .csv files, .xlsx files, and database dumps). This allows for running the same test scripts multiple times with different test data.</p>
            <p><b>Pros:</b></p>
            <ul>
                <li>Allows quick and easy test case expansion through data feeds</li>
                <li>The cost of adding new automated tests can be significantly reduced</li>
                <li>Test analysts can specify automated tests by populating one or more test data files that describe the tests. This gives test analysts more freedom to specify automated tests with less dependency on the technical test analysts.</li>
            </ul>
            <p><b>Cons:</b> Proper test data management may be necessary</p>

            <p><b>Behavior-Driven Development</b></p>
            <p>BDD leverages a natural language format (i.e., given, when, and then) in formulating acceptance criteria that can be used as automated test cases and stored in feature files. A BDD tool then can understand the language and execute the test cases.</p>
            <p><b>Pros:</b></p>
            <ul>
                <li>Improves communication between developers, business representatives and testers</li>
                <li>Automated BDD scenarios act as test cases and ensure coverage of specifications</li>
                <li>BDD can be leveraged in producing multiple test types on different levels of the test pyramid</li>
            </ul>
            <p><b>Cons:</b></p>
            <ul>
                <li>Additional test cases, typically negative test conditions and edge cases still need to be defined by the team, typically by a test analyst or a TAE</li>
                <li>Many teams confuse BDD to be only a way of writing test cases in a natural language, and do not involve the business representatives and developers in the whole approach</li>
                <li>Implementing and maintaining the natural language test steps is a complex task for TAEs to cover</li>
                <li>Overly complex test steps will turn debugging into a difficult and costly activity</li>
            </ul>

            <h3>Apply Design Principles and Design Patterns</h3>
            <p>Test automation is a software development activity. Therefore, design principles and design patterns are just as important for a TAE as for a software developer.</p>
            
            <p><b>Object-oriented programming principles:</b></p>
            <p>There are four major object-oriented programming principles: encapsulation, abstraction, inheritance, and polymorphism.</p>
            
            <p><b>SOLID principles:</b></p>
            <p>It is an acronym of single responsibility, open-closed, Liskov substitution, interface substitution and dependency inversion. These principles improve code readability, maintainability, and scalability.</p>
            
            <p><b>Design patterns:</b></p>
            <p>Of the many design patterns, three are most important for TAEs.</p>
            <p>The facade pattern hides implementation details to only expose what the testers need to create in the test cases, and the singleton pattern is often used to make sure that there is only one driver that communicates with the SUT.</p>
            <p>In the page object model, a class file is created and referred to as a page model. Whenever the SUT's structure changes, the TAE will have to make updates in only one place, the locator inside a page model, instead of updating the locators in each test case.</p>
            <p>The flow model pattern is an expansion to the page object model. It introduces an additional facade over the page object models, which stores all the user actions that interact with the page objects. By introducing a double facade design, the flow model pattern provides an improved abstraction and maintainability as test steps can be reused in multiple test scripts.</p>
        </div>
    );
}

export default DesignConceptsInTestAutomation;
