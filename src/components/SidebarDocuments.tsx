import { RiContactsBook2Fill } from "react-icons/ri";

function SidebarDocuments() {
    const documents = [
        { title: 'GST', buttonText: 'GST Document' },
        { title: 'PAN', buttonText: 'PAN Document' },
        { title: 'Institute License', buttonText: 'Lic Document' }
    ];

    return (
        <div className="flex flex-wrap gap-4 justify-center p-2 rounded-xl">
            {documents.map((doc, index) => (
                <div
                    key={index}
                    className="bg-white/50 backdrop-blur-md p-4 rounded-lg w-64 shadow-md flex flex-col justify-between bg-gradient-to-r from-blue-100 to-blue-200"
                >
                    <div className="flex justify-between text-sm font-semibold text-[#0E2B56] mb-3 ">
                        <span>{doc.title}</span>
                        <span className="text-gray-500">N/A</span>
                    </div>
                    <button className="bg-[#0E2B56] text-white py-2 px-3 rounded-md flex items-center justify-center space-x-2">
                        <RiContactsBook2Fill />
                        <span>{doc.buttonText}</span>
                    </button>
                </div>
            ))}
        </div>
    );
}


export default SidebarDocuments;