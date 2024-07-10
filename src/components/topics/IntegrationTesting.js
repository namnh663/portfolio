import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const relatedArticles = [
    {
        title: 'Fundamentals of API Testing',
        link: '/dynamic-testing/fundamentals-of-api-testing'
    },
    {
        title: 'Performing API Testing',
        link: '/dynamic-testing/performing-api-testing'
    },
    {
        title: 'Important Aspects of API Testing',
        link: '/dynamic-testing/important-aspects-of-api-testing'
    },
    {
        title: 'Verifying Authentication and Authorization in API Testing',
        link: '/dynamic-testing/authentication-and-authorization-in-api-testing'
    }
];

const IntegrationTesting = () => {
    return (
        <div className="topic-detail">
            <h2>Integration Testing</h2>
            <p>
                Integration testing is a crucial phase in software testing where individual software modules are combined and tested as a group. This type of testing focuses on identifying issues that occur when individual units or modules are combined, ensuring that they interact correctly to perform their intended functions as a cohesive system.
            </p>

            <section>
                <h3>Levels of Integration Testing</h3>
                <p>Integration testing can be conducted at various levels, depending on the complexity of the system and the integration strategy employed:</p>
                <ol>
                    <li><strong>Component Integration Testing</strong>: Tests the interaction between software components that are integrated to form a module. This is often the first level of integration testing, following unit testing.</li>
                    <li><strong>System Integration Testing</strong>: Focuses on the interactions between various modules or subsystems within the application architecture. It can also involve testing interactions with external systems and interfaces.</li>
                </ol>
            </section>

            <section>
                <h3>Tools</h3>
                <p>Integration testing often requires robust testing environments that closely mimic the production environment to ensure that all external interfaces and interactions with databases, APIs, and other systems are fully tested. Common tools for automation and testing include:</p>
                <ul>
                    <li><strong>Selenium</strong>: For automating web applications for testing purposes.</li>
                    <li><strong>Postman</strong>: For testing API integrations.</li>
                </ul>
            </section>

            <section className="related-articles">
                <h3>Related Articles</h3>
                <ul>
                    {relatedArticles.map((article, index) => (
                        <li key={index}>
                            <Link to={article.link}>{article.title}</Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default IntegrationTesting;
