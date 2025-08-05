import React from 'react';
 import Stepper from '../components/Stepper';
import { Link } from 'react-router-dom';

const PersonalInfoForm: React.FC = () => {
  return (
    <>
    <div className='py-20'>
<Stepper currentStep={0} />
    </div>
      
   
    <div className="mx-auto p-6 space-y-6">
      {/* Section: Title */}
      <div>
        <h2 className="text-xl font-bold text-gray-800">Personal Info</h2>
        <p className="text-sm text-gray-500">Add logo, gallery information</p>
      </div>

      {/* Block 1: Institute Details */}
      <div className="  bg-gradient-to-br from-blue-100 to-blue-300 border rounded-xl p-4 shadow-md space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Enter Your Institute Details Here</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Institute Name</label>
            <input type="text" className="border p-2 rounded-md w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Registered Date</label>
            <input type="date" className="border p-2 rounded-md w-full" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <input type="text" className="border p-2 rounded-md w-full" />
          </div>
        </div>
      </div>

      {/* Block 2: Address Info */}
      <div className=" bg-gradient-to-br from-blue-100 to-blue-300 border rounded-xl p-4 shadow-md space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Enter Your Address Information Here</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1</label>
            <input type="text" className="border p-2 rounded-md w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 2</label>
            <input type="text" className="border p-2 rounded-md w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="text" className="border p-2 rounded-md w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Alt Phone Number</label>
            <input type="text" className="border p-2 rounded-md w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <select className="border p-2 rounded-md w-full">
              <option>Choose</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <select className="border p-2 rounded-md w-full">
              <option>Choose</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input type="text" className="border p-2 rounded-md w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pin Code</label>
            <input type="text" className="border p-2 rounded-md w-full" />
          </div>
        </div>
      </div>

      
      <div className=" bg-gradient-to-br from-blue-100 to-blue-300 border rounded-xl p-4 shadow-md space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Enter Your Contact Details Here</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Official Email</label>
            <input type="email" className="border p-2 rounded-md w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Official Website</label>
            <input type="url" className="border p-2 rounded-md w-full" />
          </div>
        </div>
      </div>

      
      <div className="bg-gradient-to-br from-blue-100 to-blue-300 border rounded-xl p-4 shadow-md space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Enter Your Subscription Information Here</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Subscription</label>
          <input type="text" className="border p-2 rounded-md w-full" />
        </div>
      </div>

      
      <div className="flex justify-between pt-4">
  <Link
    to="/previous-route" // change to actual previous path
    className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
  >
    Back
  </Link>
  <Link
    to="/galleryinfo" // change to actual next path
    className="px-4 py-2 bg-[#0E2B56] text-white rounded-md hover:bg-[#133e7b]"
  >
    Next
  </Link>
</div>
    </div>
    </>
  );
};

export default PersonalInfoForm;
