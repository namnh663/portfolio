import React from 'react';
import './Topic.css';

const QaRole = () => {
    return (
        <div className="topic-detail">
            <h2>Get Aligned with QA Role</h2>

            <h3>Make quality a whole team effort</h3>
            <p>What does this mean for your agile team?</p>
            <ul>
                <li><strong>Everybody</strong> needs to have a quality-driven thought process.</li>
                <li>The whole team should analyze performance impacts and potential risks of new changes and features <strong>together</strong>.</li>
                <li>The whole team needs to foster a culture of constant collaboration—with testers included in <strong>all discussions</strong>.</li>
            </ul>
            <p>
                A whole-team approach is the best way to overcome the strain on time and resources inherent with agile methodology. It's important to shift your team's mindset to "development = coding + testing."
            </p>

            <section>
                <h3>Shift your QA mindset</h3>
                <p className="important">Testers are not just testers. Testers are quality coaches.</p>
                <p>For your agile testing program to be scalable, testers need to do more than just testing:</p>
                <ul>
                    <li>Develop and optimize testing processes.</li>
                    <li>Help foster a whole-team approach.</li>
                    <li>Teach the team how to test effectively.</li>
                    <li>Coach on good quality practices.</li>
                    <li>Advise on strategy for automation, testability, test data, testing within the CI/CD pipeline, etc.</li>
                </ul>
            </section>
        </div>
    );
};

export default QaRole;
