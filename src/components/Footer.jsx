import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/50 px-4 py-12 backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-2 text-2xl font-bold text-white">John Lloyd</h3>
            <p className="text-gray-400">Full Stack Developer | React and Laravel Specialist</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 transition-colors hover:text-orange-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 font-semibold text-white">Follow Me</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/Kuyalloyd"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-xl text-gray-400 transition-colors hover:text-orange-400"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/johnlloyd.galito.33"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-xl text-gray-400 transition-colors hover:text-orange-400"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="mailto:john.lloyd@urios.edu.ph"
                whileHover={{ scale: 1.2 }}
                className="text-xl text-gray-400 transition-colors hover:text-orange-400"
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="my-8 border-t border-slate-700" />

        <div className="flex flex-col items-center justify-between md:flex-row">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-gray-400 md:text-left"
          >
            Copyright 2025 John Lloyd Galito. All rights reserved. | Built with React and Tailwind CSS
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange-400 text-orange-400 transition-all hover:bg-orange-400/10 md:mt-0"
          >
            <FaArrowUp className="text-lg" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
