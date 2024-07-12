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
import MobileTesting from './pages/MobileTesting';
import AgileTesting from './pages/AgileTesting';
import QaRole from './components/topics/QaRole';
import TestApproach from './components/topics/TestApproach';
import TestingProcessTransparent from './components/topics/TestingProcessTransparent';
import UnitTesting from './components/topics/UnitTesting';
import TypesOfMobileApplications from './components/topics/TypesOfMobileApplications';
import EndToEndMobileTesting from './components/topics/EndToEndMobileTesting';
import TypesOfMobileTesting from './components/topics/TypesOfMobileTesting';
import ChallengesInMobileTesting from './components/topics/ChallengesInMobileTesting';
import IntegrationTesting from './components/topics/IntegrationTesting';
import SystemTesting from './components/topics/SystemTesting';
import StaticTestingTypes from './components/topics/StaticTestingTypes';
import StaticTestingBenefits from './components/topics/StaticTestingBenefits';
import Resources from './pages/Resources';
import Principles from './components/topics/Principles';
import Types from './components/topics/Types';
import Levels from './components/topics/Levels';
import Techniques from './components/topics/Techniques';
import Design from './components/topics/Design';
import Defects from './components/topics/Defects';
import Tools from './components/topics/Tools';
import BestPractices from './components/topics/BestPractices';
import Terminology from './components/topics/Terminology';
import WhatIsTesting from './components/topics/WhatIsTesting';
import WhyTestingIsNecessary from './components/topics/WhyTestingIsNecessary';
import EssentialSkills from './components/topics/EssentialSkills';
import TestActivities from './components/topics/TestActivities';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SdlcTesting from './components/topics/SdlcTesting';
import DevelopmentApproaches from './components/articles/DevelopmentApproaches';
import EffectiveTestCases from './components/articles/EffectiveTestCases';
import HandleBugDisagreement from './components/articles/HandleBugDisagreement';
import WhatToIncludeInBugReport from './components/articles/WhatToIncludeInBugReport';
import FundamentalsOfAPITesting from './components/articles/FundamentalsOfAPITesting';
import PerformingAPITesting from './components/articles/PerformingAPITesting';
import DifferencesInDesignAndBehavior from './components/articles/DifferencesInDesignAndBehavior';
import ImportantAspectsOfAPITesting from './components/articles/ImportantAspectsOfAPITesting';
import RequirementTraceabilityMatrix from './components/articles/RequirementTraceabilityMatrix';
import AuthenticationAndAuthorization from './components/articles/AuthenticationAndAuthorization';
import WritingTestCasesWithoutRequirements from './components/articles/WritingTestCasesWithoutRequirements';
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
              <Route path="system-testing" element={<SystemTesting />} />
              <Route path="fundamentals-of-api-testing" element={<FundamentalsOfAPITesting />} />
              <Route path="performing-api-testing" element={<PerformingAPITesting />} />
              <Route path="important-aspects-of-api-testing" element={<ImportantAspectsOfAPITesting />} />
              <Route path="authentication-and-authorization-in-api-testing" element={<AuthenticationAndAuthorization />} />
            </Route>
            <Route path="/mobile-testing" element={<MobileTesting />}>
              <Route path="types-of-mobile-applications" element={<TypesOfMobileApplications />} />
              <Route path="types-of-mobile-testing" element={<TypesOfMobileTesting />} />
              <Route path="end-to-end-mobile-testing" element={<EndToEndMobileTesting />} />
              <Route path="challenges-in-mobile-testing" element={<ChallengesInMobileTesting />} />
              <Route path="specific-differences-in-design-and-behavior-of-android-and-ios" element={<DifferencesInDesignAndBehavior />} />
            </Route>
            <Route path="/agile-testing" element={<AgileTesting />}>
              <Route path="qa-role" element={<QaRole />} />
              <Route path="test-approach" element={<TestApproach />} />
              <Route path="make-testing-process-transparent" element={<TestingProcessTransparent />} />
            </Route>
            <Route path="/testing-foundation" element={<TestingFoundation />}>
              <Route path="terminology" element={<Terminology />} />
              <Route path="what-is-testing" element={<WhatIsTesting />} />
              <Route path="why-testing-is-necessary" element={<WhyTestingIsNecessary />} />
              <Route path="principles" element={<Principles />} />
              <Route path="test-activities" element={<TestActivities />} />
              <Route path="essential-skills" element={<EssentialSkills />} />
              <Route path="sdlc-testing" element={<SdlcTesting />} />
              <Route path="development-approaches" element={<DevelopmentApproaches />} />
              <Route path="types" element={<Types />} />
              <Route path="levels" element={<Levels />} />
              <Route path="techniques" element={<Techniques />} />
              <Route path="design" element={<Design />} />
              <Route path="requirement-traceability-matrix" element={<RequirementTraceabilityMatrix />} />
              <Route path="effective-test-cases" element={<EffectiveTestCases />} />
              <Route path="writing-test-cases-without-requirements" element={<WritingTestCasesWithoutRequirements />} />
              <Route path="handle-bug-disagreement" element={<HandleBugDisagreement />} />
              <Route path="defects" element={<Defects />} />
              <Route path="what-to-include-in-bug-report" element={<WhatToIncludeInBugReport />} />
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
