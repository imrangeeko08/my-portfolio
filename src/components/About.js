import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto p-8 backdrop-blur-md bg-[#16213E]/80 rounded-xl shadow-[0_0_20px_rgba(123,0,255,0.3)]"
      >
        <h2 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00DDEB] to-[#FF007A]">
          About Me
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          Hey, I’m Imran—a front-end developer obsessed with crafting immersive digital experiences. My toolkit? <span className="font-bold text-[#00DDEB]">Next.js</span> for lightning-fast apps, <span className="font-bold text-[#FF007A]">Tailwind CSS</span> for pixel-perfect designs, and a dash of creativity to make it all pop. With X years of experience (add yours!), I’ve built everything from sleek e-commerce platforms to this very portfolio—each project a testament to my love for code and design. Ready to collaborate and create something out-of-this-world? Let’s make it happen!
        </p>
      </motion.div>
    </section>
  );
}