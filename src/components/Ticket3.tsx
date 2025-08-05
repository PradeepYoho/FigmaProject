import React from 'react';

const EditFAQForm: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 flex flex-col items-center justify-center p-4">
      {/* Main Container */}
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl w-full max-w-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold text-white mb-6">Edit FAQ</h2>

        {/* Title Input */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-white font-medium mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white bg-opacity-30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter title"
          />
        </div>

        {/* Description Input */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-white font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            rows={3}
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white bg-opacity-30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Enter description"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button className="bg-white text-blue-800 font-medium px-5 py-2 rounded-md hover:bg-gray-100">
            Cancel
          </button>
          <button className="bg-blue-800 text-white font-medium px-5 py-2 rounded-md hover:bg-blue-900">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditFAQForm;