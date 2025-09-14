// src/hooks/useTheme.js
import { useState, useEffect } from 'react';

// Temayı <html> etiketinden veya hafızadan okuyan yardımcı fonksiyon
function getInitialTheme() {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    // index.html'deki script'in eklediği class'ı kontrol et
    if (document.documentElement.classList.contains('dark')) {
      return 'dark';
    }
  }
  return 'light';
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

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

  return [theme, toggleTheme];
}