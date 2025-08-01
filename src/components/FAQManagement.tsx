import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const faqCategories = [
    "User Management",
    "Content Management",
    "Course Management",
    "Staff Management",
    "Batch Management",
    "Student Management",
];

const FAQManagement = () => {
    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="px-4 py-2 rounded-md border-2 border-blue-800 w-1/3"
                />
                <Link
                    to="/add-faq-category"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0E2B56] text-white rounded-md hover:bg-[#133e7b] text-sm font-medium"
                >
                    <FaPlus />
                    Add FAQ Categories
                </Link>
            </div>

            <div className="flex justify-between bg-[#0E2B56] text-white px-6 py-3 rounded-lg font-semibold text-md">
                <div>Category Name</div>
                <div>Status</div>
                <div className="text-right">Actions</div>
            </div>

            {faqCategories.map((name, index) => (
                <div
                    key={index}
                    className="flex justify-between items-center bg-white/40 backdrop-blur-md px-6 py-3 border-b border-white/30 text-md text-[#0E2B56] rounded-xl"
                >
                    <div>{name}</div>

                    <div>
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-green-500 relative transition-all duration-300">
                                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-full" />
                            </div>
                        </label>
                    </div>

                    <div className="flex justify-end gap-6">
                        <button className="text-blue-700 hover:text-blue-900">
                            <FaEdit />
                        </button>
                        <button className="text-orange-600 hover:text-orange-800">
                            <FaTrash />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQManagement;