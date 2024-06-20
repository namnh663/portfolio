import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import './Knowledge.css';

const Knowledge = () => {
  return (
    <div className="knowledge-page">
      <Sidebar />
      <div className="knowledge-content">
        <div className="knowledge-intro">
          <h2>Welcome to the Knowledge Base</h2>
          <p>Explore various topics related to software testing. Each topic provides detailed information, definitions, methods, and best practices to help you understand and implement effective testing strategies.</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Knowledge;
