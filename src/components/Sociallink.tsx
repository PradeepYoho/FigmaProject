
import { Link } from "react-router-dom";


const Sociallink = () => {
  return (
    <div className=" pt-6">
      <div className=" p-6">
      
        <div className="flex justify-between mb-6">
          {["Personal Info", "Gallery Info", "Social Links", "Documents", "Account Details"].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-sm text-gray-700">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index === 2 ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
              >
                {index + 1}
              </div>
              <span className="mt-1">{step}</span>
            </div>
          ))}
        </div>

      
        <h2 className="text-lg font-semibold mb-2">Social Links</h2>
        <p className="text-sm text-gray-700 mb-4">Add Social Link</p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-700">Twitter</label>
    <input type="text" className="w-full p-2 border-2 border-[#0E2B56] rounded-md" />
  </div>
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-700">Facebook</label>
    <input type="text" className="w-full p-2 border-2 border-[#0E2B56] rounded-md" />
  </div>
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-700">Instagram</label>
    <input type="text" className="w-full p-2 border-2 border-[#0E2B56] rounded-md" />
  </div>
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-700">LinkedIn</label>
    <input type="text" className="w-full p-2 border-2 border-[#0E2B56] rounded-md" />
  </div>
  <div className="md:col-span-2">
    <label className="block mb-1 text-sm font-medium text-gray-700">Pinterest</label>
    <input type="text" className="w-full p-2 border-2 border-[#0E2B56] rounded-md" />
  </div>
</div>


        
          <div className="flex justify-between mt-6">
            <Link
    to="/Galleryinfo" 
    className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
  >
    Back
  </Link>
  <Link
    to="/DocumentForm" 
    className="px-4 py-2 bg-[#0E2B56] text-white rounded-md hover:bg-[#133e7b]"
  >
    Next
  </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sociallink;  