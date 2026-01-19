import { motion } from 'framer-motion';
import { FaReact, FaNode, FaDatabase, FaCode, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiGraphql, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, color: 'text-blue-400' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
      ],
    },
    {
      title: 'Backend & DevOps',
      skills: [
        { name: 'Node.js', icon: FaNode, color: 'text-green-500' },
        { name: 'Express.js', icon: FaNode, color: 'text-gray-400' },
        { name: 'PostgreSQL', icon: FaDatabase, color: 'text-orange-400' },
        { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
      ],
    },
    {
      title: 'Tools & Cloud',
      skills: [
        { name: 'AWS', icon: FaCode, color: 'text-yellow-600' },
        { name: 'Git/GitHub', icon: FaGitAlt, color: 'text-red-600' },
        { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-500' },
        { name: 'REST APIs', icon: FaCode, color: 'text-indigo-400' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Technical <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">{category.title}</h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skillIndex}
                      variants={skillVariants}
                      whileHover={{
                        y: -10,
                        boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)',
                      }}
                      className="group p-4 bg-gradient-to-br from-gray-300 to-gray-200 dark:from-slate-800 dark:to-slate-900 border border-primary/20 rounded-lg hover:border-primary/60 text-center transition-all duration-300 cursor-pointer"
                    >
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.1 }}
                        className={`text-4xl mb-2 ${skill.color} mx-auto`}
                      >
                        <IconComponent />
                      </motion.div>
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-secondary transition-colors">
                        {skill.name}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Skill Level Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 border border-primary/20 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Proficiency Levels</h3>

          <div className="space-y-6">
            {[
              { skill: 'React & JavaScript (ES6+)', level: 95 },
              { skill: 'Node.js & Express.js', level: 92 },
              { skill: 'TypeScript & OOP Design', level: 90 },
              { skill: 'PostgreSQL & Database Architecture', level: 88 },
              { skill: 'AWS & Cloud Infrastructure', level: 85 },
              { skill: 'Docker & Containerization', level: 87 },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{item.skill}</span>
                  <span className="text-primary font-bold">{item.level}%</span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
