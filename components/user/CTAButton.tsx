'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const AwwwardsButton = () => {
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative group">
      <motion.button
        ref={btnRef}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="relative overflow-hidden cursor-pointer  bg-black text-white px-8 py-3 rounded-full  flex items-center gap-2 group"
      >
        {/* The Animated Background (Slide up) */}
        <div className="absolute inset-0 z-0 bg-gold translate-y-[102%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />

        <span className="relative z-10 font-medium transition-colors duration-500 group-hover:text-black">
          Book a Call
        </span>

        {/* Small animated arrow or dot */}
        <motion.div 
          className="relative z-10 w-1.5 h-1.5 bg-white group-hover:bg-black rounded-full transition-colors duration-500"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.5 }}
        />
      </motion.button>
      
      {/* Subtle Glow/Shadow following the button */}
      <motion.div 
         transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
         className="absolute inset-0 -z-10 bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
      />
    </div>
  );
};

export default AwwwardsButton;