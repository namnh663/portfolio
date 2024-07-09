import React from 'react';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Tools from '../components/Tools';
import Frameworks from '../components/Frameworks';
import Certificates from '../components/Certificates';
import Technologies from '../components/Technologies';
import ProgrammingLanguages from '../components/ProgrammingLanguages';
import TeamManagementStyle from '../components/TeamManagementStyle';
import WorkingStyle from '../components/WorkingStyle';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <AboutMe />
      <WorkingStyle />
      <TeamManagementStyle />
      <ProgrammingLanguages />
      <Technologies />
      <div className="section">
        <Frameworks />
      </div>
      <div className="section">
        <Tools />
      </div>
      <div className="section">
        <Skills />
      </div>
      <div className="section">
        <Certificates />
      </div>
    </div>
  );
};

export default Home;
