'use client'
import { motion } from "framer-motion";
import Image from "next/image";

export default function AppointmentForm() {
  return (
    <section className="relative bg-black">
      {/* Main background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/appionmnet-bg.png"
          alt="Barbershop background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column */}
          <motion.div
            className="md:w-1/2 text-white text-center md:text-left mb-10 md:mb-0 space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl mb-2 text-gold-dark"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              CONTACT
            </motion.h2>
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get In Touch
            </motion.h3>

            <div className="flex items-center justify-center md:justify-start mb-8">
              <div className="h-[2px] bg-[#D9A536] w-16"></div>
              <div className="mx-4">
                <Image
                  src="/images/shape.png"
                  alt="Mustache"
                  width={40}
                  height={10}
                />
              </div>
              <div className="h-[2px] bg-[#D9A536] w-16"></div>
            </div>

            <motion.p
              className="mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Suspendisse pretium felis dolor, sed placerat diam blandit vitae.
              Sed eu nisl massa. Phasellus vehicula tristique orci ut ultrices.
              Duis eu libero augue. In vulputate sodales tempus. Phasellus dolor
              orci, consectetur in tincidunt eget, consectetur non orci.
            </motion.p>
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div
            className="md:w-1/2 bg-cover bg-center p-8 rounded-lg text-center"
            style={{
              backgroundImage: "url('/images/form-bg.png')",
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gold-dark">Make An Appointment</h2>
            <p className="text-white mb-6">Barber Is A Person Whose Occupation Is Mainly To Cut Dress Groom</p>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-transparent border border-gray-600 p-3 rounded text-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border border-gray-600 p-3 rounded text-white"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="bg-transparent border border-gray-600 p-3 rounded text-white"
                />
                <input
                  type="text"
                  placeholder="Time"
                  className="bg-transparent border border-gray-600 p-3 rounded text-white"
                />
                <select className="bg-transparent border border-gray-600 p-3 rounded text-white">
                  <option value="">Services</option>
                </select>
                <select className="bg-transparent border border-gray-600 p-3 rounded text-white">
                  <option value="">Choose Barber</option>
                </select>
              </div>
              <motion.button className="mt-8 bg-gold-dark text-white px-8 py-3 rounded w-full hover:bg-[#B78A3F] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              >
                MAKE AN APPOINTMENT
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}