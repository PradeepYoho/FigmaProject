import React from "react";

const Edit: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white/30 backdrop-blur-md shadow-md rounded-xl p-6">
        <h2 className="text-lg font-semibold text-[#003E6B] mb-4 border-b pb-2">Edit Institute Information</h2>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#003E6B] p-6 mt-6 items-start shadow-[inset_0_4px_122px_#ffffff80] rounded-[12px] border border-white/20">
          <div>
            <label className="block mb-1">Institute Name</label>
            <input type="text" className="input bg-transparent" />
          </div>
          <div>
            <label className="block mb-1">Registered Date</label>
            <input type="text" className="input bg-transparent" />
          </div>
          <div>
            <label className="block mb-1">State</label>
            <input type="text" className="input bg-transparent" />
          </div>

          <div>
            <label className="block mb-1">City</label>
            <input type="text" className="input bg-transparent" />
          </div>
          <div>
            <label className="block mb-1">Pin Code</label>
            <input type="text" className="input bg-transparent" />
          </div>
          <div>
            <label className="block mb-1">Address Line 1</label>
            <input type="text" className="input bg-transparent" />
          </div>

          <div>
            <label className="block mb-1">Address Line 2</label>
            <input type="text" className="input bg-transparent" />
          </div>
          <div>
            <label className="block mb-1">Phone Number</label>
            <input type="text" className="input bg-transparent" />
          </div>
          <div>
            <label className="block mb-1">Alt Phone Number</label>
            <input type="text" className="input bg-transparent" />
          </div>

          <div>
            <label className="block mb-1">Official Email</label>
            <input type="email" className="input bg-transparent" />
          </div>
          <div>
            <label className="block mb-1">Official Website</label>
            <input type="url" className="input bg-transparent" />
          </div>

          <div className="md:col-span-3">
            <label className="block mb-1">Description</label>
            <textarea className="input h-24 resize-none bg-transparent" />
          </div>

          <div>
            <label className="block mb-1">Instagram</label>
            <input type="url" className="input bg-transparent" />
          </div>
          <div>
            <label className="block mb-1">Facebook URI</label>
            <input type="url" className="input bg-transparent" />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="input bg-transparent" />
          </div>

          <div>
            <label className="block mb-1">LinkedIn</label>
            <input type="url" className="input bg-transparent" />
          </div>
          <div>
            <label className="block mb-1">Twitter URI</label>
            <input type="url" className="input bg-transparent" />
          </div>
          <div>
            <label className="block mb-1">Pinterest URI</label>
            <input type="url" className="input bg-transparent" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
