import React from 'react';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
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
      <div className="section">
        <Skills />
      </div>
      <div className="section">
        <Technologies />
      </div>
      <div className="section">
        <Certificates />
      </div>
    </div>
  );
};

export default Home;
