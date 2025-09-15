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
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <footer className="bg-background text-primary py-8 transition-colors duration-300" id="contact">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between flex-col md:flex-row gap-8">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              İletişime <span className="text-accent">Geçin</span>
            </h2>
            <a
              className="text-xl md:text-3xl font-semibold underline decoration-secondary/50 decoration-2 underline-offset-4 hover:text-accent hover:decoration-accent/80 transition-all duration-300 break-all"
              href="mailto:ender.karan14@gmail.com"
            >
              ender.karan14@gmail.com
            </a>
          </div>
          
          <div className="text-secondary mt-12 text-left md:text-right">
            <div className="text-lg">
              <p>Bursa</p>
              <p>Türkiye</p>
            </div>
          </div>
        </div>

       
        <div className="relative text-center mt-8 py-12">
            
            <h1
                aria-hidden="true"
                className="absolute inset-0 z-0 flex items-center justify-center text-[15vw] sm:text-[18vw] md:text-[20vw] lg:text-[12rem] font-bold text-primary/5 pointer-events-none"
            >
                EnderKaran
            </h1>
        </div>

        {/* Copyright ve Sosyal Medya */}
        <div className="relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col border-t border-card-border pt-8">
          <p className="text-secondary text-base">
            © {new Date().getFullYear()} Ender Karan. All rights reserved.
          </p>
          <ul className="flex gap-5 flex-wrap">
            <li>
              <a
                href="https://github.com/EnderKaran"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary flex items-center justify-center w-10 h-10 rounded-full bg-primary/5 hover:bg-primary/10 hover:text-accent transition-colors"
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
                className="text-secondary flex items-center justify-center w-10 h-10 rounded-full bg-primary/5 hover:bg-primary/10 hover:text-accent transition-colors"
              >
                <AiFillLinkedin size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Yukarı Çık Butonu */}
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