import { Link } from 'react-router-dom';

const AccountDetail = () => {
  return (
    <div className="p-4" >
      <div>

        {/* Stepper */}
        <div className="flex justify-between items-center text-white font-medium text-sm">
          {["Personal Info", "Gallery Info", "Social Links", "Documents", "Account Details"].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index === 4 ? 'bg-blue-800' : 'bg-blue-600'}`}>
                {index + 1}
              </div>
              <span className="mt-1">{step}</span>
            </div>
          ))}
        </div>

      
        <form className="space-y-6 pt-6">

  
  <div>
    <h2 className="text-xl font-semibold text-white mb-4">Enter Your Branch Details Here</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-white mb-1">Branch Name</label>
        <input type="text" className="w-full border border-[#0E2B56] rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-1">Phone</label>
        <input type="text" className="w-full border border-[#0E2B56] rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-1">Alternate Phone</label>
        <input type="text" className="w-full border border-[#0E2B56] rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-1">Address Line 1</label>
        <input type="text" className="w-full border border-[#0E2B56] rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-1">Address Line 2</label>
        <input type="text" className="w-full border border-[#0E2B56] rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-1">Country</label>
        <input type="text" className="w-full border border-[#0E2B56] rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-1">State</label>
        <input type="text" className="w-full border border-[#0E2B56] rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-1">City</label>
        <input type="text" className="w-full border border-[#0E2B56] rounded px-3 py-2" />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-white mb-1">Pin Code</label>
        <input type="text" className="w-full border border-[#0E2B56] rounded px-3 py-2" />
      </div>
    </div>
  </div>

  
  <div>
    <h2 className="text-xl font-semibold text-white mb-4">Enter Your Contact Details Here</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-white mb-1">Full Name</label>
        <input type="text" className="w-full border border-[#0E2B56] rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-1">Last Name</label>
        <input type="text" className="w-full border border-[#0E2B56] rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-1">Email</label>
        <input type="email" className="w-full border border-[#0E2B56] rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-1">Phone Number</label>
        <input type="text" className="w-full border border-[#0E2B56] rounded px-3 py-2" />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-white mb-1">Profile Image</label>
        <input type="text" className="w-full border border-[#0E2B56] rounded px-3 py-2" />
      </div>
    </div>
  </div>

  
  <div className="flex justify-between mt-6">
    <Link
      to="/DocumentForm"
      className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
    >
      Back
    </Link>
    <Link
      to="/institute"
      className="px-4 py-2 bg-[#0E2B56] text-white rounded-md hover:bg-[#133e7b]"
    >
      Submit
    </Link>
  </div>
</form>


      </div>
    </div>
  );
};

export default AccountDetail;
