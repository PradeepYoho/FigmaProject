
import aboutLogo from '../assets/aboutLogo.png';
import gallery from '../assets/gallery.png';

const SidebarProfile = () => {
    return (
        <>
<div className='flex space-x-20'>
  <div className="text-center">
    <h1 className='text-xl font-semibold text-blue-800 text-left pb-4'>Logo</h1>
    <img
      src={aboutLogo}
      alt="Logo"
      className="h-[158px] mx-auto"
    />
    <p className="text-lg font-semibold text-[#0E2B56] mt-1">Bharathidasan University</p>
    <p className="text-[#0E2B56] text-sm">aureg@bdu.ac.in</p>
  </div>
  <div className="w-1/2">
    <h1 className='text-xl font-semibold text-blue-800 text-left pb-4'>Gallery Images</h1>
    <img
      src={gallery}
      alt="Gallery"
      className="h-[358px] w-full"
    />
  </div>
</div>
        </>
    )
}

export default SidebarProfile;