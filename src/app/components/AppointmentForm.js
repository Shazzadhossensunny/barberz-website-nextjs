'use client'
import { motion } from "framer-motion";
import Image from "next/image";

export default function AppointmentForm() {
  return (
    <section
      className="relative py-20 text-white bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/images/appionmnet-bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative container mx-auto px-4">
        <div className="flex flex-col md:flex-row h-full">

          {/* Left Column */}
          <div className="md:w-1/2 flex items-center justify-center mb-10 md:mb-0 relative z-10">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-2"
              >
                CONTACT
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-6"
              >
                Get In Touch
              </motion.h3>

              {/* Line with shape.png */}
              <div className="flex items-center justify-start mb-8">
                <div className="h-[2px] bg-[#D9A536] w-16"></div>
                <div className="mx-4">
                  <Image
                    src="/images/shape.png"
                    alt="Shape"
                    width={40}
                    height={10}
                  />
                </div>
                <div className="h-[2px] bg-[#D9A536] w-16"></div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                Suspendisse pretium felis dolor, sed placerat diam blandit vitae.
                Sed eu nisl massa. Phasellus vehicula tristique orci ut ultrices.
              </motion.p>
            </div>
          </div>

          {/* Right Column (Full height background image) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 relative z-50 h-full bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/form-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Inside content with margin */}
            <div className="flex flex-col justify-between h-full py-12 px-8">
              <h2 className="text-3xl font-bold mb-6">Make An Appointment</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-transparent border border-gray-600 p-3 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent border border-gray-600 p-3 rounded"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="bg-transparent border border-gray-600 p-3 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Time"
                    className="bg-transparent border border-gray-600 p-3 rounded"
                  />
                  <select className="bg-transparent border border-gray-600 p-3 rounded">
                    <option value="">Services</option>
                  </select>
                  <select className="bg-transparent border border-gray-600 p-3 rounded">
                    <option value="">Choose Barber</option>
                  </select>
                </div>
                <button className="mt-8 bg-gold text-white px-8 py-3 rounded w-full hover:bg-gold-dark transition-colors">
                  MAKE AN APPOINTMENT
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
