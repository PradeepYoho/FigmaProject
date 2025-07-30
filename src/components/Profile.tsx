import aboutlogo from '../assets/aboutlogo.png'; 

const Profile = () => {
  return (
      <div className="p-6 mt-6 flex items-start gap-10 w-full max-w-[705px] h-[262px] bg-[#E5FBFF03] backdrop-blur-[152px] shadow-[inset_0_4px_122px_#ffffff80] rounded-[12px] border border-white/20">
  <div className="text-center">
    <img
      src={aboutlogo}
      alt="Logo"
      className="w-[185px] h-[158px]  mx-auto"
    />
    <p className="text-lg font-semibold text-[#0E2B56] mt-1">Bharathidasan University</p>
    <p className="text-[#0E2B56] text-sm">aureg@bdu.ac.in</p>
  </div>
</div>
  )
}

export default Profile