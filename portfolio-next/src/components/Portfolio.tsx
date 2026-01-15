'use client';

import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

export const Portfolio = () => {
    const { t } = useTranslation();
    
    const projects = [
        {
            title: t('portfolio_project1_title'),
            desc: t('portfolio_project1_desc'),
            devstack: t('portfolio_project1_devstack'),
            link: "https://enderkaran.github.io/Coffee-Website",
            git: "https://github.com/EnderKaran/Coffee-Website",
            src: "/assets/images/project-1.png",
            type: t('portfolio_project1_type'),
        },
        {
            title: t('portfolio_project2_title'),
            desc: t('portfolio_project2_desc'),
            devstack: t('portfolio_project2_devstack'),
            link: "https://senole.vercel.app",
            git: "https://github.com/EnderKaran/Senole",
            src: "/assets/images/project-2.png",
            type: t('portfolio_project2_type'),
        },
    ];
    
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="portfolio" className="py-24 transition-colors duration-300 bg-white dark:bg-black text-gray-800 dark:text-gray-200 md:py-48">
            <div className="container px-4 mx-auto">
                <h2 className="mb-12 text-4xl font-bold text-center md:text-5xl">
                    {t('portfolio_title_part1')} <span className="text-emerald-500 dark:text-emerald-400">{t('portfolio_title_part2')}</span>
                </h2>

                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="overflow-hidden transition-shadow duration-300 border rounded-lg shadow-lg bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:shadow-xl"
                        >
                            <div
                                className="flex items-center justify-between p-6 transition-colors cursor-pointer bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800"
                                onClick={() => toggleExpand(index)}
                            >
                                <h3 className="text-2xl font-semibold md:text-4xl text-gray-900 dark:text-white">{project.title}</h3>
                                <div className="flex items-center space-x-4">
                                    <span className="text-xl font-light md:text-3xl text-emerald-500">
                                        0{index + 1}
                                    </span>
                                    <FiChevronDown
                                        className={`w-6 h-6 transform transition-transform text-gray-500 ${expandedIndex === index ? "rotate-180" : ""}`}
                                    />
                                </div>
                            </div>

                            <AnimatePresence>
                                {expandedIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="border-t bg-gray-50 dark:bg-black/20 border-gray-200 dark:border-gray-800"
                                    >
                                        <div className="flex flex-col gap-8 p-6 md:flex-row">
                                            <div className="relative w-full h-48 md:w-1/2 md:h-64 rounded-lg overflow-hidden">
                                                 <Image
                                                    src={project.src}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">{project.desc}</p>
                                                <p className="mb-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                                    <span className="font-bold text-gray-800 dark:text-gray-200">{t('portfolio_label_tech')}</span> {project.devstack}
                                                </p>
                                                <p className="mb-4 text-sm font-medium capitalize text-emerald-600/70 dark:text-emerald-400/70">
                                                    <span className="font-bold text-gray-800 dark:text-gray-200">{t('portfolio_label_type')}</span> {project.type}
                                                </p>
                                                <div className="flex items-center justify-start space-x-6 text-3xl">
                                                    <a target="_blank" rel="noopener noreferrer" href={project.link} className="transition-colors text-emerald-500 hover:text-emerald-600">
                                                        <HiOutlineExternalLink />
                                                    </a>
                                                    <a target="_blank" rel="noopener noreferrer" href={project.git} className="transition-colors text-emerald-500 hover:text-emerald-600">
                                                        <FaGithub />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div> 
                    ))}
                </div>
            </div>
        </section>
    );
};