import React from 'react';
import { motion } from "framer-motion";
import { 
    SiReact, SiJavascript, SiTailwindcss, SiFramer, SiVite, 
    SiNodedotjs, SiDotnet, SiGit, SiGithub, 
    SiBootstrap, SiVercel, SiHtml5, SiCss3, SiMysql,
    SiAdobe, SiAdobecreativecloud, SiStackoverflow, SiNotion, 
    SiObsidian, SiGithubpages , SiMariadb
} from "react-icons/si";
import { TbBrandCSharp , TbBrandVisualStudio } from "react-icons/tb";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { FaSass } from "react-icons/fa";


const techCategories = [
    {
        title: "Frontend",
        technologies: [
            { name: "HTML5", icon: <SiHtml5 size={48} /> },
            { name: "CSS3", icon: <SiCss3 size={48} /> },
            { name: "JavaScript (ES6+)", icon: <SiJavascript size={48} /> },
            { name: "React", icon: <SiReact size={48} /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss size={48} /> },
            { name: "Framer Motion", icon: <SiFramer size={48} /> },
            { name: "Bootstrap", icon: <SiBootstrap size={48} /> },
            { name: "Sass", icon: <FaSass size={48} /> },
        ]
    },
    {
        title: "Backend",
        technologies: [
            { name: "Node.js", icon: <SiNodedotjs size={48} /> },
            { name: "C#", icon: <TbBrandCSharp size={48} /> },
            { name: ".NET (MVC)", icon: <SiDotnet size={48} /> },       
        ]
    },
    {
        title: "Database", 
        technologies: [
            { name: "SQL Server", icon: <DiMsqlServer size={48} /> },
            { name: "MySQL", icon: <SiMysql size={48} /> },
            { name: "MariaDB", icon: <SiMariadb size={48} /> },
        ]
    },
    {
        title: "Tools",
        technologies: [
            { name: "Adobe", icon: <SiAdobe size={48} /> },
            { name: "Adobe Fonts", icon: <SiAdobecreativecloud size={48} /> },
            { name: "Stack Overflow", icon: <SiStackoverflow size={48} /> },
            { name: "Notion", icon: <SiNotion size={48} /> },
            { name: "Obsidian", icon: <SiObsidian size={48} /> },
            { name: "Git", icon: <SiGit size={48} /> },
            { name: "GitHub", icon: <SiGithub size={48} /> },
            { name: "VS Code", icon: <TbBrandVisualStudio size={48} /> },
            { name: "Visual Studio", icon: <DiVisualstudio size={48} /> },
            { name: "Vite", icon: <SiVite size={48} /> },
        ]
    },
    {
        title: "Platforms",
        technologies: [
            { name: "Vercel", icon: <SiVercel size={48} /> },
            { name: "GitHub Pages", icon: <SiGithubpages size={48} /> },
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

export const Technologies = () => {
    return (
        <section
            id="technologies"
            className="min-h-screen pt-32 pb-24 transition-colors duration-300 bg-background text-primary"
        >
            <div className="container px-4 mx-auto">
                <motion.h1 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-5xl font-bold text-center md:text-7xl">
                    Teknoloji <span className="text-accent">Yığınım</span>
                </motion.h1>

                <div className="space-y-16">
                    {techCategories.map((category) => (
                        <motion.div 
                            key={category.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className="mb-8 text-3xl font-semibold text-primary">{category.title}</h3>
                            <motion.div
                                className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {category.technologies.map((tech) => (
                                    <motion.div
                                        key={tech.name}
                                        variants={cardVariants}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="flex flex-col items-center justify-center gap-4 p-4 text-center border cursor-pointer group bg-card-background border-card-border rounded-xl aspect-square"
                                    >
                                        <div className="text-6xl transition-colors duration-300 text-secondary group-hover:text-accent">
                                            {tech.icon}
                                        </div>
                                        <p className="text-sm font-semibold transition-colors duration-300 text-secondary md:text-base group-hover:text-primary">
                                            {tech.name}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies; 