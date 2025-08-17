import React, { useState, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { animateScroll as scroll } from 'react-scroll';

export const Footer = () => {
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
      duration: 800, // Animasyon süresi
      smooth: "easeInOutQuart", // Animasyon efekti
    });
  };

  return (
    <footer className="py-8" id="contact">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white/80">
              İletişime <span className="text-emerald-300">Geçin</span>
            </h2>
            <a
              className="text-xl md:text-3xl font-semibold text-white underline decoration-gray-400 decoration-2 underline-offset-4 hover:text-emerald-300 hover:decoration-emerald-400 transition-all duration-300 break-all"
              href="mailto:ender.karan14@gmail.com"
            >
              ender.karan14@gmail.com
            </a>
          </div>
          <div className="text-white/50 mt-12 text-right">
            <div className="text-lg mb-8">
              <p>Bursa</p>
              <p>Türkiye</p>
            </div>
          </div>
        </div>

        {/* DÜZELTME: Daha stabil çalışan arka plan yazı efekti */}
        <div className="relative text-center mt-8 py-12">
            <h1
                aria-hidden="true"
                className="absolute inset-0 z-0 flex items-center justify-center text-[8rem] md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-5 pointer-events-none"
            >
                EnderKaran
            </h1>
        </div>

        <div className="relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col border-t border-white/10 pt-8">
          <p className="text-gray-400 text-base">
            © {new Date().getFullYear()} Ender Karan. All rights reserved.
          </p>
          <ul className="flex gap-5 flex-wrap">
            <li>
              <a
                href="https://github.com/EnderKaran"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer" // DÜZELTME: Güvenlik eklendi
                className="text-gray-300 flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 hover:text-white transition-colors"
              >
                <AiFillGithub size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ender-karan-52303b187"
                aria-label="LinkedIn" // DÜZELTME: Yazım hatası düzeltildi
                target="_blank"
                rel="noopener noreferrer" // DÜZELTME: Güvenlik eklendi
                className="text-gray-300 flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 hover:text-white transition-colors"
              >
                <AiFillLinkedin size={30} />
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
            className="fixed bottom-8 right-8 z-50 p-3 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 focus:outline-none transition-colors"
            aria-label="Sayfanın başına dön"
          >
            <FaArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};