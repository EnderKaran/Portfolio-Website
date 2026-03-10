'use client';

import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { motion, useScroll, useSpring } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher"; 
import { useTranslation } from "react-i18next"; 

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const pathname = usePathname(); // Mevcut yolu al
    const onHomePage = pathname === '/';
    const { t } = useTranslation();

    const navlinks = [
        { title: t('nav_home'), path: "home", type: "scroll" },
        { title: t('nav_about'), path: "/about", type: "route" },
        { title: t('nav_projects'), path: "/projects", type: "route" },
        { title: t('nav_technologies'), path: "/technologies", type: "route" },
        { title: t('nav_contact'), path: "/contact", type: "route" },
        { title: t('nav_changelog'), path: "/changelog", type: "route" },
    ];

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const toggleNav = () => setNav(!nav);
    const closeNav = () => setNav(false);

    const renderLink = (link: any) => {
        // Anasayfadaysak ve link scroll tipindeyse
        if (link.type === 'scroll' && onHomePage) {
            return (
                <ScrollLink to={link.path} spy={true} smooth={true} offset={-100} duration={500} activeClass="active-link" className="text-sm transition-colors duration-300 cursor-pointer hover:text-accent">
                    {link.title}
                </ScrollLink>
            );
        }
        
        // Diğer durumlar için Next.js Link
        const toPath = link.type === 'scroll' ? `/#${link.path}` : link.path;
        const isActive = pathname === link.path;

        return (
            <Link href={toPath} className={`text-sm transition-colors duration-300 cursor-pointer hover:text-accent ${isActive ? 'active-link' : ''}`}>
                {link.title}
            </Link>
        );
    };

    return (
        <>
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[60]" style={{ scaleX }} />
            
            <div className="fixed z-50 flex justify-center w-full font-bold"> 
                <div className="items-center justify-center hidden p-2 mx-auto mt-8 border border-gray-200 dark:border-gray-700/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl md:flex max-w-fit text-gray-800 dark:text-gray-200">
                    <ul className="flex flex-row items-center p-2 space-x-4">
                        {navlinks.map((link, index) => (
                            <li key={index}>{renderLink(link)}</li>
                        ))}
                        <div className="w-px h-5 mx-2 bg-gray-300 dark:bg-gray-700"></div>
                        <li><ThemeToggle /></li>
                        <li><LanguageSwitcher /></li>
                    </ul>
                </div>

                <div onClick={toggleNav} className="md:hidden absolute top-5 right-5 border border-gray-200 dark:border-gray-700 rounded-lg z-[70] text-gray-800 dark:text-gray-200 p-2 cursor-pointer bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                <div className={`fixed left-0 top-0 w-full h-full bg-white/95 dark:bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ${nav ? "translate-x-0" : "-translate-x-full"}`}>
                    <ul className="flex flex-col items-center justify-center h-full space-y-8 text-gray-800 dark:text-gray-200"> 
                        {navlinks.map((link, index) => (
                            <li key={index}>
                                {link.type === 'scroll' && onHomePage ? (
                                    <ScrollLink to={link.path} smooth={true} offset={-70} duration={500} onClick={closeNav} className="text-5xl transition-colors cursor-pointer hover:text-accent">
                                        {link.title}
                                    </ScrollLink>
                                ) : (
                                    <Link href={link.type === 'scroll' ? `/#${link.path}` : link.path} onClick={closeNav} className="text-5xl transition-colors cursor-pointer hover:text-accent">
                                        {link.title}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <li className="absolute flex items-center gap-6 bottom-16">
                            <ThemeToggle />
                            <LanguageSwitcher />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};