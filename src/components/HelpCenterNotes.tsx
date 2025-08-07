import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const HelpCenterQuestions = () => {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md rounded-lg w-full max-w-xl p-6 shadow-xl relative border border-white/30 text-[#0E2B56]">
        <Link
          to="/users"
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <FaTimes />
        </Link>
        <h2 className="text-lg font-semibold mb-6 text-[#0E2B56]">
          Add Help Information
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-[#0E2B56]">Title</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-[#0E2B56] border border-white/30 outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter title"
            />
          </div>

          <div>
            <label className="block mb-1 text-[#0E2B56]">Module</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white border border-white/30 outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter module name"
            />
          </div>

          <div>
            <label className="block mb-1 text-[#0E2B56]">Description</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white border border-white/30 outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter description"
            />
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <Link
            to="/users"
            className="px-6 py-2 bg-white text-[#0E2B56] rounded-md shadow-md hover:bg-gray-100"
          >
            Cancel
          </Link>

          <Link
            to="/clock"
            className="px-6 py-2 bg-[#0E2B56] text-white rounded-md shadow-md hover:bg-[#14366e]"
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HelpCenterQuestions;