import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddFaqNotes = () => {
    return (
        <div className="fixed right-5 top-0 h-full w-[300px] bg-white/30 backdrop-blur-lg shadow-lg p-4 rounded-xl">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-blue-800">Add FAQ Categories</h2>
                <button className="text-gray-600 hover:text-gray-800">
                    <FaTimes />
                </button>
            </div>

            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="title" className="text-sm font-medium text-blue-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="border border-blue-800 rounded-md px-3 py-2 backdrop-blur-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0E2B56]"
                        placeholder="Enter title"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="description" className="text-sm font-medium text-blue-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        rows={3}
                        className="border border-blue-800 rounded-md px-3 py-2 backdrop-blur-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0E2B56]"
                        placeholder="Enter description"
                    />
                </div>

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
                </div>      </form>
        </div>
    );
}

export default AddFaqNotes;