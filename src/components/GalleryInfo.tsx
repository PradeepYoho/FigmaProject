import { FiUploadCloud } from "react-icons/fi";
import { Link } from "react-router-dom";

const UploadBox = ({ title }: { title: string }) => {
  return (
    <div className="mb-6">
      <p className="font-semibold mb-2">{title}</p>
      <div className="border border-dashed border-gray-400 rounded-lg p-6 bg-white/50 backdrop-blur-sm text-center hover:bg-blue-50 transition">
        <FiUploadCloud className="mx-auto text-4xl text-blue-500 mb-2" />
        <p className="text-sm text-gray-600">
          Drag & Drop Or <span className="text-blue-600 font-semibold cursor-pointer">Click To Upload</span>
        </p>
        <p className="text-xs text-gray-500 mt-1">Image Size: 1200x675 px, Max: 800 KB</p>
      </div>
      <textarea
        className="mt-3 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70"
        placeholder="Description"
      />
    </div>
  );
};

const App = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-6">
      <div className="bg-white/50 backdrop-blur-md rounded-xl w-full max-w-4xl shadow-lg p-6">
      
        <div className="flex justify-between mb-6">
          {["Personal Info", "Gallery Info", "Social Links", "Documents", "Account Details"].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-sm text-gray-700">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index === 1 ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
              >
                {index + 1}
              </div>
              <span className="mt-1">{step}</span>
            </div>
          ))}
        </div>

      
        <h2 className="text-lg font-semibold mb-4">Add Gallery Info</h2>

        <UploadBox title="Institute Logo" />
        <UploadBox title="Institute Image" />
        <UploadBox title="Another Logo" />

      
        <div className="flex items-center mb-6">
           <Link
    to="/previous-route" 
    className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
  >
    Back
  </Link>
  <Link
    to="/galleryinfo" 
    className="px-4 py-2 bg-[#0E2B56] text-white rounded-md hover:bg-[#133e7b]"
  >
    Next
  </Link>
          
          
        </div>
      </div>
    </div>
  );
};
export default App;