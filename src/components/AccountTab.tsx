import React from 'react';
import { Link } from 'react-router-dom';
import elonmusk from '../assets/elonmusk.png';

const AccountTab: React.FC = () => {
  return (
    <div className="space-y-6">
   
      <div className="rounded-xl bg-white/20 backdrop-blur-md p-6 shadow-md space-y-6">
      
        <div className="flex items-center gap-4">
          <img
            src={elonmusk}
            alt="User"
            className="rounded-[10px] w-14 h-14 object-cover"
          />
          <h2 className="text-lg font-semibold text-[#0E2B56]">Chandran R</h2>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-[#0E2B56] mb-4">Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 text-sm text-[#0E2B56]">
            <div>
              <p className="text-[#0E2B56]">First Name</p>
              <p className="font-semibold">Chandran R</p>
            </div>
            <div>
              <p className="text-[#0E2B56]">Last Name</p>
              <p className="font-semibold">Doe</p>
            </div>
            <div>
              <p className="text-[#0E2B56]">User Name</p>
              <p className="font-semibold">User 01</p>
            </div>
            <div>
              <p className="text-[#0E2B56]">Designation</p>
              <p className="font-semibold">Student</p>
            </div>
            <div>
              <p className="text-[#0E2B56]">Email</p>
              <p className="font-semibold">Chandran1@gmail.com</p>
            </div>
            <div>
              <p className="text-[#0E2B56]">Contact</p>
              <p className="font-semibold">+91 98765656789</p>
            </div>
            <div>
              <p className="text-[#0E2B56]">Status</p>
              <p className="font-semibold text-green-400">Active</p>
            </div>
          </div>
        </div>

       
        <div className="flex justify-end">
          <Link
            to="/edituserform"
            className="px-4 py-2 bg-blue-900 text-white text-sm rounded-md hover:bg-blue-700 transition"
          >
            Edit Details
          </Link>
        </div>
      </div>

   
      <div className="rounded-xl bg-white/20 backdrop-blur-md p-6 shadow-md min-h-[180px]">
        <h3 className="text-lg font-semibold text-[#0E2B56] mb-2">User Activity Timeline</h3>
       
        <p className="text-sm text-[#0E2B56]">No activity yet.</p>
      </div>
    </div>
  );
};

export default AccountTab;
