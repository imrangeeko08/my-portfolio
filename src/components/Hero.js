import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Neon Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#0F3460] to-[#533483]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <div className="relative z-10 text-center">
        {/* Profile Image with Neon Border */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 mx-auto w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#FF007A] shadow-[0_0_15px_#FF007A]"
        >
          {/* <Image
            src="/imran-profile.jpg"
            alt="Imran"
            width={224}
            height={224}
            className="object-cover"
          /> */}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] to-[#00DDEB]"
        >
          I’m Imran
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-3xl mt-4 font-light text-gray-300"
        >
          Front-End Developer | Next.js Maestro | UI/UX Visionary
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.2, rotate: 5, boxShadow: '0 0 20px #7B00FF' }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 px-8 py-4 bg-[#7B00FF] text-white rounded-full shadow-[0_0_10px_#7B00FF]"
        >
          Explore My Universe
        </motion.button>
      </div>
    </section>
  );
}