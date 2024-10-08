"use client"; // This marks the component as a client component
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      icon: "/images/service1.png",
      title: "Hair Cut",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "/images/service2.png",
      title: "Shaving",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "/images/service3.png",
      title: "Hair Color",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "/images/service4.png",
      title: "Beard Trim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: "#FDF8E9" }}>
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">SERVICES</h2>
          <h3 className="text-3xl font-bold mb-4">Our Services</h3>
          <div className="flex items-center justify-center mb-8">
            {/* Left line */}
            <div className="h-[2px] bg-[#D9A536] w-16"></div>

            {/* Center image */}
            <div className="mx-4">
              <Image
                src="/images/shape.png"
                alt="Shape"
                width={40} // Adjust width as needed
                height={10} // Adjust height as needed
              />
            </div>

            {/* Right line */}
            <div className="h-[2px] bg-[#D9A536] w-16"></div>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }} // Delay for staggered effect
            >
              <div className="mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button className="text-gold border border-gold px-6 py-2 rounded hover:bg-gold hover:text-white transition-colors">
                READ MORE
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
