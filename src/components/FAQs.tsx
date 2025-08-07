import { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const FAQs = () => {
  const [showForm, setShowForm] = useState(false);

  const faqs = [
    {
      question: "How do I set effective community guidelines?",
      category: "Community Management",
      status: true,
    },
    {
      question: "What are the contents are available in Dashboard",
      category: "Dashboard",
      status: true,
    },
    {
      question: "How can users update their profile information?",
      category: "User Management",
      status: true,
    },
    {
      question: "How do students register for courses?",
      category: "Contant Management",
      status: true,
    },
    {
      question: "What are the courses are available",
      category: "Course Management",
      status: true,
    },
    {
      question: "How many students are available per batch?",
      category: "Student Management",
      status: true,
    },
  ];

  const categories = [
    "Community Management",
    "Dashboard",
    "User Management",
    "Contant Management",
    "Course Management",
    "Student Management",
  ];

  return (
    <div className="relative space-y-3">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border border-blue-800 w-1/3 rounded-md focus:outline-none"
        />
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#0E2B56] text-white rounded-md hover:bg-[#133e7b] text-sm font-medium"
        >
          <FaPlus />
          Add FAQ
        </button>
      </div>

      <table className="w-full text-left bg-opacity-10 rounded-md overflow-hidden shadow">
        <thead className="bg-[#0E2B56] text-white">
          <tr>
            <th className="px-6 py-3">Question</th>
            <th className="px-6 py-3">Categorie Name</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {faqs.map((faq, index) => (
            <tr
              key={index}
              className="border-b border-white border-opacity-10 hover:bg-opacity-20 transition"
            >
              <td className="px-6 py-4 text-gray-800">{faq.question}</td>
              <td className="px-6 py-4 text-gray-800">{faq.category}</td>
              <td className="px-6 py-4">
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-green-500 relative transition-all duration-300">
                                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-full" />
                            </div>
                        </label>
              </td>
              <td className="px-6 py-4">
                    <div className="flex justify-end gap-6">
                        <Link to="/edit-faq-category" className="text-blue-700 hover:text-blue-900">
                            <FaEdit />
                        </Link>
                        <Link to="/delete-category" className="text-orange-600 hover:text-orange-800">
                            <FaTrash />
                        </Link>
                    </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="fixed top-4 right-4 z-50">
          <div className="bg-white/30 backdrop-blur-xl p-6 rounded-2xl w-96 h-150 shadow-xl border border-white/50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-[#0E2B56]">Add FAQ</h2>
              <button
                onClick={() => setShowForm(false)}
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
              className="w-full px-4 py-2 mb-3 rounded-md border focus:outline-none"
            />
                        <label htmlFor="description" className="text-lg font-medium text-blue-800 mb-2">Select Category</label>
            <select className="w-full px-4 py-2 mb-6 rounded-md border focus:outline-none text-gray-700">
              <option value="">Select Category</option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="flex justify-between">
              <button
                onClick={() => setShowForm(false)}
                        className="absolute bottom-5 right-5 bg-white text-gray-700 px-4 py-2 rounded-md shadow border hover:bg-blue-800 hover:text-white"
              >
                Cancel
              </button>
              <button
                        className="absolute bottom-5 left-5 bg-blue-800 text-white px-4 py-2 rounded-md shadow hover:bg-white hover:text-blue-800"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQs;
