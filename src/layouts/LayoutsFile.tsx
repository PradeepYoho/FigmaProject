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
      <div className="px-2 sm:px-4 md:px-2 lg:px-2 py-2">
        <div
          className="bg-cover bg-fixed bg-center rounded-lg border border-gray-300 mx-auto p-3 sm:p-4 md:p-6  max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1320px]"
          style={{ backgroundImage: `url(${blurbg})` }}
        >
          
          <div className="fixed top-0 left-0 w-full z-30 px-2 pt-4 sm:px-4 sm:pt-6 lg:px-10 lg:pt-10 ">
            <Navbar />
          </div>

         
          <div className="mt-[90px] sm:mt-[120px] md:mt-[90px] p-2 sm:p-2 md:p-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutsFile;
