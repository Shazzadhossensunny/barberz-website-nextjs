'use client'
import { Phone, Mail, Facebook, Twitter, Dribbble, Youtube } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute w-full z-50 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-between items-center py-2 text-white">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+1234567890</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>barberz.123@info.com</span>
            </div>
          </div>
          <div className="flex space-x-4">
            {/* Social media icons */}
            <Facebook className="h-4 w-4 mr-2" />
            <Twitter className="h-4 w-4 mr-2" />
            <Dribbble className="h-4 w-4 mr-2" />
            <Youtube className="h-4 w-4 mr-2" />
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex justify-between items-center py-4">
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

          {/* Logo in the middle */}
          <div className="md:hidden">
            <Image
              src="/images/logo-white.png"
              alt="Logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Left side menu */}
          <div className={`md:flex hidden space-x-6 text-white`}>
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
            <Link href="/about" className="hover:text-gold transition-colors">About Us</Link>
          </div>

          {/* Logo for desktop */}
          <div className="hidden md:block">
            <Image
              src="/images/logo-white.png"
              alt="Logo"
              width={120}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Right side menu */}
          <div className={`md:flex hidden space-x-6 text-white`}>
            <Link href="/team" className="hover:text-gold transition-colors">Team</Link>
            <Link href="/booking" className="hover:text-gold transition-colors">Booking</Link>
            <Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link>
          </div>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 text-white bg-black bg-opacity-80 py-4">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
            <Link href="/about" className="hover:text-gold transition-colors">About Us</Link>
            <Link href="/team" className="hover:text-gold transition-colors">Team</Link>
            <Link href="/booking" className="hover:text-gold transition-colors">Booking</Link>
            <Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link>
          </div>
        )}
      </div>
    </header>
  );
}
