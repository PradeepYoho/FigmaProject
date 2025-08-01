import { FaTimes } from "react-icons/fa";

const AddFaqNotes = () => {
return (
    <div className="fixed right-0 top-0 h-full w-[300px] bg-white/30 backdrop-blur-lg shadow-lg p-4 rounded-l-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Add FAQ Categories</h2>
        <button className="text-gray-600 hover:text-gray-800">
          <FaTimes />
        </button>
      </div>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="border border-gray-300 rounded-md px-3 py-2 bg-white/60 backdrop-blur-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0E2B56]"
            placeholder="Enter title"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            rows={3}
            className="border border-gray-300 rounded-md px-3 py-2 bg-white/60 backdrop-blur-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0E2B56]"
            placeholder="Enter description"
          />
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            type="button"
            className="bg-white text-gray-700 px-4 py-2 rounded-md shadow border hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#0E2B56] text-white px-4 py-2 rounded-md shadow hover:bg-[#133e7b]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddFaqNotes;