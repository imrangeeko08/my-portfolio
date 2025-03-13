import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Portfolio() {
  // State for mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update mouse position on move
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fog effect following mouse
  const FogEffect = () => (
    <motion.div
      className="fixed top-0 left-0 w-40 h-40 rounded-full pointer-events-none -z-5"
      style={{
        x: mousePosition.x - 80, // Center the fog
        y: mousePosition.y - 80,
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
        filter: 'blur(20px)',
      }}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  );

  return (
    <div className="relative">
      <FogEffect />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#14213D] to-[#3A0CA3]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 mx-auto w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#00F5D4] shadow-[0_0_15px_#00F5D4]"
          >
            {/* <Image src="/imran-profile.jpg" alt="Imran" width={224} height={224} className="object-cover" /> */}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#F72585] to-[#00F5D4]"
          >
            I’m Imran
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-3xl mt-4 font-light text-gray-300"
          >
            Front-End Developer | Next.js Ninja | UI/UX Dreamer
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.2, rotate: 5, boxShadow: '0 0 20px #7209B7' }}
            whileTap={{ scale: 0.9 }}
            className="mt-8 px-8 py-4 bg-[#7209B7] text-white rounded-full shadow-[0_0_10px_#7209B7]"
          >
            Enter My Realm
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto p-8 backdrop-blur-md bg-[#14213D]/80 rounded-xl shadow-[0_0_20px_rgba(0,245,212,0.3)]"
        >
          <h2 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] to-[#F72585]">
            About Me
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            I’m Imran, a front-end wizard who thrives on turning ideas into stunning web realities. Armed with <span className="font-bold text-[#00F5D4]">Next.js</span>, I build lightning-fast, SEO-friendly apps. With <span className="font-bold text-[#F72585]">Tailwind CSS</span>, I sculpt designs that are sleek, responsive, and unforgettable. Over X years (your experience!), I’ve tackled projects from dynamic blogs to full-blown e-commerce platforms—each one a labor of love. Let’s team up and create something cosmic!
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#F72585] to-[#7209B7]">
          My Arsenal
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: 'Next.js', level: 'Expert' },
            { name: 'React', level: 'Advanced' },
            { name: 'Tailwind CSS', level: 'Expert' },
            { name: 'JavaScript', level: 'Advanced' },
            { name: 'HTML5', level: 'Pro' },
            { name: 'CSS3', level: 'Pro' },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.1, rotateY: 10, boxShadow: '0 0 20px #00F5D4' }}
              className="p-6 bg-gradient-to-br from-[#14213D] to-[#3A0CA3] rounded-lg text-center shadow-[0_0_10px_rgba(0,245,212,0.5)]"
            >
              <h3 className="text-xl font-semibold text-[#00F5D4]">{skill.name}</h3>
              <p className="text-sm text-gray-400">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#7209B7] to-[#00F5D4]">
          My Creations
        </h2>
        <div className="max-w-5xl mx-auto space-y-12">
          {[
            { name: 'E-Commerce Platform', desc: 'A responsive store with Next.js and Stripe.', link: '#' },
            { name: 'Personal Portfolio', desc: 'This site! A dark SPA with wild animations.', link: '#' },
            { name: 'Blog Engine', desc: 'Dynamic blog with Next.js and Markdown.', link: '#' },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8 bg-[#14213D]/80 backdrop-blur-md rounded-xl shadow-[0_0_15px_rgba(247,37,133,0.3)]"
            >
              <h3 className="text-3xl font-bold text-[#F72585]">{project.name}</h3>
              <p className="text-lg mt-2 text-gray-300">{project.desc}</p>
              <a href={project.link} className="text-[#00F5D4] underline mt-4 inline-block">
                Explore Now
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto p-8 bg-[#14213D]/80 backdrop-blur-md rounded-xl shadow-[0_0_20px_rgba(0,245,212,0.3)] text-center"
        >
          <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] to-[#F72585]">
            Let’s Talk
          </h2>
          <p className="text-lg mb-6 text-gray-300">
            Got a crazy idea? Want to collaborate or just geek out? Drop me a line!
          </p>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-[#0A192F] text-white border border-[#F72585] focus:ring-2 focus:ring-[#F72585]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-[#0A192F] text-white border border-[#F72585] focus:ring-2 focus:ring-[#F72585]"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-[#0A192F] text-white border border-[#F72585] focus:ring-2 focus:ring-[#F72585] h-32"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 0 20px #7209B7' }}
              whileTap={{ scale: 0.9 }}
              className="px-8 py-4 bg-gradient-to-r from-[#7209B7] to-[#F72585] rounded-full shadow-[0_0_10px_#7209B7]"
            >
              Send It!
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-300"
        >
          © 2025 Imran | Built with <span className="text-[#F72585] shadow-[0_0_10px_#F72585]">♥</span> using Next.js & Tailwind
        </motion.p>
      </footer>
    </div>
  );
}