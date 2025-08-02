import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.png';  
import group1 from '../assets/group1.png';
import notify from '../assets/notify.png';
import profile from '../assets/profile.png';
import { FaUsers } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { IoIosCard } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
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

  const [showProfileMenu, setShowProfileMenu] = useState(false);
const profileRef = useRef(null);


useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (profileRef.current && !(profileRef.current as HTMLElement).contains(event.target as Node)) {
      setShowProfileMenu(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

  const isActive = (path: string) => {
  if (path === "/home") {
    return location.pathname === "/" || location.pathname === "/home";
  }
  return location.pathname === path;
};
  const activeClass = "bg-white w-12 h-12 rounded-[10px] ";

  return (
    <div className="fixed pt-5 top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-8">
 
  <div
    className={`w-full p-4 flex items-center justify-between h-[80px] rounded-full transition-colors duration-300 pointer-events-auto ${
      scrolled ? 'bg-white/20 shadow-md backdrop-blur-md' : 'bg-cyan-100/50'
    }`}
  >
        <Link to="/" className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center mb-2 md:mb-0 ${isActive("/home") ? activeClass : ""}`}>
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </Link>

        <div className="hidden md:flex items-center justify-center space-x-18 flex-1">
          <Link to="/home" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/home") ? activeClass : ""}`}>
            <img src={group1} alt="Home" className="w-6 h-6 object-cover" />
          </Link>
          <Link to="/institute" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/institute") ? activeClass : ""}`}>
          <FaUsers className="w-9 h-9 text-[#4F77B2]" />

          </Link>
          <Link to="/calendar" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/calendar") ? activeClass : ""}`}>
          <FaCalendarDay className="w-6 h-6 text-[#4F77B2]" />
          </Link>
          <Link to="/clock" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/clock") ? activeClass : ""}`}>
         <FaClock className="w-6 h-6 text-[#4F77B2]" />
          </Link>
          <Link to="/payment" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/payment") ? activeClass : ""}`}>
        <IoIosCard  className="w-7 h-7 text-[#4F77B2]" />
          </Link>
          <Link to="/users" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/users") ? activeClass : ""}`}>
           <FaUser  className="w-6 h-6 text-[#4F77B2]" />

          </Link>
          <Link to="/settings" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/settings") ? activeClass : ""}`}>
           
<IoIosSettings className=" w-9 h-9 text-[#4F77B2]" />
  

          </Link>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 mt-2 md:mt-0">
          <Link to="/notifications" className={`w-10 h-10 rounded-full flex justify-center items-center ${isActive("/notifications") ? activeClass : ""}`}>
            <img src={notify} alt="Notifications" className="w-full h-full object-cover" />
          </Link>
         <div className="relative" ref={profileRef}>
 <button
  onClick={() => setShowProfileMenu(prev => !prev)}
  className={`w-10 h-10 rounded-full flex justify-center items-center ${isActive("/profile") ? activeClass : ""}`}
>
  <img src={profile} alt="Profile" className="w-full h-full object-cover rounded-full" />
</button>
  {showProfileMenu && (
    <div className="absolute right-0  w-34 bg-cyan-100/50 shadow-lg rounded-2xl p-4 flex flex-col space-y-2 z-50">
       <Link
        to="/TotalNotifications"
        className="bg-[#002F67] text-white text-sm px-4 py-2 rounded-md text-center hover:opacity-90"
      >
        Notifications
      </Link>
      
      <Link
        to="/profile"
        className="bg-[#002F67] text-white text-sm px-4 py-2 rounded-md text-center hover:opacity-90"
      >
        Profile
      </Link>
      <button
        onClick={() => {
         
          console.log("Logout clicked");
        }}
        className="bg-[#002F67] text-white text-sm px-4 py-2 rounded-md hover:opacity-90"
      >
        Logout
      </button>
    </div>
  )}
</div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
