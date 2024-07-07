import React from 'react';
import './Topic.css';

const ChallengesInMobileTesting = () => {
    return (
        <div className="topic-detail">
            <h2>Challenges in Mobile Testing</h2>
            <section>
                <ul>
                    <li>Managing tests across various devices, OS versions, and screen sizes.</li>
                    <li>Ensuring compatibility and performance across different mobile OS versions.</li>
                    <li>Selecting the most suitable tools for efficient and effective testing, considering factors like budget, team expertise, and project requirements.</li>
                    <li>Testing under different network conditions (Wi-Fi, 3G, 4G, 5G).</li>
                    <li>Assessing the app's impact on battery life.</li>
                    <li>Ensuring consistent performance across devices.</li>
                    <li>Keeping up with the latest security threats and ensuring app compliance.</li>
                </ul></section>

            <section>
                <h3>Best Practices</h3>
                <ul>
                    <li><strong>Automate Repetitive Tests:</strong> Use automation tools to save time and increase accuracy.</li>
                    <li><strong>Regular Updates:</strong> Keep test cases and scripts up-to-date with app changes.</li>
                    <li><strong>Real Device Testing:</strong> Test on real devices to ensure accurate results.</li>
                    <li><strong>Continuous Integration:</strong> Integrate testing into the development pipeline for early bug detection.</li>
                    <li><strong>User Feedback:</strong> Incorporate feedback from real users to improve the app's quality.</li>
                </ul>
            </section>

        </div>
    );
};

export default ChallengesInMobileTesting;
