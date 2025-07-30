import React from "react";
import InstituteDetails from "../components/InstituteDetails";
import SidebarSetting from "../components/SidebarSettings"; 
import Bannar from "../components/Banner";

const Settings: React.FC = () => {
  return (
    <>
    <Bannar />
    <div className="max-w-7xl mx-auto flex gap-6">
        <SidebarSetting />
        <InstituteDetails />
      </div></>
  );
};

export default Settings;
