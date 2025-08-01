import React, { useState } from "react";
import NotificationSummary from "../components/NotificationCard";
import { X } from "lucide-react";

const mockData = [
  { title: "Welcome", body: "Creating Web", institute: "Bharathidasan Uni", status: "Unnn..." },
  { title: "Design", body: "Its a Course", institute: "Bharathidasan Uni", status: "Unnn..." },
  { title: "Developing", body: "Its one type of course", institute: "Anna university", status: "Unnn..." },
  { title: "Datascience", body: "Computer", institute: "Bharathidasan Uni", status: "Unnn..." },
];

const NotificationTable: React.FC = () => {
  
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

 
  const toggleOverlay = () => {
    setIsOverlayOpen(prev => !prev);
  };

  return (
    <div className="w-full  relative p-4 ">
      <NotificationSummary />

      <div className="flex justify-between items-center mb-4 mt-10">
        <h2 className="text-xl font-semibold text-[#072C56]">Notifications</h2>
        <button
          onClick={toggleOverlay}
          className="bg-[#072C56] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0e3a6d]"
        >
          + Add Institute
        </button>
      </div>

   {isOverlayOpen && (
<div className="absolute top-0 right-0 w-full sm:w-[380px] z-50">
    <div className="bg-white/10 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 p-6 flex flex-col">
      
    
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-[#072C56]">Add Notification</h3>
        <button onClick={toggleOverlay} className="text-[#072C56] hover:text-gray-200">
          <X className="w-5 h-5" />
        </button>
      </div>

     
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-4 text-sm text-[#072C56] overflow-auto pr-1">
          <div>
            <label className="block mb-1">Institute List</label>
            <select className="w-full bg-white/10 border border-[#072C56] rounded px-3 py-2 text-[#072C56]">
              <option>Select</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Branch List</label>
            <select className="w-full bg-white/10 border border-[#072C56] rounded px-3 py-2 text-[#072C56]">
              <option>Select</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Title</label>
            <input
              type="text"
              className="w-full bg-white/10 border border-[#072C56] rounded px-3 py-2 text-[#072C56]"
            />
          </div>
          <div>
            <label className="block mb-1">Body</label>
            <textarea
              rows={3}
              className="w-full bg-white/10 border border-[#072C56] rounded px-3 py-2 text-[#072C56]"
            />
          </div>
          <div>
            <label className="block mb-1">Link</label>
            <input
              type="text"
              className="w-full bg-white/10 border border-[#072C56] rounded px-3 py-2 text-[#072C56]"
            />
          </div>
          <div>
            <label className="block mb-1">Confirm Password</label>
            <select className="w-full bg-white/10 border border-[#072C56] rounded px-3 py-2 text-[#072C56]">
              <option>Select</option>
            </select>
          </div>
        </div>

        
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={toggleOverlay}
            className="bg-white text-[#072C56] px-4 py-2 rounded hover:bg-gray-100 text-sm font-medium"
          >
            Cancel
          </button>
          <button className="bg-[#072C56] text-white px-4 py-2 rounded hover:bg-[#0e3a6d] text-sm font-medium">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
)}




    
      <div className="grid grid-cols-5 bg-[#0E2B56] text-white font-semibold rounded-lg px-5 py-3 text-center items-center">
        <span className="text-center">Title</span>
<span className="text-center">Body</span>
<span className="text-center">Institute</span>
<span className="text-center">Status</span>
<span className="text-center">Actions</span>
      </div>

  
      <div className="space-y-4 mt-4">
        {mockData.map((item, index) => (
          <div
            key={index}
           className="grid grid-cols-5 items-center text-center bg-white/10 backdrop-blur-md border border-white/20 text-[#072C56] px-4 py-3 rounded-xl shadow-sm"
          >
          <span className="text-center">{item.title}</span>
<span className="text-center">{item.body}</span>
<span className="text-center">{item.institute}</span>
<span className="text-center">{item.status}</span>
<button className="bg-white/30 text-[#072C56] px-4 py-1 rounded-lg hover:bg-white/40 text-sm text-center">
  Resend
</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationTable;
