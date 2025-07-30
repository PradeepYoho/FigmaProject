import { NavLink } from 'react-router-dom';

const SidebarSettings = () => {
  return (
        <div className="w-1/4 bg-white/10 rounded-xl p-4 backdrop-blur-md">
          <h2 className="text-lg font-semibold mb-4">Settings</h2>
<ul className="space-y-3">
  <NavLink
    to="/personal-info"
    className={({ isActive }) =>
      `block px-4 py-2 rounded-lg cursor-pointer font-semibold text-sm ${
        isActive
          ? 'bg-blue-900 text-white'
          : 'border border-blue-900 hover:bg-blue-500 hover:text-white text-blue-900'
      }`
    }
  >
    Personal Info
  </NavLink>

  <NavLink
    to="/profile"
    className={({ isActive }) =>
      `block px-4 py-2 rounded-lg cursor-pointer font-semibold text-sm ${
        isActive
          ? 'bg-blue-900 text-white'
          : 'border border-blue-900 hover:bg-blue-500 hover:text-white text-blue-900'
      }`
    }
  >
    Profile
  </NavLink>

  <NavLink
    to="/social-media"
    className={({ isActive }) =>
      `block px-4 py-2 rounded-lg cursor-pointer font-semibold text-sm ${
        isActive
          ? 'bg-blue-900 text-white'
          : 'border border-blue-900 hover:bg-blue-500 hover:text-white text-blue-900'
      }`
    }
  >
    Social Media
  </NavLink>

  <NavLink
    to="/documents"
    className={({ isActive }) =>
      `block px-4 py-2 rounded-lg cursor-pointer font-semibold text-sm ${
        isActive
          ? 'bg-blue-900 text-white'
          : 'border border-blue-900 hover:bg-blue-500 hover:text-white text-blue-900'
      }`
    }
  >
    Documents
  </NavLink>

  <NavLink
    to="/change-password"
    className={({ isActive }) =>
      `block px-4 py-2 rounded-lg cursor-pointer font-semibold text-sm ${
        isActive
          ? 'bg-blue-900 text-white'
          : 'border border-blue-900 hover:bg-blue-500 hover:text-white text-blue-900'
      }`
    }
  >
    Change Password
  </NavLink>

  <NavLink
    to="/activity-logs"
    className={({ isActive }) =>
      `block px-4 py-2 rounded-lg cursor-pointer font-semibold text-sm ${
        isActive
          ? 'bg-blue-900 text-white'
          : 'border border-blue-900 hover:bg-blue-500 hover:text-white text-blue-900'
      }`
    }
  >
    Institute Activity Logs
  </NavLink>
</ul>
</div>
)
}

export default SidebarSettings;