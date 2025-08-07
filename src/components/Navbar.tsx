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


const [filterStatus, setFilterStatus] = useState<string>("Other");


  const [notifications, setNotifications] = useState([
  {
    id: 1,
    name: 'Chendran',
    message: 'It is a long established fact that a reader will be distracted',
    time: '4 Month Ago',
    status: 'Unread',
    profileImage: '/src/assets/notifiProfile.png',
  },
  {
    id: 2,
    name: 'Store Verification Done',
    message: 'We have successfully received your request.',
    time: '4 Month Ago',
    status: 'Unread',
    profileImage: '/src/assets/notifiProfile.png',
  },
  {
    id: 3,
    name: 'Check Your Mail.',
    message: "All done! Now check your inbox as you're in for a sweet treat!",
    time: '4 Month Ago',
    status: 'Viewed',
    profileImage: '/src/assets/notifiProfile.png',
  },
  {
    id: 4,
    name: 'Check Your Mail.',
    message: "All done! Now check your inbox as you're in for a sweet treat!",
    time: '4 Month Ago',
    status: 'Viewed',
    profileImage: '/src/assets/notifiProfile.png',
  },
]);


useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
    setShowNotifications(false); 
    setShowProfileMenu(false);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


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
  <div className="absolute top-12 right-0 z-50 w-96">
    <div className="absolute -top-2 right-3 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white" />
    <div className="bg-white shadow-lg rounded-xl p-4 max-h-[600px] flex flex-col">
      
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-[#1F2B4A]">All Notifications</h2>
        <button
          className="text-sm text-[#1F2B4A] font-semibold hover:underline"
          onClick={() =>
            setNotifications((prev) =>
              prev.map((n) => ({ ...n, status: "Viewed" }))
            )
          }
        >
          Mark All As Read
        </button>
      </div>

      <select
        className="border rounded-md px-3 py-2 text-sm mb-3 text-[#1F2B4A]"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="Other">Other</option>
        <option value="Unread">Unread</option>
        <option value="New">New</option>
        <option value="Viewed">Viewed</option>
      </select>

      <div className="flex flex-col gap-4 overflow-y-auto mb-3 max-h-90 pr-1">
        {notifications
          .filter((n) =>
            filterStatus === "Other" ? true : n.status === filterStatus
          )
          .map((item) => (
            <div
  key={item.id}
  className="bg-white rounded-xl p-4 shadow text-sm flex gap-3 items-start"
>
  

  <div className="flex-1">
  <div className="flex justify-between items-center mb-5">
  
    <div className="flex items-center gap-2">
      <img
        src={item.profileImage}
        alt={item.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <h3 className="font-bold text-[#1F2B4A]">{item.name}</h3>
    </div>

    
    <span className="text-xs text-gray-400">{item.time}</span>
  </div>

    <p className="text-gray-500 mt-2 mb-5 items-start justify-start ">{item.message}</p>
 <div className="flex gap-2 justify-end">
  {item.status === "Unread" ? (
    <span className="text-white px-4 py-1 text-xs font-semibold bg-[#0D2C5B] rounded-tl-[8px] rounded-br-[8px]">
      Unread
    </span>
  ) : (
    <span className="text-[#0D2C5B] px-4 py-1 text-xs font-semibold border border-[#0D2C5B] bg-white rounded-tl-[8px] rounded-br-[8px]">
      New
    </span>
  )}
      <span className="border border-[#0D2C5B] text-[#0D2C5B] px-3 py-1  rounded-tl-[8px] rounded-br-[8px] text-xs">
        New
      </span>
    </div>
  </div>
</div>

          ))}
      </div>

      <button className="w-full bg-[#0D2C5B] text-white font-medium py-2 rounded-md hover:bg-[#3e506d] transition">
        View All
      </button>
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
                <div className="absolute -top-2 right-3  border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-white" />
                <div className="w-40 bg-white shadow-lg rounded-2xl p-4 flex flex-col space-y-2">
                  <Link to="/notifications" className="border border-[#0D2C5B] rounded-tl-[8px] rounded-br-[8px] text-[#0D2C5B] text-sm px-4 py-2  text-center hover:bg-[#0D2C5B] hover:text-white transition">
                    Notifications
                  </Link>
                  <Link to="/profile" className="border border-[#0D2C5B] rounded-tl-[8px] rounded-br-[8px] text-[#0D2C5B] text-sm px-4 py-2  text-center hover:bg-[#0D2C5B] hover:text-white transition">
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      console.log("Logout clicked");
                    }}
                    className="border border-[#0D2C5B] bg-white rounded-tl-[8px] rounded-br-[8px] text-[#0D2C5B] text-sm px-4 py-2  hover:bg-[#0D2C5B] hover:text-white transition"
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