
import { motion } from 'framer-motion';
import {Quote} from 'lucide-react'
import Image from 'next/image';
export default function TestimonialCard({ name, role, image, text, rating = 5 }) {
  return (
    <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-[#252424] p-6 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative"
  >
    <div className="flex items-start">
      <div className="relative w-16 h-16 mr-4 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-white text-[15px] leading-6 mb-4">"{text}"</p>
        <h4 className="text-[#D4A853] text-xl font-semibold">{name}</h4>
        <p className="text-white text-sm">{role}</p>
        <div className="flex mt-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-[#D4A853]' : 'text-gray-400'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
    <div
      className="absolute right-6 bottom-6 text-[#D4A853]"
    ><Quote size={56}/></div>
  </motion.div>
  )
}
