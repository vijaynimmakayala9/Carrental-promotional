import React, { useState } from "react";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-yellow-500 text-3xl" />,
      title: "Visit Us",
      details: ["Near Kukatpally Metro Station", "Kukatpally, Hyderabad - 500072"]
    },
    {
      icon: <FaPhoneAlt className="text-yellow-500 text-3xl" />,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211"]
    },
    {
      icon: <FaEnvelope className="text-yellow-500 text-3xl" />,
      title: "Email Us",
      details: ["info@varahiselfdrive.com", "support@varahiselfdrive.com"]
    },
    {
      icon: <FaClock className="text-yellow-500 text-3xl" />,
      title: "Business Hours",
      details: ["Monday - Sunday: 7:00 AM - 11:00 PM", "24/7 Customer Support Available"]
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact <span className="text-yellow-300">Us</span></h1>
          <p className="text-xl max-w-3xl mx-auto">We're here to help! Reach out to us for bookings, inquiries, or support</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-xl transition">
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a <span className="text-yellow-500">Message</span></h2>
              
              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you for contacting us! We'll get back to you soon.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Booking Inquiry"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Tell us about your car rental needs..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Map & Quick Contact */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.258596549956!2d78.4468!3d17.4633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c0a5b5b5b5%3A0x0!2sKukatpally%20Metro%20Station!5e0!3m2!1sen!2sin!4v1641234567890!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Varahi Location Map"
                  className="w-full"
                />
              </div>
              
              {/* Emergency Contact */}
              <div className="bg-yellow-500 rounded-2xl p-6 text-center">
                <FaWhatsapp size={40} className="text-white mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Quick Booking?</h3>
                <p className="text-white mb-4">Get instant response on WhatsApp</p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-yellow-600 px-6 py-2 rounded-full font-bold hover:scale-105 transition"
                >
                  Chat Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Connect With <span className="text-yellow-500">Us</span></h2>
          <div className="flex justify-center gap-6">
            <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="bg-pink-600 text-white p-3 rounded-full hover:scale-110 transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="bg-blue-400 text-white p-3 rounded-full hover:scale-110 transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="bg-green-500 text-white p-3 rounded-full hover:scale-110 transition">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;