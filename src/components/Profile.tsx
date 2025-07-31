import aboutLogo from '../assets/aboutLogo.png';
import location from '../assets/location.png';
import email from '../assets/email.png';
import Call from '../assets/Call.png';
const Profile = () => {
    return (
        <><div className="p-6 mt-6 flex items-start gap-20 w-full max-w-[705px] h-[262px] bg-[#E5FBFF03] backdrop-blur-[152px] shadow-[inset_0_4px_122px_#ffffff80] rounded-[12px] border border-white/20">
            <div className="text-center">
                <img
                    src={aboutLogo}
                    alt="Logo"
                    className="w-[185px] h-[158px]  mx-auto" />
                <p className="text-lg font-semibold text-[#0E2B56] mt-1">Bharathidasan University</p>
                <p className="text-[#0E2B56] text-sm">aureg@bdu.ac.in</p>
            </div>
            <div className="flex flex-col justify-end text-[#0E2B56] text-sm space-y-4">
                <h2 className="text-xl font-semibold">Contact Details:</h2>
                <div className="flex items-center gap-2">
                    <img src={location} alt="location" className="w-5 h-5" />
                    <p>Palkalaiperur, Tiruchirappalli, 620024, Tamil Nadu</p>
                </div>
                <div className="flex items-center gap-2">
                    <img src={email} alt="email" className="w-5 h-5" />
                    <p>aureg@bdu.ac.in</p>
                </div>
                <div className="flex items-center gap-2">
                    <img src={Call} alt="phone" className="w-5 h-5" />
                    <p>914312407092</p>
                </div>
            </div>
        </div>
        <div className="mt-6 text-justify text-sm text-gray-800">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">About Us</h3>
                <p>
                    Bharathidasan University established in February 1982, and was named after the great revolutionary Tamil Poet,
                    Bharathidasan (1891-1964). The motto of the University “We will create a brave new world” has been framed from
                    Bharathidasan's poetic words. The University endeavours to be true to such a vision by creating in the region
                    a brave new world of academic innovation for social change.
                </p>
            </div></>

    )
}

export default Profile;