'use client'
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TestimonialCard from './TestimonialCard';
import Image from 'next/image';

const testimonials = [
    {
      name: 'Robert Fox',
      role: 'Writer',
      image: '/images/client1.png',
      text: 'Just Came Back To Home And Should Say That It Is Definitely A Great Experience. I Would Recommend It For Everyone Who Needs A Bike For A Short Term Or Want To T...'
    },
    {
      name: 'Marvin McKinney',
      role: 'Businessman',
      image: '/images/client2.png',
      text: 'Amazing Service! Claire Helped Me To Reduce The Shipping Price A Little And Shipped It Immediately After Purchasing. The Amethyst Cave I Got Is A Beauty And I C...'
    }
];

export default function Testimonials() {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: 'url(/images/testmonial-bg.png)', backgroundSize: 'cover' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-evenly items-center">
        {/* Heading Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-2">Testimonial</h2>
          <h3 className="text-3xl font-bold mb-4">Hear from our customers</h3>
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
        </motion.div>

        {/* Swiper Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2
              }
            }}
            className="w-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
