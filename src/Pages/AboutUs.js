import React from 'react';
import { InView } from 'react-intersection-observer';
import 'animate.css';

const AboutUs = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-blue-900 to-blue-300"> {/* Updated background */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Section - Content */}
          <InView triggerOnce={true} threshold={0.5}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`lg:w-1/2 text-left text-white mb-4 lg:mb-0 ${
                  inView ? 'animate__animated animate__fadeInLeft' : ''
                }`}
              >
                <h2 className="text-3xl font-bold mb-4">About Varahi Self Drive Cars</h2>
                <p className="text-lg leading-relaxed">
                  At Varahi Self Drive Cars, we offer a seamless and hassle-free experience to rent vehicles for your travel needs. Whether you're planning a road trip, a business journey, or just need a car for a few days, we have a wide range of vehicles ready for you.
                  <br /><br />
                  Our fleet includes economy cars, luxury vehicles, and SUVs to suit all your preferences. With easy booking options, flexible rental periods, and transparent pricing, we ensure that you have a smooth and enjoyable rental experience.
                  <br /><br />
                  Our platform provides real-time vehicle availability, 24/7 customer support, and secure transactions, ensuring peace of mind during your rental period. At Varahi Self Drive Cars, we prioritize customer satisfaction, making your trip stress-free and enjoyable.
                </p>
              </div>
            )}
          </InView>

          {/* Right Section - Image */}
          <InView triggerOnce={true} threshold={0.5}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`lg:w-1/2 flex justify-center ${
                  inView ? 'animate__animated animate__fadeInRight' : ''
                }`}
              >
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/012/939/271/original/animated-presentation-isolated-scene-strategy-meeting-business-plan-looped-flat-2d-characters-4k-footage-with-alpha-channel-colorful-illustration-for-mobile-website-animation-video.jpg"
                  alt="Varahi Self Drive Cars"
                  className="w-full h-auto sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-lg"
                />
              </div>
            )}
          </InView>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
