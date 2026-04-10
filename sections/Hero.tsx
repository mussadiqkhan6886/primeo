'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { arimo, syne } from '@/libs/fonts';
import {FiArrowRight} from "react-icons/fi"

const Hero = () => {
  // Ultra-smooth easing for that premium agency feel
  const expo = [0.19, 1, 0.22, 1];

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.2, ease: expo } }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          src="/hero-background.mp4" 
          playsInline autoPlay muted loop 
          className="w-full h-full object-cover opacity-80 scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-gold/20" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

        {/* 2. THE HEADLINE - High Impact Typography */}
        <h1 className={`${syne.className} sm:text-[9vw] md:text-[6vw] leading-[0.85] font-black tracking-tighter uppercase`}>
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: expo, delay: 0.2 }}
              className="block"
            >
             A Better You
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: expo, delay: 0.4 }}
              className="block"
            >
              Every Day.
            </motion.span>
          </div>
        </h1>

        {/* 3. THE VALUE PROP - 1 Line Description */}
        <motion.p 
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6 }}
          className="mt-10 max-w-2xl text-md md:text-lg  text-stone-300 font-light leading-snug"
        >
          Be part of the world’s most powerful life transformation platform.
        </motion.p>

        {/* 4. THE CTAs - Interactive Micro-Animations */}
        <motion.div 
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.8 }}
          className="mt-14 flex flex-col md:flex-row items-center gap-8"
        >
          {/* Become a Member */}
          <button className="relative group overflow-hidden px-12 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-sm active:scale-95 transition-transform">
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                Become a Member
            </span>
            <div className="absolute inset-0 bg-gold translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
          </button>

          {/* Explore Programs */}
          <button className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-white">
            <span className="opacity-60 group-hover:opacity-100 transition-opacity">Explore Programs</span>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/20 group-hover:border-gold transition-colors duration-500">
               <span className="group-hover:translate-x-1 transition-transform duration-500"><FiArrowRight /> </span>
            </div>
          </button>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;