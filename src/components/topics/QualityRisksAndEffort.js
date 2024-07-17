import React from 'react';
import './Topic.css';

const QualityRisksAndEffort = () => {
  return (
    <div className="topic-detail">
      <h2>Assessing Quality Risks and Estimating Test Effort</h2>
      <p>
        Testing in both Agile and traditional projects aims to reduce the risk of product quality issues to an acceptable level before release. Agile project testers use similar techniques as traditional projects for identifying quality risks, assessing risk levels, estimating the effort required to mitigate these risks, and then mitigating them through test design, implementation, and execution. However, due to the short iterations and fast-paced changes in Agile projects, these techniques need some adaptations.
      </p>
      <h3>Assessing Quality Risks in Agile Projects</h3>
      <p>
        One of the key challenges in testing is the selection, allocation, and prioritization of test conditions, including the appropriate amount of effort and sequencing of tests to optimize effectiveness and efficiency. Testers in Agile teams use risk identification, analysis, and mitigation strategies to determine an acceptable number of test cases, balancing various constraints and variables.
      </p>
      <p>
        Risk refers to the possibility of a negative outcome. The level of risk is determined by assessing both the likelihood of occurrence and the potential impact. Quality risks, which affect product quality, are distinguished from project risks, which affect project success.
      </p>
      <p>
        In Agile projects, quality risk analysis occurs at two stages:
      </p>
      <ul>
        <li><strong>Release Planning</strong>: Business representatives provide a high-level overview of the risks, with the whole team, including testers, assisting in risk identification and assessment.</li>
        <li><strong>Iteration Planning</strong>: The entire team identifies and assesses quality risks for the iteration.</li>
      </ul>
      <p>
        Examples of quality risks include:
      </p>
      <ul>
        <li>Incorrect calculations in reports (functional risk related to accuracy)</li>
        <li>Slow response to user input (non-functional risk related to efficiency)</li>
        <li>Difficulty in understanding screens and fields (non-functional risk related to usability)</li>
      </ul>
      <p>
        During iteration planning, tasks are prioritized based on the level of quality risk. Higher-risk tasks are addressed earlier with more testing effort, while lower-risk tasks are tackled later with less effort. The quality risk analysis process in Agile projects can be summarized as follows:
      </p>
      <ol>
        <li>Gather the Agile team members, including testers.</li>
        <li>List all backlog items for the current iteration.</li>
        <li>Identify quality risks for each item, considering relevant quality characteristics.</li>
        <li>Assess each risk by categorizing it and determining its level based on impact and likelihood.</li>
        <li>Determine the extent of testing proportional to the level of risk.</li>
        <li>Select appropriate test techniques to mitigate each risk.</li>
      </ol>
      <p>
        Testers then design, implement, and execute tests to mitigate the risks. The team should regularly adjust the quality risk analysis to reflect new information, reassess existing risks, and evaluate the effectiveness of mitigation activities. Early risk mitigation can also involve thorough review of user stories.
      </p>
      <h3>Estimating Testing Effort Based on Content and Risk</h3>
      <p>
        During release planning, the Agile team estimates the effort required to complete the release, including testing effort. A common estimation technique in Agile is planning poker, a consensus-based approach. The product owner reads a user story, and each estimator privately selects a card representing their estimate of effort using values similar to the Fibonacci sequence or other progressions. These values represent story points, effort days, or other units.
      </p>
      <p>
        Estimators discuss the feature, ask questions, and consider factors such as development and testing effort, complexity, and scope. Including the risk level of backlog items in these discussions helps ensure a reliable estimate. After the discussion, each estimator reveals their card. If all estimators agree, that value becomes the estimate. If not, further discussion and subsequent rounds of planning poker continue until agreement is reached.
      </p>
      <p>
        These discussions improve the accuracy of effort estimates and enhance the team's collective understanding of the tasks, leading to better planning and risk management.
      </p>
    </div>
  );
};

export default QualityRisksAndEffort;
