'use client'
import Image from "next/image";
import { motion } from "framer-motion";

const works = [
    { image: '/images/w1.png' },
    { image: '/images/w2.png' },
    { image: '/images/w3.png' },
    { image: '/images/w4.png' },
    { image: '/images/w5.png' },
    { image: '/images/w6.png' }
];

export default function OurWork() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Our Works</h3>
          <div className="flex items-center justify-center mb-8">
            {/* Left line */}
            <div className="h-[2px] bg-[#D9A536] w-16"></div>

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
            <div className="h-[2px] bg-[#D9A536] w-16"></div>
          </div>
        </div>

        {/* Clients container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {works.map((work, index) => (
            <motion.div
              key={index}
              className="relative w-full h-96 border-[10px] border-transparent hover:border-[#D9A536] transition-all duration-500 ease-in-out"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={work.image}
                alt="work"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
