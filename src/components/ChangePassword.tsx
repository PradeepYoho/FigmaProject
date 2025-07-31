
const ChangePassword = () => {
  return (
<div className="flex justify-center items-center">
      <div className="space-y-6 w-full max-w-4xl">
        <div className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-md">
          <h2 className="text-center text-xl text-[#0E2B56] font-semibold mb-8">Institute Details</h2>
          <div className="flex justify-between items-center text-[#0E2B56]">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-md bg-gradient-to-b from-[#2d3c50] to-[#162b49]" />
              <p className="font-medium">Bharathidasan University</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-md bg-gradient-to-b from-[#2d3c50] to-[#162b49]" />
              <p className="text-sm text-gray-700">aureg@bdu.ac.in</p>
            </div>
          </div>
        </div>

        <div className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-md space-y-4">
          <h2 className="text-[#0E2B56] font-semibold">Update Password</h2>
          <hr className="border-blue-400" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm block mb-1 text-[#0E2B56]">Old Password</label>
              <input
                type="password"
                className="w-full p-2 rounded-md border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="text-sm block mb-1 text-[#0E2B56]">New Password</label>
              <input
                type="password"
                className="w-full p-2 rounded-md border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="text-sm block mb-1 text-[#0E2B56]">Re-enter Password</label>
              <input
                type="password"
                className="w-full p-2 rounded-md border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

        </div>
                  <div className="flex justify-end">
            <button className="bg-[#0E2B56] text-white px-4 py-2 rounded-md hover:bg-[#14366e] transition">
              update Password
            </button>
          </div>

      </div>
    </div>
  )
}

export default ChangePassword;