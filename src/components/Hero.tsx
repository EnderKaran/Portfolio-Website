'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image"; 
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link"; 
import { usePathname } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import TechShape from './TechShape'; 

export const Hero = () => {
    const pathname = usePathname();
    const onHomePage = pathname === '/';
    const { t } = useTranslation();
    
    // YENİ ROL EKLENDİ
    const roles = [
        t('hero_role_frontend'), 
        t('hero_role_software'), 
        t('hero_role_fullstack') // "Full Stack Developer"
    ];
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
        const linkClasses = "group flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300 cursor-pointer";
        const iconClasses = "text-sm transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0";

        if (link.type === 'scroll' && onHomePage) {
            return (
                <ScrollLink to={link.path} spy={true} smooth={true} offset={-100} duration={500} className={linkClasses}>
                    {t(link.title)} <FiArrowRight className={iconClasses} />
                </ScrollLink>
            );
        }

        return (
            <Link href={link.type === 'scroll' ? `/#${link.path}` : link.path} className={linkClasses}>
                {t(link.title)} <FiArrowRight className={iconClasses} />
            </Link>
        );
    };

    return (
        <section className="relative min-h-screen overflow-hidden transition-colors duration-500 flex items-center justify-center pt-20">
            
            {/* Soft Glow Arka Plan */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40 dark:opacity-30 pointer-events-none">
                <div className="absolute top-[10%] left-[20%] w-[40%] h-[40%] bg-emerald-400/30 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[20%] right-[20%] w-[30%] h-[30%] bg-blue-500/20 blur-[100px] rounded-full"></div>
            </div>

            <div className="absolute top-0 left-0 z-0 flex justify-center w-full h-full opacity-60">
                <TechShape />
            </div>

            <div className="container relative z-10 px-4 mx-auto">
                <div className="flex flex-col items-center text-center">
                    
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative mb-10">
                        <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-2xl"></div>
                        <Image src="/assets/images/logo-profile.png" alt="Ender Karan" width={180} height={180} className="relative z-10 rounded-full drop-shadow-2xl" priority />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-4xl px-4">
                        <h1 className="mb-6 text-6xl font-black tracking-tighter md:text-8xl lg:text-[7rem] leading-none text-gray-900 dark:text-white">
                            {t('hero_greeting')} <br /> Ender <span className="text-emerald-500">Karan.</span>
                        </h1>
                        
                        <div className="flex flex-col items-center justify-center mb-12 text-xl font-medium text-gray-600 md:text-2xl dark:text-gray-300 md:flex-row md:gap-3">
                            <span>{t('hero_intro')}</span>
                            
                            {/* KUTU GENİŞLİĞİ ARTIRILDI (Full Stack sığsın diye) */}
                            <div className="relative inline-flex items-center justify-center h-10 min-w-[300px] overflow-hidden bg-gray-100 dark:bg-white/5 rounded-xl px-4 mt-4 md:mt-0">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={roleIndex}
                                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                                        className="absolute font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap"
                                    >
                                        {roles[roleIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>
                        
                        <div className="flex flex-col justify-center gap-4 mb-16 sm:flex-row">
                            <motion.a href="https://www.linkedin.com/in/ender-karan-52303b187" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 font-bold text-white transition-all rounded-full shadow-xl bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/25">
                                {t('hero_button_contact')}
                            </motion.a>
                            <ScrollLink to="portfolio" smooth={true} offset={-100} duration={500}>
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 font-bold transition-all border-2 rounded-full cursor-pointer text-gray-900 border-gray-200 dark:text-white dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-500">
                                    {t('hero_button_work')}
                                </motion.button>
                            </ScrollLink>
                        </div>
                        
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="w-full max-w-3xl p-4 mx-auto border rounded-2xl bg-white/40 dark:bg-black/20 border-gray-200/50 dark:border-white/5 backdrop-blur-xl">
                            <ul className="flex flex-col items-center justify-around gap-4 sm:flex-row sm:gap-0">
                                {navlinks.map((link, index) => (
                                    <li key={index}>{renderLink(link)}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>  
    );
};