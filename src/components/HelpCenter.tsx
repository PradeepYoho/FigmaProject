import { FaPhone, FaEnvelope, FaPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
    return (
        <div className="p-6 text-[#0E2B56]">
            <div className="flex justify-between items-start flex-wrap gap-6 mb-8">
                <div className="space-y-4 max-w-xl">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-white" />
                        <h2 className="text-lg font-semibold">Hello, How can we help?</h2>
                    </div>

                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full p-2 rounded-md border border-blue-800 focus:outline-none"
                    />

                    <p className="text-sm text-gray-700">
                        Common troubleshooting topics: <span className="font-medium">eCommerce</span>, <span className="font-medium">Blogging</span> to <span className="font-medium">payment</span>
                    </p>
                </div>

                <div className="flex flex-col items-end space-y-4">
                    <div className="flex gap-4">
                        <div className="w-32 h-24 bg-white rounded-md shadow-md" />
                        <div className="w-32 h-24 bg-white rounded-md shadow-md" />
                    </div>
                    <Link
                        to="/add-new"
                        className="flex justify-end items-center space-x-2 bg-[#0E2B56] text-white px-4 py-2 rounded-md hover:bg-[#14366e] transition"
                    >
                        <FaPlus className="text-sm" />
                        <span className="text-sm">Add New</span>
                    </Link>
                </div>
            </div>

            <div className="text-center space-y-2 mb-12">
                <Link
                    to="/questions"
                    className="bg-white px-6 py-1 rounded-full text-[#0E2B56] font-medium shadow"
                >
                    Questions
                </Link>
                <p className="text-sm font-semibold">You still have a questions?</p>
                <p className="text-sm text-gray-700">
                    If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!
                </p>
            </div>

            <div className="flex justify-around items-center gap-12">

                <div className="flex flex-col justify-center items-center space-x-3">
                    <div className="bg-[#0E2B56] p-3 rounded-full text-white">
                        <FaPhone />
                    </div>
                    <div>
                        <p className="text-lg font-semibold">+ (810) 2548 2568</p>
                        <p className="text-md text-gray-700">We are always happy to help!</p>
                    </div>
                </div>

                <div className="flex flex-col items-center space-x-3">
                    <div className="bg-[#0E2B56] p-3 rounded-full text-white">
                        <FaEnvelope />
                    </div>
                    <div>
                        <p className="text-lg font-semibold">hello@help.com</p>
                        <p className="text-md text-gray-700">Best way to get answer faster!</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HelpCenter;