"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const headerDecoration = (title) => (
    <div className="mb-6">
      <h3 className="text-white font-bold text-xl mb-6">{title}</h3>
      <div className="flex items-center justify-center md:justify-start mb-6">
        <div className="h-px bg-gold-dark w-12"></div>
        <div className="relative px-4">
          <Image
            src="/images/shape.png"
            alt=""
            width={100}
            height={10}
            className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-16"
          />
        </div>
        <div className="h-px bg-gold-dark w-12"></div>
      </div>
    </div>
  );

  const linkAnimation = {
    hover: { x: 10, transition: { duration: 0.2 } },
  };
  return (
    <footer className="bg-[#35312F] bg-[url('/images/footer-bg.png')] bg-cover bg-no-repeat py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="text-center ">
            <Image
              src="/images/logo-white.png"
              alt="Barberz Logo"
              width={200}
              height={100}
              className="mx-auto mb-4"
            />
            <p className="text-white text-sm mb-6">
              There Are Many Variations Of Passages Of Lorem Ipsum Available,
              But The Majority Have Suffered Alteration in Some Form.
            </p>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-2 bg-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-[#D4A853] text-white border-2 border-white px-8 py-2 rounded-3xl transition-colors"
              >
                SUBSCRIBE
              </motion.button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            {headerDecoration("QUICK LINKS")}
            <ul className="space-y-4">
              {[
                { text: "HOME"},
                { text: "ABOUT US"},
                { text: "GALLERY"},
                { text: "CONTACT US"},
              ].map((item) => (
                <motion.li
                  key={item.text}
                  whileHover="hover"
                  variants={linkAnimation}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <Image
                    src="/images/service1.png"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <span

                    className="text-white hover:text-[#D4A853] transition-colors"
                  >
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            {headerDecoration("SERVICES")}
            <ul className="space-y-4">
              {[
                { text: "HAIRS"},
                { text: "BEAUTY"},
                { text: "SPA"},
                { text: "MASSAGE"},
              ].map((item) => (
                <motion.li
                  key={item.text}
                  whileHover="hover"
                  variants={linkAnimation}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <Image
                    src="/images/service1.png"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <span

                    className="text-white hover:text-[#D4A853] transition-colors"
                  >
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            {headerDecoration("CONTACT")}
            <ul className="space-y-4">
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3"
              >

                  <Phone className="w-5 h-5 text-gold-dark" />

                <span className="text-white text-xl">+4125987645</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3"
              >

                  <Mail className="text-gold-dark w-5 h-5" />

                <span className="text-white">barberz.123@info.com</span>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="flex items-start space-x-3"
              >

                  <MapPin className="text-gold-dark w-5 h-5" />

                <div className="text-white">
                  GOLDEN STREET, CHINATOWN
                  <br />
                  SAN FRANCISCO
                </div>
              </motion.li>
              <div className="flex space-x-4 mt-6">
                {[Facebook, Twitter, Youtube, Instagram].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >

                    <div className="bg-gold-dark p-2 mt-1">
                    <Icon className="text-white w-6 h-6 cursor-pointer" />
                </div>
                  </motion.div>
                ))}
              </div>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-white">
          <p>Copyright© 2021 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
