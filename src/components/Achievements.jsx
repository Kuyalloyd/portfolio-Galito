import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useGame } from '../context/GameContext';
import { FaTrophy, FaChevronDown } from 'react-icons/fa';

const Achievements = () => {
  const { score, achievements } = useGame();
  const [isOpen, setIsOpen] = useState(false);
  const unlockedCount = achievements.filter(a => a.unlocked).length;

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {/* Score Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-4 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <FaTrophy className="text-2xl" />
          <div>
            <p className="text-sm font-semibold">Score</p>
            <p className="text-2xl font-bold">{score}</p>
          </div>
        </div>
      </motion.div>

      {/* Achievements Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
      >
        <div className="relative">
          <span className="text-2xl">🏅</span>
          <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {unlockedCount}/{achievements.length}
          </span>
        </div>
      </motion.button>

      {/* Achievements Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: -20, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-24 right-0 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl shadow-2xl p-6 w-80 border border-primary/30"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🎮</span> Achievements
            </h3>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    achievement.unlocked
                      ? 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-yellow-400'
                      : 'bg-slate-700/50 border-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{achievement.icon}</span>
                    <div className="flex-1">
                      <p className={`font-bold ${achievement.unlocked ? 'text-yellow-300' : 'text-gray-400'}`}>
                        {achievement.name}
                      </p>
                      <p className="text-xs text-gray-400">{achievement.description}</p>
                    </div>
                    {achievement.unlocked && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-green-400 text-lg"
                      >
                        ✓
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Achievements;
