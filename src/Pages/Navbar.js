import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa"; // Mobile phone icon
import car from '../images/carrentallogo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuAndNavigate = (hash) => {
    if (location.pathname !== "/") {
      window.location.href = `/${hash}`;
    } else {
      document.getElementById(hash.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "menu-overlay") {
      setIsMenuOpen(false);
    }
  };

  return (
    <div>
      {/* Dark blue to light blue gradient */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-300 py-2 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 h-20">
          {/* Logo - Replace text with image */}
          <div className="flex items-center">
            <img src={car} alt="Car Rental Logo" className="w-28 h-28 rounded-full object-cover" />
          </div>



          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8 items-center text-xl font-sans">
            <a href="/" className="text-white font-semibold hover:text-gray-200 transition duration-300">Home</a>
            <a href="#features" onClick={() => closeMenuAndNavigate("#features")} className="text-white font-semibold hover:text-gray-200 transition duration-300">Features</a>
            <a href="#aboutus" onClick={() => closeMenuAndNavigate("#aboutus")} className="text-white font-semibold hover:text-gray-200 transition duration-300">About Us</a>
            <a href="#whyus" onClick={() => closeMenuAndNavigate("#whyus")} className="text-white font-semibold hover:text-gray-200 transition duration-300">Why Us</a>
            <a href="#contactus" onClick={() => closeMenuAndNavigate("#contactus")} className="text-white font-semibold hover:text-gray-200 transition duration-300">Contact Us</a>
          </div>

          {/* Right-side mobile number */}
          <div className="flex items-center text-white">
            <a href="tel:+1234567890" className="flex items-center space-x-2">
              <FaPhoneAlt size={24} />
              <span className="text-sm">+91 84668 88111</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="menu-overlay" onClick={handleOutsideClick} className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed right-0 top-0 w-3/5 bg-white h-full shadow-lg transform transition-transform duration-300 ease-in-out pt-6 pb-6 mt-20">
            <div className="flex flex-col items-center space-y-6 text-sm font-sans">
              <a href="/" onClick={() => closeMenuAndNavigate("#home")} className="text-blue-900 font-semibold hover:text-blue-700 transition duration-300">Home</a>
              <a href="#premiumcars" onClick={() => closeMenuAndNavigate("#premiumcars")} className="text-blue-800 font-semibold hover:text-blue-600 transition duration-300">Premium Cars</a>
              <a href="#features" onClick={() => closeMenuAndNavigate("#features")} className="text-blue-800 font-semibold hover:text-blue-600 transition duration-300">Features</a>
              <a href="#aboutus" onClick={() => closeMenuAndNavigate("#aboutus")} className="text-blue-800 font-semibold hover:text-blue-600 transition duration-300">About Us</a>
              <a href="#whyus" onClick={() => closeMenuAndNavigate("#whyus")} className="text-blue-800 font-semibold hover:text-blue-600 transition duration-300">Why Us</a>
              <a href="#contactus" onClick={() => closeMenuAndNavigate("#contactus")} className="text-blue-800 font-semibold hover:text-blue-600 transition duration-300">Contact Us</a>
            </div>
          </div>
        </div>

      )}
    </div>
  );
};

export default Navbar;
