import React from 'react';
import { Link } from 'react-router-dom';

type Notification = {
  id: number;
  name: string;
  message: string;
  time: string;
  status: 'Unread' | 'New' | 'View';
};

const TotalNotifications: React.FC = () => {
  const notifications: Notification[] = [
    {
      id: 1,
      name: 'Chendran',
      message: 'It is a long established fact that a reader will be distracted',
      time: '4 Month Ago',
      status: 'Unread',
    },
    {
      id: 2,
      name: 'Store Verification Done',
      message: 'We have successfully received your request.',
      time: '4 Month Ago',
      status: 'Unread',
    },
    {
      id: 3,
      name: 'Check Your Mail.',
      message: "All done! Now check your inbox as you're in for a sweet treat!",
      time: '4 Month Ago',
      status: 'View',
    },
  ];

  return (
    <div className="max-w-md mx-auto p-2 min-h-screen relative">
      <div className="bg-white/70 rounded-xl shadow-md p-8 relative">

     
        <Link to="/" className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl font-bold">
          ×
        </Link>

      
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-[#1F2B4A]">All Notification</h2>
          <button className="text-sm text-[#0D2C5B] font-medium">Mark As All Read</button>
        </div>

        <select className="w-full mb-4 p-2 border rounded-md text-sm text-gray-600">
          <option>Other</option>
          <option>New</option>
          <option>Unread</option>
        </select>

     
        {notifications.map((data) => (
          <div key={data.id} className="bg-white/50 rounded-xl p-4 mb-4 shadow-sm flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="text-[#1F2B4A] font-semibold">{data.name}</div>
              </div>
              <div className="text-xs text-gray-400">{data.time}</div>
            </div>
            <p className="text-sm text-gray-600">{data.message}</p>
            <div className="flex justify-end gap-2">
              {data.status === 'Unread' && (
                <button className="bg-[#0D2C5B] text-white px-4 py-1 rounded-md text-sm">Unread</button>
              )}
              {data.status === 'New' && (
                <button className="bg-gray-100 text-[#0D2C5B] px-4 py-1 rounded-md text-sm">New</button>
              )}
              {data.status === 'View' && (
                <button className="bg-[#0D2C5B] text-white px-4 py-2 rounded-md w-full text-sm">View</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalNotifications;
