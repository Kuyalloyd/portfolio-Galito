import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-gradient-to-b from-white dark:from-dark to-transparent dark:to-black/30 backdrop-blur-md transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Portfolio
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ color: '#ec4899' }}
                className="text-gray-700 dark:text-gray-300 hover:text-secondary transition-colors duration-300"
              >
                {item}
              </motion.a>
            ))}
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-primary/20 dark:bg-secondary/20 hover:bg-primary/30 dark:hover:bg-secondary/30 transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
              title={isDark ? 'Light Mode' : 'Dark Mode'}
            >
              {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
            </motion.button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-primary/20 dark:bg-secondary/20 hover:bg-primary/30 dark:hover:bg-secondary/30 transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
              title={isDark ? 'Light Mode' : 'Dark Mode'}
            >
              {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
            </motion.button>
            <motion.button
              onClick={toggleMenu}
              className="text-2xl"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 dark:text-gray-300 hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
