
import { motion } from 'framer-motion';
import Image from 'next/image';
export default function BlogPostCard({ title, date, category, author, image }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative">
        <div className="relative w-full h-64">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-0 translate-y-1/2 right-0 bg-[#D4A853] text-black px-4 py-2 text-center">
          <span className="block text-center font-bold">{date.split(' ')[0]}</span>
          <span className="block text-center">{date.split(' ')[1]}</span>
        </div>
      </div>
      <div className="p-6 pt-8">
      <div className="flex items-center mb-4">
          <div className="w-1 h-12 bg-[#D4A853] mr-4"></div>
          <div>
            <p className="text-gray-600 text-sm mb-1">{category} / BY {author}</p>
            <h4 className="text-xl font-bold">{title}</h4>
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. velit officia consequat duis enim velit mollit.
        </p>
      </div>
    </motion.div>
  )
}
