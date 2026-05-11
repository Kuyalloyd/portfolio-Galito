import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaCode, FaGithub, FaMicrochip, FaSignal } from 'react-icons/fa';
import { projectCount } from '../data/projects';

const defaultCardState = {
  rotateX: 0,
  rotateY: 0,
  glareX: 50,
  glareY: 35,
  scale: 1,
};

const heroFxStyles = `
  @keyframes heroOrbitClockwise {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes heroOrbitCounter {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }

  @keyframes heroScan {
    0% { transform: translateY(-120%); opacity: 0; }
    12% { opacity: 0.18; }
    45% { opacity: 0.36; }
    100% { transform: translateY(135%); opacity: 0; }
  }

  @keyframes heroChipFloat {
    0%, 100% { transform: translate3d(0, 0, 0); }
    50% { transform: translate3d(0, -10px, 0); }
  }

  @keyframes heroChipFloatAlt {
    0%, 100% { transform: translate3d(0, 0, 0); }
    50% { transform: translate3d(0, 10px, 0); }
  }

  @keyframes heroCorePulse {
    0%, 100% { transform: scale(1); opacity: 0.45; }
    50% { transform: scale(1.08); opacity: 0.82; }
  }

  @keyframes heroShimmer {
    0% { transform: translateX(-120%) skewX(-18deg); opacity: 0; }
    20% { opacity: 0.28; }
    45% { opacity: 0.1; }
    100% { transform: translateX(150%) skewX(-18deg); opacity: 0; }
  }

  @keyframes heroReticlePulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.75; }
    50% { transform: translate(-50%, -50%) scale(1.12); opacity: 1; }
  }

  @keyframes heroReticleOrbit {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }

  @keyframes heroGridShift {
    0% { background-position: 0 0, 0 0; }
    100% { background-position: 36px 18px, -36px 0; }
  }

  @keyframes heroDataBlink {
    0%, 100% { opacity: 0.45; }
    50% { opacity: 1; }
  }

  .hero-orbit-a {
    animation: heroOrbitClockwise 18s linear infinite;
  }

  .hero-orbit-b {
    animation: heroOrbitCounter 24s linear infinite;
  }

  .hero-orbit-c {
    animation: heroOrbitClockwise 30s linear infinite;
  }

  .hero-scan {
    animation: heroScan 6.4s linear infinite;
  }

  .hero-chip {
    animation: heroChipFloat 4.6s ease-in-out infinite;
  }

  .hero-chip-alt {
    animation: heroChipFloatAlt 5.2s ease-in-out infinite;
  }

  .hero-core-pulse {
    animation: heroCorePulse 3.6s ease-in-out infinite;
  }

  .hero-shimmer {
    animation: heroShimmer 4.8s linear infinite;
  }

  .hero-reticle {
    animation: heroReticlePulse 2.8s ease-in-out infinite;
  }

  .hero-reticle-orbit {
    animation: heroReticleOrbit 8s linear infinite;
  }

  .hero-grid {
    animation: heroGridShift 12s linear infinite;
  }

  .hero-data-blink {
    animation: heroDataBlink 2.6s ease-in-out infinite;
  }
`;

