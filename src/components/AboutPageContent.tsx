'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, Variants } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaAward, FaGithub, FaCodepen } from 'react-icons/fa';

// Timeline Item Props Tipi
interface TimelineItemProps {
    icon: React.ReactNode;
    date?: string;
    title?: string;
    company?: string;
    school?: string;
    description?: string | string[];
    skills?: string[];
    details?: string;
    isLeft: boolean;
}

const TimelineItem = ({ icon, date, title, company, school, description, skills, details, isLeft }: TimelineItemProps) => {
    const cardVariants: Variants = {
        hidden: { opacity: 0, x: isLeft ? -50 : 50 },
        visible: { opacity: 1, x: 0 }
    };
    const sideClasses = isLeft ? 'md:flex-row-reverse' : '';

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className={`mb-8 flex justify-center w-full items-start ${sideClasses}`}
        >
            <div className="hidden w-5/12 md:block"></div>
            <div className="absolute z-10 flex items-center justify-center w-12 h-12 -translate-x-1/2 rounded-full shadow-xl left-6 md:left-1/2 bg-emerald-500 text-white">
                <span className="text-2xl">{icon}</span>
            </div>
            <div className="w-full px-6 py-5 ml-16 transition-colors duration-300 border rounded-lg shadow-lg backdrop-blur-sm md:w-5/12 md:ml-0 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
                <p className="mb-2 text-xs font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400">
                    {date}
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {title}
                </h3>
                <p className="mb-3 font-semibold text-md text-emerald-500 dark:text-emerald-400">
                    {company || school}
                </p>
                
                {description && (
                    <div className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {Array.isArray(description) ? (
                            description.map((desc, i) => <p key={i} className="mb-2">{desc}</p>)
                        ) : (
                            <p>{description}</p>
                        )}
                        {details && <p>{details}</p>}
                    </div>
                )}
                
                {skills && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {skills.map((skill, index) => (
                            <span key={index} className="px-2 py-1 text-xs font-semibold rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export const AboutPageContent = () => {
    const { t } = useTranslation();

    const experiences = [
        {
            date: "Ocak 2023 - Halen", 
            title: t('exp1_title'),
            company: "Stok Endüstriyel A.Ş.",
            description: [
                t('exp1_desc_intro'),    
                t('exp1_desc_software'), 
                t('exp1_desc_web'),      
                t('exp1_desc_it')        
            ],
            skills: ["JavaScript", "SQL", "GIMP", "React", "PHP", "HTML5", "CSS", "SASS", "SEO", "API", "CRM"] 
        },
        {
            date: "Eyl 2022 - Eki 2022",
            title: t('exp2_title'),
            company: "NBG Bilişim",
            description: t('exp2_desc'),
            skills: ["Git", "Delphi", "MySQL", "MariaDB", "SQL"]
        },
        {
            date: "Şub 2022 - Haz 2022",
            title: t('exp2_title'),
            company: "NBG Bilişim",
            description: t('exp3_desc'),
            skills: ["Delphi", "MySQL", "MS SQL Server"]
        },
        {
            date: "Eyl 2019 - Haz 2020",
            title: t('exp4_title'),
            company: "Arbis Teknoloji",
            description: t('exp4_desc'),
            skills: ["Bilgisayar Donanımı"]
        }
    ];

    const educations = [
        {
            date: "Eyl 2022 - Ağu 2025",
            degree: t('edu1_degree'),
            school: "Anadolu Üniversitesi"
        },
        {
            date: "Eyl 2020 - Kas 2022",
            degree: t('edu2_degree'),
            school: "Bilecik Şeyh Edebali Üniversitesi",
            details: "Not: 3.39 / 4"
        },
        {
            date: "2016 - 2020",
            degree: t('edu3_degree'),
            school: "Demirtaşpaşa Mesleki ve Teknik Anadolu Lisesi",
            details: "Diploma Puanı: 76.57"
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-24 transition-colors duration-300 bg-white dark:bg-black text-gray-800 dark:text-gray-200">
            {/* Giriş */}
            <section id="about-intro" className="container px-4 pb-16 mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h1 className="mb-6 text-5xl font-bold tracking-tighter md:text-6xl text-emerald-500 dark:text-emerald-400">
                        {t('about_page_title')}
                    </h1>
                    <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                        <p>{t('about_intro_p1')}</p>
                        <p>{t('about_intro_p2')}</p>
                        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                            <a href="https://github.com/EnderKaran" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full gap-2 px-6 py-3 font-bold text-white transition-all duration-300 rounded-full sm:w-auto bg-gray-800 hover:bg-gray-900">
                                <FaGithub /> {t('about_github_button')}
                            </a>
                            <a href="https://codepen.io/EnderKrn1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full gap-2 px-6 py-3 font-bold transition-all duration-300 rounded-full sm:w-auto bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-emerald-500">
                                <FaCodepen /> {t('about_codepen_button')}
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Deneyim */}
            <section id="experience" className="container px-4 py-16 mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16 text-center">
                    <h2 className="text-4xl font-bold tracking-tighter md:text-5xl text-emerald-500 dark:text-emerald-400">
                        {t('experience_title')}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        {t('experience_subtitle')}
                    </p>
                </motion.div>
                <div className="relative max-w-5xl mx-auto">
                    <div className="absolute top-0 w-1 h-full -translate-x-1/2 rounded-full left-6 md:left-1/2 bg-gray-200 dark:bg-gray-800"></div>
                    {experiences.map((exp, index) => (
                         <TimelineItem key={index} icon={<FaBriefcase />} {...exp} isLeft={index % 2 !== 0} />
                    ))}
                </div>
            </section>
            
            {/* Eğitim */}
            <section id="education" className="py-16 transition-colors duration-300 bg-gray-50 dark:bg-gray-900/20">
                <div className="container px-4 mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16 text-center">
                        <h2 className="text-4xl font-bold tracking-tighter md:text-5xl text-emerald-500 dark:text-emerald-400">
                            {t('education_title')}
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                            {t('education_subtitle')}
                        </p>
                    </motion.div>
                    <div className="relative max-w-5xl mx-auto">
                        <div className="absolute top-0 w-1 h-full -translate-x-1/2 rounded-full left-6 md:left-1/2 bg-gray-200 dark:bg-gray-800"></div>
                         {educations.map((edu, index) => (
                             <TimelineItem key={index} icon={<FaGraduationCap />} date={edu.date} title={edu.degree} school={edu.school} details={edu.details} isLeft={index % 2 !== 0} />
                         ))}
                    </div>
                </div>
            </section>
            
            {/* Ödüller */}
            <section id="awards" className="container px-4 py-16 mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter text-emerald-500 dark:text-emerald-400">
                        {t('awards_title')}
                    </h2>
                    <div className="inline-flex items-center gap-4 p-6 transition-colors duration-300 border rounded-lg shadow-md bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
                        <FaAward className="text-4xl text-emerald-500 dark:text-emerald-400" />
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {t('award1_title')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Bilecik Şeyh Edebali Üniversitesi - Haz 2022
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};