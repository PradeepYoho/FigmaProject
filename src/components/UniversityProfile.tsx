import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import barathiLogo from "../assets/barathiLogo.png";
import barathidasanBanner from "../assets/barathidasanBanner.png";
import Profile from "../components/Profile";

type Tab = 'about' | 'profile' | 'courses';

function UniversityProfile() {
  const [activeTab, setActiveTab] = useState<Tab>('profile');

  const tabClass = (tab: Tab) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-900 font-semibold text-sm ${activeTab === tab ? 'bg-blue-900 text-white' : 'text-blue-900 hover:bg-blue-100'
    }`;

  return (
    <div className="p-6">
      <div className="rounded-lg overflow-hidden">
        <div className="relative h-[60px] flex items-center gap-4 px-4 py-[19px] rounded-t-[12px] bg-[#003E6B]">
          <div className="w-6 h-6 flex justify-center items-center">
            <IoIosArrowBack className="w-6 h-6 text-white" />
          </div>

          <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex justify-center items-center">
            <img src={barathiLogo} alt="University Logo" className="w-8 h-8 object-contain" />
          </div>

          <h1 className="text-xl font-semibold text-white">Bharathidasan University</h1>
        </div>

        <img
          src={barathidasanBanner}
          alt="University Banner"
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="mt-4">
        <div className="flex gap-4 mb-6">
          <button onClick={() => setActiveTab('about')} className={tabClass('about')}>
            <span>🧾</span> About
          </button>
          <button onClick={() => setActiveTab('profile')} className={tabClass('profile')}>
            <span>👤</span> Profile
          </button>
          <button onClick={() => setActiveTab('courses')} className={tabClass('courses')}>
            <span>📚</span> Courses
          </button>
        </div>

        <div>
          {/* {activeTab === 'about' && <About />} */}
          {activeTab === 'profile' && <Profile />}
          {/* {activeTab === 'courses' && <Courses />} */}
        </div>
      </div>
    </div>


  );
};

export default UniversityProfile;
