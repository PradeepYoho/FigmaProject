import { Link } from "react-router-dom";

const InstituteDetails = () => {

  return (
        <div className="bg-white/10 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Institute Details</h2>

<div className="grid grid-cols-2 gap-x-6 gap-y-4">
  <div>
    <label htmlFor="institute-id" className="block mb-1 font-semibold text-blue-900 text-sm">Institute ID</label>
    <input type="text" id="institute-id" className="w-full bg-white/10 px-4 py-2 rounded-lg border border-blue-900 text-blue-900" />
  </div>

  <div>
    <label htmlFor="institute-code" className="block mb-1 font-semibold text-blue-900 text-sm">Institute Code</label>
    <input type="text" id="institute-code" className="w-full bg-white/10 px-4 py-2 rounded-lg border border-blue-900 text-blue-900" />
  </div>

  <div>
    <label htmlFor="institute-name" className="block mb-1 font-semibold text-blue-900 text-sm">Institute Name</label>
    <input type="text" id="institute-name" className="w-full bg-white/10 px-4 py-2 rounded-lg border border-blue-900 text-blue-900" />
  </div>

  <div>
    <label htmlFor="official-email" className="block mb-1 font-semibold text-blue-900 text-sm">Official Email</label>
    <input type="email" id="official-email" className="w-full bg-white/10 px-4 py-2 rounded-lg border border-blue-900 text-blue-900" />
  </div>

  <div>
    <label htmlFor="status" className="block mb-1 font-semibold text-blue-900 text-sm">Status</label>
    <input type="text" id="status" className="w-full bg-white/10 px-4 py-2 rounded-lg border border-blue-900 text-blue-900" />
  </div>

  <div>
    <label htmlFor="contact" className="block mb-1 font-semibold text-blue-900 text-sm">Contact</label>
    <input type="text" id="contact" className="w-full bg-white/10 px-4 py-2 rounded-lg border border-blue-900 text-blue-900" />
  </div>

  <div>
    <label htmlFor="alternate-number" className="block mb-1 font-semibold text-blue-900 text-sm">Alternate Number</label>
    <input type="text" id="alternate-number" className="w-full bg-white/10 px-4 py-2 rounded-lg border border-blue-900 text-blue-900" />
  </div>

  <div>
    <label htmlFor="registered-date" className="block mb-1 font-semibold text-blue-900 text-sm">Registered Date</label>
    <input type="text" id="registered-date" className="w-full bg-white/10 px-4 py-2 rounded-lg border border-blue-900 text-blue-900" />
  </div>

  <div className="col-span-2">
    <label htmlFor="address" className="block mb-1 font-semibold text-blue-900 text-sm">Address</label>
    <input type="text" id="address" className="w-full bg-white/10 px-4 py-2 rounded-lg border border-blue-900 text-blue-900" />
  </div>
</div>

          <div className="flex justify-between mt-6">

<Link
  to="/edit" className="bg-white px-6 py-2 rounded-lg font-semibold text-blue-900">
  Edit
</Link>
            <button className="bg-blue-900 px-6 py-2 rounded-lg font-semibold text-white">Suspend</button>
          </div>
        </div>
  )
}

export default InstituteDetails;