import React from "react";
import { Eye } from "lucide-react";

type Fee = {
  id: string;
  institute: string;
  plan: string;
  issueDate: string;
  amount: string;
};

const feeData: Fee[] = Array(6).fill({
  id: "#1",
  institute: "JD",
  plan: "Basic Plan",
  issueDate: "2-24-2025 / 4-27-2025",
  amount: "$0",
});

const PaymentTable: React.FC = () => {
  return (
    <div className="pt-15 text-white font-sans">
      <h2 className="text-lg font-semibold mb-6">Fees</h2>

   
      <div className="grid grid-cols-6 text-lg text-white/80 font-medium px-4 py-3 rounded-md bg-[#0E2B56] mb-4">
        <div>ID</div>
        <div>Institute Name</div>
        <div>Current Plan</div>
        <div>Issue Date</div>
        <div>Amount Paid</div>
        <div>Actions</div>
      </div>

      
      <div className="space-y-3">
        {feeData.map((fee, index) => (
          <div
            key={index}
            className="grid grid-cols-6 items-center bg-white/10 backdrop-blur-lg rounded-xl px-4 py-3 text-lg border border-white/10 hover:bg-white/20 transition"
          >
            <div>{fee.id}</div>
            <div>{fee.institute}</div>
            <div>{fee.plan}</div>
            <div>{fee.issueDate}</div>
            <div>{fee.amount}</div>
            <div>
              <Eye className="w-4 h-4 opacity-70 hover:opacity-100 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentTable;
