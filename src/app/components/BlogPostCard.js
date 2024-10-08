
import { motion } from 'framer-motion';
import { Calendar, User, Scissors } from 'lucide-react';
export default function BlogPostCard({ title, date, category, author, image }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute bottom-0 right-0 bg-[#FFD700] text-black px-4 py-2">
          <span className="block text-center font-bold">{date.split(' ')[0]}</span>
          <span className="block text-center">{date.split(' ')[1]}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <div className="flex items-center mr-4">
            <User size={16} className="mr-1" />
            {category} / BY {author}
          </div>
        </div>
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-gray-600 mb-4">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. velit officia consequat duis enim velit mollit.
        </p>
        <button className="text-[#B8860B] font-semibold hover:text-[#FFD700] transition-colors duration-300">
          Read More
        </button>
      </div>
    </motion.div>
  )
}