const Hero = () => {
  const [cardState, setCardState] = useState(defaultCardState);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const percentX = (event.clientX - bounds.left) / bounds.width;
    const percentY = (event.clientY - bounds.top) / bounds.height;

    setCardState({
      rotateX: (0.5 - percentY) * 18,
      rotateY: (percentX - 0.5) * 20,
      glareX: percentX * 100,
      glareY: percentY * 100,
      scale: 1.045,
    });
  };

  const resetCard = () => setCardState(defaultCardState);

  const focusShiftX = (cardState.glareX - 50) * 0.55;
  const focusShiftY = (cardState.glareY - 50) * 0.42;
  const dynamicShadow = `0 42px 130px rgba(0,0,0,0.48), ${cardState.rotateY * -0.85}px ${cardState.rotateX * 0.85}px 70px rgba(249,115,22,0.24), ${cardState.rotateY * 0.45}px ${cardState.rotateX * -0.45}px 54px rgba(56,189,248,0.12), 0 0 0 1px rgba(255,255,255,0.03)`;

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center bg-transparent px-4 pt-20 sm:px-6 lg:px-8">
      <style>{heroFxStyles}</style>

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
                Hi, I&apos;m John Lloyd
              </h1>
              <h2 className="mt-4 text-2xl font-semibold text-gray-300 sm:text-3xl">
                Full Stack Developer
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
              I create beautiful, functional, and user-friendly digital experiences.
              React and Laravel specialist from Butuan City, Philippines, focused on
              clean code, thoughtful interfaces, and modern web systems.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 font-bold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.32)]"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer rounded-lg border-2 border-gray-400 px-8 py-3 font-bold text-gray-300 transition-all duration-300 hover:border-white hover:bg-white/5 hover:text-white"
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
            <div
              className="absolute h-80 w-80 rounded-full bg-orange-500/10 blur-3xl hero-core-pulse"
              style={{ transform: `translate(${focusShiftX * 0.9}px, ${focusShiftY * 0.9}px)` }}
            />
            <div
              className="absolute h-[25rem] w-[25rem] rounded-full border border-orange-400/10 hero-orbit-a"
              style={{ transform: `translate(${focusShiftX * 0.35}px, ${focusShiftY * 0.35}px)` }}
            />
            <div
              className="absolute h-[27rem] w-[27rem] rounded-full border border-dashed border-orange-300/10 hero-orbit-b"
              style={{ transform: `translate(${focusShiftX * 0.2}px, ${focusShiftY * 0.2}px)` }}
            />
            <div
              className="absolute h-[19rem] w-[19rem] rounded-full border border-sky-400/10 hero-orbit-c"
              style={{ transform: `translate(${focusShiftX * 0.5}px, ${focusShiftY * 0.5}px)` }}
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              className="hero-chip absolute left-0 top-16 hidden rounded-2xl border border-orange-400/20 bg-black/35 px-4 py-3 text-left backdrop-blur-md md:block"
              style={{
                animationDelay: '0.2s',
                transform: `translate(${focusShiftX * -0.45}px, ${focusShiftY * -0.45}px)`,
              }}
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-orange-300">
                <FaCode />
                Frontend
              </div>
              <p className="mt-2 text-sm font-semibold text-white">React UI Systems</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              className="hero-chip-alt absolute bottom-10 right-0 hidden rounded-2xl border border-sky-400/20 bg-black/35 px-4 py-3 text-left backdrop-blur-md md:block"
              style={{
                animationDelay: '1s',
                transform: `translate(${focusShiftX * 0.45}px, ${focusShiftY * 0.45}px)`,
              }}
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-sky-300">
                <FaSignal />
                Backend
              </div>
              <p className="mt-2 text-sm font-semibold text-white">Laravel and API Logic</p>
            </motion.div>

            <motion.div
              onMouseMove={handlePointerMove}
              onMouseLeave={resetCard}
              onBlur={resetCard}
              style={{
                transform: `perspective(1500px) rotateX(${cardState.rotateX}deg) rotateY(${cardState.rotateY}deg) scale(${cardState.scale})`,
                transformStyle: 'preserve-3d',
              }}
              className="relative z-10 w-full max-w-[24rem] transition-transform duration-200 ease-out"
            >
              <div
                className="relative overflow-hidden rounded-[2rem] border border-orange-400/30 bg-[linear-gradient(180deg,rgba(18,10,8,0.82),rgba(8,5,4,0.9))] p-3 backdrop-blur-md"
                style={{ boxShadow: dynamicShadow, transformStyle: 'preserve-3d' }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-90 mix-blend-screen"
                  style={{
                    background: `radial-gradient(circle at ${cardState.glareX}% ${cardState.glareY}%, rgba(255,255,255,0.46), transparent 22%), linear-gradient(135deg, rgba(249,115,22,0.24), transparent 44%, rgba(56,189,248,0.14) 72%, transparent)`,
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                    backgroundSize: '34px 34px',
                    transform: `translate(${focusShiftX * 0.25}px, ${focusShiftY * 0.25}px)`,
                  }}
                />
                <div className="hero-shimmer pointer-events-none absolute inset-y-0 left-[-25%] w-24 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <div className="pointer-events-none absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/6" />
                <div className="pointer-events-none absolute left-4 top-4 h-8 w-8 border-l border-t border-orange-300/40" />
                <div className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b border-r border-sky-300/25" />

                <div className="relative overflow-hidden rounded-[1.55rem] bg-[#120907]" style={{ transform: 'translateZ(28px)' }}>
                  <div
                    className="hero-grid absolute inset-0 opacity-18"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-55 mix-blend-screen"
                    style={{
                      background: `radial-gradient(circle at ${cardState.glareX}% ${cardState.glareY}%, rgba(255, 191, 128, 0.28), transparent 16%), radial-gradient(circle at ${cardState.glareX}% ${cardState.glareY}%, rgba(56,189,248,0.16), transparent 28%)`,
                    }}
                  />
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-orange-300/15 to-transparent" />
                  <div className="hero-scan absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.04)_30%,rgba(249,115,22,0.16)_50%,rgba(255,255,255,0.03)_68%,transparent_100%)]" />

                  <img
                    src="/images/profile.jpg"
                    alt="John Lloyd Galito"
                    className="h-[24rem] w-full object-cover object-center"
                  />

                  <div
                    className="hero-reticle pointer-events-none absolute z-20 h-20 w-20 rounded-full border border-orange-300/45"
                    style={{
                      left: `${cardState.glareX}%`,
                      top: `${cardState.glareY}%`,
                    }}
                  >
                    <div className="hero-reticle-orbit absolute inset-2 rounded-full border border-dashed border-sky-300/35" />
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-orange-200/60 to-transparent" />
                    <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-orange-200/60 to-transparent" />
                    <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300/90 shadow-[0_0_18px_rgba(255,191,128,0.9)]" />
                  </div>

                  <div
                    className="pointer-events-none absolute right-5 top-[35%] rounded-xl border border-sky-300/15 bg-black/35 px-3 py-2 backdrop-blur-sm"
                    style={{ transform: `translate(${focusShiftX * 0.55}px, ${focusShiftY * 0.45}px)` }}
                  >
                    <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Latency</p>
                    <p className="mt-1 text-sm font-semibold text-white">12 ms</p>
                  </div>

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-orange-400/25 bg-black/35 px-3 py-1.5 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-orange-400 hero-core-pulse" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-orange-200">
                      System Online
                    </span>
                  </div>

                  <div
                    className="absolute right-4 top-4 rounded-2xl border border-white/10 bg-black/35 px-3 py-2 backdrop-blur-sm"
                    style={{ transform: `translate(${focusShiftX * 0.35}px, ${focusShiftY * -0.2}px)` }}
                  >
                    <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Focus</p>
                    <p className="mt-1 text-sm font-semibold text-white">UI + Backend</p>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/30 p-3 backdrop-blur-md">
                    <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-slate-400">
                      <span>Signal</span>
                      <span className="hero-data-blink">99%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        animate={{ x: ['-8%', '0%', '-8%'] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                        className="h-full w-[88%] rounded-full bg-gradient-to-r from-orange-500 via-amber-300 to-sky-300"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="mt-3 rounded-[1.4rem] border border-white/10 bg-black/25 p-4 backdrop-blur-sm"
                  style={{ transform: 'translateZ(36px)' }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src="/images/profile.jpg"
                          alt="John Lloyd Galito"
                          className="h-12 w-12 rounded-full border border-orange-400/50 object-cover"
                        />
                        <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#0f0d0a]">
                          <span className="h-2 w-2 rounded-full bg-orange-400 hero-core-pulse" />
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-white">
                          <FaGithub className="text-orange-400" />
                          @Kuyalloyd
                        </div>
                        <p className="text-xs text-slate-300">Available for Work</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
                      <FaBolt />
                      Active
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="grid grid-cols-3 gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">React</span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Laravel</span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">API</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-sky-200">
                      <FaMicrochip />
                      Mode Sync
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
                      Futuristic profile interface
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
