import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Knowledge from './pages/Knowledge';
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
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />}></Route>
            <Route path="/knowledge" element={<Knowledge />}>
              <Route path="terminology" element={<Terminology />} />
              <Route path="definition" element={<Definition />} />
              <Route path="principles" element={<Principles />} />
              <Route path="sdlc-testing" element={<SdlcTesting />} />
              <Route path="types" element={<Types />} />
              <Route path="levels" element={<Levels />} />
              <Route path="methods" element={<Methods />} />
              <Route path="techniques" element={<Techniques />} />
              <Route path="design" element={<Design />} />
              <Route path="process" element={<Process />} />
              <Route path="documentation" element={<Documentation />} />
              <Route path="defects" element={<Defects />} />
              <Route path="tools" element={<Tools />} />
              <Route path="best-practices" element={<BestPractices />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
