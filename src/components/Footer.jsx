'use client'
import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest, FaHeart, FaRocket, FaStar, FaGift, FaShieldAlt, FaTruck, FaCreditCard, FaHeadset, FaArrowUp, FaPlay, FaMapPin, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Top Section with Brand */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            <FaRocket className="text-4xl" />
            <h2 className="text-5xl font-Nunito-ExtraBold">QuickCart</h2>
          </div>
          <p className="text-xl font-Nunito-SemiBold text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Revolutionizing online shopping with cutting-edge technology and exceptional customer experience
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Left Column - Company Info */}
          <div className="text-center lg:text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-Nunito-ExtraBold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About QuickCart
              </h3>
              <p className="text-gray-300 mb-6 font-Nunito leading-relaxed">
                We're not just an e-commerce platform - we're your digital shopping companion, 
                bringing you the latest trends and unbeatable deals.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <FaMapPin className="text-white" />
                  </div>
                  <span className="text-gray-300 font-Nunito">123 Innovation Drive, Tech City</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <FaPhone className="text-white" />
                  </div>
                  <span className="text-gray-300 font-Nunito">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-white" />
                  </div>
                  <span className="font-Nunito text-gray-300">hello@quickcart.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-Nunito-ExtraBold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-left">
                  <a href="#" className="block text-gray-300 font-Nunito-SemiBold hover:text-purple-400 transition-all duration-300 py-2 hover:translate-x-2 transform">
                    🏠 Home
                  </a>
                  <a href="#" className="block font-Nunito-SemiBold text-gray-300 hover:text-purple-400 transition-all duration-300 py-2 hover:translate-x-2 transform">
                    🛍️ Shop
                  </a>
                  <a href="#" className="block font-Nunito-SemiBold text-gray-300 hover:text-purple-400 transition-all duration-300 py-2 hover:translate-x-2 transform">
                    📱 App
                  </a>
                  <a href="#" className="block font-Nunito-SemiBold text-gray-300 hover:text-purple-400 transition-all duration-300 py-2 hover:translate-x-2 transform">
                    🎯 Deals
                  </a>
                </div>
                <div className="text-left">
                  <a href="#" className="block font-Nunito-SemiBold text-gray-300 hover:text-purple-400 transition-all duration-300 py-2 hover:translate-x-2 transform">
                    📖 Blog
                  </a>
                  <a href="#" className="block font-Nunito-SemiBold text-gray-300 hover:text-purple-400 transition-all duration-300 py-2 hover:translate-x-2 transform">
                    💼 Careers
                  </a>
                  <a href="#" className="block font-Nunito-SemiBold text-gray-300 hover:text-purple-400 transition-all duration-300 py-2 hover:translate-x-2 transform">
                    📞 Support
                  </a>
                  <a href="#" className="block font-Nunito-SemiBold text-gray-300 hover:text-purple-400 transition-all duration-300 py-2 hover:translate-x-2 transform">
                    📋 About
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Newsletter */}
          <div className="text-center lg:text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-Nunito-ExtraBold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-6 font-Nunito-SemiBold">
                Get exclusive access to flash sales, new arrivals, and insider tips!
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 font-Nunito bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    required
                  />
                  <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <button
                  type="submit"
                  className="w-full font-Nunito-Bold bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  <FaGift className="inline mr-2" />
                  Subscribe & Get 10% Off!
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Media & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Social Media */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-Nunito-ExtraBold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Connect With Us
            </h3>
            <div className="flex justify-center lg:justify-start space-x-4">
              {[
                { icon: FaFacebook, color: 'hover:bg-blue-600', label: 'Facebook' },
                { icon: FaTwitter, color: 'hover:bg-sky-500', label: 'Twitter' },
                { icon: FaInstagram, color: 'hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500', label: 'Instagram' },
                { icon: FaLinkedin, color: 'hover:bg-blue-700', label: 'LinkedIn' },
                { icon: FaYoutube, color: 'hover:bg-red-600', label: 'YouTube' },
                { icon: FaPinterest, color: 'hover:bg-red-500', label: 'Pinterest' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`group w-14 h-14 font-Nunito bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 hover:scale-110 transition-all duration-300 ${social.color}`}
                  title={social.label}
                >
                  <social.icon className="text-xl group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-Nunito-ExtraBold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Choose Us
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FaTruck, text: 'Free Shipping', color: 'from-blue-500 to-cyan-500' },
                { icon: FaShieldAlt, text: 'Secure Payment', color: 'from-green-500 to-emerald-500' },
                { icon: FaCreditCard, text: 'Easy Returns', color: 'from-purple-500 to-pink-500' },
                { icon: FaHeadset, text: '24/7 Support', color: 'from-orange-500 to-red-500' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className={`w-8 h-8 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="text-white text-sm" />
                  </div>
                  <span className="text-gray-300 font-Nunito-SemiBold text-sm group-hover:text-white transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 font-Nunito">
                © {currentYear} QuickCart. Made with{' '}
                <FaHeart className="inline text-pink-500 mx-1 animate-pulse" />
                {' '}for amazing shoppers worldwide.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 font-Nunito hover:text-purple-400 transition-colors duration-300 hover:scale-105 transform"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="group w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-bounce">
        <FaStar className="text-yellow-400 text-2xl" />
      </div>
      <div className="absolute top-40 right-20 opacity-20 animate-pulse">
        <FaGift className="text-pink-400 text-2xl" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>
        <FaRocket className="text-purple-400 text-2xl" />
      </div>
    </footer>
  );
};

export default Footer;
