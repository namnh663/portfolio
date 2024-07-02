import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import TestingFoundation from './pages/TestingFoundation';
import StaticTesting from './pages/StaticTesting';
import DynamicTesting from './pages/DynamicTesting';
import UnitTesting from './components/topics/UnitTesting';
import IntegrationTesting from './components/topics/IntegrationTesting';
import StaticTestingTypes from './components/topics/StaticTestingTypes';
import StaticTestingBenefits from './components/topics/StaticTestingBenefits';
import Resources from './pages/Resources';
import Principles from './components/topics/Principles';
import Definition from './components/topics/Definition';
import Types from './components/topics/Types';
import Levels from './components/topics/Levels';
import Methods from './components/topics/Methods';
import Techniques from './components/topics/Techniques';
import Design from './components/topics/Design';
import Process from './components/topics/Process';
import Documentation from './components/topics/Documentation';
import Defects from './components/topics/Defects';
import Tools from './components/topics/Tools';
import BestPractices from './components/topics/BestPractices';
import Terminology from './components/topics/Terminology';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SdlcTesting from './components/topics/SdlcTesting';
import DevelopmentApproaches from './components/articles/DevelopmentApproaches';
import EffectiveTestCases from './components/articles/EffectiveTestCases';
import Notification from './components/Notification';
import './App.css';

const App = () => {
  return (
    <Router basename="/portfolio">
      <div className="app">
        <Notification />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resources" element={<Resources />}></Route>
            <Route path="/static-testing" element={<StaticTesting />}>
              <Route path="type" element={<StaticTestingTypes />} />
              <Route path="benefits" element={<StaticTestingBenefits />} />
            </Route>
            <Route path="/dynamic-testing" element={<DynamicTesting />}>
              <Route path="unit-testing" element={<UnitTesting />} />
              <Route path="integration-testing" element={<IntegrationTesting />} />
            </Route>
            <Route path="/testing-foundation" element={<TestingFoundation />}>
              <Route path="terminology" element={<Terminology />} />
              <Route path="definition" element={<Definition />} />
              <Route path="principles" element={<Principles />} />
              <Route path="sdlc-testing" element={<SdlcTesting />} />
              <Route path="development-approaches" element={<DevelopmentApproaches />} />
              <Route path="types" element={<Types />} />
              <Route path="levels" element={<Levels />} />
              <Route path="methods" element={<Methods />} />
              <Route path="techniques" element={<Techniques />} />
              <Route path="design" element={<Design />} />
              <Route path="process" element={<Process />} />
              <Route path="documentation" element={<Documentation />} />
              <Route path="effective-test-cases" element={<EffectiveTestCases />} />
              <Route path="defects" element={<Defects />} />
              <Route path="tools" element={<Tools />} />
              <Route path="best-practices" element={<BestPractices />} />
            </Route>
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
