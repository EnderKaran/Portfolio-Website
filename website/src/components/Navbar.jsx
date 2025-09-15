import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, useScroll, useSpring } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { ThemeToggle } from "./ThemeToggle";

const navlinks = [
    { title: "Hakkımda", path: "about" },
    { title: "Projeler", path: "portfolio" },
    { title: "Teknolojiler", path: "stack" },
    { title: "İletişim", path: "contact" },
];

export const Navbar = () => {
    const [nav, setNav] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    return (
        <>
            {/* Okuma İlerlemesi Çubuğu */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 dark:bg-emerald-400 origin-left z-[60]"
                style={{ scaleX }}
            />
            
            <div className="z-50 fixed flex justify-center w-full font-bold"> 
                
                {/* Masaüstü Menüsü */}
                <div 
                    
                    className="border border-emerald-500/40 mt-8 bg-white/80 dark:bg-black/70 backdrop-blur-xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-fit mx-auto text-slate-800 dark:text-slate-200"
                >
                    <ul className="flex flex-row items-center p-2 space-x-6">
                        {navlinks.map((link, index) => (
                            <li key={index}>
                                <ScrollLink
                                    to={link.path}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    activeClass="active-link"
                                    className="text-sm cursor-pointer hover:text-accent transition-colors duration-300"
                                >
                                    {link.title}
                                </ScrollLink>
                            </li>
                        ))}
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>
                </div>

                {/* Mobil Menü Butonu */}
                <div
                    onClick={toggleNav}
                    
                    className="md:hidden absolute top-5 right-5 border border-emerald-500/40 rounded-lg z-[70] text-slate-800 dark:text-slate-200 p-2 cursor-pointer bg-white/80 dark:bg-black/70 backdrop-blur-xl"
                >
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                {/* Mobil Menü Paneli */}
                <div
                   
                    className={`fixed left-0 top-0 w-full h-full bg-white/95 dark:bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ${
                        nav ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <ul className="flex flex-col items-center justify-center space-y-8 h-full text-slate-800 dark:text-slate-200"> 
                        {navlinks.map((link, index) => (
                            <li key={index}>
                                <ScrollLink
                                    to={link.path}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={closeNav}
                                    className="text-5xl cursor-pointer hover:text-accent transition-colors"
                                >
                                    {link.title}
                                </ScrollLink>
                            </li>
                        ))}
                        <li className="absolute bottom-16">
                           <ThemeToggle />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};