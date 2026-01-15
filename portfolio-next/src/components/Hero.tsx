'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image"; // Next.js Image Component
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link"; // Next.js Link
import { usePathname } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import TechShape from './TechShape'; 

export const Hero = () => {
    const pathname = usePathname();
    const onHomePage = pathname === '/';
    const { t } = useTranslation();
    
    const roles = [t('hero_role_frontend'), t('hero_role_software')];
    const [roleIndex, setRoleIndex] = useState(0);

    const navlinks = [
        { title: 'hero_nav_knowMe', path: "about", type: "scroll" },
        { title: 'hero_nav_seeWork', path: "portfolio", type: "scroll" },
        { title: 'hero_nav_technologies', path: "/technologies", type: "route" },
        { title: 'hero_nav_contact', path: "contact", type: "scroll" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [roles.length]);

    const renderLink = (link: any) => {
        const linkClasses = "group flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors duration-300 cursor-pointer";
        const iconClasses = "text-xs sm:text-sm transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0";

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
            <Link href={toPath} className={linkClasses}>
                {t(link.title)}
                <FiArrowRight className={iconClasses} />
            </Link>
        );
    };

    return (
        <div className="relative min-h-screen overflow-hidden transition-colors duration-500 bg-white dark:bg-black text-slate-800 dark:text-slate-200">
            
            <div className="absolute inset-0 z-0 transition-opacity duration-500 opacity-100 dark:opacity-0 bg-gradient-to-b from-white to-emerald-50" />
            <div className="absolute inset-0 z-0 opacity-0 dark:opacity-100 transition-opacity duration-500 bg-[linear-gradient(to_bottom,#000,#071E18_35%,#208A65_67%,#35FB8E_85%)]" />

            <div className="absolute top-0 left-0 z-10 flex justify-center w-full h-full">
                <TechShape />
            </div>

            <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute w-[200vmax] h-[200vmax] md:w-[2400px] md:h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 top-[450px] z-10"
            >
                <div className="absolute inset-0 bg-white bg-[radial-gradient(closest-side,white_85%,#d1fae5)] opacity-100 dark:opacity-0 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-black bg-[radial-gradient(closest-side,#000_85%,#249974)] opacity-0 dark:opacity-100 transition-opacity duration-500" />
            </motion.div>

            <div className="container relative z-20 px-4 pt-12 pb-24 mx-auto">
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mt-24 mb-6"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-emerald-500/20 to-transparent blur-3xl"></div>
                        
                        {/* Next.js Image Optimization */}
                        <Image 
                            src="/assets/images/logo-profile.png" 
                            alt="Ender Karan" 
                            width={250} 
                            height={250}
                            className="relative z-10 w-[250px] h-auto"
                            priority // LCP için önemli
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-2xl px-4"
                    >
                        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-slate-800 dark:text-white">
                            {t('hero_greeting')} <br /> Ender <span className="text-emerald-600 dark:text-emerald-400">Karan</span>
                        </h1>
                        
                        <div className="flex flex-col items-center justify-center max-w-lg mx-auto mb-8 text-base leading-relaxed text-center sm:text-lg md:text-xl text-slate-600 dark:text-slate-200 md:flex-row md:gap-2 md:items-baseline">
                            <span>{t('hero_intro')}</span>
                            
                            <div className="relative inline-flex items-center justify-center h-8 sm:h-9 md:h-10 min-w-[200px] sm:min-w-[240px] md:min-w-[260px] overflow-hidden bg-slate-100 dark:bg-white/10 rounded-lg px-2 sm:px-3 ml-0 mt-2 md:mt-0 align-bottom">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={roleIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="absolute text-sm font-bold sm:text-base md:text-lg text-emerald-600 dark:text-emerald-400 whitespace-nowrap"
                                    >
                                        {roles[roleIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>
                        
                        <div className="flex flex-col justify-center gap-3 px-4 mb-12 sm:flex-row sm:gap-4 sm:mb-16">
                            <motion.a href="https://www.linkedin.com/in/ender-karan-52303b187" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white transition-all duration-300 ease-in-out rounded-full shadow-lg bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600">
                                {t('hero_button_contact')}
                            </motion.a>
                            <motion.a href="https://github.com/EnderKaran" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 ease-in-out border rounded-full text-slate-800 border-slate-400 hover:bg-slate-100 dark:text-white dark:border-white/40 dark:hover:bg-white/10">
                                {t('hero_button_work')}
                            </motion.a>
                        </div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="w-full max-w-2xl p-3 mx-auto border sm:p-4 rounded-2xl bg-white/50 border-slate-200 dark:bg-black/30 dark:border-white/10 backdrop-blur-md"
                        >
                            <ul className="flex flex-col items-center justify-around md:flex-row gap-y-3 sm:gap-y-4 md:gap-y-0">
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