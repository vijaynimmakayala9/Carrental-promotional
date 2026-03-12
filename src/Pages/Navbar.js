import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import car from '../images/carrentallogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenuAndNavigate = (hash) => {
    if (location.pathname !== "/") {
      window.location.href = `/${hash}`;
    } else {
      document.getElementById(hash.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "menu-overlay") setIsMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", hash: "#home" },
    { label: "Premium Cars", hash: "#premiumcars" },
    { label: "Features", hash: "#features" },
    { label: "About Us", hash: "#aboutus" },
    { label: "Why Us", hash: "#whyus" },
    { label: "Contact Us", hash: "#contactus" },
  ];

  // Replace with your actual business coordinates or Google Maps link
  const locationUrl = "https://maps.google.com/?q=VSD+Cars+Hyderabad";

  return (
    <div>
      <header className="bg-gradient-to-r from-blue-900 to-blue-500 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 h-20 sm:h-20">

          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              src={car}
              alt="VSD Cars Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white/30 shadow-md"
            />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map(({ label, hash }) => (
              <a
                key={hash}
                href={hash}
                onClick={(e) => { e.preventDefault(); closeMenuAndNavigate(hash); }}
                className="text-white/90 hover:text-white font-medium text-sm lg:text-base px-2 lg:px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 whitespace-nowrap"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">

            {/* Location Icon */}
            <a
              href={locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Find us on map"
              className="flex items-center space-x-1 text-white/90 hover:text-yellow-300 transition-colors duration-200 group"
            >
              <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group-hover:scale-110">
                <FaMapMarkerAlt size={16} className="text-yellow-300" />
              </div>
              <span className="hidden lg:block text-sm font-medium text-white/80 group-hover:text-yellow-300">
                Find Us
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+918466888111"
              title="Call us"
              className="flex items-center space-x-1 sm:space-x-2 text-white group"
            >
              <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group-hover:scale-110">
                <FaPhoneAlt size={14} className="text-green-300" />
              </div>
              <span className="hidden sm:block text-xs sm:text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                +91 84668 88111
              </span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 space-y-1"
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div
          id="menu-overlay"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          style={{ top: "64px" }}
        >
          <div className="absolute right-0 top-0 w-72 max-w-[85vw] bg-gradient-to-b from-blue-900 to-blue-800 h-full shadow-2xl flex flex-col">

            {/* Drawer Header */}
            <div className="px-6 py-5 border-b border-white/10">
              <p className="text-white/50 text-xs tracking-widest uppercase">Navigation</p>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col px-4 py-4 space-y-1 flex-1">
              {navLinks.map(({ label, hash }, i) => (
                <a
                  key={hash}
                  href={hash}
                  onClick={(e) => { e.preventDefault(); closeMenuAndNavigate(hash); }}
                  className="flex items-center space-x-3 text-white/90 hover:text-white font-medium text-base px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-200"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-300/70 flex-shrink-0" />
                  <span>{label}</span>
                </a>
              ))}
            </nav>

            {/* Drawer Footer Actions */}
            <div className="px-4 py-5 border-t border-white/10 space-y-3">
              {/* Location */}
              <a
                href={locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-yellow-400/10 border border-yellow-400/20 hover:bg-yellow-400/20 transition-all duration-200"
              >
                <FaMapMarkerAlt size={18} className="text-yellow-300 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">Find Our Location</p>
                  <p className="text-white/50 text-xs">Open in Google Maps</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+918466888111"
                className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-green-400/10 border border-green-400/20 hover:bg-green-400/20 transition-all duration-200"
              >
                <FaPhoneAlt size={16} className="text-green-300 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">Call Us Now</p>
                  <p className="text-white/50 text-xs">+91 84668 88111</p>
                </div>
              </a>
            </div>
          </div>
        </div >
      )}
    </div >
  );
};

export default Navbar;