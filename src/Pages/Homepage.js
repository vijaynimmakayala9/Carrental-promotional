import React from "react";
import Navbar from "./Navbar";
import KeyFeatures from "./KeyFeatures";
import WhyUs from "./WhyUs";
import SchoolERP from "./Erp";
import AdmissionManagement from "./AdmissionManagement";
import LearningManagement from "./LearningManagement";
import ExaminationSoftware from "./ExaminationSoftware";
import WebsiteMobileApp from "./Website&Mobile";
import ClientTestimonials from "./ClientTestimonials";
import AboutUs from "./AboutUs";
import OurMission from "./OurMission";
import Vision from "./Vision";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { FaGooglePlay, FaApple } from "react-icons/fa"; // Import necessary icons


const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Static Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-blue-900 to-blue-300 flex flex-col lg:flex-row justify-between items-center px-6 py-16 mt-24"
      >
        {/* Left Side Text */}
        <div className="text-white w-full max-w-lg mb-6 lg:mb-0">
          <h1 className="text-3xl font-bold mb-4 ml-4">
            Welcome to <span className="text-yellow-300">VSD Cars</span>
          </h1>

          <p className="text-lg mb-3 ml-4">
            At VSD Cars, we offer a wide range of vehicles, from compact cars to luxurious SUVs, all at competitive rates.
          </p>

          <p className="text-lg mb-3 ml-4">
            Whether you need a vehicle for a business trip, family vacation, or long-term rental, we have you covered with flexible options.
          </p>

          <p className="text-lg ml-4">
            Book online easily and enjoy a smooth, safe, and reliable ride with VSD Cars.
          </p>

          {/* Commented out the Play Store and App Store Buttons */}
          {/* <div className="mt-6 flex justify-start ml-4 space-x-4">
            {/* Play Store Button */}
            {/* <a
              href="https://play.google.com/store" // Link to your Play Store page
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white text-sm font-semibold shadow-lg hover:scale-105 transform transition duration-300"
              title="Available on Play Store"
            >
              <FaGooglePlay size={24} />
              <span>Available on Play Store</span>
            </a> */}

            {/* App Store Button */}
            {/* <a
              href="https://apps.apple.com" // Link to your App Store page
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white text-sm font-semibold shadow-lg hover:scale-105 transform transition duration-300"
              title="Available on App Store"
            >
              <FaApple size={24} />
              <span>Available on App Store</span>
            </a>
          </div> */}
        </div>

        {/* Right Side: Floating Feature Cards */}
        <div className="w-full max-w-xl flex flex-col space-y-6">
          {/* Card 1 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-5 rounded-lg shadow-lg border border-white/20 hover:scale-105 transition transform duration-300">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              🚗 Wide Vehicle Selection
            </h3>
            <p className="text-white text-sm">
              Choose from a variety of vehicles, including sedans, SUVs, and luxury cars, tailored to your needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-5 rounded-lg shadow-lg border border-white/20 hover:scale-105 transition transform duration-300">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">
              ⏱ Fast and Easy Booking
            </h3>
            <p className="text-white text-sm">
              With our simple online booking system, reserve your vehicle in minutes and hit the road in no time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-5 rounded-lg shadow-lg border border-white/20 hover:scale-105 transition transform duration-300">
            <h3 className="text-xl font-semibold text-green-300 mb-2">
              🌍 Nationwide Coverage
            </h3>
            <p className="text-white text-sm">
              Available across various locations, VSD Cars offers nationwide car rental services for your convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Rest of the Sections */}
      <div className="">
        <hr className="border-t-2 border-gray-300" />

        {/* Sections without animation */}
        {[{ id: "features", component: <KeyFeatures /> },
          { id: "whyus", component: <WhyUs /> },
          { id: "aboutus", component: <AboutUs /> },
          { id: "ourmission", component: <OurMission /> },
          { id: "vision", component: <Vision /> },
          { id: "clientsays", component: <ClientTestimonials /> },
          { id: "contactus", component: <ContactUs /> }
        ].map(({ id, component }) => (
          <React.Fragment key={id}>
            <hr className="border-t-2 border-gray-300" />
            <section
              id={id}
              className="transform transition-transform"
            >
              {component}
            </section>
          </React.Fragment>
        ))}

        <hr className="border-t-2 border-gray-300" />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
