import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import proj1 from "../assets/images/project-1.png";
import proj2 from "../assets/images/project-2.png";
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
            src: proj1,
            type: t('portfolio_project1_type'),
        },
        {
            title: t('portfolio_project2_title'),
            desc: t('portfolio_project2_desc'),
            devstack: t('portfolio_project2_devstack'),
            link: "https://senole.vercel.app",
            git: "https://github.com/EnderKaran/Senole",
            src: proj2,
            type: t('portfolio_project2_type'),
        },
    ];
    
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="portfolio" className="py-24 transition-colors duration-300 bg-background text-primary md:py-48">
            <div className="container px-4 mx-auto">
                <h2 className="mb-12 text-5xl font-bold text-center md:text-6xl">
                    {t('portfolio_title_part1')} <span className="text-accent">{t('portfolio_title_part2')}</span>
                </h2>

                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="overflow-hidden transition-shadow duration-300 border rounded-lg shadow-lg bg-card-background border-card-border hover:shadow-xl"
                        >
                            <div
                                className="flex items-center justify-between p-6 transition-colors cursor-pointer bg-primary/5 hover:bg-primary/10"
                                onClick={() => toggleExpand(index)}
                            >
                                <h3 className="text-2xl font-semibold md:text-4xl text-primary">{project.title}</h3>
                                <div className="flex items-center space-x-4">
                                    <span className="text-xl font-light md:text-3xl text-accent">
                                        0{index + 1}
                                    </span>
                                    <FiChevronDown
                                        className={`w-6 h-6 transform transition-transform text-secondary ${expandedIndex === index ? "rotate-180" : ""
                                            }`}
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
                                        className="border-t bg-black/5 dark:bg-black/20 border-card-border"
                                    >
                                        <div className="flex flex-col gap-8 p-6 md:flex-row">
                                            <img
                                                src={project.src}
                                                alt={project.title}
                                                className="object-cover w-full h-auto rounded-lg md:w-1/2 md:h-64"
                                            />
                                            <div className="flex-1">
                                                <p className="mb-4 leading-relaxed text-secondary">{project.desc}</p>
                                                <p className="mb-2 text-sm font-medium text-accent">
                                                    <span className="font-bold text-primary/80">{t('portfolio_label_tech')}</span> {project.devstack}
                                                </p>
                                                <p className="mb-4 text-sm font-medium capitalize text-accent/70">
                                                    <span className="font-bold text-primary/80">{t('portfolio_label_type')}</span> {project.type}
                                                </p>
                                                <div className="flex items-center justify-start space-x-6 text-3xl">
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href={project.link}
                                                        className="transition-colors text-accent hover:text-accent/70"
                                                    >
                                                        <HiOutlineExternalLink />
                                                    </a>
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href={project.git}
                                                        className="transition-colors text-accent hover:text-accent/70"
                                                    >
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