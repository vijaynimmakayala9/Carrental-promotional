import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { InView } from 'react-intersection-observer';
import 'animate.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-6">

        {/* Intro Description */}
        <InView triggerOnce={true} threshold={0.5}>
          {({ inView, ref }) => (
            <div ref={ref} className={`mb-10 ${inView ? 'animate__animated animate__fadeIn' : ''}`}>
              <p className="text-lg sm:text-xl md:text-2xl text-center">
                Your trusted partner for reliable and affordable car rentals. Explore a wide range of vehicles and drive with comfort, safety, and convenience. Book your next ride with us today!
              </p>
            </div>
          )}
        </InView>

        {/* Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10 text-center sm:text-left">

          {/* About Us */}
          <InView triggerOnce={true} threshold={0.5}>
            {({ inView, ref }) => (
              <div ref={ref} className={`space-y-2 ${inView ? 'animate__animated animate__fadeIn' : ''}`}>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">About Us</h3>
                <ul className="text-sm space-y-2">
                  <li><a href="/" className="hover:text-blue-400">Home</a></li>
                  <li><a href="/our-story" className="hover:text-blue-400">Our Story</a></li>
                  <li><a href="/fleet" className="hover:text-blue-400">Our Fleet</a></li>
                  <li><a href="/contact-us" className="hover:text-blue-400">Contact Us</a></li>
                </ul>
              </div>
            )}
          </InView>

          {/* Rental Services */}
          <InView triggerOnce={true} threshold={0.5}>
            {({ inView, ref }) => (
              <div ref={ref} className={`space-y-2 ${inView ? 'animate__animated animate__fadeIn' : ''}`}>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Rental Services</h3>
                <ul className="text-sm space-y-2">
                  <li><a href="/booking" className="hover:text-blue-400">Book a Car</a></li>
                  <li><a href="/rental-terms" className="hover:text-blue-400">Rental Terms</a></li>
                  <li><a href="/faq" className="hover:text-blue-400">FAQs</a></li>
                  <li><a href="/support" className="hover:text-blue-400">Customer Support</a></li>
                </ul>
              </div>
            )}
          </InView>

          {/* Customer Support */}
          <InView triggerOnce={true} threshold={0.5}>
            {({ inView, ref }) => (
              <div ref={ref} className={`space-y-2 ${inView ? 'animate__animated animate__fadeIn' : ''}`}>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Customer Support</h3>
                <ul className="text-sm space-y-2">
                  <li><a href="/help-center" className="hover:text-blue-400">Help Center</a></li>
                  <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
                  <li><a href="/book-now" className="hover:text-blue-400">Book Now</a></li>
                </ul>
              </div>
            )}
          </InView>

          {/* Legal & Policies */}
          <InView triggerOnce={true} threshold={0.5}>
            {({ inView, ref }) => (
              <div ref={ref} className={`space-y-2 ${inView ? 'animate__animated animate__fadeIn' : ''}`}>
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Legal & Policies</h3>
                <ul className="text-sm space-y-2">
                  <li><a href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</a></li>
                  <li><a href="/terms-and-conditions" className="hover:text-blue-400">Terms & Conditions</a></li>
                  <li><a href="/shipping-policy" className="hover:text-blue-400">Shipping Policy</a></li>
                  <li><a href="/cancellation-refund" className="hover:text-blue-400">Cancellation & Refunds</a></li>
                </ul>
              </div>
            )}
          </InView>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 mt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-center sm:text-left mb-4 sm:mb-0">
            © 2025 Varahi Car Rentals. All Rights Reserved.
          </p>
          <div className="flex space-x-4 justify-center sm:justify-start">
            <FaFacebook size={20} className="text-white hover:text-blue-500" />
            <FaTwitter size={20} className="text-white hover:text-blue-400" />
            <FaInstagram size={20} className="text-white hover:text-pink-500" />
            <FaLinkedin size={20} className="text-white hover:text-blue-300" />
            <FaWhatsapp size={20} className="text-white hover:text-green-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
