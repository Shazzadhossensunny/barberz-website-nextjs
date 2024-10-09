'use client'
import { motion } from 'framer-motion';
import { Calendar, User, Scissors } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import BlogPostCard from './BlogPostCard';
import Image from 'next/image';

const blogPosts = [
    {
      title: 'The Best Barbershop In The Town',
      date: 'Mar 20',
      category: 'BEARD STYLES',
      author: 'ADMIN',
      image: '/images/blog1.png'
    },
    {
      title: 'The Best Barbershop In The Town',
      date: 'Apr 25',
      category: 'BEARD STYLES',
      author: 'ADMIN',
      image: '/images/blog2.png'
    },
    {
      title: 'The Best Barbershop In The Town',
      date: 'Jun 12',
      category: 'BEARD STYLES',
      author: 'ADMIN',
      image: '/images/blog3.png'
    }
  ];

export default function Blogs() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
      }, []);
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl mb-2 text-gold-dark">NEWS FROM BLOG</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">What's On Our Mind</h3>
          <div className="flex items-center justify-center mb-8">
            {/* Left line */}
            <div className="h-[2px] bg-gold-dark w-16"></div>

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
            <div className="h-[2px] bg-gold-dark w-16"></div>
          </div>
        </motion.div>

        {isMobile ? (
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            className="w-full"
          >
            {blogPosts.map((post, index) => (
              <SwiperSlide key={index}>
                <BlogPostCard {...post} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
