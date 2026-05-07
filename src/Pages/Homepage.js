import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import KeyFeatures from "./KeyFeatures";
import WhyUs from "./WhyUs";
import AboutUs from "./AboutUs";
import OurMission from "./OurMission";
import Vision from "./Vision";
import ClientTestimonials from "./ClientTestimonials";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import PremiumCarSlider from "./PremiumCarSlider";
import car1 from "../images/Premium/111.jpg";
import car2 from "../images/Premium/222.jpg";
import car3 from "../images/Premium/333.jpg";
import car4 from "../images/Premium/444.jpg";

/* ---------------- IMAGE SLIDER ---------------- */

const images = [
  car1,
  car2,
  car3,
  car4,
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-xl">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">

        <img
          src={images[current]}
          alt="car"
          className="w-full h-[320px] object-cover transition-all duration-700"
        />

        {/* dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-3 h-3 rounded-full"
              style={{
                background:
                  i === current
                    ? "#FFD700"
                    : "rgba(255,255,255,0.5)",
              }}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

/* ---------------- HOME PAGE ---------------- */

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        {/* Navbar */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>

        {/* HERO SECTION */}

        <section
          id="home"
          className="bg-gradient-to-r from-blue-900 to-blue-300 flex flex-col lg:flex-row justify-between items-center px-6 py-16 mt-20"
        >

          {/* LEFT SIDE TEXT */}

          <div className="text-white w-full max-w-lg mb-6 lg:mb-0">

            <h1 className="text-3xl font-bold mb-4 ml-4">
              Best <span className="text-yellow-300">Self Drive Cars</span> in Kukatpally Hyderabad
            </h1>

            <p className="text-lg mb-3 ml-4">
              Varahi Self Drive Cars offers the <span className="text-yellow-300">best self drive cars in Kukatpally</span>, providing flexible and
              affordable car rental solutions for individuals and families. If you are looking for <span className="text-yellow-300">self drive cars
              for rent in Kukatpally Hyderabad</span>, we provide a wide range of well-maintained vehicles at
              competitive prices.
            </p>

            <p className="text-lg mb-3 ml-4">
              Conveniently located near Kukatpally, we are a trusted choice for <span className="text-yellow-300">car rental in Kukatpally
              Hyderabad</span> with easy booking and quick service.
            </p>

            {/* APP DOWNLOAD BUTTONS */}

            <div className="mt-6 flex justify-start ml-4 space-x-4">

              <a
                href="https://play.google.com/store/apps/details?id=com.self_drive_cars"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white text-sm font-semibold shadow-lg hover:scale-105 transform transition duration-300"
              >
                <FaGooglePlay size={24} />
                <span>Available on Play Store</span>
              </a>

              <a
                href="https://apps.apple.com/in/app/varahi-self-drive-cars/id6753347255"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white text-sm font-semibold shadow-lg hover:scale-105 transform transition duration-300"
              >
                <FaApple size={24} />
                <span>Available on App Store</span>
              </a>

            </div>

          </div>

          {/* RIGHT SIDE IMAGE SLIDER */}

          <ImageSlider />

        </section>

        {/* OTHER SECTIONS */}
        {/* <PremiumCarSlider/> */}

        <div>

          <hr className="border-t-2 border-gray-300" />

          {[
            { id: "premiumcars", component: <PremiumCarSlider /> },
            { id: "features", component: <KeyFeatures /> },
            { id: "whyus", component: <WhyUs /> },
            { id: "aboutus", component: <AboutUs /> },
            { id: "ourmission", component: <OurMission /> },
            { id: "vision", component: <Vision /> },
            { id: "clientsays", component: <ClientTestimonials /> },
            { id: "contactus", component: <ContactUs /> },
          ].map(({ id, component }) => (
            <React.Fragment key={id}>
              <hr className="border-t-2 border-gray-300" />
              <section id={id} className="transform transition-transform">
                {component}
              </section>
            </React.Fragment>
          ))}

          <hr className="border-t-2 border-gray-300" />

          <Footer />

        </div>

      </div>
    </>
  );
};

export default HomePage;