import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const FAQs = () => {
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

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border border-blue-800 w-1/3 rounded-md focus:outline-none"
        />
        <Link
          to="/add-faq-form"
          className="flex items-center gap-2 px-4 py-2 bg-[#0E2B56] text-white rounded-md hover:bg-[#133e7b] text-sm font-medium"
        >
          <FaPlus />
          Add FAQ
        </Link>
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
              className="border-b border-white border-opacity-10 hover:bg-white hover:bg-opacity-20 transition space-y-2"
            >
              <td className="px-6 py-4 text-gray-800">{faq.question}</td>
              <td className="px-6 py-4 text-gray-800">{faq.category}</td>
              <td className="px-6 py-4">
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked={faq.status} />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#0E2B56] rounded-full peer peer-checked:bg-green-400 transition-all duration-300"></div>
                </label>
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-4">
                  <Link to="/edit-faq-form" className="text-blue-700 hover:text-blue-900">
                    <FaEdit />
                  </Link>
                  <Link to="/delete-faq-form" className="text-orange-600 hover:text-orange-800">
                    <FaTrash />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FAQs;
