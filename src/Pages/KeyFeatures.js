import React from "react";
import { InView } from 'react-intersection-observer';
import {
  TruckIcon,  // Use TruckIcon for vehicles
  CalendarIcon,
  UserGroupIcon,
  MapIcon,
  SupportIcon,
  ShieldCheckIcon,
  CashIcon,
} from "@heroicons/react/outline";  // Updated icons

const KeyFeatures = () => {
  const features = [
    {
      icon: <TruckIcon className="w-8 h-8 text-purple-600" />,  // Updated icon size
      title: "Wide Range of Vehicles",
      description: "Choose from a variety of cars, SUVs, and luxury vehicles to suit your travel needs.",
    },
    {
      icon: <CalendarIcon className="w-8 h-8 text-purple-600" />,
      title: "Flexible Rental Periods",
      description: "Rent a vehicle for a day, a week, or even longer with flexible rental durations.",
    },
    {
      icon: <UserGroupIcon className="w-8 h-8 text-purple-600" />,
      title: "Easy Booking Process",
      description: "Book your vehicle effortlessly online with quick and secure payment options.",
    },
    {
      icon: <MapIcon className="w-8 h-8 text-purple-600" />,
      title: "Nationwide Coverage",
      description: "Pick up and drop off vehicles at multiple locations across the country.",
    },
    {
      icon: <SupportIcon className="w-8 h-8 text-purple-600" />,
      title: "24/7 Customer Support",
      description: "Get assistance anytime, anywhere with our dedicated customer support team.",
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-purple-600" />,
      title: "Comprehensive Insurance",
      description: "All vehicles come with full insurance coverage to ensure peace of mind during your trip.",
    },
    {
      icon: <CashIcon className="w-8 h-8 text-purple-600" />,
      title: "Affordable Pricing",
      description: "Enjoy competitive pricing with no hidden charges and multiple payment options.",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-blue-900 to-blue-300">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Key Features of VSD Cars</h2>
        <p className="text-lg text-blue-100 mb-12">
          Explore the key features that make VSD Cars the best choice for your travel needs.
        </p>

        {/* Grid layout for the features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <InView key={index} triggerOnce={true} threshold={0.5}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-lg transform transition-transform hover:-translate-y-2 border-b-4 border-transparent hover:border-purple-500 ${
                    inView ? "animate__animated animate__fadeInUp" : ""
                  }`}
                >
                  {/* Circle around the icon */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 shadow-md">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mt-4">{feature.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{feature.description}</p>
                </div>
              )}
            </InView>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
