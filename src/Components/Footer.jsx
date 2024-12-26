import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#000029] text-white pt-12 pb-6 px-6">
      <div className="container mx-auto w-[90%]">
        {/* Footer Content Sections */}
        <div className="grid md:grid-cols-3 gap-12 mb-12 relative">
          {/* About Us Section */}
          <div className='text-center md:text-start'>
            <a
              href="/"
              className="text-white text-2xl font-style  font-bold tracking-wide hover:text-[#00FFFF] transition duration-300"
            >
              Heritage<span className="text-[#00FFFF]">Hub</span>
            </a>
            <h3 className="text-[#00FFFF] text-xl sm:text-2xl font-semibold mb-4 mt-4">About Us</h3>
            <p className="text-gray-300 mb-6">
              HeritageHub is your trusted partner for exploring and preserving historical artifacts.
            </p>
            <a href="/about" className="text-[#00FFFF] font-semibold hover:underline">
              Learn More
            </a>
          </div>

          {/* Contact Us Section */}
          <div className='text-center md:text-start'>
            <h3 className="text-[#00FFFF] text-xl sm:text-2xl font-semibold mb-4">Contact Us</h3>
            <ul>
              <li className="mb-2">
                <a href="mailto:info@heritagehub.com" className="text-gray-300 hover:text-[#00FFFF]">
                  info@heritagehub.com
                </a>
              </li>
              <li className="mb-2">
                <span className="text-gray-300">+1 234 567 890</span>
              </li>
              <li>
                <span className="text-gray-300">123 History Lane, City, England</span>
              </li>
            </ul>
            <div className="text-center ml-8 md:ml-0 md:text-start flex  gap-6 mt-4">
              <a href="#" className="text-gray-300 hover:text-[#00FFFF]">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00FFFF]">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00FFFF]">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00FFFF]">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-[#000029] text-center md:text-start  rounded-lg shadow-xl flex flex-col items-center justify-center">
            <h3 className="text-[#00FFFF] text-xl sm:text-3xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              Stay updated with the latest discoveries and news from HeritageHub.
            </p>
            <form className="space-y-2 ">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 text-black rounded-lg w-full  border-2 border-[#000029]"
              />
              <button type='submit' className="py-3 px-6 bg-[#00FFFF] text-black rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group  w-[60%]">
                <span className="absolute inset-0 bg-gradient-to-r from-[#000029] to-[#00FFFF] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative group-hover:text-white transition duration-500 ease-in-out text-center">
                  Subscribe
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-300 text-sm">
            &copy; 2024 HeritageHub. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
