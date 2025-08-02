import { Link } from "react-router-dom";

const AddFaqForm = () => {
    return (
        <div className="w-full max-w-xs mx-auto p-6 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl shadow-lg space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-blue-900">Add FAQ</h2>
                <button className="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
            </div>

            <div>
                <label className="block text-lg text-blue-700 mb-1">Title</label>
                <input
                    type="text"
                    placeholder="Enter title"
                    className="w-full px-3 py-2 rounded-md border border-blue-800 focus:outline-none focus:ring-2 focus:ring-[#0E2B56]"
                />
            </div>

            <div>
                <label className="block text-lg text-blue-700 mb-1">Description</label>
                <textarea
                    placeholder="Enter description"
                    className="w-full px-3 py-2 rounded-md border border-blue-800 focus:outline-none focus:ring-2 focus:ring-[#0E2B56]"
                />
            </div>

            <div>
                <label className="block text-lg text-blue-700 mb-1">Select Category</label>
                <select className="w-full px-3 py-2 rounded-md border border-blue-800 focus:outline-none focus:ring-2 focus:ring-[#0E2B56]">
                    <option value="">Choose category</option>
                    <option>Community Management</option>
                    <option>Dashboard</option>
                    <option>User Management</option>
                    <option>Course Management</option>
                </select>
            </div>

            <div className="flex justify-end gap-2 pt-2">
                <Link
                    to="/settings"
                    className="px-4 py-2 rounded-md border bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                >
                    Cancel
                </Link>
                <Link
                    to="/submit-faq"
                    className="px-4 py-2 rounded-md bg-[#0E2B56] text-white hover:bg-[#133e7b] shadow-sm"
                >
                    Submit
                </Link>
            </div>
        </div>
    );
};

export default AddFaqForm;
