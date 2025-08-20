import React, { useState } from "react";
import { PhoneIcon, ChatIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import { InView } from "react-intersection-observer";
import 'animate.css';

const ContactUs = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission status
  const [errorMessage, setErrorMessage] = useState(null); // Store error message if any
  const [successMessage, setSuccessMessage] = useState(null); // Store success message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if form is already submitting
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("https://car-rental-backend-wmlb.onrender.com/api/users/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // If submission is successful
        setSuccessMessage(result.message || "Your message has been sent!");
        setFormData({ name: '', email: '', message: '' });  // Clear form after successful submission
      } else {
        // If there's an error in submission
        setErrorMessage(result.message || "Something went wrong, please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 bg-gradient-to-r from-blue-900 to-blue-300">
      <div className="container mx-auto px-6 flex justify-center">
        <InView triggerOnce={true} threshold={0.5}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w-full lg:w-2/3 text-white text-center ${inView ? "animate__animated animate__fadeInUp" : ""}`}
            >
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg mb-6">We’re here to help with your queries and support needs.</p>

              <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                {/* Contact Details Section (Left Side) */}
                <div className="lg:w-1/2 text-white">
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>

                    {/* Phone */}
                    <div className="flex items-center space-x-4 mb-4">
                      <PhoneIcon className="w-8 h-8 text-purple-600" />
                      <div>
                        <p className="text-base">+91 96663 17749</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-4 mb-4">
                      <ChatIcon className="w-8 h-8 text-purple-600" />
                      <div>
                        <p className="text-base">contact.vsdcars@gmail.com</p>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start space-x-4 mb-4">
                      <LocationMarkerIcon className="w-16 h-16 text-purple-600" />
                      <div>
                        <p className="text-base">
                          VSD Cars<br />
                                Plot No 358/ Teachers Colony/ BN Reddy Nagar/ Hayathnagar/ Rangareddy/ Telangana/ India
<br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form Section (Right Side) */}
                <div className="lg:w-1/2 bg-white text-black p-8 rounded-lg shadow-xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>

                  {/* Display success or error message */}
                  {successMessage && (
                    <div className="bg-green-100 text-green-700 p-4 mb-4 rounded-md">
                      {successMessage}
                    </div>
                  )}
                  {errorMessage && (
                    <div className="bg-red-100 text-red-700 p-4 mb-4 rounded-md">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    {/* Message Field */}
                    <div className="mb-4">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                        rows="4"
                        placeholder="Your message..."
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700"
                      disabled={isSubmitting} // Disable button when submitting
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </InView>
      </div>
    </div>
  );
};

export default ContactUs;
