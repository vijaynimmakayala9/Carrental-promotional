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

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) => (prev + 1) % images.length);

    }, 3500);

    return () => clearInterval(interval);

  }, []);

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
          className="relative min-h-screen flex items-center overflow-hidden mt-20"
        >

          {/* Background Slider Images */}
          {images.map((img, index) => (

            <div
              key={index}
              className={`
                absolute inset-0 transition-opacity duration-1000
                ${index === current ? "opacity-100" : "opacity-0"}
              `}
            >

              <img
                src={img}
                alt="Premium Cars"
                className="w-full h-full object-cover"
              />

            </div>

          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-blue-950/75 to-black/60"></div>

          {/* Blue Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"></div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 min-h-screen flex items-center justify-center">

            <div className="max-w-4xl mx-auto text-white text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 sm:px-5 py-2 mb-6">

                <div className="w-2 h-2 rounded-full bg-yellow-300"></div>

                <span className="text-[10px] sm:text-xs tracking-[0.22em] uppercase font-semibold text-yellow-200">
                  Premium Self Drive Cars
                </span>

              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.08] mb-6">

                Best Self Drive Cars in

                <span className="block text-yellow-300 mt-2">
                  Kukatpally, Hyderabad
                </span>

              </h1>

              {/* Paragraph 1 */}
              <p className="text-sm sm:text-lg lg:text-xl text-white/85 leading-relaxed mb-5 max-w-3xl mx-auto">

                Welcome to
                <span className="text-yellow-300 font-semibold">
                  {" "}Varahi Self Drive Cars
                </span>,
                your premium and affordable choice for car rental in Kukatpally Hyderabad.

                Whether you need a sleek hatchback for city driving, a spacious SUV for family trips,
                or a rugged luxury car, we provide the best self drive car rental Kukatpally has to offer.

              </p>

              {/* Paragraph 2 */}
              <p className="text-sm sm:text-lg text-white/75 leading-relaxed mb-6 max-w-2xl mx-auto">

                Enjoy 100% privacy, zero driver hassle, and well-maintained vehicles with flexible
                daily and monthly rental plans.

              </p>

              {/* H2 */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-300 mb-4">

                Our Flexible Self Drive Car Rental Plans

              </h2>

              {/* Paragraph 3 */}
              <p className="text-sm sm:text-lg text-white/80 leading-relaxed mb-10 max-w-3xl mx-auto">

                We offer short-term daily rentals and affordable monthly car rental plans in Kukatpally.
                Conveniently located near Kukatpally Metro Station, we ensure quick pickup and drop
                services with the best self drive cars for rent in Hyderabad.

              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                {/* Play Store */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.self_drive_cars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
          w-full sm:w-auto
          flex items-center justify-center gap-3
          px-6 sm:px-7 py-4
          rounded-2xl
          bg-gradient-to-r from-green-500 to-green-700
          text-white
          font-semibold
          shadow-xl
          hover:scale-105
          transition-all duration-300
        "
                >

                  <FaGooglePlay size={24} />

                  <div className="text-left">

                    <p className="text-xs text-white/70">
                      GET IT ON
                    </p>

                    <p className="text-sm font-bold">
                      Google Play
                    </p>

                  </div>

                </a>

                {/* App Store */}
                <a
                  href="https://apps.apple.com/in/app/varahi-self-drive-cars/id6753347255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
          w-full sm:w-auto
          flex items-center justify-center gap-3
          px-6 sm:px-7 py-4
          rounded-2xl
          bg-gradient-to-r from-slate-700 to-black
          text-white
          font-semibold
          shadow-xl
          hover:scale-105
          transition-all duration-300
        "
                >

                  <FaApple size={24} />

                  <div className="text-left">

                    <p className="text-xs text-white/70">
                      DOWNLOAD ON THE
                    </p>

                    <p className="text-sm font-bold">
                      App Store
                    </p>

                  </div>

                </a>

              </div>

              {/* Fleet Tags */}
              <div className="flex flex-wrap justify-center gap-3 mt-10">

                {[
                  "Mahindra",
                  "Suzuki",
                  "Alto",
                  "WagonR",
                  "Baleno",
                  "Innova",
                  "Fortuner",
                ].map((item, i) => (

                  <div
                    key={i}
                    className="
            px-4 py-2
            rounded-full
            bg-white/10
            border border-white/10
            backdrop-blur-sm
            text-xs sm:text-sm
            font-medium
            text-white/90
          "
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">

            {images.map((_, i) => (

              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`
                  transition-all duration-300 rounded-full
                  ${i === current
                    ? "w-10 h-3 bg-yellow-300"
                    : "w-3 h-3 bg-white/50"}
                `}
              />

            ))}

          </div>

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