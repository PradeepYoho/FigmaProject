import { Link } from "react-router-dom";


const Documentform = () => {
  return (
    <div >
      <div className="p-6">
        
        <div className="flex justify-between mb-6">
          {["Personal Info", "Gallery Info", "Social Links", "Documents", "Account Details"].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-sm text-gray-700">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index === 3 ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
              >
                {index + 1}
              </div>
              <span className="mt-1">{step}</span>
            </div>
          ))}
        </div>

      
        <h2 className="text-lg font-semibold mb-2">Documents</h2>
        <p className="text-sm text-gray-700 mb-4">Add Institute Docs</p>

       <form className="space-y-6">
  
  <div>
    <label className="block font-medium mb-1 text-sm text-gray-700">GST Number</label>
    <input
      type="text"
      className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>


  <div>
    <label className="block font-medium mb-1 text-sm text-gray-700">PAN Number</label>
    <input
      type="text"
      className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  
  <div>
    <label className="block font-medium mb-1 text-sm text-gray-700">License Number</label>
    <input
      type="text"
      className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  
  <div className="flex justify-between items-center mb-6">
           <Link
    to="/Sociallink" 
    className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
  >
    Back
  </Link>
  <Link
    to="/AccountDetails" 
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

export default Documentform;