import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
            >
              I'm a skilled Full Stack Developer with 5+ years of experience building enterprise-level web applications. I specialize in React, Node.js, and cloud technologies, with a proven track record of delivering high-quality solutions that drive business value and user engagement.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
            >
              I'm committed to continuous learning and staying current with industry trends. I'm passionate about writing clean, maintainable code and mentoring junior developers while contributing to the tech community through open-source projects.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-primary dark:text-secondary">Experience</h3>
              <div className="space-y-3">
                {[
                  { role: 'Senior Full Stack Developer', company: 'Tech Solutions Inc.', duration: '2021 - Present' },
                  { role: 'Full Stack Developer', company: 'Digital Innovations Ltd.', duration: '2019 - 2021' },
                  { role: 'Frontend Developer', company: 'WebCraft Agency', duration: '2017 - 2019' },
                ].map((job, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="p-4 border-l-2 border-primary bg-gray-200/30 dark:bg-slate-800/60 rounded-lg transition-colors duration-300"
                  >
                    <p className="font-semibold text-gray-900 dark:text-white">{job.role}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{job.company}</p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">{job.duration}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 rounded-2xl overflow-hidden border-2 border-primary/30"
            >
              {/* Light Mode Image */}
              <img 
                src="/images/profile.jpg" 
                alt="John Lloyd Gwapo"
                className={`w-full h-full object-contain bg-gradient-to-br from-slate-800 to-slate-900 transition-all duration-500 ${isDark ? 'hidden' : 'block'}`}
              />
              
              {/* Dark Mode Image */}
              <img 
                src="/images/profile2.jpg" 
                alt="John Lloyd Gwapo - Dark Mode"
                className={`w-full h-full object-contain bg-gradient-to-br from-slate-800 to-slate-900 transition-all duration-500 ${isDark ? 'block' : 'hidden'}`}
              />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-10 -right-10 w-40 h-40 border-2 border-primary/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-10 -left-10 w-32 h-32 border-2 border-secondary/20 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
