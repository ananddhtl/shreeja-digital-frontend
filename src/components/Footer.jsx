import { FiMail } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-16 pb-8 px-6 border-t border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
       
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo2.png"
              alt="Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 leading-tight">
                SHREEJA
              </h1>
              <p className="text-xs text-gray-500 tracking-wide">DIGITAL AGENCY</p>
            </div>
          </div>

          <p className="text-base text-gray-600 max-w-sm leading-relaxed">
            We create digital experiences that stand out. Our team of experts is
            dedicated to bringing your vision to life with cutting-edge design
            and development.
          </p>
          <div className="flex gap-4 mt-4">
            <Link to="/" className="text-gray-500 hover:text-blue-600 text-lg">
              <FaFacebookF />
            </Link>
            <Link to="/" className="text-gray-500 hover:text-blue-400 text-lg">
              <FaTwitter />
            </Link>
            <Link to="/" className="text-gray-500 hover:text-blue-700 text-lg">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

      
        <div>
          <h4 className="font-semibold text-xl mb-4">Services</h4>
          <ul className="space-y-2 text-base text-gray-700">
            <li><Link to="/web-design" className="hover:text-purple-600 transition">Web Design</Link></li>
            <li><Link to="/web-development" className="hover:text-purple-600 transition">Web Development</Link></li>
            <li><Link to="/mobile-apps" className="hover:text-purple-600 transition">Mobile Apps</Link></li>
            <li><Link to="/ui-ux" className="hover:text-purple-600 transition">UI/UX Design</Link></li>
            <li><Link to="/digital-marketing" className="hover:text-purple-600 transition">Digital Marketing</Link></li>
          </ul>
        </div>

       
        <div>
          <h4 className="font-semibold text-xl mb-4">Contact Us</h4>
          <p className="flex items-center text-base text-gray-700 mb-2">
            <FiMail className="mr-2" />
            <a href="mailto:contact@shreejadigital.com" className="hover:text-purple-600 transition">
              contact@shreejadigital.com
            </a>
          </p>
          <Link
            to="/contact"
            className="inline-block mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-2 rounded font-semibold text-base shadow hover:shadow-lg transition"
          >
            Get In Touch
          </Link>
        </div>
      </div>

     
      <div className="text-center mt-12 text-sm text-gray-500">
        © 2025 Shreeja Digital Agency. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
