import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ refs = {} }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (section) => {
    setMobileMenuOpen(false); // Close mobile menu on nav click
    if (location.pathname === "/") {
      const element = refs[section]?.current;
      const offset = 80;
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: section } });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white w-full shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo2.png" alt="Shreeja Logo" className="w-12 h-12 object-contain" />
          <div className="ml-3">
            <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 leading-tight">
              SHREEJA
            </h1>
            <p className="text-xs text-gray-500 tracking-wide">DIGITAL AGENCY</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-base font-medium text-gray-800">
          <li><button onClick={() => scrollTo("home")} className="hover:text-indigo-600 transition">Home</button></li>
          <li><button onClick={() => scrollTo("services")} className="hover:text-indigo-600 transition">Services</button></li>
          <li><button onClick={() => scrollTo("trust")} className="hover:text-indigo-600 transition">Why Trust Us</button></li>
          <li><button onClick={() => scrollTo("testimonials")} className="hover:text-indigo-600 transition">Testimonials</button></li>
          <li><button onClick={() => scrollTo("faq")} className="hover:text-indigo-600 transition">FAQs</button></li>
          <li><button onClick={() => scrollTo("contact")} className="hover:text-indigo-600 transition">Contact</button></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Get Started Button - Desktop */}
        <Link
          to="/contact"
          className="hidden md:block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-2 rounded-md text-base font-semibold shadow hover:shadow-md transition"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-6 pt-2 pb-4 shadow">
          <ul className="space-y-4 text-base font-medium text-gray-800">
            <li><button onClick={() => scrollTo("home")} className="w-full text-left">Home</button></li>
            <li><button onClick={() => scrollTo("services")} className="w-full text-left">Services</button></li>
            <li><button onClick={() => scrollTo("trust")} className="w-full text-left">Why Trust Us</button></li>
            <li><button onClick={() => scrollTo("testimonials")} className="w-full text-left">Testimonials</button></li>
            <li><button onClick={() => scrollTo("faq")} className="w-full text-left">FAQs</button></li>
            <li><button onClick={() => scrollTo("contact")} className="w-full text-left">Contact</button></li>
            <li>
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-2 rounded-md font-semibold"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
