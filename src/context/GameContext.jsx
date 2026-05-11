import React, { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [achievements, setAchievements] = useState([
    { id: 1, name: 'Welcome Developer', description: 'Visit the portfolio', unlocked: true, icon: '🎮' },
    { id: 2, name: 'Skill Master', description: 'Click all skills', unlocked: false, icon: '⚡' },
    { id: 3, name: 'Project Hunter', description: 'Add 3 projects', unlocked: false, icon: '🎯' },
    { id: 4, name: 'Social Butterfly', description: 'Visit all social links', unlocked: false, icon: '🦋' },
    { id: 5, name: 'Full Stack Pro', description: 'View all sections', unlocked: false, icon: '🏆' },
    { id: 6, name: 'Speed Runner', description: 'Complete portfolio in < 1 min', unlocked: false, icon: '⚙️' },
  ]);

  const addScore = (points) => {
    setScore(prev => prev + points);
  };

  const unlockAchievement = (achievementId) => {
    setAchievements(prev =>
      prev.map(ach =>
        ach.id === achievementId && !ach.unlocked
          ? { ...ach, unlocked: true }
          : ach
      )
    );
    // Award points for unlocking achievement
    addScore(100);
  };

  return (
    <GameContext.Provider value={{ score, achievements, addScore, unlockAchievement }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within GameProvider');
  }
  return context;
};
