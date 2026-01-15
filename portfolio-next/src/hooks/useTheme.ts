'use client';

import { useState, useEffect } from 'react';

function getInitialTheme(): string {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    
    if (document.documentElement.classList.contains('dark')) {
      return 'dark';
    }
    
    // Sistem tercihine bak
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light'; // Varsayılan
}

export default function useTheme() {
  const [theme, setTheme] = useState<string>(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return [theme, toggleTheme] as const;
}