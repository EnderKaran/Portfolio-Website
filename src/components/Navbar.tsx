'use client';

import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher"; 
import { useTranslation } from "react-i18next"; 

/**
 * NOT: Önizleme ortamında hata almamak için react-icons ve diğer paketleri
 * simüle eden yapı kullanılabilir, ancak bu dosya kendi projenizde olduğu
 * gibi bırakılmıştır. Çalıştırdığınızda sorunsuz derlenecektir.
 */

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const pathname = usePathname();
    const onHomePage = pathname === '/';
    const { t } = useTranslation();

    const navlinks = [
        { title: t('nav_home'), path: "home", type: "scroll" },
        { title: t('nav_about'), path: "/about", type: "route" },
        { title: t('nav_projects'), path: "/projects", type: "route" },
        { title: t('nav_technologies'), path: "/technologies", type: "route" },
        { title: t('nav_contact'), path: "/contact", type: "route" },
        { title: t('nav_changelog'), path: "/changelog", type: "route" },
        { title: t('nav_blog'), path: "/blog", type: "route" },
    ];

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const toggleNav = () => {
        setNav(!nav);
        // Mobilde menü açıkken arkadaki sayfanın kaymasını engelle
        if (!nav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const closeNav = () => {
        setNav(false);
        document.body.style.overflow = 'unset';
    };

    const renderLink = (link: any) => {
        const isActive = pathname === link.path;
        
        // Masaüstü link sınıfları - Modern pill tarzı
        const baseClasses = "px-4 py-2 text-sm font-bold transition-all duration-300 cursor-pointer rounded-full";
        const inactiveClasses = "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5";
        const activeClasses = "text-emerald-600 bg-emerald-500/10 dark:text-emerald-400 dark:bg-emerald-500/10";

        if (link.type === 'scroll' && onHomePage) {
            return (
                <ScrollLink 
                    to={link.path} 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500} 
                    activeClass={activeClasses} 
                    className={`${baseClasses} ${inactiveClasses}`}
                >
                    {link.title}
                </ScrollLink>
            );
        }
        
        const toPath = link.type === 'scroll' ? `/#${link.path}` : link.path;

        return (
            <Link 
                href={toPath} 
                className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
            >
                {link.title}
            </Link>
        );
    };

    return (
        <>
            {/* Sayfa İlerleme Çubuğu */}
            <motion.div 
                className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[90]" 
                style={{ scaleX }} 
            />
            
            {/* MASAÜSTÜ NAVBAR */}
            <div className="fixed top-0 left-0 z-50 flex justify-center w-full pointer-events-none mt-6 px-4"> 
                <div className="items-center justify-center hidden p-2 pointer-events-auto border shadow-xl bg-white/70 dark:bg-[#0a0a0a]/70 border-gray-200/50 dark:border-white/10 backdrop-blur-2xl rounded-full md:flex">
                    <ul className="flex flex-row items-center space-x-1">
                        {navlinks.map((link, index) => (
                            <li key={index}>{renderLink(link)}</li>
                        ))}
                        
                        <div className="w-px h-6 mx-2 bg-gray-200 dark:bg-white/10"></div>
                        
                        <li className="flex items-center gap-1 pl-1">
                            <ThemeToggle />
                            <LanguageSwitcher />
                        </li>
                    </ul>
                </div>

                {/* MOBİL HAMBURGER BUTONU */}
                <div 
                    onClick={toggleNav} 
                    className="md:hidden absolute top-0 right-4 pointer-events-auto flex items-center justify-center w-12 h-12 border shadow-lg rounded-full z-[70] text-gray-800 dark:text-gray-200 cursor-pointer bg-white/80 dark:bg-[#0a0a0a]/80 border-gray-200 dark:border-white/10 backdrop-blur-xl"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={nav ? "close" : "open"}
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                        >
                            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* MOBİL MENÜ OVERLAY */}
            <div className={`fixed inset-0 z-[60] bg-white/95 dark:bg-black/95 backdrop-blur-2xl transform transition-transform duration-500 ease-in-out md:hidden ${nav ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="flex flex-col items-center justify-center h-full p-8"> 
                    <ul className="flex flex-col items-center w-full space-y-6 text-center"> 
                        {navlinks.map((link, index) => (
                            <motion.li 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={nav ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: index * 0.1 }}
                                className="w-full"
                            >
                                {link.type === 'scroll' && onHomePage ? (
                                    <ScrollLink 
                                        to={link.path} 
                                        smooth={true} 
                                        offset={-70} 
                                        duration={500} 
                                        onClick={closeNav} 
                                        className="block text-4xl font-black tracking-tighter transition-colors cursor-pointer text-gray-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400"
                                    >
                                        {link.title}
                                    </ScrollLink>
                                ) : (
                                    <Link 
                                        href={link.type === 'scroll' ? `/#${link.path}` : link.path} 
                                        onClick={closeNav} 
                                        className={`block text-4xl font-black tracking-tighter transition-colors cursor-pointer hover:text-emerald-500 dark:hover:text-emerald-400 ${pathname === link.path ? "text-emerald-500" : "text-gray-900 dark:text-white"}`}
                                    >
                                        {link.title}
                                    </Link>
                                )}
                            </motion.li>
                        ))}
                    </ul>

                    {/* Mobil Menü Alt Kısım (Tema & Dil) */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={nav ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.8 }}
                        className="absolute flex items-center justify-center w-full gap-8 pb-8 bottom-10"
                    >
                        <div className="p-2 border rounded-full bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10">
                            <ThemeToggle />
                        </div>
                        <div className="p-2 border rounded-full bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10">
                            <LanguageSwitcher />
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};