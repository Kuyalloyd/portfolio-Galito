import { motion } from 'framer-motion';
import { FaReact, FaNode, FaDatabase, FaCode, FaGitAlt, FaDocker, FaLaravel, FaPhp } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMysql, SiPostgresql, SiHtml5, SiCss3 } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      description: 'HTML5, CSS3, JavaScript, React - Building responsive and interactive user interfaces',
      icon: FaCode,
      color: 'from-orange-500 to-yellow-500',
      skills: [
        { name: 'React', icon: FaReact },
        { name: 'JavaScript', icon: FaCode },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS3', icon: SiCss3 },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
      ],
    },
    {
      title: 'Backend',
      description: 'PHP, MySQL, Supabase - Server-side development and database management',
      icon: FaNode,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: FaNode },
        { name: 'Express', icon: FaNode },
        { name: 'Laravel', icon: FaLaravel },
        { name: 'PHP', icon: FaPhp },
        { name: 'MySQL', icon: SiMysql },
        { name: 'PostgreSQL', icon: SiPostgresql },
      ],
    },
    {
      title: 'Tools',
      description: 'Git, GitHub, Figma, VS Code - Development tools and version control systems',
      icon: FaGitAlt,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git', icon: FaGitAlt },
        { name: 'GitHub', icon: FaCode },
        { name: 'Docker', icon: FaDocker },
        { name: 'VS Code', icon: FaCode },
        { name: 'Figma', icon: FaCode },
        { name: 'Supabase', icon: FaDatabase },
      ],
    },
  ];

  return (
    <section id="skills" className="relative bg-transparent px-4 py-20 transition-colors duration-300 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center text-white"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg border border-slate-600 overflow-hidden hover:border-orange-400 transition-all group"
            >
              {/* Header with icon */}
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>

              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">{category.description}</p>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 gap-3 pt-4">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <motion.button
                        key={skillIndex}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-slate-600/50 hover:bg-orange-500/20 p-3 rounded-lg flex items-center justify-center transition-all border border-slate-500 hover:border-orange-400"
                        title={skill.name}
                      >
                        <Icon className="text-2xl text-gray-300 hover:text-orange-400" />
                      </motion.button>
                    );
                  })}
                </div>

                {/* View more button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full mt-4 py-2 text-orange-400 font-semibold border border-orange-400 rounded-lg hover:bg-orange-400/10 transition-all"
                >
                  View more
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-white">Proficiency Levels</h3>

          <div className="space-y-6">
            {[
              { skill: 'React & JavaScript', level: 90 },
              { skill: 'Node.js & Express', level: 85 },
              { skill: 'Laravel & PHP', level: 82 },
              { skill: 'MySQL & PostgreSQL', level: 88 },
              { skill: 'Tailwind CSS', level: 92 },
              { skill: 'Git & Version Control', level: 90 },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-white">{item.skill}</span>
                  <span className="text-orange-400 font-bold">{item.level}%</span>
                </div>
                <div className="h-2 bg-slate-600 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
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
