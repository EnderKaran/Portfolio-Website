import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaAward, FaGithub, FaCodepen } from 'react-icons/fa';

// --- VERİLER ---
const experiences = [
    {
        date: "Ocak 2023 - Halen",
        title: "Yazılım Geliştirici",
        company: "Stok Endüstriyel A.Ş.",
        skills: ["JavaScript", "React", "HTML5", "CSS", "SASS & SCSS", "Ticimax", "CRM", "E-ticaret", "Sorun Çözme", "Bilgi İşlem", "Web Yönetimi"]
    },
    {
        date: "Eyl 2022 - Eki 2022",
        title: "Yazılım Geliştirici (Stajyer)",
        company: "NBG Bilişim",
        description: "Spsteks adlı uygulamanın önceki sürümünü iyileştirmek için çalıştım. Veritabanı entegrasyonu için MySQL (MariaDB) kullandım.",
        skills: ["Git", "Delphi", "MySQL", "MariaDB", "SQL"]
    },
    {
        date: "Şub 2022 - Haz 2022",
        title: "Yazılım Geliştirici (Stajyer)",
        company: "NBG Bilişim",
        description: "RAD Studio FMX ve Delphi kullanarak Spsteks adlı bir uygulama için bir dizi sayfa geliştirdim. Ayrıca, veri yönetimi işlevselliğini etkinleştirmek için uygulamayı bir MySQL (MariaDB) veritabanıyla entegre ettim.",
        skills: ["Delphi", "MySQL", "Microsoft SQL Server", "SQL"]
    },
    {
        date: "Eyl 2019 - Haz 2020",
        title: "Bilgisayar Teknisyeni (Stajyer)",
        company: "Arbis Teknoloji",
        description: "BT departmanında çeşitli sorumluluklar üstlenerek bilgi ve becerilerimi geliştirme fırsatı buldum. (Bilgisayar montajı, Windows kurulumu, sistem formatlama vb.)",
        skills: ["Bilgisayar Donanımı"]
    }
];

const educations = [
    {
        date: "Eyl 2022 - Ağu 2025",
        degree: "Lisans Derecesi, Yönetim Bilişim Sistemleri",
        school: "Anadolu Üniversitesi"
    },
    {
        date: "Eyl 2020 - Kas 2022",
        degree: "Önlisans, Bilgisayar Programlama",
        school: "Bilecik Şeyh Edebali Üniversitesi",
        details: "Not: 3.39 / 4"
    },
    {
        date: "2016 - 2020",
        degree: "Lise, Bilişim/Web Programlama",
        school: "Demirtaşpaşa Mesleki ve Teknik Anadolu Lisesi",
        details: "Diploma Puanı: 76.57"
    }
];

const TimelineItem = ({ icon, date, title, company, description, skills, isLeft }) => {
    const cardVariants = {
        hidden: { opacity: 0, x: isLeft ? -50 : 50 },
        visible: { opacity: 1, x: 0 }
    };
    const sideClasses = isLeft ? 'md:flex-row-reverse' : '';

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className={`mb-8 flex justify-center w-full items-start ${sideClasses}`}
        >
            <div className="hidden md:block w-5/12"></div>
            <div className="z-10 absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center bg-emerald-500 shadow-xl w-12 h-12 rounded-full">
                <span className="text-white text-2xl">{icon}</span>
            </div>
            <div className="bg-white dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg w-full md:w-5/12 px-6 py-5 ml-16 md:ml-0 transition-colors duration-300">
                <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-2">{date}</p>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white">{title}</h3>
                <p className="text-md font-semibold text-emerald-500 mb-3">{company}</p>
                {description && <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>}
                {skills && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {skills.map((skill, index) => (
                            <span key={index} className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full dark:bg-emerald-900 dark:text-emerald-300">
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const Abouts = () => {
    return (
        <div className="bg-background text-primary min-h-screen py-24 sm:py-32 transition-colors duration-300">
            {/* --- BÖLÜM 1: GİRİŞ --- */}
            <section id="about-intro" className="container mx-auto px-4 pb-16 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-emerald-500">Hakkımda</h1>
                    <div className="max-w-4xl mx-auto text-lg text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed">
                        <p>Türkiye'nin Bursa şehrinde yaşayan, tutkulu ve kullanıcı odaklı bir Frontend Geliştiriciyim. JavaScript, SCSS, Bootstrap ve jQuery gibi temel teknolojilerde güçlü bir altyapıya sahibim. Şu anda React, Tailwind CSS ve Material UI gibi modern kütüphane ve çerçevelerle deneyimimi ileriye taşıyorum.</p>
                        <p>Sürekli öğrenme ve kendimi geliştirme prensibiyle, Next.js ile sunucu taraflı işleme (SSR/SSG) konusundaki uzmanlığımı derinleştiriyor ve TypeScript ile daha güvenli, ölçeklenebilir projeler geliştiriyorum. Bunun yanında masaüstü geliştirme (Delphi), temel arka uç geliştirme (ASP.NET) ve veritabanı yönetimi (MariaDB) konularında da deneyim sahibiyim. Hedefim, sadece arayüz geliştiren bir geliştirici olarak kalmayıp; ürünün tamamına hakim, uçtan uca çözümler üreten bir Fullstack Yazılım Geliştiricisi olmaktır.</p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                            <a href="https://github.com/EnderKaran" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto group flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white font-bold rounded-full hover:bg-slate-900 transition-all duration-300"><FaGithub /> GitHub</a>
                            <a href="https://codepen.io/EnderKrn1" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto group flex items-center justify-center gap-2 px-6 py-3 bg-slate-200 text-slate-800 font-bold rounded-full hover:bg-slate-300 transition-all duration-300"><FaCodepen /> CodePen</a>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* --- BÖLÜM 2: İŞ DENEYİMİ ZAMAN TÜNELİ --- */}
            <section id="experience" className="container mx-auto px-4 py-16">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-emerald-500">İş Deneyimi</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mt-4">Kariyer yolculuğumda edindiğim tecrübeler.</p>
                </motion.div>
                <div className="relative mx-auto max-w-5xl">
                    <div className="absolute top-0 h-full w-1 bg-slate-200 dark:bg-slate-700 left-6 md:left-1/2 -translate-x-1/2 rounded-full"></div>
                    {experiences.map((exp, index) => (
                         <TimelineItem key={index} icon={<FaBriefcase />} {...exp} isLeft={index % 2 !== 0} />
                    ))}
                </div>
            </section>
            
            {/* --- BÖLÜM 3: EĞİTİM ZAMAN TÜNELİ --- */}
            <section id="education" className="py-16 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-emerald-500">Eğitim Hayatım</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mt-4">Akademik geçmişim ve aldığım eğitimler.</p>
                    </motion.div>
                    <div className="relative mx-auto max-w-5xl">
                        <div className="absolute top-0 h-full w-1 bg-slate-200 dark:bg-slate-700 left-6 md:left-1/2 -translate-x-1/2 rounded-full"></div>
                         {educations.map((edu, index) => (
                            <TimelineItem key={index} icon={<FaGraduationCap />} date={edu.date} title={edu.degree} company={edu.school} description={edu.details} isLeft={index % 2 !== 0} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* --- BÖLÜM 4: ONUR VE ÖDÜLLER --- */}
            <section id="awards" className="container mx-auto px-4 py-16 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
                     <h2 className="text-4xl font-bold tracking-tighter mb-8 text-emerald-500">Onur ve Ödüller</h2>
                     <div className="inline-flex items-center gap-4 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md transition-colors duration-300">
                        <FaAward className="text-4xl text-emerald-500" />
                        <div>
                            <h3 className="font-bold text-xl text-slate-900 dark:text-white">Onur Belgesi</h3>
                            <p className="text-slate-600 dark:text-slate-400">Bilecik Şeyh Edebali Üniversitesi - Haz 2022</p>
                        </div>
                     </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Abouts;