
const Settings = () => {
  return (
        <div className="w-1/4 bg-white/10 rounded-xl p-4 backdrop-blur-md">
          <h2 className="text-lg font-semibold mb-4">Settings</h2>
          <ul className="space-y-3">
            <li className="bg-blue-900 text-white font-medium px-4 py-2 rounded-lg cursor-pointer">
              Personal Info
            </li>
            <li className="border border-blue-900 hover:bg-blue-500 hover:text-white text-sm font-semibold px-4 py-2 rounded-lg cursor-pointer">
              Profile
            </li>
            <li className="border border-blue-900 hover:bg-blue-500 hover:text-white text-sm font-semibold px-4 py-2 rounded-lg cursor-pointer">
              Social Media
            </li>
            <li className="border border-blue-900 hover:bg-blue-500 hover:text-white text-sm font-semibold px-4 py-2 rounded-lg cursor-pointer">
              Documents
            </li>
            <li className="border border-blue-900 hover:bg-blue-500 hover:text-white text-sm font-semibold px-4 py-2 rounded-lg cursor-pointer">
              Change Password
            </li>
            <li className="border border-blue-900 hover:bg-blue-500 hover:text-white text-sm font-semibold px-4 py-2 rounded-lg cursor-pointer">
              Institute Activity Logs
            </li>
          </ul>
        </div>
  )
}

export default Settings;