import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import {
    FaGasPump,
    FaRoad,
    FaUsers,
    FaCog,
    FaSnowflake,
    FaBluetooth,
    FaShieldAlt,
    FaCheckCircle,
    FaTimesCircle,
    FaRupeeSign,
    FaCalendarAlt,
    FaStar,
    FaThumbsUp,
    FaCar,
    FaBolt,
    FaParking,
    FaWifi,
    FaMapMarkerAlt,
    FaWhatsapp,
    FaArrowLeft
} from "react-icons/fa";

// Car Data Database
const carsData = {
    "Mahindra": {
        slug: "varahi-self-drive-mahindra-kukatpally",
        name: "Mahindra XUV700",
        brand: "Mahindra",
        model: "XUV700",
        year: "2024",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop",

        gallery: [
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop",

            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop",

            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1400&auto=format&fit=crop"
        ],
        price: "₹3,999",
        pricePerDay: "3,999",
        description: "The Mahindra XUV700 is a powerful and feature-packed SUV that offers exceptional performance, luxury, and safety. Perfect for family trips and long journeys with its spacious 7-seater configuration.",
        features: {
            transmission: "Automatic / Manual",
            fuelType: "Diesel / Petrol",
            seating: "7 Seater",
            mileage: "15-18 km/l",
            engine: "1997 cc, 4-cylinder",
            power: "185 bhp",
            ac: "Automatic Climate Control",
            bootSpace: "450 Liters",
            infotainment: "10.25 Touchscreen",
            safety: "6 Airbags, ABS, ESC"
        },
        advantages: [
            "Spacious 7-seater configuration perfect for large families",
            "Powerful engine with excellent highway performance",
            "Advanced safety features including 6 airbags",
            "Premium interiors with leatherette seats",
            "Large boot space for luggage",
            "Excellent ground clearance for Indian roads"
        ],
        disadvantages: [
            "Lower fuel efficiency in city traffic",
            "Large size makes parking in tight spots difficult",
            "Higher maintenance cost compared to smaller SUVs"
        ],
        rating: 4.7,
        reviews: 342,
        available: true,
        location: "Kukatpally, Hyderabad",
        terms: [
            "Minimum rental period: 24 hours",
            "Security deposit: ₹5,000",
            "Free cancellation up to 24 hours before pickup",
            "Driver must be 21+ years with valid license",
            "ID proof and address proof required"
        ]
    },
    "Suzuki": {
        slug: "varahi-self-drive-suzuki-kukatpally",
        name: "Maruti Suzuki Swift",
        brand: "Suzuki",
        model: "Swift",
        year: "2024",
        image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&h=500&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=500&fit=crop"
        ],
        price: "₹1,499",
        pricePerDay: "1,499",
        description: "The Maruti Suzuki Swift is India's favorite hatchback, known for its sporty looks, peppy engine, and excellent fuel efficiency. Ideal for city commuting and weekend getaways.",
        features: {
            transmission: "Manual / Automatic",
            fuelType: "Petrol",
            seating: "5 Seater",
            mileage: "22-24 km/l",
            engine: "1197 cc, 3-cylinder",
            power: "89 bhp",
            ac: "Manual AC",
            bootSpace: "268 Liters",
            infotainment: "7 Touchscreen",
            safety: "2 Airbags, ABS"
        },
        advantages: [
            "Excellent fuel efficiency - great for daily commute",
            "Compact size makes city parking easy",
            "Sporty design and responsive handling",
            "Low maintenance and service costs",
            "Widely available spare parts",
            "Great resale value"
        ],
        disadvantages: [
            "Limited rear seat space for tall passengers",
            "Small boot space compared to competitors",
            "Highway stability could be better"
        ],
        rating: 4.5,
        reviews: 567,
        available: true,
        location: "Kukatpally, Hyderabad",
        terms: [
            "Minimum rental period: 24 hours",
            "Security deposit: ₹3,000",
            "Free cancellation up to 24 hours before pickup",
            "Driver must be 21+ years with valid license"
        ]
    },
    "Fortuner": {
        slug: "varahi-self-drive-fortuner-kukatpally",
        name: "Toyota Fortuner",
        brand: "Toyota",
        model: "Fortuner",
        year: "2024",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400&auto=format&fit=crop",

        gallery: [
            "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400&auto=format&fit=crop",

            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1400&auto=format&fit=crop",

            "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1400&auto=format&fit=crop"
        ],
        price: "₹6,999",
        pricePerDay: "6,999",
        description: "The Toyota Fortuner is a legendary full-size SUV that commands respect on the road. With its muscular design, powerful engine, and go-anywhere capability, it's perfect for luxury road trips and off-road adventures.",
        features: {
            transmission: "Automatic",
            fuelType: "Diesel",
            seating: "7 Seater",
            mileage: "10-12 km/l",
            engine: "2755 cc, 4-cylinder",
            power: "201 bhp",
            ac: "Automatic Climate Control",
            bootSpace: "550 Liters",
            infotainment: "8 Touchscreen",
            safety: "7 Airbags, ABS, ESC"
        },
        advantages: [
            "Commanding road presence and prestige",
            "Excellent off-road capability with 4x4 option",
            "Highly reliable and durable Toyota build quality",
            "Spacious and luxurious interiors",
            "Strong resale value",
            "Great for long highway journeys"
        ],
        disadvantages: [
            "Lower fuel economy",
            "Expensive maintenance and spare parts",
            "Large size makes city driving challenging",
            "Higher rental cost"
        ],
        rating: 4.8,
        reviews: 189,
        available: true,
        location: "Kukatpally, Hyderabad",
        terms: [
            "Minimum rental period: 24 hours",
            "Security deposit: ₹10,000",
            "Free cancellation up to 48 hours before pickup",
            "Driver must be 25+ years with valid license",
            "International driving permit required for foreigners"
        ]
    },
    "Bolero": {
        slug: "varahi-self-drive-bolero-kukatpally",
        name: "Mahindra Bolero",
        brand: "Mahindra",
        model: "Bolero",
        year: "2023",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1400&auto=format&fit=crop",

        gallery: [
            "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1400&auto=format&fit=crop",

            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop",

            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop"
        ],
        price: "₹2,499",
        pricePerDay: "2,499",
        description: "The Mahindra Bolero is India's favorite rugged SUV, known for its tough build and reliable performance. Perfect for rough roads, rural areas, and group travel with its spacious interior.",
        features: {
            transmission: "Manual",
            fuelType: "Diesel",
            seating: "7-8 Seater",
            mileage: "14-16 km/l",
            engine: "1493 cc, 3-cylinder",
            power: "75 bhp",
            ac: "Manual AC",
            bootSpace: "400 Liters",
            infotainment: "Basic Audio System",
            safety: "Driver Airbag, ABS"
        },
        advantages: [
            "Rugged and durable build quality",
            "Excellent for rough roads and rural areas",
            "Spacious seating for 7-8 people",
            "Low maintenance costs",
            "Good ground clearance for Indian roads",
            "Simple and reliable mechanics"
        ],
        disadvantages: [
            "Basic interiors and features",
            "Noisy diesel engine",
            "Not very fuel efficient",
            "Basic safety features only"
        ],
        rating: 4.3,
        reviews: 423,
        available: true,
        location: "Kukatpally, Hyderabad",
        terms: [
            "Minimum rental period: 24 hours",
            "Security deposit: ₹4,000",
            "Free cancellation up to 24 hours before pickup",
            "Driver must be 21+ years with valid license"
        ]
    }
};

