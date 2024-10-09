import { motion } from "framer-motion";
import Image from "next/image";
export default function TeamMemberCard({ name, role, image }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <Image
        src={image}
        alt={name}
        width={100}
        height={450}
        className="w-full h-full object-cover"
        layout="responsive"
      />
      <div className="p-6 bg-gold-dark text-center">
        <h4 className="text-2xl font-bold text-white mb-2">{name}</h4>
        <p className="text-white">{role}</p>
      </div>
    </motion.div>
  );
}
