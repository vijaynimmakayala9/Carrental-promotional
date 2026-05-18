import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import car from '../images/logo.png';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenuAndNavigate = (path) => {

    setIsMenuOpen(false);

    // Home page
    if (path === "/") {

      navigate("/");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    // Section scroll
    if (path.startsWith("#")) {

      if (location.pathname !== "/") {

        navigate("/");

        setTimeout(() => {

          document
            .getElementById(path.replace("#", ""))
            ?.scrollIntoView({
              behavior: "smooth",
            });

        }, 300);

      } else {

        document
          .getElementById(path.replace("#", ""))
          ?.scrollIntoView({
            behavior: "smooth",
          });

      }

      return;
    }

    // Route navigation
    navigate(path);
  };

  const handleOutsideClick = (e) => {

    if (e.target.id === "menu-overlay") {

      setIsMenuOpen(false);

    }
  };

  const navLinks = [

    { label: "Home", hash: "/" },

    { label: "About Us", hash: "/about" },

    {
      label: "Our Fleet",
      hash: "#premiumcars",
      dropdown: [
        {
          name: "Mahindra",
          path: "/cars/varahi-self-drive-mahindra-kukatpally",
        },

        {
          name: "Suzuki",
          path: "/cars/varahi-self-drive-suzuki-kukatpally",
        },

        {
          name: "Fortuner",
          path: "/cars/varahi-self-drive-fortuner-kukatpally",
        },

        {
          name: "Bolero",
          path: "/cars/varahi-self-drive-bolero-kukatpally",
        },
      ],
    },

    {
      label: "Services",
      hash: "#",
      dropdown: [
        {
          name: "Hourly Car Rental",
          path: "/rentals/hourly-car-rental-kukatpally",
        },

        {
          name: "Daily Car Rental",
          path: "/rentals/daily-car-rental-kukatpally",
        },
      ],
    },
    { label: "Contact Us", hash: "/contact" },
  ];

  const locationUrl = "https://maps.app.goo.gl/3vit1EMymozTAgqc7";

  return (

    <div>

      {/* HEADER */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-700 to-sky-500 sticky top-0 z-50 shadow-lg">

        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 h-20">

          {/* LOGO */}
          <div className="flex items-center flex-shrink-0">

            <img
              src={car}
              alt="VSD Cars Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white/30 shadow-md"
            />

          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">

            {navLinks.map(({ label, hash, dropdown }) => (

              <div
                key={label}
                className="relative group"
              >

                {/* MAIN LINK */}
                <a
                  href={hash}
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenuAndNavigate(hash);
                  }}
                  className="flex items-center gap-1 text-white/90 hover:text-white font-medium text-sm lg:text-base px-3 py-2 rounded-xl hover:bg-white/10 transition-all duration-200 whitespace-nowrap"
                >
                  {label}

                  {dropdown && (

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5 mt-[1px]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>

                  )}
                </a>

                {/* DROPDOWN */}
                {dropdown && (

                  <div
                    className="
                      absolute top-full left-0 mt-2
                      w-56
                      bg-white
                      rounded-2xl
                      shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                      border border-slate-200
                      overflow-hidden
                      opacity-0 invisible
                      group-hover:opacity-100
                      group-hover:visible
                      translate-y-2
                      group-hover:translate-y-0
                      transition-all duration-200
                      z-50
                    "
                  >

                    {/* HEADER */}
                    <div className="px-5 py-3 bg-gradient-to-r from-blue-900 to-blue-600">

                      <p className="text-white text-sm font-semibold">
                        Premium Fleet
                      </p>

                      <p className="text-white/70 text-xs mt-0.5">
                        Luxury & Economy Cars
                      </p>

                    </div>

                    {/* ITEMS */}
                    <div className="py-2">

                      {dropdown.map((item, i) => (

                        <button
                          key={i}
                          onClick={() => closeMenuAndNavigate(item.path)}
                          className="
                            flex items-center justify-between
                            w-full
                            px-5 py-3
                            text-left
                            text-sm
                            text-slate-700
                            hover:bg-blue-50
                            hover:text-blue-700
                            transition-all duration-150
                            group/item
                          "
                        >

                          <div className="flex items-center gap-3">

                            <div className="w-2 h-2 rounded-full bg-blue-400 group-hover/item:bg-blue-600 transition-all"></div>

                            <span className="font-medium">
                              {item.name}
                            </span>

                          </div>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-all"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>

                        </button>

                      ))}

                    </div>
                  </div>

                )}
              </div>

            ))}

          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center space-x-2 sm:space-x-3">

            {/* LOCATION */}
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

            {/* PHONE */}
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

            {/* MOBILE MENU */}
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

      {/* MOBILE DRAWER */}
      {isMenuOpen && (

        <div
          id="menu-overlay"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          style={{ top: "64px" }}
        >

          <div className="absolute right-0 top-0 w-72 max-w-[85vw] bg-gradient-to-b from-blue-900 to-blue-800 h-full shadow-2xl flex flex-col">

            {/* HEADER */}
            <div className="px-6 py-5 border-b border-white/10">

              <p className="text-white/50 text-xs tracking-widest uppercase">
                Navigation
              </p>

            </div>

            {/* LINKS */}
            <nav className="flex flex-col px-4 py-4 space-y-1 flex-1">

              {navLinks.map(({ label, hash }, i) => (

                <a
                  key={hash}
                  href={hash}
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenuAndNavigate(hash);
                  }}
                  className="flex items-center space-x-3 text-white/90 hover:text-white font-medium text-base px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-200"
                  style={{ animationDelay: `${i * 40}ms` }}
                >

                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-300/70 flex-shrink-0" />

                  <span>{label}</span>

                </a>

              ))}

            </nav>
          </div>
        </div>

      )}
    </div>
  );
};

export default Navbar;