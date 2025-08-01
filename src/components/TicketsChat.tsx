import { FaUser, FaEllipsisV } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";

const TicketsChat = () => {
    return (
        <div className="mx-auto mt-10 rounded-xl shadow-lg bg-gradient-to-br from-[#dce9f9] to-[#c5d7e7] p-4">
            <div className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-400 rounded-full" />
                    <div>
                        <h2 className="font-semibold text-[#0E2B56]">Chandran R</h2>
                        <p className="text-xs text-gray-500">Institute Admin</p>
                    </div>
                </div>
                <Link to="/visitors-details">
                    <FaEllipsisV className="text-gray-600 cursor-pointer" />
                </Link>
                </div>
                <div
                    className="h-96 overflow-y-auto p-4 bg-cover bg-center mt-4 rounded-md"
                    style={{
                        backgroundImage:
                            "url('https://static.vecteezy.com/system/resources/previews/007/276/503/original/whatsapp-chat-background-free-vector.jpg')",
                    }}
                >
                    <div className="flex items-start gap-2 mb-4">
                        <div className="bg-[#0E2B56] p-2 rounded-full text-white">
                            <FaUser />
                        </div>
                        <div>
                            <p className="text-sm bg-white px-4 py-2 rounded-md shadow">
                                Hi there, How are you?
                            </p>
                            <p className="text-xs text-gray-500 mt-1">12:24 PM</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-2 mb-4">
                        <div className="bg-[#0E2B56] p-2 rounded-full text-white">
                            <FaUser />
                        </div>
                        <div>
                            <p className="text-sm bg-white px-4 py-2 rounded-md shadow">
                                Waiting for your reply. As I have to go back soon. I have to
                                travel long distance.
                            </p>
                            <p className="text-xs text-gray-500 mt-1">12:25 PM</p>
                        </div>
                    </div>

                    <div className="flex items-end justify-end gap-2 mb-4">
                        <div>
                            <p className="text-sm bg-[#0E2B56] text-white px-4 py-2 rounded-md shadow">
                                Hi, I am coming there in few minutes. Please wait! I am in taxi
                                right now.
                            </p>
                            <p className="text-xs text-gray-300 text-right mt-1">12:26 PM</p>
                        </div>
                        <div className="bg-[#0E2B56] p-2 rounded-full text-white">
                            <FaUser />
                        </div>
                    </div>

                    <div className="flex items-start gap-2 mb-4">
                        <div className="bg-[#0E2B56] p-2 rounded-full text-white">
                            <FaUser />
                        </div>
                        <div>
                            <p className="text-sm bg-white px-4 py-2 rounded-md shadow">
                                Thank you very much, I am waiting here at StarBuck cafe.
                            </p>
                            <p className="text-xs text-gray-500 mt-1">12:35 PM</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center mt-4 bg-white rounded-full px-4 py-2 shadow">
                    <input
                        type="text"
                        placeholder="Type a message"
                        className="flex-grow outline-none text-sm"
                    />
                    <button className="text-green-500 text-xl">
                        <IoMdSend />
                    </button>
                </div>
            </div>
            );
}


            export default TicketsChat;