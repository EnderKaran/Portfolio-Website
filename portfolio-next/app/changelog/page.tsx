'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaPlus, FaWrench, FaRocket, FaCube , FaPalette, FaMobileAlt, FaMousePointer, FaColumns, FaBug, FaBullseye , FaMagic, FaExclamationTriangle, FaArrowUp } from 'react-icons/fa'; 
import { VscFileCode } from "react-icons/vsc";

export default function ChangelogPage() {
    const { t } = useTranslation();

    const changelogData = [
            {
            version: "v2.0.0",
            date: "15 Ocak 2026",
            changes: [
                { 
                    type: t('changelog_type_archchange'), 
                    description: t('changelog_v2_0_0_desc1'), 
                    icon: <FaRocket /> 
                },
                { 
                    type: t('changelog_type_structure'), 
                    description: t('changelog_v2_0_0_desc2'), 
                    icon: <VscFileCode /> 
                },
                { 
                    type: t('changelog_type_improvement'), 
                    description: t('changelog_v2_0_0_desc3'), 
                    icon: <FaPalette /> 
                },
                { 
                    type: t('changelog_type_bugfix'), 
                    description: t('changelog_v2_0_0_desc4'), 
                    icon: <FaBug /> 
                },
            ]
             },
            {
                version: "v1.9.0", 
                date: "03 Aralık 2025", 
                changes: [
                     { 
                        type: t('changelog_type_archchange'), 
                        description: t('changelog_v1_9_0_desc1'),
                        icon: <FaCube /> 
                    },
                    { 
                        type: t('changelog_type_improvement'), 
                        description: t('changelog_v1_9_0_desc2'), // "SEO iyileştirmeleri..."
                        icon: <FaWrench /> 
                    },
                ]
            },
            {
                version: "v1.8.0",
                date: "02 Aralık 2025",
                changes: [
                    { 
                        type: t('changelog_type_bugfix'), 
                        description: t('changelog_v1_8_0_desc1'), 
                        icon: <FaPalette /> 
                    },
                    { 
                        type: t('changelog_type_improvement'), 
                        description: t('changelog_v1_8_0_desc2'), 
                        icon: <FaWrench /> 
                    },
                    { 
                        type: t('changelog_type_responsive'), 
                        description: t('changelog_v1_8_0_desc3'), 
                        icon: <FaMobileAlt /> 
                    },
                    { 
                        type: t('changelog_type_archchange'), 
                        description: t('changelog_v1_8_0_desc4'), 
                        icon: <VscFileCode /> 
                    },
                ]
            },
            {
                version: "v1.7.0",
                date: "25 Kasım 2025", 
                changes: [
                    { 
                        type: t('changelog_type_newpage'), 
                        description: t('changelog_v1_7_0_desc1'), 
                        icon: <FaExclamationTriangle /> 
                    },
                    { 
                        type: t('changelog_type_improvement'), 
                        description: t('changelog_v1_7_0_desc2'), 
                        icon: <FaMagic /> 
                    },
                    { 
                        type: t('changelog_type_improvement'), 
                        description: t('changelog_v1_7_0_desc3'), 
                        icon: <FaWrench /> 
                    },
                ]
            },
            {
                version: "v1.6.0",
                date: "30 Ekim 2025",
                changes: [
                    { type: t('changelog_type_newpage'), description: t('changelog_v1_6_0_desc1'), icon: <FaPlus /> },
                    { type: t('changelog_type_archchange'), description: t('changelog_v1_6_0_desc2'), icon: <FaWrench /> },
                    { type: t('changelog_type_bugfix'), description: t('changelog_v1_6_0_desc3'), icon: <FaBug /> },
                ]
            },
            {
                version: "v1.5.0",
                date: "15 Ekim 2025",
                changes: [
                    { type: t('changelog_type_newpage'), description: t('changelog_v1_5_0_desc1'), icon: <FaPlus /> },
                    { type: t('changelog_type_improvement'), description: t('changelog_v1_5_0_desc2'), icon: <FaWrench /> },
                    { type: t('changelog_type_improvement'), description: t('changelog_v1_5_0_desc3'), icon: <FaPalette /> },
                ]
            },
            {
                version: "v1.4.0",
                date: "14 Ekim 2025",
                changes: [
                    { type: t('changelog_type_newpage'), description: t('changelog_v1_4_0_desc1'), icon: <FaPlus /> },
                    { type: t('changelog_type_improvement'), description: t('changelog_v1_4_0_desc2'), icon: <FaBullseye /> },
                ]
            },
            {
                version: "v1.3.0",
                date: "29 Eylül 2025",
                changes: [
                    { type: t('changelog_type_newpage'), description: t('changelog_v1_3_0_desc1'), icon: <FaPlus /> },
                    { type: t('changelog_type_newpage'), description: t('changelog_v1_3_0_desc2'), icon: <FaPlus /> },
                    { type: t('changelog_type_improvement'), description: t('changelog_v1_3_0_desc3'), icon: <FaPalette /> },
                    { type: t('changelog_type_bugfix'), description: t('changelog_v1_3_0_desc4'), icon: <FaBug /> },
                ]
            },
            {
                version: "v1.2.0",
                date: "15 Eylül 2025",
                changes: [
                    { type: t('changelog_type_archchange'), description: t('changelog_v1_2_0_desc1'), icon: <FaColumns /> },
                    { type: t('changelog_type_newpage'), description: t('changelog_v1_2_0_desc2'), icon: <FaPlus /> },
                    { type: t('changelog_type_improvement'), description: t('changelog_v1_2_0_desc3'), icon: <FaWrench /> },
                ]
            },
            {
                version: "v1.1.0",
                date: "14 Eylül 2025",
                changes: [
                    { type: t('changelog_type_improvement'), description: t('changelog_v1_1_0_desc1'), icon: <FaPalette /> },
                    { type: t('changelog_type_improvement'), description: t('changelog_v1_1_0_desc2'), icon: <FaPlus /> },
                    { type: t('changelog_type_improvement'), description: t('changelog_v1_1_0_desc3'), icon: <FaMousePointer /> },
                    { type: t('changelog_type_improvement'), description: t('changelog_v1_1_0_desc4'), icon: <FaArrowUp /> },
                    { type: t('changelog_type_improvement'), description: t('changelog_v1_1_0_desc5'), icon: <FaWrench /> },
                ]
            },
            {
                version: "v1.0.0",
                date: "26 Temmuz - 18 Ağustos 2025",
                changes: [
                    { type: t('changelog_type_launch'), description: t('changelog_v1_0_0_desc1'), icon: <FaRocket /> },
                    { type: t('changelog_type_structure'), description: t('changelog_v1_0_0_desc2'), icon: <VscFileCode /> },
                    { type: t('changelog_type_responsive'), description: t('changelog_v1_0_0_desc3'), icon: <FaMobileAlt /> },
                    { type: t('changelog_type_bugfix'), description: t('changelog_v1_0_0_desc4'), icon: <FaBug /> }
                ]
            },
        ];

    return (
        <section id="changelog" className="min-h-screen py-24 transition-colors duration-300 bg-white dark:bg-black text-gray-800 dark:text-gray-200 sm:py-32">
            <div className="container px-4 mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-5xl font-bold text-center md:text-6xl text-emerald-500 dark:text-emerald-400"
                >
                    {t('changelog_title')}
                </motion.h2>

                <div className="relative ml-6 border-l-2 border-gray-200 dark:border-gray-800 md:mx-auto md:max-w-3xl">
                    {changelogData.map((entry, index) => (
                        <motion.div
                            key={entry.version}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative pl-12 mb-12"
                        >
                            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full border-4 bg-emerald-500 border-white dark:border-black transition-colors duration-300"></div>
                            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                {entry.date}
                            </p>
                            <h3 className="mb-4 text-3xl font-bold text-emerald-500 dark:text-emerald-400">
                                {entry.version}
                            </h3>
                            <div className="p-6 transition-colors duration-300 border shadow-lg backdrop-blur-sm rounded-2xl bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
                                <ul className="space-y-4">
                                    {entry.changes.map((change, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <span className="mt-1 text-lg text-emerald-500 dark:text-emerald-400">
                                                {change.icon}
                                            </span>
                                            <div>
                                                <p className="font-semibold text-gray-900 dark:text-white">
                                                    {change.type}
                                                </p>
                                                <p className="text-gray-600 dark:text-gray-400">
                                                    {change.description}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}