import MERN from "../assets/MERN.png"; // replace with your actual image path
const Courses = () => {
return (
    <div className="max-w-sm bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl p-4 shadow-lg space-y-4">
      <div className="rounded-xl overflow-hidden">
        <img
          src={MERN} // replace with your actual image path
          alt="MERN"
          className="w-full h-40 object-cover"
        />
      </div>

      <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-md w-fit">
        Featured
      </span>

      <h3 className="text-[#0E2B56] font-bold text-lg">MERN STACK</h3>

      <p className="text-sm text-[#0E2B56]">
        A MERN stack developer is responsible for front-end and back-end development, database
        management, integration and deployment, bug fixing, and working with cross-functional teams.
      </p>

      <div className="flex justify-between items-center text-xs text-gray-600 pt-2 border-t border-gray-300">
        <span>Modules</span>
        <span>Duration : 30 days</span>
      </div>
    </div>
  );
};

export default Courses;
