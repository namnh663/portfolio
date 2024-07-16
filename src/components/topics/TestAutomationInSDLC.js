import React from 'react';
import './Topic.css';

const TestAutomationInSDLC = () => {
    return (
        <div className="topic-detail">
            <h2>Test Automation in the SDLC</h2>

            <h3>How Test Automation is Applied Across Different SDLC Models</h3>
            
            <p>Waterfall Model:</p>
            <p>The waterfall model is a linear and sequential SDLC model with distinct phases: requirements, design, implementation, verification, and maintenance. Each phase typically concludes with documentation that must be approved. In this model, test automation is generally implemented in parallel to or after the implementation phase. Test runs usually occur during the verification phase, as the software components are not ready for testing until then.</p>
            
            <p>V-model:</p>
            <p>The V-model is a sequential SDLC model where the process is executed in a manner that mirrors the development phases with corresponding test activities. As the project progresses from high-level requirements to low-level requirements, corresponding test and integration activities are defined to validate those requirements. The traditional test levels—component, component integration, system, system integration, and acceptance—are derived from this model. Providing a test automation framework (TAF) for each test level is possible and recommended.</p>
            
            <p>Agile Software Development:</p>
            <p>In Agile software development, test automation can be integrated in numerous ways. Unlike the waterfall or V-model, Agile allows TAEs and business representatives to collaboratively decide on the roadmap, timeline, and planned test delivery. Best practices such as code reviews, pair programming, and frequent automated test execution are common. Eliminating silos (ensuring collaboration among developers, testers, and other stakeholders) helps cover all test levels with the appropriate amount and depth of test automation, achieving a goal known as in-sprint automation.</p>
            
            <h3>Selecting Suitable Test Automation Tools for a Given SUT</h3>
            <p>To select the most suitable test automation tools for a project, the system under test (SUT) must first be analyzed. TAEs should identify the project requirements to establish a baseline for tool selection. Different test automation tools are designed for various purposes, such as UI software or web services, so understanding the project's long-term goals is essential. While multiple test automation tools and features can be used, cost considerations are important. The choice between commercial off-the-shelf tools and custom solutions based on open-source technology can be complex.</p>
            <p>Another key factor is the composition and experience of the test automation team. If testers have limited or no programming experience, a low-code or no-code solution might be suitable. For technical testers with programming skills, selecting tools that use the same language as the SUT offers several advantages, such as more efficient collaboration with developers on debugging test automation defects and cross-training team members.</p>
        </div>
    );
}

export default TestAutomationInSDLC;
