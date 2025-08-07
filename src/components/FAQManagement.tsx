import { useState } from "react";
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
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="relative space-y-3">
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="px-4 py-2 rounded-md border-2 border-blue-800 w-1/3"
                />
                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#0E2B56] text-white rounded-md hover:bg-[#133e7b] text-sm font-medium"
                >
                    <FaPlus />
                    Add FAQ Categories
                </button>
            </div>

            <div className="flex items-center justify-between bg-[#0E2B56] text-white px-6 py-3 rounded-lg font-semibold text-md">
                <div className="flex-1">Category Name</div>
                <div className="flex-1 text-center">Status</div>
                <div className="flex-1 text-right">Actions</div>
            </div>

            {faqCategories.map((name, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between bg-white/40 backdrop-blur-md px-6 py-3 border-b border-white/30 text-md text-[#0E2B56] rounded-xl"
                >
                    <div className="flex-1">{name}</div>

                    <div className="flex-1 flex justify-center">
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 dark:peer-checked:bg-green-600"></div>
                        </label>
                    </div>

                    <div className="flex-1 flex justify-end gap-6">
                        <Link to="/edit-faq-category" className="text-blue-700 hover:text-blue-900">
                            <FaEdit />
                        </Link>
                        <Link to="/delete-category" className="text-orange-600 hover:text-orange-800">
                            <FaTrash />
                        </Link>
                    </div>
                </div>
            ))}

            {showModal && (
                <div className="fixed top-4 right-4 z-50">
                    <div className="bg-white/30 backdrop-blur-xl p-6 rounded-2xl w-96 h-150 shadow-xl border border-white/50">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-[#0E2B56]">Add FAQ Categories</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-700 text-xl hover:text-red-500"
                            >
                                &times;
                            </button>
                        </div>
                        <label htmlFor="title" className="text-lg font-medium text-blue-800 mb-2">Title</label>
                        <input
                            type="text"
                            placeholder="Title"
                            className="w-full px-4 py-2 mb-3 rounded-md border focus:outline-none"
                        />
                        <label htmlFor="description" className="text-lg font-medium text-blue-800 mb-2">Description</label>
                        <input
                            type="text"
                            placeholder="Description"
                            className="w-full px-4 py-2 mb-6 rounded-md border focus:outline-none"
                        />
                        <div className="flex justify-between mt-8">
                            <Link
                                to="/calendar"
                                className="absolute bottom-5 right-5 bg-white text-gray-700 px-4 py-2 rounded-md shadow border hover:bg-blue-800 hover:text-white"
                            >
                                Cancel
                            </Link>
                            <Link
                                to="/calendar"
                                className="absolute bottom-5 left-5 bg-blue-800 text-white px-4 py-2 rounded-md shadow hover:bg-white hover:text-blue-800"
                            >
                                Submit
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FAQManagement;
