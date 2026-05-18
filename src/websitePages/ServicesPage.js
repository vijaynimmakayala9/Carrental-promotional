import React, { useState } from "react";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import { FaCar, FaCalendarAlt, FaUserShield, FaGasPump, FaRoad, FaHeadset, FaWhatsapp, FaRupeeSign } from "react-icons/fa";

const ServicesPage = () => {
  const [activePlan, setActivePlan] = useState("daily");

  const carCategories = [
    {
      name: "Hatchbacks",
      cars: ["Maruti Suzuki Swift", "Hyundai i20", "Tata Tiago"],
      price: "₹1,499/day",
      image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=400&h=250&fit=crop",
      features: ["Fuel Efficient", "AC", "Power Steering", "Great for City"]
    },
    {
      name: "Sedans",
      cars: ["Honda City", "Maruti Ciaz", "Hyundai Verna"],
      price: "₹2,499/day",
      image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=400&h=250&fit=crop",
      features: ["Spacious", "Luxury Feel", "Boot Space", "Perfect for Family"]
    },
    {
      name: "SUVs",
      cars: ["Hyundai Creta", "Kia Seltos", "Mahindra XUV700"],
      price: "₹3,999/day",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=250&fit=crop",
      features: ["Powerful Engine", "7-Seater Options", "High Ground Clearance", "Adventure Ready"]
    },
    {
      name: "Luxury Cars",
      cars: ["Mercedes-Benz", "BMW 3 Series", "Audi A4"],
      price: "₹6,999/day",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=250&fit=crop",
      features: ["Premium Interiors", "Advanced Safety", "Performance", "Status Symbol"]
    }
  ];

  const rentalPlans = {
    daily: {
      title: "Daily Rental",
      price: "₹1,499",
      unit: "per day",
      features: ["24-hour rental period", "100 km/day included", "Extra km: ₹15/km", "Free cancellation 24hrs before"]
    },
    weekly: {
      title: "Weekly Rental",
      price: "₹9,999",
      unit: "per week",
      features: ["7 days rental", "700 km total included", "Extra km: ₹14/km", "Save 15% vs daily rate"]
    },
    monthly: {
      title: "Monthly Rental",
      price: "₹34,999",
      unit: "per month",
      features: ["30 days rental", "3000 km included", "Extra km: ₹12/km", "Save 30% vs daily rate", "Priority support"]
    }
  };

  const additionalServices = [
    {
      icon: <FaUserShield className="text-yellow-500 text-3xl" />,
      title: "Zero Depreciation Cover",
      description: "Drive worry-free with our zero depreciation add-on coverage"
    },
    {
      icon: <FaRoad className="text-yellow-500 text-3xl" />,
      title: "Pan India Permit",
      description: "Take our cars anywhere in India with valid permits"
    },
    {
      icon: <FaGasPump className="text-yellow-500 text-3xl" />,
      title: "Fuel Included Plans",
      description: "Select plans that include fuel for longer trips"
    },
    {
      icon: <FaHeadset className="text-yellow-500 text-3xl" />,
      title: "24/7 Roadside Assistance",
      description: "Emergency support available round the clock"
    }
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our <span className="text-yellow-300">Services</span></h1>
          <p className="text-xl max-w-3xl mx-auto">Choose from our wide range of well-maintained cars and flexible rental plans</p>
        </div>
      </section>

      {/* Car Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Our <span className="text-yellow-500">Car Collection</span></h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Pick the perfect car for your needs from our diverse fleet</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-yellow-600 font-bold text-lg mb-2">{category.price}</p>
                  <div className="mb-3">
                    {category.cars.map((car, idx) => (
                      <span key={idx} className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded mr-1 mb-1">{car}</span>
                    ))}
                  </div>
                  <ul className="text-sm text-gray-600 mb-4">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 mb-1">
                        <FaCar className="text-yellow-500 text-xs" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Plans Toggle */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Flexible <span className="text-yellow-500">Rental Plans</span></h2>
          <p className="text-center text-gray-600 mb-8">Choose a plan that fits your schedule and budget</p>
          
          {/* Plan Toggle */}
          <div className="flex justify-center mb-10">
            <div className="bg-white rounded-full p-1 shadow-md inline-flex">
              {Object.keys(rentalPlans).map((plan) => (
                <button
                  key={plan}
                  onClick={() => setActivePlan(plan)}
                  className={`px-6 py-2 rounded-full capitalize transition ${
                    activePlan === plan 
                      ? "bg-yellow-500 text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {plan}
                </button>
              ))}
            </div>
          </div>

          {/* Active Plan Card */}
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-6 text-white text-center">
              <h3 className="text-2xl font-bold">{rentalPlans[activePlan].title}</h3>
              <div className="text-4xl font-bold mt-2">
                {rentalPlans[activePlan].price}
                <span className="text-sm font-normal">/{rentalPlans[activePlan].unit}</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {rentalPlans[activePlan].features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <FaCalendarAlt className="text-yellow-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 rounded-lg transition">
                Choose This Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Additional <span className="text-yellow-500">Services</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-6 border rounded-xl hover:shadow-lg transition">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It <span className="text-yellow-500">Works</span></h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Choose a Car</h3>
              <p className="text-gray-600">Select from our wide range of cars based on your needs</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Upload Documents</h3>
              <p className="text-gray-600">Submit driving license and ID proof online</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Drive & Return</h3>
              <p className="text-gray-600">Pick up your car, drive, and return at our location</p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12 bg-gradient-to-r from-green-600 to-green-500 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Quick Booking on WhatsApp</h2>
          <p className="mb-6">Get instant quotes and book your car in minutes</p>
          <a 
            href="https://wa.me/919876543210" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition"
          >
            <FaWhatsapp size={24} />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;