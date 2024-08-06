import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const relatedArticles = [
    {
        title: 'Black-Box Testing',
        link: '/testing-foundation/black-box-techniques'
    },
    {
        title: 'White-Box Testing',
        link: '/testing-foundation/white-box-techniques'
    },
    {
        title: 'Experience-Based Testing',
        link: '/testing-foundation/experience-based-techniques'
    },
    {
        title: 'Collaboration-Based Test Approaches',
        link: '/testing-foundation/collaboration-based-techniques'
    },
    {
        title: 'Risk-Based Testing',
        link: '/testing-foundation/risk-based-techniques'
    }
];

const TestTechniques = () => {
    return (
        <div className="topic-detail">
            <h2>Test Techniques</h2>
            <p>
                Test techniques are methods used to guide testers in designing effective test cases for software. They help create a sufficient set of tests covering important functionalities. Test techniques are used during test analysis (what to test) and test design (how to test).
            </p>

            <h3>Classifications</h3>
            <ul>
                <li>
                    <strong>Black-box testing (specification-based):</strong>
                    <ul>
                        <li>Focuses on external behavior based on requirements and specifications.</li>
                        <li>Tests are independent of internal implementation details.</li>
                        <li>Useful when implementation changes but behavior stays the same.</li>
                    </ul>
                </li>
                <li>
                    <strong>White-box testing (structure-based):</strong>
                    <ul>
                        <li>Leverages the software's internal structure (code, design).</li>
                        <li>Creates tests based on how the software is built.</li>
                        <li>Requires design or implementation details to design tests.</li>
                    </ul>
                </li>
                <li>
                    <strong>Experience-based testing:</strong>
                    <ul>
                        <li>Utilizes the tester's knowledge and skills for test design.</li>
                        <li>Effective in finding defects missed by black-box and white-box techniques.</li>
                        <li>Complementary to other approaches.</li>
                    </ul>
                </li>
            </ul>

            <h3>Choosing the Right Technique</h3>
            <p>
                The appropriate technique depends on the testing context and objectives. Combining techniques is often recommended for comprehensive testing.
            </p>

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

export default TestTechniques;
