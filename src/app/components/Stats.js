"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Stats() {
  const stats = [
    { number: "2000+", label: "HAPPY CLIENTS" },
    { number: "500", label: "HAIR CUTS" },
    { number: "150", label: "STYLERS" },
    { number: "35", label: "BRANCHES" },
  ];

  return (
    <section className="py-16 bg-[#FDF8E9]">
      <div className="container mx-auto px-4">
        {/* Flex container for stats and images */}
        <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-7 gap-3">
          {/* First Stat */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-4xl font-bold mb-2">{stats[0].number}</div>
            <div className="text-gray-600">{stats[0].label}</div>
          </motion.div>

          {/* First Image */}
          <motion.div
            className="flex justify-center mx-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/service1.png"
              alt="Separator"
              className="w-16 h-auto"
              width={64}
              height={64}
            />
          </motion.div>

          {/* Second Stat */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-4xl font-bold mb-2">{stats[1].number}</div>
            <div className="text-gray-600">{stats[1].label}</div>
          </motion.div>

          {/* Second Image */}
          <motion.div
            className="flex justify-center mx-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/service1.png"
              alt="Separator"
              className="w-16 h-auto"
              width={64}
              height={64}
            />
          </motion.div>

          {/* Third Stat */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-4xl font-bold mb-2">{stats[2].number}</div>
            <div className="text-gray-600">{stats[2].label}</div>
          </motion.div>

          {/* Third Image */}
          <motion.div
            className="flex justify-center mx-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/images/service1.png"
              alt="Separator"
              className="w-16 h-auto"
              width={64}
              height={64}
            />
          </motion.div>

          {/* Fourth Stat */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-4xl font-bold mb-2">{stats[3].number}</div>
            <div className="text-gray-600">{stats[3].label}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
