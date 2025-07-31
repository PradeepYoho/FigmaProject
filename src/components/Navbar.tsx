import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const activeClass = "bg-white";

  return (
    <div className="fixed pt-5 top-5 left-0 right-0 z-50 flex justify-center pointer-events-none">
  <div
    className={`w-full max-w-[calc(100%-32px*2)] px-4 flex items-center justify-between h-[80px] rounded-full transition-colors duration-300 pointer-events-auto ${
      scrolled ? 'bg-white shadow-md backdrop-blur-md' : 'bg-cyan-100/50'
    }`}
  >
        <Link to="/" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center mb-2 md:mb-0">
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </Link>

        <div className="hidden md:flex items-center justify-center space-x-4 flex-1">
          <Link to="/home" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/home") ? activeClass : ""}`}>
            <img src={group1} alt="Home" className="w-5 h-5 object-cover" />
          </Link>
          <Link to="/institute" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/institute") ? activeClass : ""}`}>
            <img src={group2} alt="Institute" className="w-15 h-15 object-cover" />
          </Link>
          <Link to="/calendar" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/calendar") ? activeClass : ""}`}>
            <img src={group3} alt="Calendar" className="w-12 h-12 object-cover" />
          </Link>
          <Link to="/clock" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/clock") ? activeClass : ""}`}>
            <img src={group4} alt="Clock" className="w-12 h-12 object-cover" />
          </Link>
          <Link to="/payment" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/payment") ? activeClass : ""}`}>
            <img src={group5} alt="Payment" className="w-12 h-12 object-cover" />
          </Link>
          <Link to="/users" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/users") ? activeClass : ""}`}>
            <img src={group6} alt="Building" className="w-12 h-12 object-cover" />
          </Link>
          <Link to="/settings" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/settings") ? activeClass : ""}`}>
            <img src={group7} alt="Settings" className="w-14 h-14 object-cover" />
          </Link>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 mt-2 md:mt-0">
          <Link to="/notifications" className={`w-10 h-10 rounded-full flex justify-center items-center ${isActive("/notifications") ? activeClass : ""}`}>
            <img src={notify} alt="Notifications" className="w-full h-full object-cover" />
          </Link>
          <Link to="/profile" className={`w-10 h-10 rounded-full overflow-hidden ${isActive("/profile") ? activeClass : ""}`}>
            <img src={profile} alt="Profile" className="w-full h-full object-cover" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;