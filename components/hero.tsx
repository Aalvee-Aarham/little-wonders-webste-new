import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full bg-sky-300 pt-32 pb-20 overflow-hidden">
      
      {/* Background Decor Items (Clouds/Circles) */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 right-10 w-64 h-64 bg-yellow-300/30 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left z-10 mt-10 lg:mt-0"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-lime-100 text-lime-800 font-bold text-sm mb-4 border-2 border-lime-300">
             Welcome to Little Wonders
          </span>
          <h1 className="text-4xl lg:text-6xl font-black text-rose-900 leading-tight mb-6">
            Play, Learn & <br/>
            <span className="text-white drop-shadow-md">Grow Together.</span>
          </h1>
          <p className="text-lg text-rose-900/80 mb-8 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
            We aim at success by creating skills necessary for kids to enrich & empower in studies & sports. An inclusive learning opportunity for all families.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="/about-us" className="px-8 py-4 bg-rose-900 text-white font-bold rounded-full shadow-lg hover:bg-rose-800 hover:scale-105 transition-all">
              Learn About Us
            </a>
            <a href="/contact" className="px-8 py-4 bg-white text-rose-900 font-bold rounded-full shadow-lg border-2 border-rose-100 hover:bg-rose-50 hover:scale-105 transition-all">
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 relative"
        >
          {/* Border Frame Effect */}
          <div className="relative p-3 bg-white rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="relative h-[300px] lg:h-[450px] w-full overflow-hidden rounded-2xl">
                 {/* Using a Pexels placeholder as requested, or your local image */}
                 {/* Replace src with "/hero.webp" if you prefer your original image */}
                <img
                  src="https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  
                  
                  alt="Happy kids playing"
                  priority
                />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave Separator at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
}