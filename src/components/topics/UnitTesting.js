import React from 'react';
import './Topic.css';

const UnitTesting = () => {
    return (
        <div className="topic-detail">
            <h2>Unit Testing</h2>
            <p>
                Unit testing is a foundational element of software development, focusing on verifying the smallest testable parts of an application, called units. These units are typically individual functions or methods within a larger codebase. The goal of unit testing is to isolate each part of the program and show that the individual parts are correct, ensuring that each function performs as expected before the code is integrated with other parts of the application.
            </p>

            <section>
                <h3>Benefits of Unit Testing</h3>
                <ul>
                    <li><strong>Early Bug Detection</strong>: Bugs are identified early in the development cycle, making them less expensive and easier to fix.</li>
                    <li><strong>Facilitates Changes</strong>: Well-written unit tests can protect against regressions when changes are made in the codebase.</li>
                    <li><strong>Simplifies Integration</strong>: By ensuring that each unit works correctly before integration, unit testing simplifies the integration process.</li>
                    <li><strong>Design Quality</strong>: Writing unit tests often leads to better design decisions and more maintainable code because it requires developers to consider the code through the lens of testability.</li>
                </ul>
            </section>

            <section>
                <h3>Tools and Frameworks</h3>
                <ul>
                    <li><strong>JUnit</strong>: Widely used for Java applications.</li>
                    <li><strong>NUnit</strong>: Popular for .NET applications.</li>
                    <li><strong>pytest</strong>: Commonly used in Python projects.</li>
                    <li><strong>Mocha & Jest</strong>: Preferred in JavaScript environments.</li>
                </ul>
            </section>
        </div>
    );
};

export default UnitTesting;
