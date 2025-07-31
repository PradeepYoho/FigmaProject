import React from "react";
import NotificationSummary from "../components/NotificationCard";

const mockData = [
  { title: "Welcome", body: "Creating Web", institute: "Bharathidasan Uni", status: "Unnn...", },
  { title: "Design", body: "Its a Course", institute: "Bharathidasan Uni", status: "Unnn...", },
  { title: "Developing", body: "Its one type of course", institute: "Anna university", status: "Unnn...", },
  { title: "Datascience", body: "Computer", institute: "Bharathidasan Uni", status: "Unnn...", },
];

const NotificationTable: React.FC = () => {
  return (
    <div className="w-full mt-10">

        <div>
            <NotificationSummary />
        </div>
    
      <div className="flex justify-between items-center mb-4 mt-10">
        <h2 className="text-xl font-semibold text-[#072C56]">Notifications</h2>
        <button className="bg-[#072C56] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#0e3a6d]">
          + Add Institute
        </button>
      </div>

      <div className="grid grid-cols-5 bg-[#0E2B56] text-white font-semibold rounded-lg px-4 py-3">
        <span>Title</span>
        <span>Body</span>
        <span>Institute</span>
        <span>Status</span>
        <span>Actions</span>
      </div>

    
      <div className="space-y-4 mt-4">
        {mockData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-5 items-center bg-white/10 backdrop-blur-md border border-white/20 text-[#072C56] px-4 py-3 rounded-xl shadow-sm"
          >
            <span>{item.title}</span>
            <span>{item.body}</span>
            <span>{item.institute}</span>
            <span>{item.status}</span>
            <button className="bg-white/30 text-[#072C56] px-4 py-1 rounded-lg hover:bg-white/40 text-sm">
              Resend
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationTable;
