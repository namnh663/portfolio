import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Knowledge from './pages/Knowledge';
import AutomationTesting from './pages/AutomationTesting';
import TestingFramework from './pages/TestingFramework';
import Karate from './pages/Karate';
import PerformanceTesting from './pages/PerformanceTesting';
import ManualTesting from './pages/ManualTesting';
import APITesting from './pages/APITesting';
import Resources from './pages/Resources';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
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
            <Route path="/" element={<Dashboard />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/knowledge/automation-testing" element={<AutomationTesting />} />
            <Route path="/knowledge/automation-testing/testing-framework" element={<TestingFramework />} />
            <Route path="/knowledge/automation-testing/testing-framework/karate" element={<Karate />} />
            <Route path="/knowledge/performance-testing" element={<PerformanceTesting />} />
            <Route path="/knowledge/manual-testing" element={<ManualTesting />} />
            <Route path="/knowledge/api-testing" element={<APITesting />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
