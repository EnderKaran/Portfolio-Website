// src/components/ThemeToggle.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useTheme from '../hooks/useTheme';
import { FiSun, FiMoon } from 'react-icons/fi';

export const ThemeToggle = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="flex items-center justify-center">
      <AnimatePresence mode="wait" initial={false}>
        <motion.button
          onClick={toggleTheme}
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
        </motion.button>
      </AnimatePresence>
    </div>
  );
};