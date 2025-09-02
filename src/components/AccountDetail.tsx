
const AccountDetailsForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 p-6">
      <div className="max-w-5xl mx-auto bg-white/30 backdrop-blur-md rounded-xl shadow-lg p-8 space-y-8">
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

        {/* Form Sections */}
        <form className="space-y-6">
          {/* Branch Details */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Enter Your Branch Details Here</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Branch Name" className="input" />
              <input type="text" placeholder="Phone" className="input" />
              <input type="text" placeholder="Alternate Phone" className="input" />
              <input type="text" placeholder="Address Line 1" className="input" />
              <input type="text" placeholder="Address Line 2" className="input" />
              <input type="text" placeholder="Country" className="input" />
              <input type="text" placeholder="State" className="input" />
              <input type="text" placeholder="City" className="input" />
              <input type="text" placeholder="Pin Code" className="input col-span-2" />
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Enter Your Contact Details Here</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="input" />
              <input type="text" placeholder="Last Name" className="input" />
              <input type="email" placeholder="Email" className="input" />
              <input type="text" placeholder="Phone Number" className="input" />
              <input type="text" placeholder="Profile Image" className="input col-span-2" />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button type="button" className="bg-white text-black px-6 py-2 rounded-lg shadow hover:bg-gray-100">Back</button>
            <button type="submit" className="bg-blue-800 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-900">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountDetailsForm;