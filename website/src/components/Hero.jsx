import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileimg from "../assets/images/logo-profile.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

export const Hero = () => {
    const location = useLocation();
    const onHomePage = location.pathname === '/';
    const { t } = useTranslation();
    
    const roles = [t('hero_role_frontend'), t('hero_role_software')];
    const [roleIndex, setRoleIndex] = useState(0);

    const navlinks = [
        { title: t('hero_nav_knowMe'), path: "about", type: "scroll" },
        { title: t('hero_nav_seeWork'), path: "portfolio", type: "scroll" },
        { title: t('hero_nav_technologies'), path: "/technologies", type: "route" },
        { title: t('hero_nav_contact'), path: "contact", type: "scroll" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
        }, 5000); 

        return () => clearInterval(interval);
    }, [roles]);

    const renderLink = (link) => {
        const linkClasses = "group flex items-center gap-3 text-sm text-slate-400 hover:text-slate-200 transition-colors duration-300 cursor-pointer";
        const iconClasses = "transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0";

        if (link.type === 'scroll' && onHomePage) {
            return (
                <ScrollLink to={link.path} spy={true} smooth={true} offset={-100} duration={500} className={linkClasses}>
                    {t(link.title)} 
                    <FiArrowRight className={iconClasses} />
                </ScrollLink>
            );
        }

        const toPath = link.type === 'scroll' ? `/#${link.path}` : link.path;
        return (
            <RouterLink to={toPath} className={linkClasses}>
                {t(link.title)}
                <FiArrowRight className={iconClasses} />
            </RouterLink>
        );
    };

    return (
        <div className="relative min-h-screen overflow-hidden transition-colors duration-500 bg-white dark:bg-black text-slate-800 dark:text-slate-200">
            
            {/* Arka Plan Katmanları */}
            <div className="absolute inset-0 z-0 transition-opacity duration-500 opacity-100 dark:opacity-0 bg-gradient-to-b from-white to-emerald-50" />
            <div className="absolute w-[200vmax] h-[200vmax] md:w-[2400px] md:h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 top-[450px] z-10 bg-white bg-[radial-gradient(closest-side,white_85%,#d1fae5)] opacity-100 dark:opacity-0 transition-opacity duration-500" />
            <div className="absolute inset-0 z-0 opacity-0 dark:opacity-100 transition-opacity duration-500 bg-[linear-gradient(to_bottom,#000,#071E18_35%,#208A65_67%,#35FB8E_85%)]" />
            <div className="absolute w-[150vmax] h-[150vmax] md:w-[2400px] md:h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 top-[450px] z-10 bg-black bg-[radial-gradient(closest-side,#000_85%,#249974)] opacity-0 dark:opacity-100 transition-opacity duration-500" />

            <div className="container relative z-20 px-4 pt-12 pb-24 mx-auto">
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mt-24 mb-6"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-emerald-500/20 to-transparent blur-3xl"></div>
                        <img src={profileimg} alt="Ender Karan" className="w-[250px] relative z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-2xl"
                    >
                        <h1 className="mb-4 text-6xl font-bold tracking-tighter md:text-7xl text-slate-800 dark:text-white">
                            {t('hero_greeting')} <br /> Ender <span className="text-emerald-600 dark:text-emerald-400">Karan</span>
                        </h1>
                        
                        <p className="flex items-center justify-center h-16 max-w-lg mx-auto mb-6 text-xl leading-relaxed text-center text-slate-600 dark:text-slate-400">
                            {t('hero_intro')}&nbsp;
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roleIndex}
                                    
                                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} // Aşağıdan ve bulanık başla
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}   // Ortaya gel ve netleş
                                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}   // Yukarı git ve bulanıklaş
                                    transition={{ duration: 0.8, ease: "easeInOut" }}     // 0.8 saniyelik yumuşak geçiş
                                    className="inline-block ml-2 font-semibold text-emerald-600 dark:text-emerald-400"
                                >
                                    {roles[roleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </p>
                        
                        <div className="flex justify-center gap-4 mb-16">
                            <motion.a href="https://www.linkedin.com/in/ender-karan-52303b187" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block px-6 py-3 font-medium text-white transition-all duration-300 ease-in-out rounded-full shadow-lg bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600">
                                {t('hero_button_contact')}
                            </motion.a>
                            <motion.a href="https://github.com/EnderKaran" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block px-6 py-3 font-medium transition-all duration-300 ease-in-out border rounded-full text-slate-800 border-slate-400 hover:bg-slate-100 dark:text-white dark:border-white/40 dark:hover:bg-white/10">
                                {t('hero_button_work')}
                            </motion.a>
                        </div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="w-full max-w-2xl p-4 mx-auto border rounded-2xl bg-white/50 border-slate-200 dark:bg-black/30 dark:border-white/10 backdrop-blur-md"
                        >
                            <ul className="flex flex-col items-center justify-around md:flex-row gap-y-4 md:gap-y-0">
                                {navlinks.map((link, index) => (
                                    <li key={index}>{renderLink(link)}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};