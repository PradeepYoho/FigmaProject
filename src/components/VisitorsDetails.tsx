import { FaTimes } from "react-icons/fa";

const VisitorsDetails = () => {
return (
    <div className="w-full max-w-md mx-auto p-6 rounded-xl shadow-lg bg-gradient-to-br from-[#dce9f9] to-[#c5d7e7] text-[#0E2B56] relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-400" />
          <div>
            <h2 className="font-bold">John Doe</h2>
            <p className="text-sm text-gray-600">Visitor</p>
          </div>
        </div>
        <FaTimes className="text-gray-600 cursor-pointer" />
      </div>

      {/* Basic Details Block */}
      <div className="mb-6">
        <h3 className="font-semibold text-sm mb-2">Basic Details</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <input
            type="text"
            className="rounded-md px-3 py-2 bg-white/30 border border-white/40 backdrop-blur-md outline-none"
            placeholder="Name"
            defaultValue="John Doe"
          />
          <input
            type="email"
            className="rounded-md px-3 py-2 bg-white/30 border border-white/40 backdrop-blur-md outline-none"
            placeholder="Email"
            defaultValue="john.doe@example.com"
          />
          <input
            type="text"
            className="rounded-md px-3 py-2 bg-white/30 border border-white/40 backdrop-blur-md outline-none"
            placeholder="Phone"
            defaultValue="+91 98765 45678"
          />
          <input
            type="text"
            className="rounded-md px-3 py-2 bg-white/30 border border-white/40 backdrop-blur-md outline-none"
            placeholder="Location"
            defaultValue="New York, USA"
          />
          <input
            type="text"
            className="rounded-md px-3 py-2 bg-white/30 border border-white/40 backdrop-blur-md outline-none"
            placeholder="Location Time"
            defaultValue="Mon - Fri 9 AM - 5 PM"
          />
          <input
            type="text"
            className="rounded-md px-3 py-2 bg-white/30 border border-white/40 backdrop-blur-md outline-none"
            placeholder="Language"
            defaultValue="English"
          />
        </div>
      </div>

      {/* Device Details Block */}
      <div>
        <h3 className="font-semibold text-sm mb-2">Device Details</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <input
            type="text"
            className="rounded-md px-3 py-2 bg-white/30 border border-white/40 backdrop-blur-md outline-none"
            placeholder="IP Address"
            defaultValue="192.168.1.1"
          />
          <input
            type="text"
            className="rounded-md px-3 py-2 bg-white/30 border border-white/40 backdrop-blur-md outline-none"
            placeholder="Operating System"
            defaultValue="Windows 10"
          />
          <input
            type="text"
            className="rounded-md px-3 py-2 bg-white/30 border border-white/40 backdrop-blur-md outline-none"
            placeholder="Browser"
            defaultValue="Chrome"
          />
        </div>
      </div>
    </div>
  );
}

export default VisitorsDetails