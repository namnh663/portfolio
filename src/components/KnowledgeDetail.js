import React from 'react';
import { Outlet } from 'react-router-dom';
import './KnowledgeDetail.css';

const KnowledgeDetail = () => {
  return (
    <div className="knowledge-detail">
      <Outlet />
    </div>
  );
};

export default KnowledgeDetail;
