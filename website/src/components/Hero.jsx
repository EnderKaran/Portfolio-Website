import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileimg from "../assets/images/logo-profile.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const navlinks = [
    { title: "Beni Tanıyın", path: "about", type: "scroll" },
    { title: "Çalışmalarıma Göz At", path: "portfolio", type: "scroll" },
    { title: "Kullandığım Teknolojiler", path: "/technologies", type: "route" },
    { title: "İletişime Geçin", path: "contact", type: "scroll" },
];

export const Hero = () => {
    const location = useLocation();
    const onHomePage = location.pathname === '/';
    const roles = ["ön yüz geliştiricisiyim.", "yazılım geliştiricisiyim."];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const renderLink = (link) => {
        const linkClasses = "group flex items-center gap-3 text-sm text-secondary hover:text-primary transition-colors duration-300 cursor-pointer";
        const iconClasses = "transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0";

        if (link.type === 'scroll' && onHomePage) {
            return (
                <ScrollLink to={link.path} spy={true} smooth={true} offset={-100} duration={500} className={linkClasses}>
                    {link.title}
                    <FiArrowRight className={iconClasses} />
                </ScrollLink>
            );
        }

        const toPath = link.type === 'scroll' ? `/#${link.path}` : link.path;
        return (
            <RouterLink to={toPath} className={linkClasses}>
                {link.title}
                <FiArrowRight className={iconClasses} />
            </RouterLink>
        );
    };

    return (
        <div className="relative min-h-screen overflow-hidden transition-colors duration-300 bg-background text-primary">
            
            <div className="absolute inset-0 z-0 opacity-0 dark:opacity-100 transition-opacity duration-500 bg-[linear-gradient(to_bottom,#000,#071E18_35%,#208A65_67%,#35FB8E_85%)]" />
            <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="absolute w-[150vmax] h-[150vmax] md:w-[2400px] md:h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 top-[450px] z-10 bg-[radial-gradient(closest-side,white_75%,#a7f3d0)] opacity-75 dark:bg-black dark:bg-[radial-gradient(closest-side,#000_85%,#249974)] dark:opacity-100"
            />

            <div className="container relative z-20 px-4 pt-12 pb-24 mx-auto">
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mt-24 mb-6"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-accent/20 to-transparent blur-3xl"></div>
                        <img src={profileimg} alt="Ender Karan" className="w-[250px] relative z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-2xl"
                    >
                        <h1 className="mb-4 text-6xl font-bold tracking-tighter md:text-7xl">
                            Merhaba, Ben <br /> Ender <span className="text-accent">Karan</span>
                        </h1>
                        <p className="flex items-center justify-center h-16 max-w-lg mx-auto mb-6 text-xl leading-relaxed text-center text-secondary">
                            Ben, kullanıcılara deneyim sağlayan web siteleri oluşturmaya odaklanan bir&nbsp;
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roleIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="ml-2 font-semibold text-accent"
                                >
                                    {roles[roleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </p>
                        
                        <div className="flex justify-center gap-4 mb-16">
                            <motion.a href="https://www.linkedin.com/in/ender-karan-52303b187" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block px-6 py-3 font-medium text-white transition-all duration-300 ease-in-out rounded-full shadow-lg bg-accent hover:bg-accent/80">
                                Bana Ulaşın
                            </motion.a>
                            <motion.a href="https://github.com/EnderKaran" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block px-6 py-3 font-medium transition-all duration-300 ease-in-out border rounded-full text-primary border-primary/40 hover:bg-primary/10">
                                Çalışmalarım
                            </motion.a>
                        </div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="w-full max-w-2xl p-4 mx-auto border rounded-2xl border-card-border bg-card-background/50 backdrop-blur-md"
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