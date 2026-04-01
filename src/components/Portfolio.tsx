'use client';

import React from "react";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

export const Portfolio = () => {
    const { t } = useTranslation();
    
    const projects = [
        {
            title: t('portfolio_project1_title'),
            desc: t('portfolio_project1_desc'),
            devstack: ["React", "Vite", "Tailwind CSS"],
            link: "https://enderkaran.github.io/Coffee-Website",
            git: "https://github.com/EnderKaran/Coffee-Website",
            src: "/assets/images/project-1.png",
            type: t('portfolio_project1_type'),
        },
        {
            title: t('portfolio_project2_title'),
            desc: t('portfolio_project2_desc'),
            devstack: ["React", "MUI", "Framer Motion"],
            link: "https://senole.vercel.app",
            git: "https://github.com/EnderKaran/Senole",
            src: "/assets/images/project-2.png",
            type: t('portfolio_project2_type'),
        },
    ];

    return (
        <section id="portfolio" className="py-24 transition-colors duration-300 md:py-40">
            <div className="container px-4 mx-auto max-w-[1200px]">
                <div className="flex flex-col items-center justify-between gap-8 mb-16 md:flex-row md:items-end">
                    <div className="text-center md:text-left">
                        <h2 className="mb-4 text-5xl font-black tracking-tighter md:text-7xl text-gray-900 dark:text-white">
                            {t('portfolio_title_part1')} <span className="text-emerald-500">{t('portfolio_title_part2')}</span>
                        </h2>
                    </div>
                    
                    {/* Daha Fazlası İçin Projeler Sayfasına Yönlendiren Buton */}
                    <Link 
                        href="/projects" 
                        className="flex items-center gap-2 px-8 py-3.5 rounded-2xl border-2 border-emerald-500/20 dark:border-white/10 font-bold text-gray-900 dark:text-white hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all group"
                    >
                        Tüm Projeleri Gör <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="group relative rounded-[2.5rem] overflow-hidden bg-gray-100 dark:bg-[#0a0a0a] aspect-[4/3] border border-gray-200 dark:border-white/5 shadow-lg"
                        >
                            {/* Proje Görseli */}
                            <Image 
                                src={project.src} 
                                alt={project.title} 
                                fill 
                                className="object-cover transition-all duration-700 md:grayscale group-hover:grayscale-0 group-hover:scale-105" 
                            />
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 opacity-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:opacity-100">
                                <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                                    <span className="block mb-2 text-xs font-bold tracking-widest uppercase text-emerald-400">{project.type}</span>
                                    <h3 className="mb-3 text-3xl font-black text-white tracking-tight">{project.title}</h3>
                                    
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.devstack.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 text-xs font-bold text-white uppercase border rounded-lg bg-white/20 backdrop-blur-md border-white/10">{tech}</span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-black transition-transform bg-white rounded-xl hover:scale-105">
                                            Canlı Demo <HiOutlineExternalLink size={18} />
                                        </a>
                                        <a href={project.git} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 text-white transition-colors border rounded-xl bg-black/50 border-white/20 hover:bg-emerald-500 hover:border-emerald-500">
                                            <FaGithub size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};