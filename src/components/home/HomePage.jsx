'use client'
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar, FaShoppingCart, FaHeart, FaEye } from 'react-icons/fa';
import { MdLocalShipping, MdSecurity, MdSupport, MdPayment } from 'react-icons/md';
import HeroSection from './Hero';
import PopularProduct from './PopularProduct';
import BestProduct from './BestProduct';
import Footer from '../Footer';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const heroSlides = [
    {
      id: 1,
      title: "Summer Collection 2024",
      subtitle: "Discover the latest trends in fashion",
      description: "Get up to 50% off on selected items. Limited time offer!",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      buttonText: "Shop Now",
      buttonColor: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      title: "Electronics Sale",
      subtitle: "Premium gadgets at unbeatable prices",
      description: "Upgrade your tech game with our exclusive deals",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      buttonText: "Explore Deals",
      buttonColor: "from-blue-500 to-indigo-600"
    },
    {
      id: 3,
      title: "Home & Living",
      subtitle: "Transform your space with style",
      description: "Beautiful home decor that speaks your language",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      buttonText: "View Collection",
      buttonColor: "from-emerald-500 to-teal-600"
    }
  ];


  const features = [
    {
      icon: <MdLocalShipping className="text-3xl" />,
      title: "Free Shipping",
      description: "On orders over $50"
    },
    {
      icon: <MdSecurity className="text-3xl" />,
      title: "Secure Payment",
      description: "100% secure checkout"
    },
    {
      icon: <MdSupport className="text-3xl" />,
      title: "24/7 Support",
      description: "Get help anytime"
    },
    {
      icon: <MdPayment className="text-3xl" />,
      title: "Easy Returns",
      description: "30-day return policy"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  // };

  // const goToSlide = (index) => {
  //   setCurrentSlide(index);
  // };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Slider Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8  ">
            {features.map((feature, index) => (
              <div key={index} className="text-center group border py-3 max-h-48 rounded-md bg-slate-200">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-Nunito-SemiBold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 font-Nunito text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <PopularProduct />

      {/* Best Product Section */}
      {/* <BestProduct /> */}

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/15 rounded-full blur-lg animate-bounce"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-Nunito-Bold text-white mb-6">
            Stay Updated with Latest Deals
          </h2>
          <p className="text-xl font-Nunito-SemiBold text-emerald-50 mb-8">
            Subscribe to our newsletter and never miss out on exclusive offers and new arrivals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 font-Nunito rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-opacity-50 bg-white shadow-lg border-0"
            />
            <button className="bg-white font-Nunito-SemiBold text-emerald-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>
         {/* Best Product Section */}
         <BestProduct />
      <Footer/>
    </div>
  );
};

export default HomePage;
