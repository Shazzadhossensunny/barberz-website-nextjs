'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CallToAction() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative h-screen bg-black text-white flex items-center justify-center"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/appoinmnet-bg2.png"
          alt="Barbershop background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gold-dark mb-6 text-xl md:text-2xl"
        >
          BEST BARBERSHOP IN THE CITY
        </motion.h3>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif mb-8"
        >
          Making You Look Good
          <br />
          Is In Our Heritage.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Barber is a person whose occupation is mainly to cut, dress, groom, style, and shave men's and boys' hair.
        </motion.p>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gold-dark text-black px-8 py-3 rounded hover:bg-[#B8860B] transition-colors duration-300"
        >
          MAKE AN APPOINTMENT
        </motion.button>
      </div>
    </motion.section>
  );
}
