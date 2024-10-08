'use client'
import { motion } from 'framer-motion';
import { Scissors } from 'lucide-react';
export default function CallToAction() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-screen bg-black text-white flex items-center justify-center"
    >
      <div className="absolute inset-0">
        <img
          src="/images/appoinmnet-bg2.png"
          alt="Barbershop background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[#FFD700] mb-4 text-xl md:text-2xl"
        >
          BEST BARBERSHOP IN THE CITY
        </motion.h3>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-serif mb-6"
        >
          Making You Look Good<br />
          Is In Our Heritage.
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-8 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Barber Is A Person Whose Occupation Is Mainly To Cut Dress Groome Style And Shave Men's And Boy's Hair
        </motion.p>
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-[#FFD700] text-black px-8 py-3 rounded hover:bg-[#B8860B] transition-colors duration-300"
        >
          MAKE AN APPOINTMENT
        </motion.button>
      </div>
    </motion.section>
  )
}
