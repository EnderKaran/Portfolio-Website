import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub, FaLink, FaStar, FaSearch } from 'react-icons/fa';
import SEO from '../components/SEO'; // SEO bileşeninin yolu (Eğer aynı klasördeyse ./SEO yapın)

const GITHUB_USERNAME = 'EnderKaran';

const ProjectsPage = () => {
    const { t } = useTranslation();
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`);
                if (!response.ok) {
                    throw new Error('GitHub verileri alınamadı. Lütfen kullanıcı adını kontrol edin.');
                }
                const data = await response.json();
                setRepos(data);
            } catch (err) {
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: 'rgb(var(--color-background))', color: 'rgb(var(--color-text-primary))' }}>
                {t('projects_loading')}
            </div>
        );
    }
    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: 'rgb(var(--color-background))', color: 'rgb(var(--color-text-primary))' }}>
                {t('projects_error')} {error}
            </div>
        );
    }

    return (
        <>
            <SEO 
                title={t('meta_projects_title')} 
                description={t('meta_projects_desc')}
                name="Ender Karan"
                type="website"
            />

            <div className="min-h-screen py-24 transition-colors duration-300 sm:py-32" style={{ backgroundColor: 'rgb(var(--color-background))', color: 'rgb(var(--color-text-primary))' }}>
                <div className="container px-4 mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="mb-4 text-5xl font-bold tracking-tighter text-center md:text-6xl" style={{ color: 'rgb(var(--color-accent))' }}>
                            {t('projects_title')}
                        </h1>
                        <p className="max-w-2xl mx-auto mb-12 text-lg text-center" style={{ color: 'rgb(var(--color-text-secondary))' }}>
                            {t('projects_subtitle')}
                        </p>
                        <div className="relative max-w-md mx-auto mb-16">
                            <input
                                type="text"
                                placeholder={t('projects_search')}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full py-3 pl-10 pr-4 transition-all duration-300 border-2 rounded-full focus:outline-none focus:ring-2"
                                style={{ 
                                    backgroundColor: 'rgb(var(--color-card-background))', 
                                    borderColor: 'rgb(var(--color-card-border))',
                                    color: 'rgb(var(--color-text-primary))',
                                    '--tw-ring-color': 'rgb(var(--color-accent))'
                                }}
                            />
                            <FaSearch className="absolute -translate-y-1/2 left-4 top-1/2" style={{ color: 'rgb(var(--color-text-secondary))' }} />
                        </div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {filteredRepos.map(repo => (
                            <motion.div
                                key={repo.id}
                                variants={cardVariants}
                                className="flex flex-col justify-between p-6 transition-transform duration-300 border shadow-lg backdrop-blur-sm rounded-2xl hover:-translate-y-2"
                                style={{ 
                                    backgroundColor: 'rgb(var(--color-card-background))', 
                                    borderColor: 'rgb(var(--color-card-border))' 
                                }}
                            >
                                <div>
                                    <h3 className="mb-2 text-xl font-bold" style={{ color: 'rgb(var(--color-accent))' }}>
                                        {repo.name}
                                    </h3>
                                    <p className="h-20 mb-4 overflow-hidden text-sm" style={{ color: 'rgb(var(--color-text-secondary))' }}>
                                        {repo.description || t('projects_no_desc')}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-2 mb-4">
                                        {repo.topics && repo.topics.map(topic => (
                                            <span 
                                                key={topic} 
                                                className="px-2 py-1 text-xs font-semibold capitalize rounded-full"
                                                style={{ 
                                                    backgroundColor: 'rgba(var(--color-accent), 0.15)', 
                                                    color: 'rgb(var(--color-accent))' 
                                                }}
                                            >
                                                {topic.replace(/-/g, ' ')}
                                            </span>
                                        ))}
                                        {(!repo.topics || repo.topics.length === 0) && repo.language && (
                                            <span 
                                                className="px-2 py-1 text-xs font-semibold rounded-full"
                                                style={{ 
                                                    backgroundColor: 'rgba(var(--color-accent), 0.15)', 
                                                    color: 'rgb(var(--color-accent))' 
                                                }}
                                            >
                                                {repo.language}
                                            </span>
                                        )}
                                        <span 
                                            className="flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full"
                                            style={{ 
                                                backgroundColor: 'rgba(var(--color-text-secondary), 0.15)', 
                                                color: 'rgb(var(--color-text-secondary))' 
                                            }}
                                        >
                                            <FaStar /> {repo.stargazers_count}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 pt-4 mt-auto border-t" style={{ borderColor: 'rgb(var(--color-card-border))' }}>
                                    <a 
                                        href={repo.html_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:opacity-80"
                                        style={{ color: 'rgb(var(--color-text-primary))' }}
                                        onMouseEnter={(e) => e.target.style.color = 'rgb(var(--color-accent))'}
                                        onMouseLeave={(e) => e.target.style.color = 'rgb(var(--color-text-primary))'}
                                    >
                                        <FaGithub /> {t('projects_view_code')}
                                    </a>
                                    {repo.homepage && (
                                        <a 
                                            href={repo.homepage} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:opacity-80"
                                            style={{ color: 'rgb(var(--color-text-primary))' }}
                                            onMouseEnter={(e) => e.target.style.color = 'rgb(var(--color-accent))'}
                                            onMouseLeave={(e) => e.target.style.color = 'rgb(var(--color-text-primary))'}
                                        >
                                            <FaLink /> {t('projects_live_demo')}
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    {filteredRepos.length === 0 && (
                        <p className="mt-16 text-center" style={{ color: 'rgb(var(--color-text-secondary))' }}>
                            {t('projects_no_results')}
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProjectsPage;