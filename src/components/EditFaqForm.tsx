import { Link } from "react-router-dom";

const EditFaqForm = () => {
    return (
        <div className=" max-w-2xl bg-gradient-to-br from-blue-200 to-blue-400 mx-auto rounded-xl p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-blue-800 mb-8">
                Edit FAQ
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

                <div className="flex justify-between gap-2 pt-2">
                    <Link
                        to="/support-tickets"
                        className="px-4 py-2 rounded-md border bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                    >
                        Cancel
                    </Link>
                    <Link
                        to="/submit-faq"
                        className="px-4 py-2 rounded-md bg-[#0E2B56] text-white hover:bg-[#133e7b] shadow-sm"
                    >
                        Save Changes
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default EditFaqForm;
