import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import AccountTab from '../components/AccountTab';
import SecurityTab from '../components/SecurityTab';

const ProfileACC: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'account' | 'security'>('account');

  return (
    <div className="flex gap-4 p-4">
     
      <div className="w-60 rounded-lg bg-white/20 backdrop-blur-md p-4 shadow-lg flex flex-col gap-2">
        <button
          onClick={() => setActiveTab('account')}
          className={`flex items-center gap-2 p-2 rounded-md text-[#0E2B56] border  border-[#0E2B56] ${
            activeTab === 'account' ? 'bg-blue-900 text-white' : 'hover:bg-blue-100'
          }`}
        >
          <span className=""><FaUser /></span> Account
        </button>
        <button
          onClick={() => setActiveTab('security')}
          className={`flex items-center gap-2 p-2 rounded-md text-[#0E2B56] border  border-[#0E2B56] ${
            activeTab === 'security' ? 'bg-blue-900 text-white' : 'hover:bg-blue-100'
          }`}
        >
          <span className=""><MdOutlineSecurity /></span> Security
        </button>
      </div>

      <div className="flex-1 rounded-lg p-4 ">
        {activeTab === 'account' ? <AccountTab /> : <SecurityTab />}
      </div>
    </div>
  );
};

export default ProfileACC;
