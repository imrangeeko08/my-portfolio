import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: 'Next.js', level: 'Expert' },
    { name: 'React', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Expert' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'HTML5', level: 'Pro' },
    { name: 'CSS3', level: 'Pro' },
  ];

  return (
    <section id="skills" className="py-24">
      <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] to-[#7B00FF]">
        My Superpowers
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.1, rotateY: 10, boxShadow: '0 0 20px #00DDEB' }}
            className="p-6 bg-gradient-to-br from-[#0F3460] to-[#533483] rounded-lg text-center shadow-[0_0_10px_rgba(0,221,235,0.5)]"
          >
            <h3 className="text-xl font-semibold text-[#00DDEB]">{skill.name}</h3>
            <p className="text-sm text-gray-400">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}