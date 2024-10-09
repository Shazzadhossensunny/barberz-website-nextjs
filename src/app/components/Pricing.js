'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
const services = [
    { name: 'Hair Cut', price: 10 },
    { name: 'Hair Styling', price: 25 },
    { name: 'Hair Trimming', price: 30 },
    { name: 'Kids Hair Cut', price: 15 },
    { name: 'Shaving', price: 40 },
    { name: 'Beard Trimming', price: 25 },
    { name: 'Face Cleaning', price: 60 },
    { name: 'Mustache Trim', price: 12 }
  ];
export default function Pricing() {
  return (
    <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Barbershop Pricing Plan</h2>
        <div className="flex items-center justify-center mb-8">
            {/* Left line */}
            <div className="h-[2px] bg-gold-dark w-16"></div>

            {/* Center image */}
            <div className="mx-4">
              <Image
                src="/images/shape.png"
                alt="Shape"
                width={40}
                height={10}
              />
            </div>

            {/* Right line */}
            <div className="h-[2px] bg-gold-dark w-16"></div>
          </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex justify-between items-center"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="text-gray-600">Amet Minim Mollit Non Deserunt Ullamco Est Sit</p>
            </div>
            <div className="w-24 h-px bg-[#FFD700] mx-4"></div>
            <div className="text-2xl font-bold text-[#B8860B]">${service.price}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mt-12"
      >
        <motion.button className="bg-gold-dark text-white px-8 py-3 rounded hover:bg-[#B8860B] transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400 }}

        >
          VIEW MORE
        </motion.button>
      </motion.div>
    </div>
  </section>
  )
}
