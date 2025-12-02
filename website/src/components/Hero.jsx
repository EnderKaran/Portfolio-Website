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
        const linkClasses = "group flex items-center gap-3 text-sm font-medium text-[rgb(var(--color-text-primary))] hover:text-[rgb(var(--color-accent))] transition-colors duration-300 cursor-pointer";
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
        <div className="relative min-h-screen overflow-hidden transition-colors duration-700 bg-[rgb(var(--color-background))] text-[rgb(var(--color-text-primary))]">
            
            {/* --- ARKA PLAN VE GEZEGEN --- */}
            
            {/* 1. Arka Plan Gradienti */}
            <div className="absolute inset-0 z-0 transition-all duration-700 
                bg-gradient-to-b from-transparent to-emerald-50/50 
                dark:to-emerald-900/10" 
            />

            {/* 2. AY / GEZEGEN (Light: Yeşil Çerçeveli Beyaz, Dark: Siyah) */}
            <div className="
                absolute z-10 rounded-[50%] 
                left-1/2 -translate-x-1/2 top-[450px]
                transition-all duration-700 ease-in-out
                
                /* LIGHT MOD */
                w-[200vmax] h-[200vmax] md:w-[2400px] md:h-[1000px]
                bg-[radial-gradient(closest-side,white_60%,#d1fae5)]
                shadow-[0_0_50px_rgba(5,150,105,0.1)]
                
                /* DARK MOD */
                dark:w-[150vmax] dark:h-[150vmax] dark:md:w-[2400px] dark:md:h-[1000px]
                dark:shadow-none
                dark:bg-[radial-gradient(closest-side,#000_85%,rgb(var(--color-accent)))]
            "/>

            {/* --- İÇERİK --- */}
            <div className="container relative z-20 px-4 pt-12 pb-24 mx-auto">
                <div className="flex flex-col items-center justify-center h-full text-center">
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mt-16 mb-6 md:mt-24"
                    >
                        <div className="absolute inset-0 rounded-full bg-[rgb(var(--color-accent))] opacity-20 blur-3xl animate-pulse"></div>
                        <img src={profileimg} alt="Ender Karan" className="w-40 md:w-[250px] relative z-10 drop-shadow-2xl" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-3xl"
                    >
                        <h1 className="mb-4 text-4xl font-bold tracking-tighter md:text-7xl text-[rgb(var(--color-text-primary))]">
                            {t('hero_greeting')} <br /> Ender <span className="text-[rgb(var(--color-accent))]">Karan</span>
                        </h1>
                        
                        <p className="flex flex-col items-center justify-center max-w-lg mx-auto mb-8 text-lg font-medium leading-relaxed text-center md:flex-row md:mb-10 md:text-xl text-[rgb(var(--color-text-primary))]">
                            <span>{t('hero_intro')}</span>&nbsp;
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roleIndex}
                                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} 
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}   
                                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}   
                                    transition={{ duration: 0.8, ease: "easeInOut" }}     
                                    className="inline-block font-semibold text-[rgb(var(--color-accent))]"
                                >
                                    {roles[roleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </p>
                        
                        <div className="flex flex-col justify-center gap-4 mb-16 sm:flex-row">
                            <motion.a 
                                href="https://www.linkedin.com/in/ender-karan-52303b187" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }} 
                                className="inline-block px-6 py-3 font-medium text-white transition-all duration-300 ease-in-out rounded-full shadow-lg bg-[rgb(var(--color-accent))] hover:brightness-110"
                            >
                                {t('hero_button_contact')}
                            </motion.a>

                            <motion.a 
                                href="https://github.com/EnderKaran" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }} 
                                className="inline-block px-6 py-3 font-medium transition-all duration-300 ease-in-out border-2 rounded-full text-[rgb(var(--color-text-primary))] border-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-text-primary))] hover:text-[rgb(var(--color-background))]"
                            >
                                {t('hero_button_work')}
                            </motion.a>
                        </div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="w-full max-w-2xl p-4 mx-auto border rounded-2xl bg-[rgba(var(--color-card-background),0.5)] border-[rgb(var(--color-card-border))] backdrop-blur-md"
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