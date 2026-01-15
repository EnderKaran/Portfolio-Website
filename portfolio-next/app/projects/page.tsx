'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, Variants } from 'framer-motion';
import { FaGithub, FaLink, FaStar, FaSearch } from 'react-icons/fa';

const GITHUB_USERNAME = 'EnderKaran';

// GitHub Repo Tipi
interface Repo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    topics: string[];
    language: string | null;
    stargazers_count: number;
    fork: boolean;
}

export default function ProjectsPage() {
    const { t } = useTranslation();
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`);
                if (!response.ok) {
                    throw new Error('GitHub verileri alınamadı.');
                }
                const data = await response.json();
                setRepos(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    }, []);

    const filteredRepos = repos.filter(repo => 
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) && !repo.fork
    );

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
                {t('projects_loading')}
            </div>
        );
    }
    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
                {t('projects_error')} {error}
            </div>
        );
    }

    return (
        <div className="min-h-screen py-24 transition-colors duration-300 sm:py-32 bg-white dark:bg-black text-gray-900 dark:text-white">
            <div className="container px-4 mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h1 className="mb-4 text-5xl font-bold tracking-tighter text-center md:text-6xl text-emerald-500 dark:text-emerald-400">
                        {t('projects_title')}
                    </h1>
                    <p className="max-w-2xl mx-auto mb-12 text-lg text-center text-gray-600 dark:text-gray-400">
                        {t('projects_subtitle')}
                    </p>
                    <div className="relative max-w-md mx-auto mb-16">
                        <input
                            type="text"
                            placeholder={t('projects_search')}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full py-3 pl-10 pr-4 transition-all duration-300 border-2 rounded-full focus:outline-none focus:ring-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
                            style={{ '--tw-ring-color': 'rgb(16 185 129)' } as React.CSSProperties}
                        />
                        <FaSearch className="absolute -translate-y-1/2 left-4 top-1/2 text-gray-400" />
                    </div>
                </motion.div>

                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredRepos.map(repo => (
                        <motion.div
                            key={repo.id}
                            variants={cardVariants}
                            className="flex flex-col justify-between p-6 transition-transform duration-300 border shadow-lg backdrop-blur-sm rounded-2xl hover:-translate-y-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                        >
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-emerald-500 dark:text-emerald-400">
                                    {repo.name}
                                </h3>
                                <p className="h-20 mb-4 overflow-hidden text-sm text-gray-600 dark:text-gray-400">
                                    {repo.description || t('projects_no_desc')}
                                </p>
                                <div className="flex flex-wrap items-center gap-2 mb-4">
                                    {repo.topics && repo.topics.map(topic => (
                                        <span key={topic} className="px-2 py-1 text-xs font-semibold capitalize rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                                            {topic.replace(/-/g, ' ')}
                                        </span>
                                    ))}
                                    {(!repo.topics || repo.topics.length === 0) && repo.language && (
                                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                                            {repo.language}
                                        </span>
                                    )}
                                    <span className="flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                        <FaStar /> {repo.stargazers_count}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 pt-4 mt-auto border-t border-gray-200 dark:border-gray-800">
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold transition-colors duration-300 text-gray-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400">
                                    <FaGithub /> {t('projects_view_code')}
                                </a>
                                {repo.homepage && (
                                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold transition-colors duration-300 text-gray-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400">
                                        <FaLink /> {t('projects_live_demo')}
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                {filteredRepos.length === 0 && (
                    <p className="mt-16 text-center text-gray-500">
                        {t('projects_no_results')}
                    </p>
                )}
            </div>
        </div>
    );
}