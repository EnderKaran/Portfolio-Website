// src/components/LanguageSwitcher.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = () => {
    const nextLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={handleLanguageChange}
      className="flex items-center justify-center p-2 text-sm font-semibold transition-colors rounded-full w-9 h-9 hover:bg-black/10 dark:hover:bg-white/10"
      aria-label="Change language"
    >
      {i18n.language === 'tr' ? 'EN' : 'TR'}
    </button>
  );
};