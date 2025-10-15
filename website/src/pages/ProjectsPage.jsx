import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLink, FaStar, FaSearch } from 'react-icons/fa';

const GITHUB_USERNAME = 'EnderKaran';

const ProjectsPage = () => {
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
            <div className="min-h-screen flex justify-center items-center" style={{ backgroundColor: 'rgb(var(--color-background))', color: 'rgb(var(--color-text-primary))' }}>
                Yükleniyor...
            </div>
        );
    }
    if (error) {
        return (
            <div className="min-h-screen flex justify-center items-center" style={{ backgroundColor: 'rgb(var(--color-background))', color: 'rgb(var(--color-text-primary))' }}>
                Hata: {error}
            </div>
        );
    }

    return (
        <div className="min-h-screen py-24 sm:py-32 transition-colors duration-300" style={{ backgroundColor: 'rgb(var(--color-background))', color: 'rgb(var(--color-text-primary))' }}>
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-center mb-4" style={{ color: 'rgb(var(--color-text-primary))' }}>
                        Projelerim
                    </h1>
                    <p className="text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: 'rgb(var(--color-text-secondary))' }}>
                        GitHub profilimdeki herkese açık projelerim. Yeni şeyler keşfetmek için göz atın.
                    </p>
                    <div className="max-w-md mx-auto relative mb-16">
                        <input
                            type="text"
                            placeholder="Proje Ara..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border-2 rounded-full focus:outline-none focus:ring-2 transition-all duration-300"
                            style={{ 
                                backgroundColor: 'rgb(var(--color-card-background))', 
                                borderColor: 'rgb(var(--color-card-border))',
                                color: 'rgb(var(--color-text-primary))',
                                '--tw-ring-color': 'rgb(var(--color-accent))'
                            }}
                        />
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'rgb(var(--color-text-secondary))' }} />
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredRepos.map(repo => (
                        <motion.div
                            key={repo.id}
                            variants={cardVariants}
                            className="backdrop-blur-sm border rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300"
                            style={{ 
                                backgroundColor: 'rgb(var(--color-card-background))', 
                                borderColor: 'rgb(var(--color-card-border))' 
                            }}
                        >
                            <div>
                                <h3 className="text-xl font-bold mb-2" style={{ color: 'rgb(var(--color-accent))' }}>
                                    {repo.name}
                                </h3>
                                <p className="text-sm mb-4 h-20 overflow-hidden" style={{ color: 'rgb(var(--color-text-secondary))' }}>
                                    {repo.description || 'Açıklama bulunmuyor.'}
                                </p>
                                <div className="flex flex-wrap items-center gap-2 mb-4">
                                    {repo.topics && repo.topics.map(topic => (
                                        <span 
                                            key={topic} 
                                            className="text-xs font-semibold px-2 py-1 rounded-full capitalize"
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
                                            className="text-xs font-semibold px-2 py-1 rounded-full"
                                            style={{ 
                                                backgroundColor: 'rgba(var(--color-accent), 0.15)', 
                                                color: 'rgb(var(--color-accent))' 
                                            }}
                                        >
                                            {repo.language}
                                        </span>
                                    )}
                                    <span 
                                        className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full"
                                        style={{ 
                                            backgroundColor: 'rgba(var(--color-text-secondary), 0.15)', 
                                            color: 'rgb(var(--color-text-secondary))' 
                                        }}
                                    >
                                        <FaStar /> {repo.stargazers_count}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-auto pt-4 border-t" style={{ borderColor: 'rgb(var(--color-card-border))' }}>
                                <a 
                                    href={repo.html_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:opacity-80"
                                    style={{ color: 'rgb(var(--color-text-primary))' }}
                                    onMouseEnter={(e) => e.target.style.color = 'rgb(var(--color-accent))'}
                                    onMouseLeave={(e) => e.target.style.color = 'rgb(var(--color-text-primary))'}
                                >
                                    <FaGithub /> Kodu Görüntüle
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
                                        <FaLink /> Canlı Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                {filteredRepos.length === 0 && (
                    <p className="text-center mt-16" style={{ color: 'rgb(var(--color-text-secondary))' }}>
                        Arama kriterlerinize uygun proje bulunamadı.
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProjectsPage;