
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-6">
      <div className="bg-white/50 backdrop-blur-md rounded-xl w-full max-w-4xl shadow-lg p-6">
        {/* Step Indicator */}
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

        {/* Social Links Section */}
        <h2 className="text-lg font-semibold mb-2">Social Links</h2>
        <p className="text-sm text-gray-700 mb-4">Add Social Link</p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="input-style" placeholder="Twitter" />
            <input className="input-style" placeholder="Facebook" />
            <input className="input-style" placeholder="Instagram" />
            <input className="input-style" placeholder="LinkedIn" />
            <input className="input-style md:col-span-2" placeholder="Pinterest" />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Back</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;