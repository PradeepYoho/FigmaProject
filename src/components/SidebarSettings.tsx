import { useState } from 'react';
import InstituteDetails from '../components/InstituteDetails';
import SidebarProfile from '../components/SidebarProfile';
import SocialMedia from '../components/SocialMedia';
import SidebarDocuments from '../components/SidebarDocuments';
import ChangePassword from '../components/ChangePassword';
import ActivityLogs from '../components/ActivityLogs';

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
    <div className="flex gap-2">
      <div className="w-1/4 bg-white/20 rounded-2xl p-4 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Settings</h2>
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.key}>
              <button
                onClick={() => setActiveTab(item.key)}
                className={`w-full text-left px-4 py-2 rounded-lg font-medium text-sm border text-blue-800 ${
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

      <div className="flex-1 bg-white/20 rounded-2xl p-6 shadow-lg">
        {activeTab === 'personal' && <InstituteDetails />}
        {activeTab === 'profile' && <SidebarProfile />}
        {activeTab === 'social' && <SocialMedia />}
        {activeTab === 'documents' && <SidebarDocuments />}
        {activeTab === 'password' && <ChangePassword />}
        {activeTab === 'logs' && <ActivityLogs />}
      </div>
    </div>
  );
};

export default SidebarSetting;
