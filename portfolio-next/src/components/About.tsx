'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { SkillProgressBar } from './SkillProgressBar';

export const About = () => {
    const { t } = useTranslation(); 

    return (
        <section id="about" className="p-8 transition-colors duration-300 bg-white dark:bg-black text-gray-800 dark:text-gray-200">
            <h2 className="mb-12 text-5xl font-bold text-center md:text-6xl">
                {t('about_title_part1')}<span className="text-emerald-500 dark:text-emerald-400">{t('about_title_part2')}</span>
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Kart 1 */}
                <div className="p-6 border rounded-lg bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
                    <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">{t('about_card1_title')}</h3>
                    <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">{t('about_card1_p1')}</p>
                    <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700">
                        <code className="text-sm text-emerald-600 dark:text-emerald-400">
                            const miscSkills = [<br />&nbsp;&nbsp;'C#',<br />&nbsp;&nbsp;'SQL / MySQL',<br />&nbsp;&nbsp;'Bootstrap',<br />&nbsp;&nbsp;'Git & GitHub'<br />];
                        </code>
                    </div>
                </div>

                {/* Kart 2 - Resimli */}
                <div className="p-6 border rounded-lg bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
                    <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">{t('about_card2_title')}</h3>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-400">{t('about_card2_p1')}</p>
                    <div className="mt-4 relative rounded-lg h-[220px] overflow-hidden">
                        <Image 
                            src="/assets/images/project-1.png" 
                            alt="Project 1" 
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>

                {/* Kart 3 */}
                <div className="p-6 border rounded-lg bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
                    <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">{t('about_card3_title')}</h3>
                    <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">{t('about_card3_p1')}</p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-3 border rounded-lg bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700">
                            <h4 className="mb-2 font-medium text-emerald-500">{t('about_card3_frontend')}</h4>
                            <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                                <li>TypeScript</li>
                                <li>Next.js</li>
                                <li>React Query</li>
                                <li>Zustand</li>
                            </ul>
                        </div>
                        <div className="p-3 border rounded-lg bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700">
                            <h4 className="mb-2 font-medium text-emerald-500">{t('about_card3_backend')}</h4>
                            <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                                <li>Node.js & Express.js</li>
                                <li>PostgreSQL</li>
                                <li>Supabase</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
                {/* Kart 4 - Skill Bars */}
                <div className="p-6 border rounded-lg bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
                    <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">{t('about_card4_title')}</h3>
                    <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">{t('about_card4_p1')}</p>
                    <div className="pt-6 mt-6 space-y-6 border-t border-gray-200 dark:border-gray-800">
                        <SkillProgressBar skill={t('about_card4_skill1')} percentage={85} />
                        <SkillProgressBar skill={t('about_card4_skill2')} percentage={50} />
                        <SkillProgressBar skill={t('about_card4_skill3')} percentage={65} />
                    </div>
                </div>

                {/* Kart 5 - Resimli */}
                <div className="flex flex-col justify-between p-6 border rounded-lg bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
                    <div className="relative rounded-lg h-[200px] overflow-hidden mb-4">
                         <Image 
                            src="/assets/images/project-2.png" 
                            alt="Project 2" 
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <div>
                        <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">{t('about_card5_title')}</h3>
                        <p className="leading-relaxed text-gray-600 dark:text-gray-400">{t('about_card5_p1')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};