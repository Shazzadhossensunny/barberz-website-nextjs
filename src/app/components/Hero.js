"use client"; // Mark this file as a client component
import { motion } from 'framer-motion'; // Import framer-motion
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          fill
          alt="Barbershop background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Hairstyle Enhances<br />Your Smile!!
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Our barbershop is the territory created purely for males who appreciate premium quality,
            time, and a flawless look.
          </motion.p>
          <motion.button
            className="bg-gold text-white px-8 py-3 rounded-md hover:bg-gold-dark transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            MAKE AN APPOINTMENT
          </motion.button>
        </div>
      </div>
    </div>
  );
}
