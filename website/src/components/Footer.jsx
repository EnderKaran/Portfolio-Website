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
    <footer 
      className="py-8 transition-colors duration-300 bg-white dark:bg-black text-black dark:text-white" 
      id="contact"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl text-black dark:text-white">
              {t('footer_contact_part1')} <span className="text-emerald-500 dark:text-emerald-400">{t('footer_contact_part2')}</span>
            </h2>
            <a
              className="text-xl font-semibold underline break-all transition-all duration-300 md:text-3xl text-black dark:text-white decoration-gray-400 decoration-2 underline-offset-4 hover:text-emerald-500 hover:decoration-emerald-500"
              href="mailto:ender.karan14@gmail.com"
            >
              ender.karan14@gmail.com
            </a>
          </div>
          
          <div className="mt-12 text-left text-gray-600 dark:text-gray-400 md:text-right">
            <div className="text-lg">
              <p>{t('footer_city')}</p>
              <p>{t('footer_country')}</p>
            </div>
          </div>
        </div>

        
        <div className="relative w-full py-12 mt-8 overflow-hidden text-center select-none">
            <h1
                aria-hidden="true"
                className="absolute inset-0 z-0 flex items-center justify-center text-[13vw] lg:text-[12rem] font-bold pointer-events-none text-black dark:text-white/90"
            >
                EnderKaran
            </h1>
        </div>

        {/* ALT KISIM & İKONLAR */}
        <div className="container relative flex items-center justify-center gap-10 pt-8 mt-12 border-t sm:justify-between max-sm:flex-col border-gray-300 dark:border-gray-800">
          <p className="text-base text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Ender Karan. {t('footer_copyright')}
          </p>
          <ul className="flex flex-wrap gap-5">
            <li>
              <a
                href="https://github.com/EnderKaran"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                // İkonlar: Light modda siyah, Dark modda beyaz
                className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400"
              >
                <AiFillGithub size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ender-karan-52303b187"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400"
              >
                <AiFillLinkedin size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50 p-3 text-white transition-colors rounded-full shadow-lg bottom-8 right-8 bg-emerald-500 hover:bg-emerald-600 focus:outline-none"
            aria-label={t('footer_aria_scrollToTop')}
          >
            <FaArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};