import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

import bgimage2 from '../assets/bgimage2.png';
import blurbg from '../assets/blur-bg.png';

const LayoutsFile: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage2})` }}
    >
      <div className="p-4">
        <div
          className="bg-cover bg-fixed bg-center rounded-lg border border-gray-300 p-4"
          style={{ backgroundImage: `url(${blurbg})` }}
        >
         
          <Navbar />
          <div className="pt-20">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutsFile;