'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const Icons = {
    Briefcase: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
    GraduationCap: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>,
    Award: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>,
    Github: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
    Codepen: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>
};


const t = (key: string) => {
    const translations: Record<string, string> = {
        'about_page_title': 'Hakkımda',
        'about_intro_p1': 'Bursa merkezli, ölçeklenebilir ve yüksek performanslı web uygulamaları geliştirmeye odaklanmış bir Yazılım Geliştiriciyim.',
        'about_intro_p2': 'Kod yazmayı sadece arayüz oluşturmak olarak değil, sürdürülebilir yazılım mimarileri kurmak olarak görüyorum. Modern Frontend ekosisteminin merkezinde; React ve Next.js (SSR/SSG) teknolojilerini kullanarak, TypeScript güvencesiyle tip güvenliğine sahip, SEO dostu ve hızlı ürünler geliştiriyorum.',
        'about_intro_p3': 'Teknik yetkinliklerimi sadece Frontend ile sınırlı tutmuyor; veritabanı yönetimi (MariaDB/PostgreSQL) ve backend süreçlerine (Node.js/ASP.NET) olan hakimiyetimle, bir projeyi uçtan uca (End-to-End) yönetebilecek Fullstack vizyonuyla hareket ediyorum.',
        'about_github_button': 'GitHub',
        'about_codepen_button': 'CodePen',
        'experience_title': 'İş Deneyimi',
        'experience_subtitle': 'Kariyer yolculuğum ve profesyonel tecrübelerim.',
        'exp1_title': 'Yazılım Geliştirici',
        'exp1_desc_intro': 'Stok Endüstriyel A.Ş. bünyesinde Yazılım Geliştirici olarak görev yapmaktayım.',
        'exp1_desc_software': '• Şirket içi ihtiyaçlara yönelik web tabanlı çözümlerin geliştirilmesi.',
        'exp1_desc_web': '• Kurumsal web sitelerinin ve e-ticaret platformlarının optimizasyonu.',
        'exp1_desc_it': '• BT altyapı yönetimi ve sistem sürekliliğinin sağlanması.',
        'exp2_title': 'Yazılım Geliştirici (Stajyer)',
        'exp2_desc': 'Spsteks adlı uygulamanın önceki sürümünü iyileştirmek için çalıştım.',
        'exp3_desc': 'RAD Studio FMX ve Delphi kullanarak Spsteks adlı bir uygulama için bir dizi sayfa geliştirdim.',
        'exp4_title': 'Bilgisayar Teknisyeni (Stajyer)',
        'exp4_desc': "BT departmanında çeşitli sorumluluklar üstlenerek donanım/yazılım becerilerimi geliştirdim.",
        'education_title': 'Eğitim Hayatım',
        'education_subtitle': 'Akademik geçmişim ve aldığım dereceler.',
        'edu1_degree': 'Lisans, Yönetim Bilişim Sistemleri',
        'edu2_degree': 'Önlisans, Bilgisayar Programcılığı',
        'edu3_degree': 'Lise, Bilişim/Web Programlama',
        'awards_title': 'Onur ve Ödüller',
        'award1_title': 'Onur Belgesi',
    };
    return translations[key] || key;
};

// --- TIMELINE BİLEŞENİ ---
interface TimelineItemProps {
    icon: React.ReactNode;
    date?: string;
    title?: string;
    company?: string;
    school?: string;
    description?: string | string[];
    skills?: string[];
    details?: string;
    isLeft: boolean;
}

const TimelineItem = ({ icon, date, title, company, school, description, skills, details, isLeft }: TimelineItemProps) => {
    const cardVariants: Variants = {
        hidden: { opacity: 0, x: isLeft ? -40 : 40 },
        visible: { opacity: 1, x: 0 }
    };
    const sideClasses = isLeft ? 'md:flex-row-reverse' : '';

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            // justify-between eklendi. Bu sayede kart ve boşluk divi zıt kutuplara itilecek.
            className={`mb-12 flex w-full items-center justify-between ${sideClasses}`}
        >
            {/* Masaüstünde çizgiyi ortalamak için dengeleyici boş div */}
            <div className="hidden w-5/12 md:block"></div>
            
            {/* Merkez İkon */}
            <div className="absolute z-10 flex items-center justify-center w-14 h-14 -translate-x-1/2 rounded-2xl shadow-xl left-6 md:left-1/2 bg-emerald-500 text-white border-4 border-white dark:border-[#0a0a0a]">
                <span className="text-xl">{icon}</span>
            </div>
            
            {/* İçerik Kartı */}
            <div className="w-full px-8 py-8 ml-16 transition-all duration-300 md:w-5/12 md:ml-0 rounded-[2.5rem] bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-white/5 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 group">
                <p className="mb-3 text-xs font-black tracking-widest uppercase text-emerald-500">
                    {date}
                </p>
                <h3 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white mb-1">
                    {title}
                </h3>
                <p className="mb-4 font-bold text-md text-gray-500 dark:text-gray-400">
                    {company || school}
                </p>
                
                {description && (
                    <div className="text-base leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
                        {Array.isArray(description) ? (
                            description.map((desc, i) => <p key={i} className="mb-2 last:mb-0">{desc}</p>)
                        ) : (
                            <p>{description}</p>
                        )}
                        {details && <p className="mt-2 text-sm italic">{details}</p>}
                    </div>
                )}
                
                {skills && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-white/5">
                        {skills.map((skill, index) => (
                            <span key={index} className="px-3 py-1.5 text-xs font-bold rounded-xl bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 group-hover:bg-emerald-500/10 group-hover:text-emerald-500 transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export const AboutPageContent = () => {

    const experiences = [
        {
            date: "Ocak 2023 - Halen", 
            title: t('exp1_title'),
            company: "Stok Endüstriyel A.Ş.",
            description: [
                t('exp1_desc_intro'),    
                t('exp1_desc_software'), 
                t('exp1_desc_web'),      
                t('exp1_desc_it')        
            ],
            skills: ["JavaScript", "SQL", "GIMP", "React", "PHP", "HTML5", "CSS", "SASS", "SEO", "API", "CRM"] 
        },
        {
            date: "Eyl 2022 - Eki 2022",
            title: t('exp2_title'),
            company: "NBG Bilişim",
            description: t('exp2_desc'),
            skills: ["Git", "Delphi", "MySQL", "MariaDB", "SQL"]
        },
        {
            date: "Şub 2022 - Haz 2022",
            title: t('exp2_title'),
            company: "NBG Bilişim",
            description: t('exp3_desc'),
            skills: ["Delphi", "MySQL", "MS SQL Server"]
        },
        {
            date: "Eyl 2019 - Haz 2020",
            title: t('exp4_title'),
            company: "Arbis Teknoloji",
            description: t('exp4_desc'),
            skills: ["Bilgisayar Donanımı"]
        }
    ];

    const educations = [
        {
            date: "Eyl 2022 - Ağu 2025",
            degree: t('edu1_degree'),
            school: "Anadolu Üniversitesi"
        },
        {
            date: "Eyl 2020 - Kas 2022",
            degree: t('edu2_degree'),
            school: "Bilecik Şeyh Edebali Üniversitesi",
            details: "Not: 3.39 / 4"
        },
        {
            date: "2016 - 2020",
            degree: t('edu3_degree'),
            school: "Demirtaşpaşa Mesleki ve Teknik Anadolu Lisesi",
            details: "Diploma Puanı: 76.57"
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-24 transition-colors duration-500 bg-white dark:bg-[#030303] text-gray-800 dark:text-gray-200 overflow-hidden relative">
            
            {/* Arka Plan Soft Glow */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 dark:opacity-40">
                <div className="absolute top-[5%] left-[10%] w-[30vw] h-[30vw] bg-emerald-400 blur-[150px] rounded-full mix-blend-multiply opacity-50 animate-pulse"></div>
                <div className="absolute top-[20%] right-[10%] w-[25vw] h-[25vw] bg-blue-500 blur-[130px] rounded-full mix-blend-multiply opacity-40"></div>
            </div>

            {/* --- GİRİŞ BÖLÜM --- */}
            <section id="about-intro" className="container relative z-10 px-4 pb-24 mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h1 className="mb-10 text-6xl font-black tracking-tighter md:text-8xl text-gray-900 dark:text-white">
                        Hakkımda
                    </h1>
                    <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl font-medium leading-relaxed text-gray-600 dark:text-gray-400 text-center">
                        <p>{t('about_intro_p1')}</p>
                        <p>{t('about_intro_p2')}</p>
                        <p>{t('about_intro_p3')}</p>
                        
                        <div className="flex flex-col items-center justify-center gap-4 pt-10 sm:flex-row">
                            <a href="https://github.com/EnderKaran" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full gap-3 px-8 py-4 font-bold text-white transition-all duration-300 rounded-full sm:w-auto bg-gray-900 hover:bg-emerald-500 hover:scale-105 shadow-xl">
                                <Icons.Github /> {t('about_github_button')}
                            </a>
                            <a href="https://codepen.io/EnderKrn1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full gap-3 px-8 py-4 font-bold text-gray-900 bg-white transition-all duration-300 rounded-full sm:w-auto border-2 border-gray-200 dark:border-white/10 dark:bg-[#0a0a0a] dark:text-white hover:border-emerald-500 dark:hover:border-emerald-500 hover:scale-105 shadow-lg">
                                <Icons.Codepen /> {t('about_codepen_button')}
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* --- DENEYİM BÖLÜMÜ --- */}
            <section id="experience" className="container relative z-10 px-4 py-20 mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-20 text-center">
                    <h2 className="text-5xl font-black tracking-tighter md:text-6xl text-gray-900 dark:text-white">
                        {t('experience_title')}
                    </h2>
                    <p className="mt-4 text-xl font-medium text-emerald-500">
                        {t('experience_subtitle')}
                    </p>
                </motion.div>
                
                <div className="relative max-w-5xl mx-auto">
                    {/* Dikey Çizgi */}
                    <div className="absolute top-0 w-1.5 h-full -translate-x-1/2 rounded-full left-6 md:left-1/2 bg-gradient-to-b from-emerald-500 via-emerald-200 to-transparent dark:from-emerald-500 dark:via-emerald-900 dark:to-transparent opacity-30"></div>
                    
                    {experiences.map((exp, index) => (
                         <TimelineItem key={index} icon={<Icons.Briefcase />} {...exp} isLeft={index % 2 !== 0} />
                    ))}
                </div>
            </section>
            
            {/* --- EĞİTİM BÖLÜMÜ --- */}
            <section id="education" className="relative z-10 py-24 transition-colors duration-300 bg-gray-50/50 dark:bg-white/5 backdrop-blur-3xl border-y border-gray-200/50 dark:border-white/5">
                <div className="container px-4 mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-20 text-center">
                        <h2 className="text-5xl font-black tracking-tighter md:text-6xl text-gray-900 dark:text-white">
                            {t('education_title')}
                        </h2>
                        <p className="mt-4 text-xl font-medium text-emerald-500">
                            {t('education_subtitle')}
                        </p>
                    </motion.div>
                    <div className="relative max-w-5xl mx-auto">
                        {/* Dikey Çizgi */}
                        <div className="absolute top-0 w-1.5 h-full -translate-x-1/2 rounded-full left-6 md:left-1/2 bg-gradient-to-b from-blue-500 via-blue-200 to-transparent dark:from-blue-500 dark:via-blue-900 dark:to-transparent opacity-30"></div>
                        
                         {educations.map((edu, index) => (
                             <TimelineItem key={index} icon={<Icons.GraduationCap />} date={edu.date} title={edu.degree} school={edu.school} details={edu.details} isLeft={index % 2 !== 0} />
                         ))}
                    </div>
                </div>
            </section>
            
            {/* --- ÖDÜLLER BÖLÜMÜ --- */}
            <section id="awards" className="container relative z-10 px-4 py-24 mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
                    <h2 className="mb-12 text-5xl font-black tracking-tighter text-gray-900 dark:text-white">
                        {t('awards_title')}
                    </h2>
                    
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 transition-all duration-300 border shadow-xl rounded-[2.5rem] bg-gradient-to-br from-emerald-500 to-teal-700 border-white/10 text-white"
                    >
                        <div className="flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-md">
                            <Icons.Award />
                        </div>
                        <div className="text-center sm:text-left">
                            <h3 className="text-2xl font-black tracking-tight mb-2">
                                {t('award1_title')}
                            </h3>
                            <p className="text-emerald-100 font-medium">
                                Bilecik Şeyh Edebali Üniversitesi - Haz 2022
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};