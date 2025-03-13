import { motion } from 'framer-motion';

export default function ProjectsContent() {
  const projects = [
    {
      name: 'E-Commerce Platform',
      desc: 'A fully responsive online store built with Next.js, Tailwind CSS, and Stripe for payments. Features include product filtering, cart management, and a smooth checkout process.',
      tech: ['Next.js', 'Tailwind CSS', 'Stripe', 'React'],
      link: '#',
    },
    {
      name: 'Personal Portfolio',
      desc: 'This very site! A single-page app with a dark theme, insane animations (fog effect, starry background), and a futuristic UI. Built to showcase my skills and creativity.',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
    },
    {
      name: 'Blog Engine',
      desc: 'A dynamic blog platform with Markdown support, static site generation via Next.js, and a custom CMS for content management. Optimized for speed and SEO.',
      tech: ['Next.js', 'Markdown', 'Tailwind CSS'],
      link: '#',
    },
    {
      name: 'Weather App',
      desc: 'A sleek weather dashboard fetching real-time data from an API, styled with Tailwind, and featuring animated weather icons.',
      tech: ['React', 'Tailwind CSS', 'API Integration'],
      link: '#',
    },
  ];

  return (
    <div className="pt-20 pb-24">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00F5D4] to-[#F72585]">
        All My Projects
      </h1>
      <div className="max-w-5xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-[#14213D]/80 backdrop-blur-md rounded-xl"
          >
            <h2 className="text-3xl font-bold text-[#F72585]">{project.name}</h2>
            <p className="text-lg mt-4 text-gray-300">{project.desc}</p>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-[#00F5D4]">Tech Stack:</h3>
              <ul className="list-disc list-inside text-gray-300">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
            <a href={project.link} className="text-[#00F5D4] underline mt-4 inline-block">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}