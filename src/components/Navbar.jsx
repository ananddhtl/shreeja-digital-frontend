import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ refs = {} }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (section) => {
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

        {/* Nav Items */}
        <ul className="hidden md:flex space-x-8 text-base font-medium text-gray-800">
          <li><button onClick={() => scrollTo("home")} className="hover:text-indigo-600 transition">Home</button></li>
          <li><button onClick={() => scrollTo("services")} className="hover:text-indigo-600 transition">Services</button></li>
          <li><button onClick={() => scrollTo("trust")} className="hover:text-indigo-600 transition">Why Trust Us</button></li>
          <li><button onClick={() => scrollTo("testimonials")} className="hover:text-indigo-600 transition">Testimonials</button></li>
          <li><button onClick={() => scrollTo("faq")} className="hover:text-indigo-600 transition">FAQs</button></li>
          <li><button onClick={() => scrollTo("contact")} className="hover:text-indigo-600 transition">Contact</button></li>
        </ul>

        {/* Get Started Button */}
        <Link
          to="/contact"
          className="hidden md:block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-2 rounded-md text-base font-semibold shadow hover:shadow-md transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
