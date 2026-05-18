import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import { 
  FaClock, 
  FaCalendarDay, 
  FaRupeeSign, 
  FaGasPump, 
  FaRoad, 
  FaUsers, 
  FaCog,
  FaCheckCircle,
  FaStar,
  FaWhatsapp,
  FaArrowLeft,
  FaShieldAlt,
  FaCar,
  FaBolt,
  FaParking,
  FaWifi,
  FaBluetooth,
  FaSnowflake,
  FaMapMarkerAlt,
  FaPhoneAlt
} from "react-icons/fa";

// Rental plans data based on type
const rentalData = {
  "hourly-car-rental-kukatpally": {
    type: "hourly",
    title: "Hourly Car Rental in Kukatpally",
    subtitle: "Pay only for the hours you drive - Perfect for short trips & errands",
    slug: "hourly-car-rental-kukatpally",
    metaDescription: "Best hourly car rental service in Kukatpally, Hyderabad. Rent cars by the hour for shopping, airport pickup, or short trips. Flexible and affordable rates.",
    
    // Hero Section
    heroImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=400&fit=crop",
    
    // Pricing Plans
    pricingPlans: [
      { hours: 2, price: 499, pricePerHour: 250, label: "Quick Trip" },
      { hours: 4, price: 899, pricePerHour: 225, label: "Half Day" },
      { hours: 6, price: 1199, pricePerHour: 200, label: "Extended" },
      { hours: 8, price: 1499, pricePerHour: 187, label: "Full Day Equivalent" }
    ],
    
    // Available Cars for Hourly Rental
    availableCars: [
      { name: "Maruti Suzuki Swift", type: "Hatchback", price: 499, image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=400&h=250&fit=crop", seats: 4, fuel: "Petrol", transmission: "Manual" },
      { name: "Hyundai i20", type: "Premium Hatchback", price: 599, image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=400&h=250&fit=crop", seats: 4, fuel: "Petrol", transmission: "Manual/Auto" },
      { name: "Mahindra XUV700", type: "SUV", price: 999, image: "https://images.unsplash.com/photo-1624095955028-e0216f8f0f9a?w=400&h=250&fit=crop", seats: 7, fuel: "Diesel", transmission: "Automatic" }
    ],
    
    // Advantages of Hourly Rental
    advantages: [
      "Pay only for hours you use - no extra charges",
      "Perfect for short trips, shopping, airport runs",
      "No minimum daily commitment",
      "Fuel-efficient cars for city driving",
      "Quick pickup near Kukatpally Metro",
      "Easy one-hour minimum booking"
    ],
    
    // Best For section
    bestFor: [
      "Airport pickups & drops",
      "Shopping trips to malls",
      "Meeting & appointments",
      "Short city tours",
      "Emergency travel",
      "Movie outings with family"
    ],
    
    // Terms specific to hourly
    terms: [
      "Minimum 2 hours booking required",
      "Extra hour charged at ₹200/hour",
      "Free cancellation up to 2 hours before pickup",
      "Security deposit: ₹2,000",
      "Fuel is not included - car delivered with full tank",
      "Return with same fuel level or pay extra"
    ],
    
    faqs: [
      { q: "What is the minimum booking hours?", a: "Minimum booking is 2 hours for hourly car rental." },
      { q: "Can I extend my rental period?", a: "Yes, you can extend at ₹200 per hour subject to availability." },
      { q: "Is fuel included in hourly rental?", a: "No, fuel is not included. Car is delivered with full tank, return with full tank." },
      { q: "What documents are required?", a: "Valid driving license and government ID proof (Aadhar/PAN/Passport)." }
    ]
  },
  
  "daily-car-rental-kukatpally": {
    type: "daily",
    title: "Daily Car Rental in Kukatpally",
    subtitle: "Best daily rental rates - Perfect for day trips, weekend getaways & family outings",
    slug: "daily-car-rental-kukatpally",
    metaDescription: "Best daily car rental service in Kukatpally, Hyderabad. Rent cars by the day for outstation trips, family travel, and weekend getaways. Best rates guaranteed.",
    
    // Hero Section
    heroImage: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&h=400&fit=crop",
    
    // Pricing Plans
    pricingPlans: [
      { days: 1, price: 1499, pricePerDay: 1499, label: "Weekend Special", savings: 0 },
      { days: 3, price: 4199, pricePerDay: 1400, label: "Short Trip", savings: 298 },
      { days: 5, price: 6749, pricePerDay: 1350, label: "Week Vacation", savings: 746 },
      { days: 7, price: 9099, pricePerDay: 1300, label: "Full Week", savings: 1394 },
      { days: 15, price: 19485, pricePerDay: 1299, label: "Fortnight", savings: 2490 },
      { days: 30, price: 35970, pricePerDay: 1199, label: "Monthly Rental", savings: 8970 }
    ],
    
    // Available Cars for Daily Rental
    availableCars: [
      { name: "Maruti Suzuki Swift", type: "Hatchback", price: 1499, image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=400&h=250&fit=crop", seats: 4, fuel: "Petrol", transmission: "Manual" },
      { name: "Honda City", type: "Sedan", price: 2499, image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=400&h=250&fit=crop", seats: 5, fuel: "Petrol", transmission: "Manual/Auto" },
      { name: "Hyundai Creta", type: "SUV", price: 3499, image: "https://images.unsplash.com/photo-1624095955028-e0216f8f0f9a?w=400&h=250&fit=crop", seats: 5, fuel: "Diesel", transmission: "Automatic" },
      { name: "Mahindra XUV700", type: "Premium SUV", price: 3999, image: "https://images.unsplash.com/photo-1624095955028-e0216f8f0f9a?w=400&h=250&fit=crop", seats: 7, fuel: "Diesel", transmission: "Automatic" }
    ],
    
    // Advantages of Daily Rental
    advantages: [
      "Best for outstation trips and long drives",
      "100 km/day included in rental",
      "Free cancellation up to 24 hours before",
      "Well-maintained cars with insurance",
      "24/7 roadside assistance",
      "Flexible pickup & drop timings"
    ],
    
    // Best For section
    bestFor: [
      "Weekend getaways to nearby destinations",
      "Outstation business trips",
      "Family vacation travel",
      "Wedding guest transportation",
      "Long road trips with friends",
      "Monthly car rental alternative"
    ],
    
    // Terms specific to daily
    terms: [
      "Minimum 24 hours rental period",
      "100 km per day included, extra km at ₹15/km",
      "Security deposit: ₹3,000 - ₹5,000 (varies by car)",
      "Free cancellation up to 24 hours before pickup",
      "Driver must be 21+ with valid license",
      "ID proof and address proof required"
    ],
    
    faqs: [
      { q: "What is included in daily rental?", a: "Daily rental includes the car for 24 hours with 100 km. Extra km charged at ₹15/km." },
      { q: "Can I take the car outstation?", a: "Yes, daily rental cars are permitted for outstation travel. Pan India permit available." },
      { q: "What is the security deposit?", a: "Security deposit ranges from ₹3,000 to ₹5,000 depending on the car model." },
      { q: "Do you offer monthly rentals?", a: "Yes, we offer attractive monthly rental plans with special discounts." }
    ]
  }
};

// Helper Components
const PricingCard = ({ plan, type, onSelect }) => {
  const isHourly = type === "hourly";
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 text-white">
        <h3 className="text-xl font-bold">{plan.label}</h3>
        {isHourly ? (
          <p className="text-sm opacity-90">{plan.hours} hours rental</p>
        ) : (
          <p className="text-sm opacity-90">{plan.days} days rental</p>
        )}
      </div>
      <div className="p-5 text-center">
        <div className="text-3xl font-bold text-yellow-500">₹{plan.price}</div>
        {isHourly ? (
          <p className="text-gray-500 text-sm">(₹{plan.pricePerHour}/hour)</p>
        ) : (
          <>
            <p className="text-gray-500 text-sm">₹{plan.pricePerDay}/day</p>
            {plan.savings > 0 && (
              <p className="text-green-500 text-sm font-semibold">Save ₹{plan.savings}</p>
            )}
          </>
        )}
        <button
          onClick={() => onSelect(plan)}
          className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 rounded-lg transition"
        >
          Select Plan
        </button>
      </div>
    </div>
  );
};

const CarCard = ({ car, type }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
      <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{car.name}</h3>
        <p className="text-gray-500 text-sm mb-2">{car.type}</p>
        <div className="flex flex-wrap gap-3 mb-3 text-sm text-gray-600">
          <span className="flex items-center gap-1"><FaUsers size={12} /> {car.seats} seats</span>
          <span className="flex items-center gap-1"><FaGasPump size={12} /> {car.fuel}</span>
          <span className="flex items-center gap-1"><FaCog size={12} /> {car.transmission}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-yellow-500">₹{car.price}</span>
            <span className="text-gray-500 text-sm">/{type === "hourly" ? "hour" : "day"}</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ faq, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggle}
        className="w-full py-4 text-left flex justify-between items-center"
      >
        <span className="font-semibold text-gray-800">{faq.q}</span>
        <span className="text-yellow-500 text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600">
          {faq.a}
        </div>
      )}
    </div>
  );
};

