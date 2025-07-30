import { useState } from 'react';
import InstituteDetails from '../components/InstituteDetails';
import Profile from './Profile';

type TabKey =
  | 'personal'
  | 'profile'
  | 'social'
  | 'documents'
  | 'password'
  | 'logs';

const SidebarSetting = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('personal');

  const menuItems: { key: TabKey; label: string }[] = [
    { key: 'personal', label: 'Personal Info' },
    { key: 'profile', label: 'Profile' },
    { key: 'social', label: 'Social Media' },
    { key: 'documents', label: 'Documents' },
    { key: 'password', label: 'Change Password' },
    { key: 'logs', label: 'Institute Activity Logs' },
  ];

  return (
    <div className="flex  p-6 gap-4">
      <div className="w-1/4 bg-white/20 rounded-2xl p-4 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Settings</h2>
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.key}>
              <button
                onClick={() => setActiveTab(item.key)}
                className={`w-full text-left px-4 py-2 rounded-lg font-medium text-sm border ${
                  activeTab === item.key
                    ? 'bg-blue-900 text-white'
                    : 'border-blue-900 hover:bg-blue-500 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-white/20 rounded-2xl p-6 shadow-lg">
        {activeTab === 'personal' && <InstituteDetails />}
        {activeTab === 'profile' && <Profile />}
        {/* {activeTab === 'social' && <SocialMedia />} */}
        {/* {activeTab === 'documents' && <Documents />} */}
        {/* {activeTab === 'password' && <ChangePassword />} */}
        {/* {activeTab === 'logs' && <ActivityLogs />} */}
      </div>
    </div>
  );
};

export default SidebarSetting;
