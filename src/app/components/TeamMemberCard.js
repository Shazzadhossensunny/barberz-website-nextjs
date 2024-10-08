import { motion } from 'framer-motion';
export default function TeamMemberCard({ name, role, image }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6 bg-[#B8860B]">
        <h4 className="text-2xl font-bold text-white mb-2">{name}</h4>
        <p className="text-white">{role}</p>
      </div>
    </motion.div>
  )
}
