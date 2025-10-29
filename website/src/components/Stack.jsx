import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Hook'u import et
import { motion } from "framer-motion";
import { SiFramer, SiBootstrap, SiReact, SiNodedotjs, SiGit } from "react-icons/si";

const stackItems = [
    { id: 1, name: "Framer", icon: <SiFramer size={80} /> },
    { id: 2, name: "Bootstrap", icon: <SiBootstrap size={80} /> },
    { id: 3, name: "React", icon: <SiReact size={80} /> },
    { id: 4, name: "Node.js", icon: <SiNodedotjs size={80} /> },
    { id: 5, name: "Git", icon: <SiGit size={80} /> },
];

export const Stack = () => {
    const { t } = useTranslation(); // 2. t fonksiyonunu al

    const variants = {
        hidden: (index) => ({
            opacity: 0,
            y: index % 2 === 0 ? -100 : 100,
        }),
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.0,
            },
        },
    };

    return (
        <section
            id="stack"
            className="py-24 transition-colors duration-300 bg-background text-primary md:py-48"
        >
            <div className="container px-4 mx-auto">
                <h2 className="mb-20 text-5xl font-bold text-center md:text-7xl">
                    {t('stack_title_part1')} <span className="text-accent">{t('stack_title_part2')}</span>
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {stackItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index}
                            className="flex flex-col items-center justify-center w-40 p-4 text-center transition-all duration-300 ease-in-out border shadow-lg aspect-square rounded-2xl bg-card-background border-card-border backdrop-blur-sm hover:scale-105 hover:shadow-accent/20 md:w-48"
                        >
                            <div className="mb-4 text-accent">
                                {item.icon}
                            </div>
                            <p className="text-lg font-semibold text-secondary">
                                {item.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};