import React from 'react';
import './Topic.css';

const StaticTestingTypes = () => {
    return (
        <div className="topic-detail">
            <h2>Types of Static Testing</h2>
            <h3>1. Informal Review</h3>
            <ul>
                <li><strong>Main goal</strong>: Detect defects and generate ideas.</li>
                <li>Unstructured process.</li>
            </ul>
            <h3>2. Walkthrough</h3>
            <ul>
                <li><strong>Main goal</strong>: Find defects, consider alternatives, and check compliance with standards.</li>
                <li><strong>Secondary goals</strong>: Share ideas, train participants, and reach consensus.</li>
            </ul>
            <h3>3. Technical Review</h3>
            <ul>
                <li><strong>Main goal</strong>: Detect defects and gain consensus on quality.</li>
                <li><strong>Reviewers</strong>: Technical peers or experts.</li>
            </ul>
            <h3>4. Inspection</h3>
            <ul>
                <li><strong>Main goal</strong>: Detect defects, evaluate quality, build confidence, and prevent future issues.</li>
                <li>Follows a defined process with documented outputs.</li>
                <li><strong>Secondary goals</strong>: Motivate authors and improve processes.</li>
            </ul>

            <section>
                <h3>Success Factors for Reviews</h3>
                <ul>
                    <li><strong>Clear Objectives</strong>: Defined during planning and used as exit criteria.</li>
                    <li><strong>Appropriate Review Type</strong>: Matches review goals and work product.</li>
                    <li><strong>Right People Involved</strong>: Diverse skillsets and perspectives.</li>
                    <li><strong>Valuing Testers</strong>: Contribution to review and test preparation.</li>
                    <li><strong>Defect Handling</strong>: Acknowledging, appreciating, and addressing defects effectively.</li>
                </ul>
            </section>
        </div>
    );
};

export default StaticTestingTypes;