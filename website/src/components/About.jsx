import React from 'react';
import { useTranslation } from 'react-i18next';
import { SkillProgressBar } from '../components/SkillProgressBar';
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";

export const About = () => {
    const { t } = useTranslation(); 

    return (
        <section id="about" className="p-8 transition-colors duration-300 bg-background text-primary">
            <h2 className="mb-12 text-5xl font-bold text-center md:text-6xl">
                {t('about_title_part1')}<span className="text-accent">{t('about_title_part2')}</span>
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-6 border rounded-lg bg-card-background border-card-border">
                    <h3 className="mb-2 text-2xl font-bold text-primary">{t('about_card1_title')}</h3>
                    <p className="mb-6 leading-relaxed text-secondary">{t('about_card1_p1')}</p>
                    <div className="p-4 border rounded-lg bg-primary/5 border-card-border/50">
                        <code className="text-sm text-accent/80">
                            const miscSkills = [<br />&nbsp;&nbsp;'C#',<br />&nbsp;&nbsp;'SQL / MySQL',<br />&nbsp;&nbsp;'Bootstrap',<br />&nbsp;&nbsp;'Git & GitHub'<br />];
                        </code>
                    </div>
                </div>

                <div className="p-6 border rounded-lg bg-card-background border-card-border">
                    <h3 className="mb-2 text-2xl font-bold text-primary">{t('about_card2_title')}</h3>
                    <p className="leading-relaxed text-secondary">{t('about_card2_p1')}</p>
                    <div className="mt-4 relative rounded-lg h-[220px] overflow-hidden">
                        <img src={project1} alt="Project 1" className="absolute inset-0 object-cover w-full h-full" />
                    </div>
                </div>

                <div className="p-6 border rounded-lg bg-card-background border-card-border">
                    <h3 className="mb-2 text-2xl font-bold text-primary">{t('about_card3_title')}</h3>
                    <p className="mb-4 leading-relaxed text-secondary">{t('about_card3_p1')}</p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-3 border rounded-lg bg-primary/5 border-card-border/50">
                            <h4 className="mb-2 font-medium text-accent">{t('about_card3_frontend')}</h4>
                            <ul className="space-y-1 text-sm text-secondary/80">
                                <li>TypeScript</li>
                                <li>Next.js</li>
                                <li>React Query</li>
                                <li>Zustand</li>
                            </ul>
                        </div>
                        <div className="p-3 border rounded-lg bg-primary/5 border-card-border/50">
                            <h4 className="mb-2 font-medium text-accent">{t('about_card3_backend')}</h4>
                            <ul className="space-y-1 text-sm text-secondary/80">
                                <li>Node.js & Express.js</li>
                                <li>PostgreSQL</li>
                                <li>Supabase</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
                <div className="p-6 border rounded-lg bg-card-background border-card-border">
                    <h3 className="mb-2 text-2xl font-bold text-primary">{t('about_card4_title')}</h3>
                    <p className="mb-6 leading-relaxed text-secondary">{t('about_card4_p1')}</p>
                    <div className="pt-6 mt-6 space-y-6 border-t border-card-border">
                        <SkillProgressBar skill={t('about_card4_skill1')} percentage={85} />
                        <SkillProgressBar skill={t('about_card4_skill2')} percentage={50} />
                        <SkillProgressBar skill={t('about_card4_skill3')} percentage={65} />
                    </div>
                </div>

                <div className="flex flex-col justify-between p-6 border rounded-lg bg-card-background border-card-border">
                    <div className="relative rounded-lg h-[200px] overflow-hidden mb-4">
                        <img src={project2} alt="Project 2" className="absolute inset-0 object-cover w-full h-full" />
                    </div>
                    <div>
                        <h3 className="mb-2 text-2xl font-bold text-primary">{t('about_card5_title')}</h3>
                        <p className="leading-relaxed text-secondary">{t('about_card5_p1')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};