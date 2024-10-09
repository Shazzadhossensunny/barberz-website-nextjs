'use client'
import { Phone, Mail, Facebook, Twitter, Dribbble, Youtube, ChevronDown } from 'lucide-react'; // ChevronDown added for the dropdown arrow
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import framer-motion for animation

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Dropdown open state
  const [rotateArrow, setRotateArrow] = useState(false); // State to rotate arrow

  const handleServicesClick = () => {
    setIsServicesOpen(!isServicesOpen);
    setRotateArrow(!rotateArrow); // Toggle arrow rotation
  };

  return (
    <header className="absolute w-full z-50 bg-[#292727B2]">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex flex-wrap justify-center md:justify-between gap-3 items-center py-2 text-white text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+123456789</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>barberz.123@info.com</span>
            </div>
          </div>
          <div className="flex space-x-4">
            {/* Social media icons */}
            <Facebook className="h-4 w-4 cursor-pointer" />
            <Twitter className="h-4 w-4 cursor-pointer" />
            <Dribbble className="h-4 w-4 cursor-pointer" />
            <Youtube className="h-4 w-4 cursor-pointer" />
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex justify-between items-center py-4">
          {/* Left side menu */}
          <div className="flex-1 hidden md:flex justify-start space-x-8 text-white">
            {/* Inactive Links */}
            <Link href="#" className="relative hover:text-[#D5A353] transition-colors group">
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-[#D5A353] transition-all"></span>
            </Link>

            {/* Services with dropdown (opens on click only) */}
            <div className="relative">
              <div
                onClick={handleServicesClick} // Toggle dropdown on click
                className="flex items-center space-x-1 cursor-pointer hover:text-[#D5A353] transition-colors relative group"
              >
                <Link href="#">
                  <span>Services</span>
                </Link>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${rotateArrow ? 'rotate-180' : 'rotate-0'}`}
                />
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-[#D5A353] transition-all"></span>
              </div>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 left-0 w-48 bg-white text-black shadow-lg rounded-md z-10"
                >
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer">
                    Haircut
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer">
                    Beard Styling
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer">
                    Grooming
                  </Link>
                </motion.div>
              )}
            </div>

            <Link href="#" className="relative hover:text-[#D5A353] transition-colors group">
              About Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-[#D5A353] transition-all"></span>
            </Link>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo-white.png"
              alt="Logo"
              width={120}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Right side menu */}
          <div className="flex-1 hidden md:flex justify-end space-x-8 text-white">
            <Link href="#" className="relative hover:text-[#D5A353] transition-colors group">
              Team
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-[#D5A353] transition-all"></span>
            </Link>
            <Link href="#" className="relative hover:text-[#D5A353] transition-colors group">
              Booking
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-[#D5A353] transition-all"></span>
            </Link>
            <Link href="#" className="relative hover:text-[#D5A353] transition-colors group">
              Contact Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-[#D5A353] transition-all"></span>
            </Link>
          </div>

          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 text-white bg-black bg-opacity-80 py-4">
            <Link href="#" className="hover:text-[#D5A353] transition-colors">Home</Link>
            <Link href="#" className="hover:text-[#D5A353] transition-colors">Services</Link>
            <Link href="#" className="hover:text-[#D5A353] transition-colors">About Us</Link>
            <Link href="#" className="hover:text-[#D5A353] transition-colors">Team</Link>
            <Link href="#" className="hover:text-[#D5A353] transition-colors">Booking</Link>
            <Link href="#" className="hover:text-[#D5A353] transition-colors">Contact Us</Link>
          </div>
        )}
      </div>
    </header>
  );
}
