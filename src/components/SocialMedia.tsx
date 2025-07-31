import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

export default function SocialLinks() {
  return (
    <div className="grid grid-cols-2 gap-4 p-2  rounded-xl w-fit">

      <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-md hover:shadow-lg transition">
        <FaFacebookF className="text-[#0E2B56] w-6 h-6" />
        <a href="https://www.facebook.com" className="text-blue-600 text-sm hover:underline">
          www.facebook.com
        </a>
      </div>

      <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-md hover:shadow-lg transition">
        <FaLinkedinIn className="text-[#0E2B56] w-6 h-6" />
        <a href="https://www.linkedin.com" className="text-blue-600 text-sm hover:underline">
          www.linkedin.com
        </a>
      </div>

      <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-md hover:shadow-lg transition">
        <FaInstagram className="text-[#0E2B56] w-6 h-6" />
        <a href="https://www.instagram.com" className="text-blue-600 text-sm hover:underline">
          www.instagram.com
        </a>
      </div>

      <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-md hover:shadow-lg transition">
        <FaXTwitter className="text-[#0E2B56] w-6 h-6" />
        <a href="https://www.x.com" className="text-blue-600 text-sm hover:underline">
          www.X.com
        </a>
      </div>
    </div>
  );
}
