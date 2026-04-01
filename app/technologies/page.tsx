'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, Variants } from "framer-motion";
import { 
    SiReact, SiJavascript, SiTailwindcss, SiFramer, SiVite, 
    SiNodedotjs, SiDotnet, SiGit, SiGithub, 
    SiBootstrap, SiVercel, SiHtml5, SiCss3, SiMysql,
    SiAdobe, SiNotion, SiObsidian, SiGithubpages, SiMariadb,
    SiNextdotjs, SiTypescript, SiMarkdown, SiBulma, SiChartdotjs,
    SiNpm, SiJquery, SiLess, SiReactquery, SiReactrouter,
    SiSupabase, SiSqlite, SiPrisma, SiGimp, SiVitest, SiSass, SiC
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export default function TechnologiesPage() {
    const { t } = useTranslation();

    // İkon boyutlarını hap tasarıma uygun olması için 28px'e düşürdük
    const techCategories = [
        {
            title: t('tech_category_frontend'),
            technologies: [
                { name: "HTML5", icon: <SiHtml5 size={28} /> },
                { name: "CSS3", icon: <SiCss3 size={28} /> },
                { name: "JavaScript", icon: <SiJavascript size={28} /> },
                { name: "TypeScript", icon: <SiTypescript size={28} /> },
                { name: "React", icon: <SiReact size={28} /> },
                { name: "Next.js", icon: <SiNextdotjs size={28} /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
                { name: "Bootstrap", icon: <SiBootstrap size={28} /> },
                { name: "Bulma", icon: <SiBulma size={28} /> },
                { name: "Sass", icon: <SiSass size={28} /> },
                { name: "Less", icon: <SiLess size={28} /> },
                { name: "Framer Motion", icon: <SiFramer size={28} /> },
                { name: "Chart.js", icon: <SiChartdotjs size={28} /> },
                { name: "Context API", icon: <SiReact size={28} /> },
                { name: "React Query", icon: <SiReactquery size={28} /> },
                { name: "React Router", icon: <SiReactrouter size={28} /> },
                { name: "React Hook Form", icon: <SiReactrouter size={28} /> },
            ]
        },
        {
            title: t('tech_category_backend'),
            technologies: [
                { name: "Node.js", icon: <SiNodedotjs size={28} /> },
                { name: "C#", icon: <TbBrandCSharp size={28} /> },
                { name: "C", icon: <SiC size={28} /> },
                { name: ".NET (MVC)", icon: <SiDotnet size={28} /> },
                { name: "Prisma", icon: <SiPrisma size={28} /> },
            ]
        },
        {
            title: t('tech_category_database'),
            technologies: [
                { name: "MySQL", icon: <SiMysql size={28} /> },
                { name: "MariaDB", icon: <SiMariadb size={28} /> },
                { name: "SQLite", icon: <SiSqlite size={28} /> },
                { name: "Supabase", icon: <SiSupabase size={28} /> },
            ]
        },
        {
            title: t('tech_category_tools'),
            technologies: [
                { name: "Adobe", icon: <SiAdobe size={28} /> },
                { name: "Adobe Fonts", icon: <SiAdobe size={28} /> },
                { name: "GIMP", icon: <SiGimp size={28} /> },
                { name: "Git", icon: <SiGit size={28} /> },
                { name: "GitHub", icon: <SiGithub size={28} /> },
                { name: "Vite", icon: <SiVite size={28} /> },
                { name: "NPM", icon: <SiNpm size={28} /> },
                { name: "jQuery", icon: <SiJquery size={28} /> },
                { name: "Markdown", icon: <SiMarkdown size={28} /> },
                { name: "Vitest", icon: <SiVitest size={28} /> },
                { name: "Notion", icon: <SiNotion size={28} /> },
                { name: "Obsidian", icon: <SiObsidian size={28} /> },
            ]
        },
        {
            title: t('tech_category_platforms'),
            technologies: [
                { name: "Vercel", icon: <SiVercel size={28} /> },
                { name: "GitHub Pages", icon: <SiGithubpages size={28} /> },
            ]
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
    };

    const cardVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
    };

    return (
        <div className="relative min-h-screen pt-32 pb-24 overflow-hidden transition-colors duration-500 bg-white dark:bg-[#030303] text-gray-900 dark:text-white">
            
            {/* Arka Plan Soft Glow */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 dark:opacity-40 -z-10">
                <div className="absolute top-[-10%] right-[10%] w-[40vw] h-[40vw] bg-emerald-500 blur-[150px] rounded-full mix-blend-multiply opacity-40 animate-pulse"></div>
                <div className="absolute bottom-[20%] left-[-10%] w-[30vw] h-[30vw] bg-blue-500 blur-[130px] rounded-full mix-blend-multiply opacity-20"></div>
            </div>

            <div className="container relative z-10 px-4 mx-auto max-w-[1200px]">
                
                {/* --- BAŞLIK BÖLÜMÜ --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h1 className="mb-6 text-6xl font-black tracking-tighter md:text-8xl text-gray-900 dark:text-white">
                        {t('tech_page_title_part1')} <span className="text-emerald-500">{t('tech_page_title_part2')}</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg font-medium leading-relaxed text-gray-500 md:text-xl dark:text-gray-400">
                        Modern web uygulamaları geliştirmek için güvendiğim, sürekli gelişen araç ve dillerden oluşan teknoloji yığınım.
                    </p>
                </motion.div>

                {/* --- KATEGORİLER & TEKNOLOJİLER --- */}
                <div className="space-y-12">
                    {techCategories.map((category, catIndex) => (
                        <motion.div 
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                            className="p-8 md:p-12 rounded-[3rem] bg-gray-50/80 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 shadow-sm"
                        >
                            <h3 className="mb-8 text-3xl font-black tracking-tight text-gray-900 dark:text-white">
                                {category.title}
                            </h3>
                            
                            <motion.div
                                className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                            >
                                {category.technologies.map((tech) => (
                                    <motion.div
                                        key={tech.name}
                                        variants={cardVariants}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="flex items-center gap-4 p-4 transition-all duration-300 bg-white dark:bg-[#0a0a0a] border border-gray-200/60 dark:border-white/5 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-500/30 group cursor-pointer"
                                    >
                                        <div className="flex items-center justify-center transition-colors duration-300 text-gray-400 group-hover:text-emerald-500">
                                            {tech.icon}
                                        </div>
                                        <p className="text-sm font-bold tracking-tight text-gray-700 transition-colors duration-300 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 md:text-base">
                                            {tech.name}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
                
            </div>
        </div>
    );
}