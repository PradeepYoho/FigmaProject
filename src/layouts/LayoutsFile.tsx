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
         
          <div
  className={`fixed left-0 right-0 z-50 px-4 sm:px-6 md:px-10 xl:px-20 transition-colors duration-300 ${
    scrolled ? 'bg-[#0e2b56]/90 shadow-lg backdrop-blur-md' : ''
  }`}
>
  <div className="max-w-[1600px] mx-auto">
    <Navbar />
  </div>
</div>

          <div className="pt-20">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutsFile;