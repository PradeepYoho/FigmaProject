import React from "react";
import { Link } from "react-router-dom";

const SubscriptionForm: React.FC = () => {
  return (
    <div className=" flex items-center justify-center p-4 text-[#072C56]">
      <div className="w-full p-8 relative text-[#072C56]">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl font-semibold">Subscriptions Plan</h2>
          <a
            href="#"
            className="bg-[#072C56] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0e3a6d] inline-block"
          >
            + Add Institute
          </a>
        </div>

        <h3 className="text-md mb-4 border-b border-[#072C56] pb-2">
          Enter Your Institute Details Here
        </h3>

        <div className="flex flex-col items-center">
          <div className="w-32 h-32 bg-white rounded-md mb-2" />
          <p className="text-sm text-center text-[#072C56]">
            Upload Profile Picture <br />
            <span className="text-xs">(PNG or JPEG, Max 800K)</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div>
            <label className="text-sm font-semibold block mb-1">Institute Name</label>
            <input
              type="text"
              placeholder="Enter Institute Name"
              className="w-full border border-[#072C56] text-[#072C56] placeholder-[#072C56]/60 bg-white/10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#072C56]"
            />
          </div>
          <div>
            <label className="text-sm font-semibold block mb-1">Plan Price</label>
            <input
              type="text"
              placeholder="Enter Plan Price"
              className="w-full border border-[#072C56] text-[#072C56] placeholder-[#072C56]/60 bg-white/10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#072C56]"
            />
          </div>
          <div>
            <label className="text-sm font-semibold block mb-1">Support Level</label>
            <input
              type="text"
              placeholder="Enter Support Level"
              className="w-full border border-[#072C56] text-[#072C56] placeholder-[#072C56]/60 bg-white/10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#072C56]"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-sm font-semibold block mb-1">Plan Description</label>
          <textarea
            rows={2}
            placeholder="Enter Description"
            className="w-full border border-[#072C56] text-[#072C56] placeholder-[#072C56]/60 bg-white/10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#072C56]"
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-semibold block mb-1">Duration</label>
            <input
              type="text"
              placeholder="Enter Duration"
              className="w-full border border-[#072C56] text-[#072C56] placeholder-[#072C56]/60 bg-white/10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#072C56]"
            />
          </div>
          <div>
            <label className="text-sm font-semibold block mb-1">Duration Type</label>
            <input
              type="text"
              placeholder="Enter Duration Type"
              className="w-full border border-[#072C56] text-[#072C56] placeholder-[#072C56]/60 bg-white/10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#072C56]"
            />
          </div>
        </div>

        <div className="flex justify-between mt-6">
           <Link
        to="/" 
        className="bg-[#072C56] hover:bg-[#0e3a6d] text-white px-6 py-2 rounded-lg text-center"
      >
        Cancel
      </Link>

      <Link
        to="/" 
        className="bg-[#072C56] hover:bg-[#0e3a6d] text-white px-6 py-2 rounded-lg text-center"
      >
        Submit
      </Link>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;