// Main Component
const RentalPage = () => {
  const { slug } = useParams();
  console.log(slug);
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);
  
  // Get data based on slug
  const data = rentalData[slug];
  
  // If invalid slug, show error
  if (!data) {
    return (
      <>
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <div className="min-h-screen bg-gray-100 pt-32 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-8">The rental page you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate("/")}
              className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  const isHourly = data.type === "hourly";
  
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 top-4 flex items-center gap-2 text-white hover:text-yellow-300 transition"
          >
            <FaArrowLeft /> Back
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
          <p className="text-xl max-w-3xl mx-auto">{data.subtitle}</p>
        </div>
      </section>
      
      {/* Rental Plans Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Our <span className="text-yellow-500">{isHourly ? "Hourly" : "Daily"}</span> Rental Plans
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the perfect plan that fits your needs
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                plan={plan}
                type={data.type}
                onSelect={(plan) => setSelectedPlan(plan)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Why Choose <span className="text-yellow-500">Varahi</span> for {isHourly ? "Hourly" : "Daily"} Rental?
              </h2>
              <ul className="space-y-3">
                {data.advantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Best For
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {data.bestFor.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                    <FaStar className="text-yellow-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Available Cars Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Available <span className="text-yellow-500">Cars</span> for {isHourly ? "Hourly" : "Daily"} Rental
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Choose from our wide range of well-maintained vehicles
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.availableCars.map((car, idx) => (
              <CarCard key={idx} car={car} type={data.type} />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How <span className="text-yellow-500">It Works</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Car</h3>
              <p className="text-gray-600">Select from our fleet based on your needs</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Pick Your Plan</h3>
              <p className="text-gray-600">Select {isHourly ? "hourly" : "daily"} plan that fits your schedule</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Drive & Return</h3>
              <p className="text-gray-600">Pick up, drive hassle-free, and return</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Terms & Conditions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Terms & <span className="text-yellow-500">Conditions</span>
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <ul className="space-y-3">
              {data.terms.map((term, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <FaCheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Frequently Asked <span className="text-yellow-500">Questions</span>
          </h2>
          <div className="bg-gray-50 rounded-xl p-6">
            {data.faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                faq={faq}
                isOpen={openFAQ === idx}
                toggle={() => setOpenFAQ(openFAQ === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Drive?</h2>
          <p className="text-lg mb-6">
            Book your {isHourly ? "hourly" : "daily"} rental car today and experience the freedom of self-drive
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition">
              Book Now
            </button>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm">
            <FaPhoneAlt />
            <span>Or call us: +91 98765 43210</span>
          </div>
        </div>
      </section>
      
      {/* Booking Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h2 className="text-2xl font-bold mb-4">Confirm {selectedPlan.label} Booking</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Plan Type:</span>
                <span className="font-semibold">{isHourly ? "Hourly" : "Daily"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-semibold">{isHourly ? `${selectedPlan.hours} hours` : `${selectedPlan.days} days`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-bold text-yellow-500">₹{selectedPlan.price}</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <p className="text-sm text-gray-500">
                  {isHourly 
                    ? "Hourly rentals are perfect for short trips. Extra hours charged at ₹200/hour."
                    : "Daily rentals include 100 km per day. Extra km: ₹15/km."}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedPlan(null)}
                className="flex-1 bg-gray-200 py-2 rounded-lg font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert(`Booking confirmed for ${selectedPlan.label} plan!\nWe'll contact you shortly.`);
                  setSelectedPlan(null);
                }}
                className="flex-1 bg-yellow-500 py-2 rounded-lg font-semibold"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
};

export default RentalPage;