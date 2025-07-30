import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';  
import group1 from '../assets/group1.png';
import group2 from '../assets/Frame 299.png';
import group3 from '../assets/group3.png';
import group4 from '../assets/group4.png';
import group5 from '../assets/group5.png';
import group6 from '../assets/group6.png';
import group7 from '../assets/Frame 307.png';
import notify from '../assets/notify.png';
import profile from '../assets/profile.png';

const Navbar: React.FC = () => {
  return (
    <div >
      <div
        className="px-3 sm:px-4 md:px-5 flex flex-wrap md:flex-nowrap items-center justify-between md:justify-center h-[80px] rounded-full"
        style={{
          backgroundColor: "#C8F6FF80",
        }}
      >
      
        <Link to="/" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center mb-2 md:mb-0">
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </Link>

     
        <div className="hidden md:flex items-center justify-center space-x-4 flex-1">
          <Link to="/home" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src={group1} alt="Home" className="w-8 h-8 object-cover" />
          </Link>
          <Link to="/institute" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src={group2} alt="institute" className="w-15 h-15 object-cover" />
          </Link>
          <Link to="/calendar" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src={group3} alt="calendar" className="w-12 h-12 object-cover" />
          </Link>
          <Link to="/clock" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src={group4} alt="clock" className="w-12 h-12 object-cover" />
          </Link>
          <Link to="/payment" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src={group5} alt="payment" className="w-12 h-12 object-cover" />
          </Link>
          <Link to="/institute" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src={group6} alt="Building" className="w-12 h-12 object-cover" />
          </Link>
          <Link to="/settings" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src={group7} alt="Cogs" className="w-14 h-14 object-cover" />
          </Link>
        </div>

  
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 mt-2 md:mt-0">
          <Link to="/notifications" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src={notify} alt="Bell" className="w-full h-full object-cover" />
          </Link>
          <Link to="/profile" className="w-10 h-10 rounded-full overflow-hidden">
            <img src={profile} alt="Profile" className="w-full h-full object-cover" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
