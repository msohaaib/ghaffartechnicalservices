import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import logo from "../../public/GTS-Logo.png";

const menu = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Services",
    path: "/services",
  },
  {
    id: 3,
    name: "About",
    path: "/about",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="bg-gray-200 p-2 shadow-lg relative">
          <div className="container mx-auto flex justify-between items-center">
            {/* Brand / Logo */}
            <div className="text-black text-xl font-bold">
              <Link to="/">
                <img src={logo} alt="GTS-Logo" className="w-14 md:w-20" />
              </Link>
            </div>

            {/* Hamburger icon for mobile */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-black focus:outline-none"
              >
                {/* Conditional rendering for Hamburger and Close icon */}
                {isMobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex space-x-4">
              {menu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="text-black hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-all ease-in-out"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Nav Links */}
          {isMobileMenuOpen && (
            <>
              {/* Background overlay */}
              <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
              <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
                <ul className="flex flex-col space-y-4">
                  {menu.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)} // Close the menu on link click
                        className="text-black hover:text-gray-500 block px-3 py-2 rounded-md text-lg font-medium"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* Hamburger/Close Icon inside the mobile menu */}
                <button
                  onClick={toggleMobileMenu}
                  className="absolute top-4 right-4 text-black focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </>
          )}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
