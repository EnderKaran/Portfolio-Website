'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SkillProgressBar } from './SkillProgressBar';
import { FiCode, FiCpu, FiTarget } from 'react-icons/fi';

export const About = () => {
    const { t } = useTranslation(); 

    return (
        <section id="about" className="py-24 transition-colors duration-300 bg-gray-50/50 dark:bg-transparent">
            <div className="container px-4 mx-auto max-w-[1200px]">
                <div className="mb-16 text-center">
                    <h2 className="text-5xl font-black tracking-tighter md:text-7xl text-gray-900 dark:text-white">
                        {t('about_title_part1')} <span className="text-emerald-500">{t('about_title_part2')}</span>
                    </h2>
                </div>

                {/* Bento Grid Yapısı */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                    
                    {/* Arkaplan & Yaklaşım (Geniş Kart) */}
                    <motion.div whileHover={{ y: -5 }} className="flex flex-col justify-between p-10 transition-all duration-500 border shadow-sm md:col-span-8 rounded-[2.5rem] bg-white dark:bg-[#0a0a0a] border-gray-100 dark:border-white/5 hover:shadow-xl hover:shadow-emerald-500/5">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 text-emerald-500 rounded-2xl bg-emerald-500/10"><FiCode size={24} /></div>
                                <h3 className="text-3xl font-black tracking-tight dark:text-white">{t('about_card1_title')}</h3>
                            </div>
                            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                                {t('about_card1_p1')} {t('about_card4_p1')}
                            </p>
                        </div>
                        <div className="pt-8 mt-8 border-t border-gray-100 dark:border-white/5">
                            <h4 className="mb-6 font-bold text-gray-900 dark:text-white">Yetenek Dağılımı</h4>
                            <div className="space-y-5">
                                <SkillProgressBar skill={t('about_card4_skill1')} percentage={85} />
                                <SkillProgressBar skill={t('about_card4_skill2')} percentage={50} />
                                <SkillProgressBar skill={t('about_card4_skill3')} percentage={65} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Hedeflediğim Yetenekler (Dar ve Vurgulu Kart) */}
                    <motion.div whileHover={{ y: -5 }} className="relative overflow-hidden p-10 md:col-span-4 rounded-[2.5rem] bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-2xl">
                        <div className="absolute top-[-20%] right-[-20%] w-48 h-48 bg-white/20 blur-[50px] rounded-full pointer-events-none"></div>
                        <FiCpu size={40} className="mb-6 opacity-80" />
                        <h3 className="mb-4 text-3xl font-black tracking-tight">{t('about_card3_title')}</h3>
                        <p className="mb-8 text-emerald-50 text-sm leading-relaxed">{t('about_card3_p1')}</p>
                        
                        <div className="space-y-6">
                            <div className="p-4 bg-black/20 rounded-2xl backdrop-blur-sm border border-white/10">
                                <h4 className="mb-2 text-xs font-bold tracking-widest text-emerald-300 uppercase">{t('about_card3_frontend')}</h4>
                                <p className="font-medium text-sm">TypeScript, Next.js, React Query, Zustand</p>
                            </div>
                            <div className="p-4 bg-black/20 rounded-2xl backdrop-blur-sm border border-white/10">
                                <h4 className="mb-2 text-xs font-bold tracking-widest text-emerald-300 uppercase">{t('about_card3_backend')}</h4>
                                <p className="font-medium text-sm">Node.js, PostgreSQL, Supabase</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Uzmanlık & Hedefler (Alt Geniş Kart) */}
                    <motion.div whileHover={{ y: -5 }} className="flex items-center gap-8 p-10 md:col-span-12 rounded-[2.5rem] bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500">
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 text-blue-500 rounded-2xl bg-blue-500/10"><FiTarget size={24} /></div>
                                <h3 className="text-3xl font-black tracking-tight dark:text-white">{t('about_card2_title')} & {t('about_card5_title')}</h3>
                            </div>
                            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                                {t('about_card2_p1')} {t('about_card5_p1')}
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};