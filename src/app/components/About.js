"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image section */}
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/about.png"
              alt="Barber at work"
              className="rounded-lg"
              width={500}
              height={500}
              priority={true} // Ensures the image loads faster
            />
          </motion.div>

          {/* Text section */}
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-2 text-gold">INTRODUCING</h2>
            <h3 className="text-4xl font-bold mb-6">
              BARBERZ..The Barbershop
              <br />
              Since 1990
            </h3>
            <div className="mb-8">
              <Image
                src="/images/about-icon.png"
                alt="Barberz logo"
                className="w-16"
                width={64}
                height={64}
              />
            </div>
            <p className="text-gray-600 mb-8">
              Barber is a person whose occupation is mainly to cut dress groom
              style and shave men's and boys' hair. A barber's place of work is
              known as a "barbershop" or a "barber's". Barbershops are also
              places of social interaction and public discourse. In some
              instances, barbershops are also public forums.
            </p>
            <Link href="/about-us" passHref>
              <motion.button
                className="border-2 border-gold text-gold px-8 py-3 rounded-md hover:bg-gold hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                MORE ABOUT US
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
