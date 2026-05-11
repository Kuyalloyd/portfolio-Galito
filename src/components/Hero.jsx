import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { projectCount } from '../data/projects';

const defaultCardState = {
  rotateX: 0,
  rotateY: 0,
  glareX: 50,
  glareY: 35,
  scale: 1,
};

const Hero = () => {
  const [cardState, setCardState] = useState(defaultCardState);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const percentX = (event.clientX - bounds.left) / bounds.width;
    const percentY = (event.clientY - bounds.top) / bounds.height;

    setCardState({
      rotateX: (0.5 - percentY) * 16,
      rotateY: (percentX - 0.5) * 18,
      glareX: percentX * 100,
      glareY: percentY * 100,
      scale: 1.02,
    });
  };

  const resetCard = () => setCardState(defaultCardState);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center bg-transparent px-4 pt-20 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl">
                Hi, I'm John Lloyd
              </h1>
              <h2 className="mt-4 text-2xl font-semibold text-gray-300 sm:text-3xl">
                Full Stack Developer
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
              I create beautiful, functional, and user-friendly digital experiences.
              React and Laravel specialist from Butuan City, Philippines, focused on
              clean code and modern design.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 font-bold text-white transition-all duration-300 hover:shadow-lg"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer rounded-lg border-2 border-gray-400 px-8 py-3 font-bold text-gray-300 transition-all duration-300 hover:border-white hover:text-white"
              >
                View My Work
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 border-t border-gray-700 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">2+</div>
                <div className="mt-2 text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">{projectCount}</div>
                <div className="mt-2 text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">100%</div>
                <div className="mt-2 text-sm text-gray-400">Dedicated</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute h-80 w-80 rounded-full bg-orange-500/12 blur-3xl" />

            <motion.div
              onMouseMove={handlePointerMove}
              onMouseLeave={resetCard}
              onBlur={resetCard}
              style={{
                transform: `perspective(1400px) rotateX(${cardState.rotateX}deg) rotateY(${cardState.rotateY}deg) scale(${cardState.scale})`,
              }}
              className="relative z-10 w-full max-w-[23rem] transition-transform duration-200 ease-out"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-orange-400/30 bg-[#140905]/75 p-3 shadow-[0_35px_100px_rgba(0,0,0,0.45)] backdrop-blur-md">
                <div
                  className="pointer-events-none absolute inset-0 opacity-80 mix-blend-screen"
                  style={{
                    background: `radial-gradient(circle at ${cardState.glareX}% ${cardState.glareY}%, rgba(255,255,255,0.38), transparent 24%), linear-gradient(135deg, rgba(249,115,22,0.22), transparent 46%, rgba(251,146,60,0.14) 70%, transparent)`,
                  }}
                />
                <div className="pointer-events-none absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/5" />

                <div className="relative overflow-hidden rounded-[1.55rem] bg-[#1a0a06]">
                  <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-orange-300/15 to-transparent" />
                  <img
                    src="/images/profile.jpg"
                    alt="John Lloyd Galito"
                    className="h-[24rem] w-full object-cover object-center"
                  />
                </div>

                <div className="mt-3 rounded-[1.4rem] border border-white/10 bg-black/25 p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/profile.jpg"
                        alt="John Lloyd Galito"
                        className="h-12 w-12 rounded-full border border-orange-400/50 object-cover"
                      />
                      <div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-white">
                          <FaGithub className="text-orange-400" />
                          @Kuyalloyd
                        </div>
                        <p className="text-xs text-slate-300">Available for Work</p>
                      </div>
                    </div>
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-900/30"
                    >
                      Hire Me
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
