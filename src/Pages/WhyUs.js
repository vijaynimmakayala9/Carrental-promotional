import React from "react";
import {
  TruckIcon,  // Vehicle Icon
  ShieldCheckIcon,  // Insurance Icon
  SupportIcon,  // Support Icon
  MapIcon,  // Coverage Icon
  CashIcon,  // Pricing Icon
  StarIcon,  // Rating Icon
  ThumbUpIcon,  // Customer Satisfaction Icon (updated)
} from "@heroicons/react/outline";  // Updated icons
import { InView } from "react-intersection-observer";

const WhyUs = () => {
  const features = [
    {
      icon: <TruckIcon className="w-8 h-8 text-purple-600" />,
      title: "Reliable Fleet of Vehicles",
      description:
        "From economy cars to luxury SUVs, our fleet is constantly maintained to ensure you have a smooth and reliable journey.",
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-purple-600" />,
      title: "Peace of Mind",
      description:
        "With comprehensive insurance included in every rental, you can travel worry-free knowing you're fully covered.",
    },
    {
      icon: <SupportIcon className="w-8 h-8 text-purple-600" />,
      title: "24/7 Customer Support",
      description:
        "Our dedicated support team is available round the clock to assist with any questions or issues you may face during your trip.",
    },
    {
      icon: <MapIcon className="w-8 h-8 text-purple-600" />,
      title: "Wide Service Area",
      description:
        "Pick up and drop off your vehicle at convenient locations across the country, offering you unparalleled flexibility.",
    },
    {
      icon: <CashIcon className="w-8 h-8 text-purple-600" />,
      title: "No Hidden Charges",
      description:
        "With transparent pricing and no surprise fees, we offer a straightforward rental experience that you can count on.",
    },
    {
      icon: <StarIcon className="w-8 h-8 text-purple-600" />,
      title: "Top-Rated Service",
      description:
        "Our customers rave about their experiences. Join the thousands who trust us for their travel needs and enjoy top-notch service.",
    },
    {
      icon: <ThumbUpIcon className="w-8 h-8 text-purple-600" />,  // Updated icon
      title: "Customer Satisfaction",
      description:
        "We pride ourselves on providing a seamless and enjoyable experience, from booking to returning the vehicle, ensuring that every customer leaves satisfied.",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-blue-900 to-blue-300">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Why Choose VSD Cars?</h2>
        <p className="text-lg text-blue-100 mb-12">
          Here's why VSD Cars is the perfect choice for your next journey:
        </p>

        {/* Grid layout for the features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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

export default WhyUs;
