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

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
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

            <div className="mt-8 space-y-4 rounded-lg border border-slate-600 bg-slate-700/50 p-6">
              <div className="flex items-start gap-3">
                <FaCode className="mt-1 text-xl text-orange-400" />
                <div>
                  <p className="font-semibold text-white">{education.degree}</p>
                  <p className="text-gray-400">{education.school}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-xl text-orange-400" />
                <div>
                  <p className="text-gray-300">{education.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCalendarAlt className="mt-1 text-xl text-orange-400" />
                <div>
                  <p className="text-gray-300">Born: January 13, 2005</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-lg border border-slate-500 bg-gradient-to-br from-slate-700 to-slate-600 p-8 text-center transition-all hover:border-orange-400"
              >
                <h3 className="mb-2 text-5xl font-bold text-orange-400">{stat.value}</h3>
                <p className="font-semibold text-gray-300">{stat.label}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="col-span-1 rounded-lg border border-slate-600 bg-slate-700/50 p-6"
            >
              <h4 className="mb-4 flex items-center gap-2 font-semibold text-white">
                <FaLaptop className="text-orange-400" /> Specializations
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>- Frontend: React, JavaScript, HTML5, CSS3, Tailwind</li>
                <li>- Backend: Node.js, Express, Laravel, PHP</li>
                <li>- Databases: MySQL, PostgreSQL, Supabase</li>
                <li>- Tools: Git, GitHub, Docker, VS Code</li>
                <li>- Responsive and Accessible Design</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
