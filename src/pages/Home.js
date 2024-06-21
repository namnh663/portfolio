import React from 'react';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Certificates from '../components/Certificates';
import ProgrammingLanguagesAndTechnologies from '../components/ProgrammingLanguagesAndTechnologies';
import TeamManagementStyle from '../components/TeamManagementStyle';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
        <AboutMe />
        <TeamManagementStyle />
      <div className="section">
        <Skills />
      </div>
        <ProgrammingLanguagesAndTechnologies />
      <div className="section">
        <Certificates />
      </div>
    </div>
  );
};

export default Home;
