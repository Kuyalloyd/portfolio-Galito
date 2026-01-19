import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark transition-colors duration-300">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants}>
          <span className="text-primary text-lg sm:text-xl font-semibold">Hello, I'm</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold my-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
        >
          John Lloyd Galito
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 mb-8"
        >
          Full Stack Developer | Web Solutions Architect | Technology Innovator
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I specialize in building scalable, high-performance web applications using modern technologies. With expertise in React, Node.js, and cloud solutions, I help businesses transform their digital presence and achieve their goals.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 cursor-pointer"
          >
            View My Portfolio
          </motion.a>
          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-all duration-300 cursor-pointer"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex gap-6 justify-center mb-12">
          {[
            { icon: FaGithub, href: '#', label: 'GitHub' },
            { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
            { icon: FaEnvelope, href: '#', label: 'Email' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
              title={social.label}
            >
              <social.icon className="text-2xl text-primary" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <FaArrowDown className="text-primary text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
