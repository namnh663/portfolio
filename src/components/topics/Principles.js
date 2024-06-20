import React from 'react';
import './Topic.css';

const Principles = () => {
    return (
        <div className="topic-detail">
            <h2>Testing Principles</h2>
            <p>
                <strong>1. Testing Shows Presence of Defects</strong>:
                Testing can demonstrate that defects are present, but cannot prove that there are no defects. Even after testing, there's always a possibility that the software may have undetected issues.
            </p>
            <p>
                <strong>2. Exhaustive Testing is Impossible</strong>:
                Given the vast number of inputs, outputs, and paths in most software applications, it's not feasible to test everything completely. Therefore, prioritization and risk assessment are critical to select the most important areas to test.
            </p>
            <p>
                <strong>3. Early Testing</strong>:
                The earlier defects are detected in the software development lifecycle, the cheaper it is to fix them. Therefore, testing activities should start as early as possible in the development process and should be focused initially on the most critical components.
            </p>
            <p>
                <strong>4. Defect Clustering</strong>:
                In practice, defects are often found to be clustered in small areas or modules of a system. Identifying these risk-prone areas can help testers prioritize their testing efforts to be more effective.
            </p>
            <p>
                <strong>5. Pesticide Paradox</strong>:
                If the same tests are repeated over and over, eventually they will no longer find new bugs. To overcome this, test cases need to be regularly reviewed and revised, and new and different tests need to be written to explore different parts of the software.
            </p>
            <p>
                <strong>6. Testing is Context Dependent</strong>:
                Testing is heavily influenced by the context in which it is conducted. For example, safety-critical software like that used in aircraft will have different testing requirements than a low-risk mobile application.
            </p>
            <p>
                <strong>7. Absence-of-Errors Fallacy</strong>:
                Finding and fixing defects does not help if the system built is unusable and does not fulfill the users' needs and expectations. Thus, testing should not only focus on defect fixing but also on meeting the requirements and expectations of the stakeholders.
            </p>
        </div>
    );
};

export default Principles;
