import { Eye } from "lucide-react";

const fees = [
  {
    id: "#1",
    institute: "JD",
    plan: "Basic Plan",
    issueDate: "2-24-2025 / 4-27-2025",
    amount: "₹0",
  },
  {
    id: "#1",
    institute: "JD",
    plan: "Basic Plan",
    issueDate: "2-24-2025 / 4-27-2025",
    amount: "₹0",
  },
  {
    id: "#1",
    institute: "JD",
    plan: "Basic Plan",
    issueDate: "2-24-2025 / 4-27-2025",
    amount: "₹0",
  },
  {
    id: "#1",
    institute: "JD",
    plan: "Basic Plan",
    issueDate: "2-24-2025 / 4-27-2025",
    amount: "₹0",
  },
];

const FeesTable = () => {
  return (
    <div className="p-6">
      <h2 className="text-white text-lg font-semibold mb-4">Fees</h2>

    
      <div className="bg-[#0E2B56] text-white rounded-md px-4 py-3 grid grid-cols-6 font-medium text-center items-center">
        <span>ID</span>
        <span>Institute Name</span>
        <span>Current Plan</span>
        <span>Issue Date</span>
        <span>Amount Paid</span>
        <span>Actions</span>
      </div>

   
      <div className="mt-4 flex flex-col gap-5">
        {fees.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md rounded-md px-4 py-3 grid grid-cols-6 text-[#0E2B56] text-center items-center"
          >
            <span>{item.id}</span>
            <span>{item.institute}</span>
            <span >{item.plan}</span>
            <span>{item.issueDate}</span>
            <span>{item.amount}</span>
            <span>
              <Eye className="w-5 h-5 mx-auto cursor-pointer" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeesTable;
