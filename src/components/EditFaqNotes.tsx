import { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const EditFaqNotes = () => {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);

  const handleSave = () => {
    setShowSaveModal(true);
  };


  return (
    <div className="relative">
      <div className="max-w-2xl bg-gradient-to-br from-blue-200 to-blue-400 mx-auto rounded-xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold text-blue-800 mb-8">Edit FAQ</h2>

        <form className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-md font-medium text-blue-700 mb-1">
              Title
            </label>
            <input
              id="title"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter category title"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-md font-medium text-blue-700 mb-1">
              Description
            </label>
            <input
              id="description"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter category description"
            />
          </div>

          <div className="flex justify-between gap-2 pt-2">
            <button
              type="button"
              onClick={() => setShowCancelModal(true)}
              className="px-4 py-2 rounded-md border bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 rounded-md bg-[#0E2B56] text-white hover:bg-[#133e7b] shadow-sm"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>

{showCancelModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
    <div className="bg-white rounded-xl p-6 w-80 text-center shadow-xl">
      <div className="flex justify-center mb-4">
        <div className="bg-red-100 p-4 rounded-full">
          <FaExclamationTriangle className="text-red-500 text-3xl" />
        </div>
      </div>
      <h2 className="text-lg font-semibold mb-2 text-gray-800">Are You Sure?</h2>
      <p className="text-sm text-gray-500 mb-6">
        Are you sure you want to cancel your changes?
      </p>
      <div className="flex justify-center gap-3">
        <Link
          to="/calendar"
          className="px-4 py-2 bg-[#0E2B56] text-white rounded-md hover:bg-[#133e7b]"
        >
          Yes, Cancel
        </Link>
        <button
          onClick={() => setShowCancelModal(false)}
          className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
        >
          No
        </button>
      </div>
    </div>
  </div>
)}

{showSaveModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
    <div className="bg-white rounded-xl p-6 w-80 text-center shadow-xl">
      <div className="flex justify-center mb-4">
        <div className="bg-green-100 p-4 rounded-full">
          ✅
        </div>
      </div>
      <h2 className="text-lg font-semibold mb-2 text-gray-800">Saved Successfully!</h2>
      <p className="text-sm text-gray-500 mb-6">
        Status Changed
      </p>
      <Link
        to="/faq-list"
        className="px-4 py-2 bg-[#0E2B56] text-white rounded-md hover:bg-[#133e7b]"
      >
        OK
      </Link>
    </div>
  </div>
)}
    </div>
  );
};

export default EditFaqNotes;
