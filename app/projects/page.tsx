'use client';

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Search, Star, GitBranch, Link, Code } from 'lucide-react';


// --- MOCK BİLEŞENLER VE İKONLAR ---
const Icons = {
  Search: () => <Search size={20} />,
  Star: () => <Star size={16} />,
  Github: () => <GitBranch size={20} />,
  Link: () => <Link size={20} />,
  Code: () => <Code size={16} />
};

const t = (key: string) => {
    const translations: Record<string, string> = {
        'projects_title': 'Açık Kaynak Projeler',
        'projects_subtitle': 'GitHub profilimdeki çalışmalarım. Temiz kod, inovasyon ve sürekli öğrenme tutkumu keşfedin.',
        'projects_search': 'Proje adı ile ara...',
        'projects_loading': 'Projeler uzaydan getiriliyor...',
        'projects_error': 'Hata:',
        'projects_no_desc': 'Bu proje için henüz bir açıklama girilmemiş.',
        'projects_view_code': 'Kodu İncele',
        'projects_live_demo': 'Canlı Demo',
        'projects_no_results': 'Arama kriterlerinize uygun proje bulunamadı.'
    };
    return translations[key] || key;
};
// ------------------------------------

const GITHUB_USERNAME = 'EnderKaran';

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
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen transition-colors duration-500 bg-white dark:bg-[#030303] text-gray-900 dark:text-white">
                <div className="w-16 h-16 border-4 border-t-emerald-500 border-emerald-500/20 rounded-full animate-spin mb-6"></div>
                <p className="text-xl font-bold tracking-widest text-emerald-500 uppercase animate-pulse">{t('projects_loading')}</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen transition-colors duration-500 bg-white dark:bg-[#030303] text-gray-900 dark:text-white">
                <div className="p-8 text-center border shadow-2xl rounded-3xl border-red-500/20 bg-red-500/5 backdrop-blur-xl">
                    <p className="mb-2 text-2xl font-black text-red-500">{t('projects_error')}</p>
                    <p className="text-gray-400">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen pt-32 pb-24 overflow-hidden transition-colors duration-500 bg-white dark:bg-[#030303] text-gray-900 dark:text-white">
            
            {/* Arka Plan Soft Glow */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 dark:opacity-40 -z-10">
                <div className="absolute top-[-10%] right-[10%] w-[40vw] h-[40vw] bg-emerald-500 blur-[150px] rounded-full mix-blend-multiply opacity-30 animate-pulse"></div>
                <div className="absolute bottom-[20%] left-[-10%] w-[30vw] h-[30vw] bg-blue-500 blur-[130px] rounded-full mix-blend-multiply opacity-20"></div>
            </div>

            <div className="container relative z-10 px-4 mx-auto max-w-[1200px]">
                {/* --- BAŞLIK BÖLÜMÜ --- */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-20 text-center">
                    <h1 className="mb-6 text-6xl font-black tracking-tighter md:text-8xl text-gray-900 dark:text-white">
                        <span className="text-emerald-500">Açık Kaynak</span> <br className="hidden md:block"/>Projeler.
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg font-medium leading-relaxed text-gray-500 md:text-xl dark:text-gray-400">
                        {t('projects_subtitle')}
                    </p>
                    
                    {/* Modern Arama Çubuğu */}
                    <div className="relative max-w-xl mx-auto mt-12 group">
                        <div className="absolute inset-0 transition-all duration-300 rounded-full bg-emerald-500/20 blur-xl group-hover:bg-emerald-500/30"></div>
                        <div className="relative flex items-center p-2 transition-colors border shadow-lg bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl rounded-full border-gray-200 dark:border-white/10 group-hover:border-emerald-500/50">
                            <span className="pl-4 text-emerald-500"><Icons.Search /></span>
                            <input
                                type="text"
                                placeholder={t('projects_search')}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-3 text-lg font-medium text-gray-900 bg-transparent outline-none dark:text-white placeholder:text-gray-400"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* --- PROJE KARTLARI (BENTO GRID) --- */}
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
                            whileHover={{ y: -10 }}
                            className="flex flex-col justify-between p-8 transition-all duration-500 shadow-sm rounded-[2.5rem] bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-white/5 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/30 group"
                        >
                            <div>
                                {/* Üst Bar: İkon ve Yıldız */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500">
                                        <Icons.Github />
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-black tracking-widest text-amber-500 bg-amber-50 dark:bg-amber-500/10 rounded-xl">
                                        <Icons.Star /> {repo.stargazers_count}
                                    </div>
                                </div>

                                <h3 className="mb-3 text-2xl font-black tracking-tight text-gray-900 dark:text-white line-clamp-1 group-hover:text-emerald-500 transition-colors">
                                    {repo.name}
                                </h3>
                                <p className="h-20 mb-6 text-base leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
                                    {repo.description || t('projects_no_desc')}
                                </p>

                                {/* Teknolojiler (Topics & Language) */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {repo.topics && repo.topics.slice(0, 4).map(topic => (
                                        <span key={topic} className="px-3 py-1.5 text-[10px] font-black tracking-widest uppercase rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/5">
                                            {topic.replace(/-/g, ' ')}
                                        </span>
                                    ))}
                                    {(!repo.topics || repo.topics.length === 0) && repo.language && (
                                        <span className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black tracking-widest uppercase rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
                                            <Icons.Code /> {repo.language}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Alt Bar: Linkler */}
                            <div className="flex items-center gap-3 pt-6 mt-auto border-t border-gray-100 dark:border-white/5">
                                <a 
                                    href={repo.html_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center justify-center flex-1 gap-2 py-3 text-sm font-bold text-white transition-transform duration-300 bg-gray-900 dark:bg-white dark:text-black rounded-xl hover:scale-105 shadow-md"
                                >
                                    <Icons.Github /> Kodu İncele
                                </a>
                                {repo.homepage && (
                                    <a 
                                        href={repo.homepage} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center justify-center w-12 h-12 text-emerald-600 transition-colors bg-emerald-50 border border-emerald-200 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400 rounded-xl hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white"
                                        title={t('projects_live_demo')}
                                    >
                                        <Icons.Link />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* --- SONUÇ BULUNAMADI DURUMU --- */}
                {filteredRepos.length === 0 && !loading && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-gray-100 dark:bg-white/5 text-gray-400">
                            <Icons.Search />
                        </div>
                        <p className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">Sonuç Bulunamadı</p>
                        <p className="mt-2 text-gray-500">{t('projects_no_results')}</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}