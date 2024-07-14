import React from 'react';
import './Topic.css';

const RiskManagement = () => {
  return (
    <div className="topic-detail">
      <h2>Risk Management</h2>

      <p>Organizations encounter numerous internal and external factors that create uncertainty in achieving their objectives (ISO 31000). Effective risk management enhances the likelihood of achieving these objectives, improves product quality, and boosts stakeholder confidence and trust.</p>

      <p><strong>Main Risk Management Activities:</strong></p>
      <ul>
        <li><strong>Risk Analysis:</strong> Involves risk identification and risk assessment.</li>
        <li><strong>Risk Control:</strong> Encompasses risk mitigation and risk monitoring.</li>
      </ul>
      <p>The test approach that selects, prioritizes, and manages test activities based on risk analysis and control is known as risk-based testing.</p>

      <h3>Risk Definition and Risk Attributes</h3>
      <p><strong>Risk:</strong> A potential event, hazard, threat, or situation causing an adverse effect. Characterized by:</p>
      <ul>
        <li><strong>Risk Likelihood:</strong> The probability of occurrence (greater than zero and less than one).</li>
        <li><strong>Risk Impact:</strong> The consequences of the occurrence.</li>
      </ul>
      <p><strong>Risk Level:</strong> A measure combining risk likelihood and impact. Higher risk levels indicate a greater need for treatment.</p>

      <h3>Project Risks and Product Risks</h3>
      <p><strong>Project Risks:</strong></p>
      <ul>
        <li><strong>Organizational Issues:</strong> Delays, inaccurate estimates, cost-cutting.</li>
        <li><strong>People Issues:</strong> Insufficient skills, conflicts, communication problems, staff shortages.</li>
        <li><strong>Technical Issues:</strong> Scope creep, poor tool support.</li>
        <li><strong>Supplier Issues:</strong> Third-party delivery failure, bankruptcy.</li>
      </ul>
      <p>Project risks impact the schedule, budget, or scope, affecting the project's ability to achieve objectives.</p>

      <p><strong>Product Risks:</strong></p>
      <ul>
        <li><strong>Quality Characteristics:</strong> Missing or incorrect functionality, runtime errors, poor architecture, inefficient algorithms, inadequate response times, poor user experience, security vulnerabilities.</li>
        <li><strong>Consequences:</strong> User dissatisfaction, loss of revenue, trust, reputation, damage to third parties, high maintenance costs, criminal penalties, and in extreme cases, physical harm or death.</li>
      </ul>

      <h3>Product Risk Analysis</h3>
      <p><strong>Objective:</strong> To focus testing efforts on minimizing residual product risks by providing awareness of these risks.</p>

      <p><strong>Process:</strong></p>
      <ul>
        <li><strong>Risk Identification:</strong> Generate a comprehensive list of risks using techniques like brainstorming, workshops, interviews, or cause-effect diagrams.</li>
        <li><strong>Risk Assessment:</strong> Categorize identified risks, determine their likelihood and impact, prioritize them, and propose handling strategies.</li>
      </ul>

      <p><strong>Approaches:</strong></p>
      <ul>
        <li><strong>Quantitative:</strong> Calculate risk level as the product of likelihood and impact.</li>
        <li><strong>Qualitative:</strong> Use a risk matrix to determine risk levels.</li>
      </ul>

      <p><strong>Impact on Testing:</strong></p>
      <ul>
        <li>Defines the scope and thoroughness of testing.</li>
        <li>Determines test levels, types, techniques, and coverage.</li>
        <li>Estimates required test effort.</li>
        <li>Prioritizes testing to find critical defects early.</li>
        <li>Identifies additional risk reduction activities beyond testing.</li>
      </ul>

      <h3>Product Risk Control</h3>
      <p>Comprises all measures that are taken in response to identified and assessed product risks. Product risk control consists of risk mitigation and risk monitoring.</p>
      <ul>
        <li><strong>Risk Mitigation:</strong> Implement actions proposed during risk assessment to reduce risk levels.</li>
        <li><strong>Risk Monitoring:</strong> Ensure mitigation actions are effective, improve risk assessment with new information, and identify emerging risks.</li>
      </ul>

      <p>With respect to product risk control, once a risk has been analyzed, several response options to risk are
possible, e.g., risk mitigation by testing, risk acceptance, risk transfer, or contingency plan (Veenendaal
2012). Actions that can be taken to mitigate the product risks by testing are as follows:</p>
      <ul>
        <li>Select appropriate testers, apply an adequate level of independence, conduct reviews and static analysis, apply suitable test techniques and coverage levels, perform dynamic testing including regression testing.</li>
      </ul>
    </div>
  );
};

export default RiskManagement;
