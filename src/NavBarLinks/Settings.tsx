import React from "react";
import SidebarSetting from "../components/SidebarSettings"; 
import Bannar from "../components/Banner";

const Settings: React.FC = () => {
  return (
    <>
    <div className="pt-10">
          <Bannar />
        <SidebarSetting />
      </div></>
  );
};

export default Settings;
