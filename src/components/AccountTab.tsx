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
          <h2 className="text-2xl font-semibold text-[#0E2B56]">Chandran R</h2>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold text-[#0E2B56] mb-4">Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 text-sm text-[#0E2B56]">
            <div>
              <p className="text-[#0E2B56] text-xl">First Name</p>
              <p className="font-semibold text-xl">Chandran R</p>
            </div>
            <div>
              <p className="text-[#0E2B56] text-xl">Last Name</p>
              <p className="font-semibold text-xl">Doe</p>
            </div>
            <div>
              <p className="text-[#0E2B56] text-xl ">User Name</p>
              <p className="font-semibold text-xl">User 01</p>
            </div>
            <div>
              <p className="text-[#0E2B56] text-xl">Designation</p>
              <p className="font-semibold text-xl">Student</p>
            </div>
            <div>
              <p className="text-[#0E2B56] text-xl">Email</p>
              <p className="font-semibold text-xl">Chandran1@gmail.com</p>
            </div>
            <div>
              <p className="text-[#0E2B56] text-xl">Contact</p>
              <p className="font-semibold text-xl">+91 98765656789</p>
            </div>
            <div>
              <p className="text-[#0E2B56] text-xl">Status</p>
              <p className="font-semibold text-green-400 text-xl">Active</p>
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
        <h3 className="text-xl font-semibold text-[#0E2B56] mb-2">User Activity Timeline</h3>
       
        <p className="text-lg text-[#0E2B56]">No activity yet.</p>
      </div>
    </div>
  );
};

export default AccountTab;
