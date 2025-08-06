import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.png';  
import group1 from '../assets/group1.png';
import notify from '../assets/notify.png';
import profile from '../assets/profile.png';
import { FaUsers, FaClock, FaUser } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa6";
import { IoIosCard, IoIosSettings } from "react-icons/io";
import { Tooltip } from "@material-tailwind/react";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !(notificationRef.current as HTMLElement).contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !(profileRef.current as HTMLElement).contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/home") {
      return location.pathname === "/" || location.pathname === "/home";
    }
    return location.pathname === path;
  };

  const activeClass = "bg-white rounded-[10px] ";

  return (
    <div className="fixed pt-10 top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-8">
      <div className={`w-full p-4 flex items-center justify-between h-[80px] rounded-full transition-colors duration-300 pointer-events-auto ${scrolled ? 'bg-white/20 shadow-md backdrop-blur-md' : 'bg-cyan-100/50'}`}>
        
        
        <Link to="/" className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center mb-2 md:mb-0 ${isActive("/home") ? activeClass : ""}`}>
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </Link>

       
        <div className="hidden md:flex items-center justify-center space-x-18 flex-1">
          <Tooltip content="DashBoard" placement="top" className="bg-white text-[#0E2B56] z-50">
            <Link to="/home" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/home") ? activeClass : ""}`}>
              <img src={group1} alt="Home" className="w-6 h-6 object-cover" />
            </Link>
          </Tooltip>
          <Tooltip content="Institute" placement="top" className="bg-white text-[#0E2B56] z-50">
            <Link to="/institute" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/institute") ? activeClass : ""}`}>
              <FaUsers className="w-9 h-9 text-[#4F77B2]" />
            </Link>
          </Tooltip>
          <Tooltip content="Calendar" placement="top" className="bg-white text-[#0E2B56] z-50">
            <Link to="/calendar" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/calendar") ? activeClass : ""}`}>
              <FaCalendarDay className="w-6 h-6 text-[#4F77B2]" />
            </Link>
          </Tooltip>
          <Tooltip content="Clock" placement="top" className="bg-white text-[#0E2B56] z-50">
            <Link to="/clock" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/clock") ? activeClass : ""}`}>
              <FaClock className="w-6 h-6 text-[#4F77B2]" />
            </Link>
          </Tooltip>
          <Tooltip content="Payment" placement="top" className="bg-white text-[#0E2B56] z-50">
            <Link to="/payment" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/payment") ? activeClass : ""}`}>
              <IoIosCard className="w-7 h-7 text-[#4F77B2]" />
            </Link>
          </Tooltip>
          <Tooltip content="Users" placement="top" className="bg-white text-[#0E2B56] z-50">
            <Link to="/users" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/users") ? activeClass : ""}`}>
              <FaUser className="w-6 h-6 text-[#4F77B2]" />
            </Link>
          </Tooltip>
          <Tooltip content="Settings" placement="top" className="bg-white text-[#0E2B56] z-50">
            <Link to="/settings" className={`w-10 h-10 rounded-[10px] flex justify-center items-center ${isActive("/settings") ? activeClass : ""}`}>
              <IoIosSettings className="w-9 h-9 text-[#4F77B2]" />
            </Link>
          </Tooltip>
        </div>

       
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 mt-2 md:mt-0">

         
          <div className="relative" ref={notificationRef}>
            <Tooltip content="Notifications" placement="top" className="bg-white text-[#0E2B56] z-50">
              <button
                onClick={() => setShowNotifications(prev => !prev)}
                className={`w-10 h-10 rounded-full flex justify-center items-center`}
              >
                <img src={notify} alt="Notifications" className="w-full h-full object-cover" />
              </button>
            </Tooltip>

            {showNotifications && (
              <div className="absolute top-12 right-0 z-50 w-100 ">
                <div className="absolute -top-2 right-4  border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white/80" />
                <div className="bg-white/80 shadow-md rounded-lg p-4">
                  <h2 className="text-lg font-semibold text-[#1F2B4A] mb-2">Notifications</h2>
                  <div className="flex flex-col gap-3 overflow-y-auto ">
                    {[
                      {
                        id: 1,
                        name: 'Chendran',
                        message: 'Reader will be distracted...',
                        time: '4 Month Ago',
                        status: 'Unread',
                      },
                      {
                        id: 2,
                        name: 'Store Verification Done',
                        message: 'Successfully received your request.',
                        time: '4 Month Ago',
                        status: 'Unread',
                      },
                      {
                        id: 3,
                        name: 'Check Your Mail.',
                        message: "All done! Now check your inbox.",
                        time: '4 Month Ago',
                        status: 'View',
                      },
                    ].map((item) => (
                      <div key={item.id} className="bg-white rounded p-2 shadow-sm text-lg">
                        <div className="font-medium text-[#1F2B4A]">{item.name}</div>
                        <div className="text-gray-500">{item.message}</div>
                        <div className="flex justify-between items-center mt-1 text-xs text-gray-400">
                          <span>{item.time}</span>
                          <span className={`px-2 py-0.5 rounded text-white text-lg ${item.status === 'Unread' ? 'bg-[#0D2C5B]' : 'bg-gray-400'}`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

         
          <div className="relative" ref={profileRef}>
            <Tooltip content="Profile" placement="top" className="bg-white text-[#0E2B56] z-50">
              <button
                onClick={() => setShowProfileMenu(prev => !prev)}
                className={`w-10 h-10 rounded-full flex justify-center items-center ${isActive("/profile") ? activeClass : ""}`}
              >
                <img src={profile} alt="Profile" className="w-full h-full object-cover rounded-full" />
              </button>
            </Tooltip>

            {showProfileMenu && (
              <div className="absolute right-0 top-12 z-50">
                <div className="absolute -top-2 right-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-cyan-100/50" />
                <div className="w-40 bg-cyan-100/50 shadow-lg rounded-2xl p-4 flex flex-col space-y-2">
                  <Link to="/notifications" className="bg-[#002F67] text-white text-sm px-4 py-2 rounded-md text-center hover:opacity-90">
                    Notifications
                  </Link>
                  <Link to="/profile" className="bg-[#002F67] text-white text-sm px-4 py-2 rounded-md text-center hover:opacity-90">
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
