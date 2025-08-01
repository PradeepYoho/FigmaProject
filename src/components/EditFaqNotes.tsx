
const EditFaqNotes = () => {
  return (
    <div className="max-w-2xl mx-auto rounded-xl p-6 shadow-lg">
      <h2 className="text-lg font-semibold text-blue-800 mb-8">
        Edit FAQ Categories
      </h2>

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

        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="bg-white border text-gray-700 px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-white hover:text-blue-900 border transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditFaqNotes;
