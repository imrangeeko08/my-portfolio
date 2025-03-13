import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeContent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const FogEffect = () => (
    <motion.div
      className="fixed top-0 left-0 w-64 h-64 rounded-full pointer-events-none -z-5"
      style={{
        x: mousePosition.x - 128,
        y: mousePosition.y - 128,
        background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
        filter: 'blur(30px)',
      }}
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  );

  const SectionDivider = () => (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      whileInView={{ opacity: 1, width: '80%' }}
      transition={{ duration: 1 }}
      className="my-12 mx-auto h-1 bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent"
    />
  );

  return (
    <div className="relative pt-20">
      <FogEffect />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 mx-auto w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden"
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

      <SectionDivider />

      {/* About Section */}
      <section id="about" className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto p-8 backdrop-blur-md bg-[#14213D]/80 rounded-xl"
        >
          <h2 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] to-[#F72585]">
            About Me
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            I’m Imran, a front-end wizard who thrives on turning ideas into stunning web realities. Armed with <span className="font-bold text-[#00F5D4]">Next.js</span>, I build lightning-fast, SEO-friendly apps. With <span className="font-bold text-[#F72585]">Tailwind CSS</span>, I sculpt designs that are sleek, responsive, and unforgettable. Over X years, I’ve tackled projects from dynamic blogs to full-blown e-commerce platforms—each one a labor of love. Let’s team up and create something cosmic!
          </p>
        </motion.div>
      </section>

      <SectionDivider />

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
              whileHover={{ scale: 1.1, rotateY: 10 }}
              className="p-6 bg-gradient-to-br from-[#14213D] to-[#3A0CA3] rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold text-[#00F5D4]">{skill.name}</h3>
              <p className="text-sm text-gray-400">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Projects Section (Teaser) */}
      <section id="projects" className="py-24">
        <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#7209B7] to-[#00F5D4]">
          My Creations
        </h2>
        <div className="max-w-5xl mx-auto space-y-12">
          {[
            { name: 'E-Commerce Platform', desc: 'A responsive store with Next.js and Stripe.', link: '#' },
            { name: 'Personal Portfolio', desc: 'This site! A dark SPA with wild animations.', link: '#' },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8 bg-[#14213D]/80 backdrop-blur-md rounded-xl"
            >
              <h3 className="text-3xl font-bold text-[#F72585]">{project.name}</h3>
              <p className="text-lg mt-2 text-gray-300">{project.desc}</p>
              <a href={project.link} className="text-[#00F5D4] underline mt-4 inline-block">
                Explore Now
              </a>
            </motion.div>
          ))}
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px #7209B7' }}
              whileTap={{ scale: 0.9 }}
              className="mt-8 mx-auto block px-8 py-4 bg-[#7209B7] text-white rounded-full"
            >
              All Projects
            </motion.button>
          </Link>
        </div>
      </section>

      <SectionDivider />

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] to-[#F72585]">
          My Journey
        </h2>
        <div className="max-w-5xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-[#14213D]/80 backdrop-blur-md rounded-xl"
          >
            <h3 className="text-3xl font-bold text-[#00F5D4]">Front-End Developer @ [Company Name]</h3>
            <p className="text-lg mt-2 text-gray-300">2022 - Present</p>
            <p className="text-lg mt-2 text-gray-300">
              Developed responsive web apps using Next.js and Tailwind CSS, improving user engagement by 40%. Collaborated with designers to bring pixel-perfect UIs to life.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24">
        <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#F72585] to-[#7209B7]">
          What People Say
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-[#14213D]/80 backdrop-blur-md rounded-xl"
          >
            <p className="text-lg text-gray-300">"Imran’s work is pure magic—fast, beautiful, and flawless!"</p>
            <p className="mt-4 text-[#00F5D4] font-semibold">- John Doe, Designer</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-[#14213D]/80 backdrop-blur-md rounded-xl"
          >
            <p className="text-lg text-gray-300">"A true Next.js genius. Delivered beyond expectations!"</p>
            <p className="mt-4 text-[#00F5D4] font-semibold">- Jane Smith, Client</p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Education Section */}
      <section id="education" className="py-24">
        <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#7209B7] to-[#00F5D4]">
          My Education
        </h2>
        <div className="max-w-5xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-[#14213D]/80 backdrop-blur-md rounded-xl"
          >
            <h3 className="text-3xl font-bold text-[#00F5D4]">[Degree, e.g., B.Tech in Computer Science]</h3>
            <p className="text-lg mt-2 text-gray-300">[University Name] | 2018 - 2022</p>
            <p className="text-lg mt-2 text-gray-300">
              Specialized in web development and UI design. Built multiple projects using modern JavaScript frameworks.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Hobbies Section */}
      <section id="hobbies" className="py-24">
        <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] to-[#F72585]">
          My Hobbies
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Coding Challenges', 'Gaming', 'Photography'].map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="p-6 bg-[#14213D]/80 backdrop-blur-md rounded-xl text-center"
            >
              <h3 className="text-xl font-semibold text-[#F72585]">{hobby}</h3>
              <p className="text-lg mt-2 text-gray-300">
                {hobby === 'Coding Challenges'
                  ? 'Love solving problems on platforms like LeetCode.'
                  : hobby === 'Gaming'
                  ? 'Unwind with immersive RPGs and strategy games.'
                  : 'Capture the world through my lens.'}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto p-8 bg-[#14213D]/80 backdrop-blur-md rounded-xl text-center"
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
              className="w-full p-4 rounded-lg bg-[#0A192F] text-white focus:ring-2 focus:ring-[#F72585]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-[#0A192F] text-white focus:ring-2 focus:ring-[#F72585]"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-[#0A192F] text-white focus:ring-2 focus:ring-[#F72585] h-32"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 0 20px #7209B7' }}
              whileTap={{ scale: 0.9 }}
              className="px-8 py-4 bg-gradient-to-r from-[#7209B7] to-[#F72585] rounded-full"
            >
              Send It!
            </motion.button>
          </form>
        </motion.div>
      </section>

      <SectionDivider />

      {/* Footer */}
      <footer className="py-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-300"
        >
          © 2025 Imran | Built with <span className="text-[#F72585]">♥</span> using Next.js & Tailwind
        </motion.p>
      </footer>
    </div>
  );
}