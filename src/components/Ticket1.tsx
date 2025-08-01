import { FC } from 'react';
import { FaEdit, FaTrash, FaToggleOn } from 'react-icons/fa';

interface FAQItem {
  question: string;
  category: string;
  status: boolean;
}

const faqData: FAQItem[] = [
  { question: 'How do I set effective community guidelines?', category: 'Community Management', status: true },
  { question: 'What are the contents are available in Dashboard', category: 'Dashboard', status: true },
  { question: 'How can users update their profile information?', category: 'User Management', status: true },
  { question: 'How do students register for courses?', category: 'Content Management', status: true },
  { question: 'What are the courses are available', category: 'Course Management', status: true },
  { question: 'How many students are available per batch?', category: 'Student Management', status: false },
];

const FAQList: FC = () => {
  return (
    <div className="bg-white bg-opacity-10 rounded-xl shadow-lg p-4">
      <div className="grid grid-cols-3 gap-4 text-sm font-semibold border-b border-white pb-2 mb-4">
        <span>Question</span>
        <span>Category Name</span>
        <span className="text-right">Actions</span>
      </div>
      {faqData.map((faq, idx) => (
        <div
          key={idx}
          className="grid grid-cols-3 items-center gap-4 p-2 rounded-lg hover:bg-white/10 transition"
        >
          <span>{faq.question}</span>
          <span className="text-blue-100 font-medium">{faq.category}</span>
          <div className="flex justify-end items-center gap-3">
            <span className="text-green-400">
              <FaToggleOn />
            </span>
            <button className="text-blue-200 hover:text-blue-400">
              <FaEdit />
            </button>
            <button className="text-red-400 hover:text-red-600">
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQList;