
const Banner = () => {
  return (
<div className=" p-6 text-blue-900">
      <div className="relative h-[60px] flex items-center gap-4 px-4 rounded-t-[12px] bg-[#003E6B]">
        <div className="w-6 h-6 flex justify-center items-center">
          <img src="/assets/BackArrow.png" alt="Back" className="w-full h-full object-contain" />
        </div>

        <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex justify-center items-center">
          <img src="/assets/barathidasan_Banner.png" alt="University Logo" className="w-8 h-8 object-contain" />
        </div>
        <h1 className="text-xl font-semibold text-white">Bharathidasan University</h1>
      </div>

      <img
        src="/institute.png"
        alt="University Banner"
        className="w-full h-94 object-cover" />
    </div>
  )
}

export default Banner;