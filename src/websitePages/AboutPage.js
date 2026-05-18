import React from "react";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import { FaShieldAlt, FaClock, FaCar, FaUsers, FaHandHoldingUsd, FaRoad } from "react-icons/fa";

const AboutPage = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-yellow-300 text-4xl" />,
      title: "100% Privacy",
      description: "No driver, no hassle. Enjoy complete privacy with our self drive cars."
    },
    {
      icon: <FaClock className="text-yellow-300 text-4xl" />,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance for all your rental needs."
    },
    {
      icon: <FaCar className="text-yellow-300 text-4xl" />,
      title: "Well-Maintained Fleet",
      description: "All vehicles are regularly serviced, cleaned, and sanitized."
    },
    {
      icon: <FaHandHoldingUsd className="text-yellow-300 text-4xl" />,
      title: "Affordable Pricing",
      description: "Best rates in Kukatpally with no hidden charges or surprises."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "20+", label: "Premium Cars" },
    { number: "50k+", label: "KM Driven" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 pt-32 pb-20">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About <span className="text-yellow-300">Varahi</span></h1>
          <p className="text-xl max-w-3xl mx-auto">Your trusted partner for premium self-drive car rentals in Kukatpally, Hyderabad</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our <span className="text-yellow-500">Story</span></h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Varahi Self Drive Cars was founded with a simple mission: to provide the best self-drive car rental experience in Kukatpally, Hyderabad. We understood that people want freedom, flexibility, and privacy when they travel — and traditional car rentals with drivers just don't cut it.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Starting with just 5 cars, we've grown into a trusted name in Hyderabad's self-drive car rental market. Today, we offer a diverse fleet of well-maintained vehicles — from economical hatchbacks to luxury SUVs — all available at competitive prices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our convenient location near Kukatpally Metro Station makes pickups and drops effortless. Whether you need a car for a day, a week, or a month, we've got you covered with flexible rental plans.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop" 
                alt="Varahi Car Fleet" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why <span className="text-yellow-500">Choose Us?</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-yellow-300">{stat.number}</div>
                <div className="text-lg mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Location */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Visit <span className="text-yellow-500">Our Location</span></h2>
              <p className="text-gray-600 mb-4">
                Conveniently located near Kukatpally Metro Station, we are easily accessible from all parts of Hyderabad.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="font-semibold">📍 Address:</p>
                <p className="text-gray-600">Near Kukatpally Metro Station, Kukatpally, Hyderabad - 500072</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold">⏰ Business Hours:</p>
                <p className="text-gray-600">Monday - Sunday: 7:00 AM to 11:00 PM</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.258596549956!2d78.4468!3d17.4633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c0a5b5b5b5%3A0x0!2sKukatpally%20Metro%20Station!5e0!3m2!1sen!2sin!4v1641234567890!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Varahi Location"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;