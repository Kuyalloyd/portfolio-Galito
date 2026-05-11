import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaCode, FaLaptop } from 'react-icons/fa';
import { projectCount } from '../data/projects';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: String(projectCount) },
    { label: 'Dedicated', value: '100%' },
  ];

  const education = {
    degree: 'BS Information Technology',
    school: 'Father Saturnino Urios University',
    location: 'Butuan City, Agusan del Norte, Philippines',
  };

  return (
    <section id="about" className="relative bg-transparent px-4 py-20 transition-colors duration-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold text-white sm:text-5xl"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,10,8,0.76),rgba(10,6,5,0.8))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-md"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(249,115,22,0.8)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">Developer Profile</p>
            </div>
            <p className="text-lg leading-relaxed text-gray-300">
              Hello! I&apos;m John Lloyd, a passionate full-stack developer who
              enjoys building digital experiences that feel clean, useful, and
              modern.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              With a strong foundation in both front-end and back-end
              development, I like turning ideas into working products while
              learning more with every project I ship.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[1.8rem] border border-white/10 bg-black/25 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-md"
          >
            <h3 className="mb-5 text-lg font-semibold text-white">Quick Details</h3>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start gap-3">
                  <FaCode className="mt-1 text-xl text-orange-400" />
                  <div>
                    <p className="font-semibold text-white">{education.degree}</p>
                    <p className="text-sm text-gray-400">{education.school}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 text-xl text-orange-400" />
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-sm text-gray-400">{education.location}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start gap-3">
                  <FaCalendarAlt className="mt-1 text-xl text-orange-400" />
                  <div>
                    <p className="font-semibold text-white">Born</p>
                    <p className="text-sm text-gray-400">January 13, 2005</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(20,11,8,0.85),rgba(10,6,5,0.82))] p-6 text-center shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-md"
            >
              <h3 className="mb-2 text-4xl font-bold text-orange-400">{stat.value}</h3>
              <p className="text-sm font-semibold text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 rounded-[1.8rem] border border-white/10 bg-black/25 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-md"
        >
          <h4 className="mb-5 flex items-center gap-2 text-lg font-semibold text-white">
            <FaLaptop className="text-orange-400" /> Specializations
          </h4>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">Frontend</p>
              <p className="mt-2 text-gray-300">React, JavaScript, HTML5, CSS3, Tailwind</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">Backend</p>
              <p className="mt-2 text-gray-300">Node.js, Express, Laravel, PHP</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">Databases</p>
              <p className="mt-2 text-gray-300">MySQL, PostgreSQL, Supabase</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">Tools</p>
              <p className="mt-2 text-gray-300">Git, GitHub, Docker, VS Code, Responsive Design</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