// Helper Component: Tab Navigation
const TabButton = ({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`px-6 py-2 font-semibold transition-all ${active
            ? "border-b-2 border-yellow-500 text-yellow-500"
            : "text-gray-500 hover:text-gray-700"
            }`}
    >
        {children}
    </button>
);

// Main Car Details Component
const CarDetailsPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("overview");
    const [selectedImage, setSelectedImage] = useState(0);
    const [rentalDays, setRentalDays] = useState(1);
    const [showBooking, setShowBooking] = useState(false);

    // Get car data based on param
    const car = Object.values(carsData).find(
        (item) => item.slug === slug
    );

    // If car not found, show error
    if (!car) {
        return (
            <>
                <div className="fixed top-0 left-0 right-0 z-50">
                    <Navbar />
                </div>
                <div className="min-h-screen bg-gray-100 pt-32 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Car Not Found</h1>
                        <p className="text-gray-600 mb-8">Sorry, we couldn't find the car you're looking for.</p>
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

    const totalPrice = parseInt(car.pricePerDay) * rentalDays;
    const securityDeposit = parseInt(car.pricePerDay) * 1.2;

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>

            {/* Hero Section with Car Image */}
            <section className="relative pt-32 pb-8 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-white mb-6 hover:text-yellow-400 transition"
                    >
                        <FaArrowLeft /> Back
                    </button>

                    {/* Car Title */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{car.name}</h1>
                        <div className="flex items-center justify-center gap-2 text-yellow-400">
                            <FaStar className="fill-current" />
                            <span className="font-bold">{car.rating}</span>
                            <span className="text-gray-300">({car.reviews} reviews)</span>
                        </div>
                    </div>

                    {/* Main Image Gallery */}
                    <div className="grid lg:grid-cols-3 gap-4">
                        <div className="lg:col-span-2">
                            <img
                                src={car.gallery[selectedImage]}
                                alt={car.name}
                                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                            />
                        </div>
                        <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto">
                            {car.gallery.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`${car.name} view ${idx + 1}`}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`w-24 h-24 lg:w-full lg:h-28 object-cover rounded-lg cursor-pointer transition ${selectedImage === idx ? "ring-4 ring-yellow-500" : "opacity-70 hover:opacity-100"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Column - Car Details */}
                        <div className="lg:col-span-2">
                            {/* Tab Navigation */}
                            <div className="flex gap-4 border-b mb-6">
                                <TabButton active={activeTab === "overview"} onClick={() => setActiveTab("overview")}>
                                    Overview
                                </TabButton>
                                <TabButton active={activeTab === "features"} onClick={() => setActiveTab("features")}>
                                    Features
                                </TabButton>
                                <TabButton active={activeTab === "advantages"} onClick={() => setActiveTab("advantages")}>
                                    Pros & Cons
                                </TabButton>
                                <TabButton active={activeTab === "terms"} onClick={() => setActiveTab("terms")}>
                                    Terms
                                </TabButton>
                            </div>

                            {/* Overview Tab */}
                            {activeTab === "overview" && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-3">About {car.name}</h2>
                                        <p className="text-gray-600 leading-relaxed">{car.description}</p>
                                    </div>

                                    {/* Quick Specs */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="bg-white p-4 rounded-xl shadow-sm">
                                            <FaUsers className="text-yellow-500 text-2xl mb-2" />
                                            <p className="text-sm text-gray-500">Seating</p>
                                            <p className="font-semibold">{car.features.seating}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm">
                                            <FaGasPump className="text-yellow-500 text-2xl mb-2" />
                                            <p className="text-sm text-gray-500">Fuel</p>
                                            <p className="font-semibold">{car.features.fuelType}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm">
                                            <FaCog className="text-yellow-500 text-2xl mb-2" />
                                            <p className="text-sm text-gray-500">Transmission</p>
                                            <p className="font-semibold">{car.features.transmission}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm">
                                            <FaRoad className="text-yellow-500 text-2xl mb-2" />
                                            <p className="text-sm text-gray-500">Mileage</p>
                                            <p className="font-semibold">{car.features.mileage}</p>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
                                        <FaMapMarkerAlt className="text-yellow-500 text-xl" />
                                        <div>
                                            <p className="text-sm text-gray-500">Pickup Location</p>
                                            <p className="font-semibold">{car.location}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Features Tab */}
                            {activeTab === "features" && (
                                <div className="grid md:grid-cols-2 gap-4">
                                    {Object.entries(car.features).map(([key, value]) => (
                                        <div key={key} className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
                                            {key === "ac" && <FaSnowflake className="text-yellow-500" />}
                                            {key === "transmission" && <FaCog className="text-yellow-500" />}
                                            {key === "safety" && <FaShieldAlt className="text-yellow-500" />}
                                            {key === "infotainment" && <FaBluetooth className="text-yellow-500" />}
                                            {(key !== "ac" && key !== "transmission" && key !== "safety" && key !== "infotainment") && (
                                                <FaCheckCircle className="text-yellow-500" />
                                            )}
                                            <div>
                                                <p className="text-sm text-gray-500 capitalize">{key}</p>
                                                <p className="font-semibold">{value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Advantages & Disadvantages Tab */}
                            {activeTab === "advantages" && (
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                            <FaThumbsUp className="text-green-500" /> Advantages
                                        </h3>
                                        <ul className="space-y-2">
                                            {car.advantages.map((adv, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700">{adv}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                            <FaTimesCircle className="text-red-500" /> Disadvantages
                                        </h3>
                                        <ul className="space-y-2">
                                            {car.disadvantages.map((dis, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700">{dis}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* Terms Tab */}
                            {activeTab === "terms" && (
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h3 className="text-xl font-bold mb-4">Rental Terms & Conditions</h3>
                                    <ul className="space-y-3">
                                        {car.terms.map((term, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <FaCheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">{term}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Right Column - Booking Card */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-28">
                                <div className="text-center mb-4">
                                    <span className="text-3xl font-bold text-yellow-500">₹{car.pricePerDay}</span>
                                    <span className="text-gray-500"> / day</span>
                                </div>

                                {/* <div className="border-t pt-4 mb-4">
                                    <label className="block text-gray-700 mb-2 font-semibold">
                                        <FaCalendarAlt className="inline mr-2" /> Rental Duration
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => setRentalDays(Math.max(1, rentalDays - 1))}
                                            className="w-10 h-10 bg-gray-200 rounded-full font-bold text-xl hover:bg-gray-300"
                                        >
                                            -
                                        </button>
                                        <span className="text-2xl font-bold">{rentalDays}</span>
                                        <button
                                            onClick={() => setRentalDays(rentalDays + 1)}
                                            className="w-10 h-10 bg-gray-200 rounded-full font-bold text-xl hover:bg-gray-300"
                                        >
                                            +
                                        </button>
                                        <span className="text-gray-600">day(s)</span>
                                    </div>
                                </div> */}

                                {/* <div className="border-t pt-4 space-y-2 mb-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Rental Amount</span>
                                        <span className="font-semibold">₹{totalPrice}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Security Deposit</span>
                                        <span className="font-semibold">₹{securityDeposit}</span>
                                    </div>
                                    <div className="flex justify-between border-t pt-2 mt-2">
                                        <span className="font-bold text-lg">Total</span>
                                        <span className="font-bold text-lg text-yellow-500">₹{totalPrice + securityDeposit}</span>
                                    </div>
                                </div> */}

                                {/* <button
                                    onClick={() => setShowBooking(true)}
                                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 rounded-lg transition mb-3"
                                >
                                    Book Now
                                </button> */}

                                <a
                                    href="https://wa.me/91"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition"
                                >
                                    <FaWhatsapp /> Chat on WhatsApp
                                </a>

                                {car.available && (
                                    <div className="mt-4 text-center">
                                        <span className="inline-flex items-center gap-1 text-green-600 text-sm">
                                            <FaCheckCircle /> Available for booking
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Modal */}
            {showBooking && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6">
                        <h2 className="text-2xl font-bold mb-4">Confirm Booking</h2>
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Car:</span>
                                <span className="font-semibold">{car.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Duration:</span>
                                <span className="font-semibold">{rentalDays} day(s)</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Total Amount:</span>
                                <span className="font-bold text-yellow-500">₹{totalPrice + securityDeposit}</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowBooking(false)}
                                className="flex-1 bg-gray-200 py-2 rounded-lg font-semibold"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    alert("Booking confirmed! We'll contact you shortly.");
                                    setShowBooking(false);
                                }}
                                className="flex-1 bg-yellow-500 py-2 rounded-lg font-semibold"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default CarDetailsPage;