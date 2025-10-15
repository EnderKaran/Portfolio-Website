
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import { Link as RouterLink, useLocation } from "react-router-dom"; 
import { motion, useScroll, useSpring } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ThemeToggle } from "./ThemeToggle";


const navlinks = [
    { title: "Anasayfa", path: "home", type: "scroll" },
    { title: "Hakkımda", path: "/about", type: "route" },
    { title: "Projeler", path: "/projects", type: "route" },
    { title: "Teknolojiler", path: "/technologies", type: "route" },
    { title: "İletişim", path: "/contact", type: "route" },
    { title: "Yenilikler", path: "/changelog", type: "route" }, 
];

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    
    const location = useLocation(); 
    const onHomePage = location.pathname === '/';

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const toggleNav = () => setNav(!nav);
    const closeNav = () => setNav(false);

    
    const renderLink = (link) => {
        if (link.type === 'scroll' && onHomePage) {
            return (
                <ScrollLink to={link.path} spy={true} smooth={true} offset={-100} duration={500} activeClass="active-link" className="text-sm transition-colors duration-300 cursor-pointer hover:text-accent">
                    {link.title}
                </ScrollLink>
            );
        }
        const toPath = link.type === 'scroll' ? `/#${link.path}` : link.path;
        return (
            <RouterLink to={toPath} className="text-sm transition-colors duration-300 cursor-pointer hover:text-accent">
                {link.title}
            </RouterLink>
        );
    };

    

    return (
        <>
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 dark:bg-emerald-400 origin-left z-[60]" style={{ scaleX }} />
            
            <div className="fixed z-50 flex justify-center w-full font-bold"> 
                <div className="items-center justify-center hidden p-2 mx-auto mt-8 border border-emerald-500/40 bg-white/80 dark:bg-black/70 backdrop-blur-xl rounded-3xl md:flex max-w-fit text-slate-800 dark:text-slate-200">
                    <ul className="flex flex-row items-center p-2 space-x-6">
                        {navlinks.map((link, index) => (
                            <li key={index}>{renderLink(link)}</li>
                        ))}
                        <li><ThemeToggle /></li>
                    </ul>
                </div>

                <div onClick={toggleNav} className="md:hidden absolute top-5 right-5 border border-emerald-500/40 rounded-lg z-[70] text-slate-800 dark:text-slate-200 p-2 cursor-pointer bg-white/80 dark:bg-black/70 backdrop-blur-xl">
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                <div className={`fixed left-0 top-0 w-full h-full bg-white/95 dark:bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ${nav ? "translate-x-0" : "-translate-x-full"}`}>
                    <ul className="flex flex-col items-center justify-center h-full space-y-8 text-slate-800 dark:text-slate-200"> 
                        {navlinks.map((link, index) => (
                            <li key={index}>
                                {link.type === 'scroll' && onHomePage ? (
                                    <ScrollLink to={link.path} spy={true} smooth={true} offset={-70} duration={500} onClick={closeNav} className="text-5xl transition-colors cursor-pointer hover:text-accent">
                                        {link.title}
                                    </ScrollLink>
                                ) : (
                                    <RouterLink to={link.type === 'scroll' ? `/#${link.path}` : link.path} onClick={closeNav} className="text-5xl transition-colors cursor-pointer hover:text-accent">
                                        {link.title}
                                    </RouterLink>
                                )}
                            </li>
                        ))}
                        <li className="absolute bottom-16"><ThemeToggle /></li>
                    </ul>
                </div>
            </div>
        </>
    );
};