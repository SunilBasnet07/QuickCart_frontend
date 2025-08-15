'use client'
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-Nunito-ExtraBold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 font-Nunito max-w-2xl mx-auto leading-relaxed">
            Have a question or want to work together? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form Section */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 h-[650px] lg:p-10 border border-gray-100">
            <h2 className="text-2xl font-Nunito-ExtraBold text-gray-900 mb-8">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-Nunito-SemiBold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border font-Nunito border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-Nunito-SemiBold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border font-Nunito border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-Nunito-SemiBold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 font-Nunito rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-Nunito-SemiBold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 font-Nunito rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-Nunito-SemiBold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 border border-gray-100">
              <h2 className="text-2xl font-Nunito-ExtraBold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-Nunito-Bold text-gray-900">Phone</h3>
                    <p className="text-gray-600 font-Nunito">+1 (555) 123-4567</p>
                    <p className="text-gray-600 font-Nunito">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-Nunito-Bold text-gray-900">Email</h3>
                    <p className="text-gray-600 font-Nunito">hello@quickcart.com</p>
                    <p className="text-gray-600 font-Nunito">support@quickcart.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 font-Nunito-Bold">Office Address</h3>
                    <p className="text-gray-600 font-Nunito">123 Business Street</p>
                    <p className="text-gray-600 font-Nunito">Suite 100, Tech District</p>
                    <p className="text-gray-600 font-Nunito">New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <FaClock className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 font-Nunito-Bold">Business Hours</h3>
                    <p className="text-gray-600 font-Nunito">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 font-Nunito">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600 font-Nunito">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 border border-gray-100">
              <h2 className="text-2xl font-Nunito-Bold text-gray-900 mb-8">Follow Us</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200"
                >
                  <FaFacebook className="text-xl" />
                  <span className="font-Nunito-Bold">Facebook</span>
                </a>
                
                <a
                  href="#"
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white py-3 px-4 rounded-lg hover:from-sky-600 hover:to-sky-700 transform hover:scale-105 transition-all duration-200"
                >
                  <FaTwitter className="text-xl" />
                  <span className="font-Nunito-SemiBold">Twitter</span>
                </a>
                
                <a
                  href="#"
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-4 rounded-lg hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200"
                >
                  <FaInstagram className="text-xl" />
                  <span className="font-Nunito-SemiBold">Instagram</span>
                </a>
                
                <a
                  href="#"
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white py-3 px-4 rounded-lg hover:from-blue-800 hover:to-blue-900 transform hover:scale-105 transition-all duration-200"
                >
                  <FaLinkedin className="text-xl" />
                  <span className="font-Nunito-SemiBold">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-Nunito-ExtraBold mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-Nunito">
              Join thousands of satisfied customers who trust QuickCart for their shopping needs. 
              We're here to help you every step of the way.
            </p>
            <button className="bg-white font-Nunito-SemiBold text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Start Shopping Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
