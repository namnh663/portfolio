import React, { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'Live Payments',
    role: 'Senior QA Engineer',
    duration: 'Nov 2023 - Jun 2024',
    description: 'At Live Payments, a leading provider of payment solutions at Australia, I was part of the QA team responsible for our new and crucial Live Portal product. Live Payments offers a range of payment terminal solutions, including mobile, countertop, and all-in-one terminals, integrating with over 400 POS systems. Our Live Portal functions as a virtual terminal, enabling flexible web or mobile payments, and supports popular e-commerce platforms like WooCommerce and Magento through dedicated plugins. Given the strategic importance of this new product, the company sought senior-level professionals to ensure its reliability and performance. The online portal was designed to integrate all existing company products and manage transactions from physical terminals, making comprehensive API testing essential. My primary responsibility was to ensure the effectiveness of API testing. I successfully implemented automated testing using the Karate framework, which was a significant achievement. This involved creating a detailed testing strategy, enhancing existing testing processes, and leading the team in the adoption of automated and manual testing practices. I also conducted extensive training sessions, enabling my team to effectively test APIs using Postman and develop automated scripts. This integration of API testing into our overall testing process greatly improved our efficiency and accuracy. Additionally, I supported manual testing efforts for physical terminals when needed, demonstrating flexibility and a collaborative approach. My work ensured that our API testing was thorough and efficient, contributing to the successful integration of multiple products and third-party services within the portal. The success of these efforts was reflected in the seamless functionality and reliability of our Live Portal, which became a cornerstone product for Live Payments. This experience not only honed my technical skills but also underscored the importance of leadership, strategic planning, and effective team collaboration in delivering high-quality software solutions.',
  },
  {
    company: 'ITL (In Do Trans Logistics Corporation)',
    role: 'Senior QA Engineer',
    duration: 'Oct 2022 - Oct 2023',
    description: 'At ITL, a leading company in the transportation, aviation, and logistics sector, I played a pivotal role in the development of VELA, a strategic and highly significant product for the company. VELA was a new digital platform designed to integrate numerous services from top logistics companies in Vietnam. It received substantial investment and attention from senior management due to its potential to revolutionize our service offerings and strengthen our market position. As a key member of the VELA team, I was entrusted with the critical responsibility of ensuring the quality and reliability of this innovative product. Given that VELA was being built from the ground up, my role involved tackling numerous challenges and complex tasks. I led the testing team, developing comprehensive testing processes to guarantee thorough test coverage throughout the software development lifecycle. Working closely with senior management, I provided valuable feedback, crafted detailed testing strategies, and implemented improvements in our workflows. My responsibilities also included creating automated scripts to streamline Jira workflows, significantly optimizing task processing times and enhancing overall efficiency. In addition to my testing duties, I supported project managers by facilitating meetings as a Scrum Master, ensuring effective communication and coordination within the team. I developed detailed, real-time reports and dashboards, enabling data-driven decision-making and allowing the leadership to monitor progress and make informed decisions promptly. Being one of the foundational members of the VELA team, I contributed significantly to the success of the project. I led by example, mentoring team members to enhance their technical and interpersonal skills, fostering a collaborative and high-performing team environment. I established rigorous testing procedures, created extensive documentation, and provided training and system usage guides to ensure everyone was aligned and well-equipped. My efforts in automating various workflows not only improved efficiency but also freed up valuable time for the team to focus on more strategic tasks. This holistic approach to quality assurance and process improvement was crucial in delivering a robust and reliable product that met the high expectations of both the company and its clients.',
  },
  {
    company: 'Home Credit Vietnam',
    role: 'Software Test Engineer',
    duration: 'Mar 2021 - Sep 2022',
    description: '',
  },
  {
    company: 'Orient Commercial Joint Stock Bank (OCB)',
    role: 'QA Analyst',
    duration: 'Mar 2020 - Feb 2021',
    description: '',
  },
  {
    company: 'HDBank',
    role: 'Software Tester',
    duration: 'Sep 2018 - Feb 2020',
    description: '',
  },
];

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCompanyClick = (company) => {
    setSelectedCompany(selectedCompany === company ? null : company);
  };

  return (
    <div className="experience">
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item" onClick={() => handleCompanyClick(experience.company)}>
            <h4>{experience.company}</h4>
            <p className="duration">{experience.duration}</p>
            {selectedCompany === experience.company && <p>{experience.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
