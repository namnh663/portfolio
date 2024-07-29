import React from 'react';
import '../Topic.css';

const KarateOverview = () => {
    return (
        <div className="topic-detail">
            <h2>What is Karate</h2>
            <p>
                Karate is an open-source unified test automation platform combining API testing, API performance testing, API mocks & UI testing. Karate customers typically save 80% time when writing tests for a single endpoint, use 60% less code, and tests execute faster and integrate seamlessly into existing infrastructure.
            </p>
            <p>
                Karate makes your continuous testing journey more productive with native and easy integrations with the most popular tools that fit into your quality and DevOps architecture.
            </p>

            <h3>Pros</h3>
            <ul>
                <li>
                    <b>Ease of Use</b>: Karate is beginner-friendly with
                    minimal coding required. If you lack Java experience, Karate's Gherkin
                    style makes it easy to start writing tests. You write tests in feature
                    files, narrating your intentions rather than coding, making it
                    accessible for non-coders.
                </li>
                <li>
                    <b>JSON Handling</b>: JSON is natively supported in Karate,
                    allowing you to write JSON expressions directly in feature files
                    without needing to escape special characters. Karate also excels in
                    JSON validation with various assertion methods and schema validations
                    built-in.
                </li>
                <li>
                    <b>Flexibility</b>: Karate allows coding in both Java and
                    JavaScript. If you need additional logic, you can create Java files or
                    write JavaScript code, offering more flexibility compared to Rest
                    Assured, which is limited to Java.
                </li>
                <li>
                    <b>Parallel Execution</b>: Karate supports running tests in
                    parallel without issues, leveraging Java's capabilities. Rest Assured
                    lacks native support for parallel execution, often requiring custom
                    solutions that are not recommended by its creators.
                </li>
                <li>
                    <b>Detailed Reporting</b>: Karate provides comprehensive
                    logging and detailed HTML reports, offering insights into network
                    activities and API call results. Additionally, Karate integrates with
                    Gatling for performance testing, enabling you to reuse API tests for
                    performance simulations.
                </li>
            </ul>

            <h3>Cons</h3>
            <ul>
                <li>
                    <b>Scripting Language</b>: Karate uses its own Gherkin-style
                    scripting language. While beneficial for non-Java developers, it may
                    be less comfortable for those experienced in Java, who might prefer
                    the coding style of Rest Assured.
                </li>
                <li>
                    <b>IDE Support</b>: IDEs like VS Code or IntelliJ do not
                    offer IntelliSense for Karate scripts. This lack of support means that
                    errors in spelling or command sequence are only revealed during test
                    execution, not while writing the tests.
                </li>
                <li>
                    <b>Error Debugging</b>: Finding mistakes in Karate scripts
                    can be challenging. Error messages in the console can be confusing,
                    and without IntelliSense, you must rely on experience to identify and
                    correct issues. Our class will cover common mistakes in Karate to help
                    you avoid these pitfalls.
                </li>
            </ul>

            <h3>Comparison</h3>
            <p><a href="https://www.karatelabs.io/karate-vs-rest-assured" target="_blank" rel="noopener noreferrer">Karate vs. Rest Assured</a></p>
            <p><a href="https://www.karatelabs.io/karate-vs-postman" target="_blank" rel="noopener noreferrer">Karate vs. Postman</a></p>
            <p><a href="https://www.karatelabs.io/karate-vs-playwright" target="_blank" rel="noopener noreferrer">Karate vs. Playwright</a></p>
        </div>
    );
};

export default KarateOverview;