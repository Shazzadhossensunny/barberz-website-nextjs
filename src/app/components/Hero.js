'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Barbershop background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 text-center mt-40 md:mt-0">
          <motion.h1
            className="text-4xl md:text-7xl font-bold text-white mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}

          >
            Our Hairstyle Enhances Your Smile!!
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our barbershop is the territory created purely for males who
            appreciate premium quality, time and flawless look.
          </motion.p>
          <motion.button
            className="bg-gold-dark text-white px-8 py-3 rounded-md hover:bg-[#B78A3F] transition-colors uppercase font-semibold tracking-wide"
            whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
          >
            Make an appointment
          </motion.button>
        </div>
      </div>
    </div>
  );
}