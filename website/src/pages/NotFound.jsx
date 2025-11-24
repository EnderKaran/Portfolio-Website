import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaEnvelope } from 'react-icons/fa';

const NotFound = () => {
  const astronautRef = useRef(null);
  const visorRef = useRef(null);
  const pupilRef1 = useRef(null);
  const pupilRef2 = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!visorRef.current || !astronautRef.current) return;

      // Göz Takip Mantığı
      const rect = visorRef.current.getBoundingClientRect();
      const visorCenterX = rect.left + rect.width / 2;
      const visorCenterY = rect.top + rect.height / 2;
      
      const angle = Math.atan2(e.clientY - visorCenterY, e.clientX - visorCenterX);
      const distance = Math.min(6, Math.hypot(e.clientX - visorCenterX, e.clientY - visorCenterY) / 15);
      
      const moveX = Math.cos(angle) * distance;
      const moveY = Math.sin(angle) * distance;

      if(pupilRef1.current) pupilRef1.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      if(pupilRef2.current) pupilRef2.current.style.transform = `translate(${moveX}px, ${moveY}px)`;

      // Astronot 3D Dönüş Mantığı
      const rotateX = (e.clientY / window.innerHeight - 0.5) * 10;
      const rotateY = (e.clientX / window.innerWidth - 0.5) * 10;
      astronautRef.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden text-white space-bg font-['Poppins']">
      {/* Yıldız Katmanları */}
      <div className="absolute top-0 left-0 stars-layer-1" />
      <div className="absolute top-0 left-0 stars-layer-2" />

      {/* İçerik */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        
        {/* 404 Glitch Metni */}
        <div className="mb-[-40px] z-20 relative select-none">
          <h1 className="text-[150px] font-black tracking-widest glitch-text text-emerald-400" data-text="404">
            404
          </h1>
        </div>

        {/* Astronot */}
        <div className="relative w-[260px] h-[260px] mt-[-40px] astronaut-float" ref={astronautRef}>
          <img 
            src="https://assets.codepen.io/1538474/astronaut.svg" 
            alt="Astronaut" 
            className="w-full h-full drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]"
          />
          
          {/* Kask Vizörü ve Gözler */}
          <div 
            ref={visorRef}
            className="absolute w-[60px] h-[45px] rounded-[50%] overflow-hidden opacity-90 z-[5] top-[40px] left-[100px]"
          >
            <div className="relative w-full h-full">
              <div ref={pupilRef1} className="absolute w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_4px_#34d399] bg-emerald-400 top-1/2 left-[40%]" />
              <div ref={pupilRef2} className="absolute w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_4px_#34d399] bg-emerald-400 top-1/2 left-[60%]" />
            </div>
          </div>
        </div>

        {/* Mesajlar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Houston, bir sorunumuz var.</h2>
          <p className="mb-8 text-lg text-gray-400">Aradığın sayfayı bu galakside bulamıyoruz.</p>

          {/* Butonlar */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link 
              to="/"
              className="flex items-center justify-center gap-2 px-8 py-3 font-bold text-black transition-all duration-300 rounded-lg shadow-lg bg-emerald-400 hover:bg-white hover:scale-105 hover:shadow-[0_0_20px_rgba(52,211,153,0.6)]"
            >
              <FaHome /> Ana Sayfaya Dön
            </Link>
            
            <a 
              href="mailto:ender.karan14@gmail.com"
              className="flex items-center justify-center gap-2 px-8 py-3 font-bold text-white transition-all duration-300 border-2 rounded-lg border-emerald-400/30 hover:bg-emerald-400/10 hover:border-emerald-400"
            >
              <FaEnvelope /> Destek İle İletişim
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;