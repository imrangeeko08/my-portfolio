import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-8 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-lg text-gray-300"
      >
        © 2025 Imran | Built with <span className="text-[#FF007A] shadow-[0_0_10px_#FF007A]">♥</span> using Next.js & Tailwind
      </motion.p>
    </footer>
  );
}