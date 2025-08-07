import { useState } from "react";

function ToggleSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={enabled}
        onChange={() => setEnabled(!enabled)}
      />
      <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 relative transition-colors duration-300">
        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-10" />
      </div>
    </label>
  );
}

export default ToggleSwitch;