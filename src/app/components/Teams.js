"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay} from 'swiper/modules';
import "swiper/css/pagination";
import TeamMemberCard from "./TeamMemberCard";
import Image from "next/image";


const teamMembers = [
  {
    name: "DAVID",
    role: "Hair Cut Specialist",
    image: "/images/team1.png",
  },
  {
    name: "PAUL",
    role: "Beard & Trimming",
    image: "/images/team2.png",
  },
  {
    name: "CHARLIE",
    role: "Hair Color Specialist",
    image: "/images/team3.png",
  },
  {
    name: "DAVID",
    role: "Hair Cut Specialist",
    image: "/images/team1.png",
  },
  {
    name: "PAUL",
    role: "Beard & Trimming",
    image: "/images/team2.png",
  },
  {
    name: "CHARLIE",
    role: "Hair Color Specialist",
    image: "/images/team3.png",
  },
];

export default function Teams() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl mb-2 text-gold-dark">Specialists</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h3>
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

        <Swiper
          spaceBetween={20}
          slidesPerView={isMobile ? 1 : 3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={false}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <TeamMemberCard {...member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
