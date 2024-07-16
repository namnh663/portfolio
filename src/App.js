import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import TestingFoundation from './pages/TestingFoundation';
import DynamicTesting from './pages/DynamicTesting';
import TestAutomation from './pages/TestAutomation';
import MobileTesting from './pages/MobileTesting';
import AgileTesting from './pages/AgileTesting';
import RiskManagement from './components/topics/RiskManagement';
import TestApproach from './components/topics/TestApproach';
import TestingProcessTransparent from './components/topics/TestingProcessTransparent';
import UnitTesting from './components/topics/UnitTesting';
import TypesOfMobileApplications from './components/topics/TypesOfMobileApplications';
import EndToEndMobileTesting from './components/topics/EndToEndMobileTesting';
import TypesOfMobileTesting from './components/topics/TypesOfMobileTesting';
import ChallengesInMobileTesting from './components/topics/ChallengesInMobileTesting';
import AgileSoftwareDevelopmentFundamentals from './components/topics/AgileSoftwareDevelopmentFundamentals';
import IntegrationTesting from './components/topics/IntegrationTesting';
import SystemTesting from './components/topics/SystemTesting';
import TestTechniques from './components/topics/TestTechniques';
import TechniquesInAgileProjects from './components/topics/TechniquesInAgileProjects';
import Resources from './pages/Resources';
import TestingPrinciples from './components/topics/TestingPrinciples';
import TestLevelsAndTestTypes from './components/topics/TestingThroughoutTheSDLC/TestLevelsAndTestTypes';
import MaintenanceTesting from './components/topics/TestingThroughoutTheSDLC/MaintenanceTesting';
import StaticTesting from './components/topics/StaticTesting';
import TestTeam from './components/topics/TestTeam';
import PurposeOfTestAutomation from './components/topics/PurposeOfTestAutomation';
import DefectManagement from './components/topics/DefectManagement';
import StatusOfTestingInAgileProjects from './components/topics/StatusOfTestingInAgileProjects';
import TestPlanning from './components/topics/TestPlanning';
import AspectsOfAgileApproaches from './components/topics/AspectsOfAgileApproaches';
import TestTools from './components/topics/TestTools';
import WhatIsTesting from './components/topics/WhatIsTesting';
import WhyTestingIsNecessary from './components/topics/WhyTestingIsNecessary';
import EssentialSkills from './components/topics/EssentialSkills';
import TestActivities from './components/topics/TestActivities';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TestingInTheSDLC from './components/topics/TestingThroughoutTheSDLC/TestingInTheSDLC';
import TestMonitoringControlCompletion from './components/topics/TestMonitoringControlCompletion';
import RoleAndSkillsOfTester from './components/topics/RoleAndSkillsOfTester';
import EffectiveTestCases from './components/articles/EffectiveTestCases';
import HandleBugDisagreement from './components/articles/HandleBugDisagreement';
import WhatToIncludeInBugReport from './components/articles/WhatToIncludeInBugReport';
import FundamentalsOfAPITesting from './components/articles/FundamentalsOfAPITesting';
import PerformingAPITesting from './components/articles/PerformingAPITesting';
import BlackBoxTestingTechniques from './components/articles/BlackBoxTestingTechniques';
import WhiteBoxTestingTechniques from './components/articles/WhiteBoxTestingTechniques';
import ExperienceBasedTestTechniques from './components/articles/ExperienceBasedTestTechniques';
import CollaborationBasedTestApproaches from './components/articles/CollaborationBasedTestApproaches';
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
            <Route path="/dynamic-testing" element={<DynamicTesting />}>
              <Route path="unit-testing" element={<UnitTesting />} />
              <Route path="integration-testing" element={<IntegrationTesting />} />
              <Route path="system-testing" element={<SystemTesting />} />
              <Route path="fundamentals-of-api-testing" element={<FundamentalsOfAPITesting />} />
              <Route path="performing-api-testing" element={<PerformingAPITesting />} />
              <Route path="important-aspects-of-api-testing" element={<ImportantAspectsOfAPITesting />} />
              <Route path="authentication-and-authorization-in-api-testing" element={<AuthenticationAndAuthorization />} />
            </Route>
            <Route path="/test-automation" element={<TestAutomation />}>
              <Route path="purpose" element={<PurposeOfTestAutomation />} />
            </Route>
            <Route path="/mobile-testing" element={<MobileTesting />}>
              <Route path="types-of-mobile-applications" element={<TypesOfMobileApplications />} />
              <Route path="types-of-mobile-testing" element={<TypesOfMobileTesting />} />
              <Route path="end-to-end-mobile-testing" element={<EndToEndMobileTesting />} />
              <Route path="challenges-in-mobile-testing" element={<ChallengesInMobileTesting />} />
              <Route path="specific-differences-in-design-and-behavior-of-android-and-ios" element={<DifferencesInDesignAndBehavior />} />
            </Route>
            <Route path="/agile-testing" element={<AgileTesting />}>
              <Route path="aspects-of-agile-approaches" element={<AspectsOfAgileApproaches />} />
              <Route path="agile-software-development-fundamentals" element={<AgileSoftwareDevelopmentFundamentals />} />
              <Route path="status-of-testing-in-agile-projects" element={<StatusOfTestingInAgileProjects />} />
              <Route path="role-and-skills-of-tester" element={<RoleAndSkillsOfTester />} />
              <Route path="techniques-in-agile-projects" element={<TechniquesInAgileProjects />} />
              <Route path="test-approach" element={<TestApproach />} />
              <Route path="the-test-team" element={<TestTeam />} />
              <Route path="make-testing-process-transparent" element={<TestingProcessTransparent />} />
            </Route>
            <Route path="/testing-foundation" element={<TestingFoundation />}>
              <Route path="what-is-testing" element={<WhatIsTesting />} />
              <Route path="why-testing-is-necessary" element={<WhyTestingIsNecessary />} />
              <Route path="principles" element={<TestingPrinciples />} />
              <Route path="test-activities" element={<TestActivities />} />
              <Route path="essential-skills" element={<EssentialSkills />} />
              <Route path="testing-in-sdlc" element={<TestingInTheSDLC />} />
              <Route path="test-levels-and-test-types" element={<TestLevelsAndTestTypes />} />
              <Route path="maintenance-testing" element={<MaintenanceTesting />} />
              <Route path="static-testing" element={<StaticTesting />} />
              <Route path="test-techniques" element={<TestTechniques />} />
              <Route path="test-planning" element={<TestPlanning />} />
              <Route path="risk-management" element={<RiskManagement />} />
              <Route path="requirement-traceability-matrix" element={<RequirementTraceabilityMatrix />} />
              <Route path="black-box-techniques" element={<BlackBoxTestingTechniques />} />
              <Route path="white-box-techniques" element={<WhiteBoxTestingTechniques />} />
              <Route path="experience-based-techniques" element={<ExperienceBasedTestTechniques />} />
              <Route path="collaboration-based-techniques" element={<CollaborationBasedTestApproaches />} />
              <Route path="effective-test-cases" element={<EffectiveTestCases />} />
              <Route path="writing-test-cases-without-requirements" element={<WritingTestCasesWithoutRequirements />} />
              <Route path="handle-bug-disagreement" element={<HandleBugDisagreement />} />
              <Route path="defect-management" element={<DefectManagement />} />
              <Route path="what-to-include-in-bug-report" element={<WhatToIncludeInBugReport />} />
              <Route path="test-monitoring-control-completion" element={<TestMonitoringControlCompletion />} />
              <Route path="tools" element={<TestTools />} />
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
