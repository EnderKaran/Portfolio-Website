import React from 'react';
import { motion } from 'framer-motion';
import profileimg from "../assets/images/logo-profile.png";

export const Hero = () => {
    return (
        
        <div className="relative overflow-hidden min-h-screen bg-white dark:bg-black text-slate-800 dark:text-slate-200 transition-colors duration-500">

            
            <div
                className="absolute inset-0 z-0 opacity-100 dark:opacity-0 transition-opacity duration-500 bg-gradient-to-b from-white to-emerald-50"
            />
            <div
                className="absolute w-[200vmax] h-[200vmax] md:w-[2400px] md:h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2
                           top-[450px] z-10 bg-white bg-[radial-gradient(closest-side,white_85%,#d1fae5)]
                           opacity-100 dark:opacity-0 transition-opacity duration-500"
            />

            
            <div
                className="absolute inset-0 z-0 opacity-0 dark:opacity-100 transition-opacity duration-500 bg-[linear-gradient(to_bottom,#000,#071E18_35%,#208A65_67%,#35FB8E_85%)]"
            />
            <div
                className="absolute w-[150vmax] h-[150vmax] md:w-[2400px] md:h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2
                           top-[450px] z-10 bg-black bg-[radial-gradient(closest-side,#000_85%,#249974)]
                           opacity-0 dark:opacity-100 transition-opacity duration-500"
            />

            
            <div className="container relative mx-auto px-4 pt-12 pb-24 z-20">
                <div className="flex flex-col items-center justify-center text-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mb-6 mt-24"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent rounded-full blur-3xl"></div>
                        <img
                            src={profileimg}
                            alt="Ender Karan"
                            className="w-[250px] relative z-10"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-2xl"
                    >
                        
                        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">
                            Merhaba, Ben <br /> Ender <span className="text-accent">Karan</span>
                        </h1>
                        
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed mb-6">
                            Ben, kullanıcılara deneyim sağlayan web siteleri oluşturmaya odaklanan ön yüz geliştiricisiyim.
                        </p>
                        
                        <div className="flex gap-4 justify-center">
                            
                            <motion.a
                                href="https://www.linkedin.com/in/ender-karan-52303b187"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block px-6 py-3 border-2 border-primary/60 rounded-full font-medium text-primary hover:bg-primary/10 transition-all duration-300 ease-in-out"
                            >
                                Bana Ulaşın
                            </motion.a>
                            {/* İkincil Buton */}
                            <motion.a
                                href="https://github.com/EnderKaran"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block px-6 py-3 border border-primary/40 rounded-full font-medium text-primary hover:bg-primary/10 transition-all duration-300 ease-in-out"
                            >
                                Çalışmalarım
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};