'use client';

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { animateScroll as scroll } from 'react-scroll';

export const Footer = () => {
  const { t } = useTranslation(); 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden transition-colors duration-500 bg-white dark:bg-[#030303]" id="contact">
      
      {/* Arka Plan Hafif Zümrüt Parıltısı */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-emerald-500/5 blur-[120px] pointer-events-none z-0"></div>

      <div className="container relative z-10 px-4 mx-auto max-w-[1200px]">
        
        {/* Üst Kısım: İletişim & Konum */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end mb-14">
          <div>
            <h2 className="mb-6 text-5xl font-black tracking-tighter md:text-7xl text-gray-900 dark:text-white">
              {t('footer_contact_part1')} <span className="text-emerald-500">{t('footer_contact_part2')}</span>
            </h2>
            <a 
              href="mailto:ender.karan14@gmail.com" 
              className="text-2xl font-bold transition-all duration-300 md:text-4xl text-gray-600 dark:text-gray-300 decoration-gray-300 dark:decoration-gray-800 decoration-4 underline-offset-8 hover:text-emerald-500 hover:decoration-emerald-500 underline"
            >
              ender.karan14@gmail.com
            </a>
          </div>
          
          <div className="text-left md:text-right">
            <div className="text-lg font-bold tracking-widest text-gray-400 uppercase">
              <p>{t('footer_city')}</p>
              <p>{t('footer_country')}</p>
            </div>
          </div>
        </div>

        {/* Devasa İsim Vurgusu (Referans Görseldeki Gibi) */}
        <div className="flex justify-center w-full py-8 pointer-events-none select-none">
            <h1 aria-hidden="true" className="text-[14vw] leading-none font-black uppercase tracking-tighter text-gray-900/5 dark:text-white/5">
                EnderKaran
            </h1>
        </div>

        {/* Alt Bar: Telif Hakkı & Sosyal Medya */}
        <div className="flex flex-col items-center justify-between gap-6 pt-8 border-t sm:flex-row border-gray-200 dark:border-white/10">
          <p className="text-sm font-bold tracking-widest text-gray-500 uppercase">
            © {new Date().getFullYear()} ENDER KARAN. {t('footer_copyright')}
          </p>
          
          <ul className="flex flex-wrap gap-4">
            <li>
              <a 
                href="https://github.com/EnderKaran" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center transition-all duration-300 border w-14 h-14 rounded-2xl bg-gray-50 border-gray-200 text-gray-900 dark:bg-white/5 dark:border-white/10 dark:text-white hover:bg-emerald-500 hover:border-emerald-500 hover:text-white dark:hover:bg-emerald-500 hover:scale-105 hover:-translate-y-1 shadow-lg"
              >
                <AiFillGithub size={26} />
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/ender-karan-52303b187" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center transition-all duration-300 border w-14 h-14 rounded-2xl bg-gray-50 border-gray-200 text-gray-900 dark:bg-white/5 dark:border-white/10 dark:text-white hover:bg-emerald-500 hover:border-emerald-500 hover:text-white dark:hover:bg-emerald-500 hover:scale-105 hover:-translate-y-1 shadow-lg"
              >
                <AiFillLinkedin size={26} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Yukarı Çık Butonu (Modernize Edildi) */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50 flex items-center justify-center text-white transition-all shadow-2xl w-14 h-14 rounded-2xl bottom-8 right-8 bg-emerald-500 hover:bg-emerald-600 focus:outline-none hover:-translate-y-2 shadow-emerald-500/30"
            aria-label={t('footer_aria_scrollToTop')}
          >
            <FaArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};