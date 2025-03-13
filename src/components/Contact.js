import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto p-8 bg-[#16213E]/80 backdrop-blur-md rounded-xl shadow-[0_0_20px_rgba(0,221,235,0.3)] text-center"
      >
        <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00DDEB] to-[#FF007A]">
          Let’s Connect
        </h2>
        <p className="text-lg mb-6 text-gray-300">
          Have a wild idea? Want to team up or just chat? Hit me up!
        </p>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-[#0F3460] text-white border border-[#FF007A] focus:ring-2 focus:ring-[#FF007A]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-[#0F3460] text-white border border-[#FF007A] focus:ring-2 focus:ring-[#FF007A]"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 rounded-lg bg-[#0F3460] text-white border border-[#FF007A] focus:ring-2 focus:ring-[#FF007A] h-32"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 0 20px #7B00FF' }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-4 bg-gradient-to-r from-[#7B00FF] to-[#FF007A] rounded-full shadow-[0_0_10px_#7B00FF]"
          >
            Send It!
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}