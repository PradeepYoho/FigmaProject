// src/components/Institute.tsx

import React, { useState } from "react";
import filter from "../assets/filter.png";
import { Link } from "react-router-dom";
import Institutecard from "../components/Institutecard";
import University from "../components/University";



const Institute: React.FC = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible((prev) => !prev);
  };

  return (
    <div className="px-4 md:px-6">
      <div className="flex justify-between items-center mb-3">
        <button
          className="bg-white text-[#0E2B56] py-3 px-4 rounded-lg flex items-center space-x-2"
          onClick={toggleFilter}
        >
          <img src={filter} alt="description" className="w-6 h-6" />
          <span>{isFilterVisible ? "Hide Filter" : "Show Filter"}</span>
        </button>
        <Link
  to="/add-institute"
  className="bg-[#072C56] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0e3a6d]"
>
  +Add Institute
</Link>
      </div>

      {isFilterVisible && (
        <div className="mb-6">
          <p className="text-[24px] font-montserrat font-semibold text-[#0E2B56] mb-6">
            Filters
          </p>

          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="flex flex-col bg-[#C8F6FF80] rounded-[16px] p-4 ">
              <label className="text-lg font-semibold text-[#0E2B56] mb-2">
                Subscription Plan
              </label>
              <select className="w-full h-12 rounded-[12px] border border-[#4771AE] px-4">
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
              </select>
            </div>

            <div className="flex flex-col bg-[#C8F6FF80] rounded-[16px] p-4">
              <label className="text-lg font-semibold text-[#0E2B56] mb-2">
                Status
              </label>
              <select className="w-full h-12 rounded-[12px] border border-[#4771AE] px-4">
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>
            </div>
            <div className="flex flex-col bg-[#C8F6FF80] rounded-[16px] p-4 ">
              <label className="text-lg font-semibold text-[#0E2B56] mb-2">
                Date
              </label>
              <select className="w-full h-12 rounded-[12px] border border-[#4771AE] px-4">
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <div className="pb-2">
        <Institutecard />
        <University />
      </div>
    </div>
  );
};

export default Institute;