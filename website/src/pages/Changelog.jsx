import React from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaWrench, FaRocket, FaPalette, FaCode, FaMobileAlt, FaArrowUp, FaMousePointer, FaColumns, FaBug } from 'react-icons/fa'; 
import { VscFileCode } from "react-icons/vsc";
const changelogData = [
    {
        version: "v1.2.0",
        date: "15 Eylül 2025",
        changes: [
            { 
                type: "Mimari Değişiklik", 
                description: "Proje, tek sayfa uygulamasından (SPA), gelecekteki genişlemelere olanak tanıyan çok sayfalı bir yapıya (React Router DOM) geçirildi.",
                icon: <FaColumns /> 
            },
            { 
                type: "Yeni Sayfa", 
                description: "Projenin gelişim sürecini ve güncellemeleri şeffaf bir şekilde paylaşmak amacıyla bu Geliştirme Günlüğü (Changelog) sayfası oluşturuldu.",
                icon: <FaPlus /> 
            },
            { 
                type: "İyileştirme", 
                description: "Navbar, artık hem sayfa içi yumuşak kaydırmayı (react-scroll) hem de sayfalar arası geçişi (react-router-dom) akıllı bir şekilde destekliyor.",
                icon: <FaWrench /> 
            },
        ]
    },
    {
        version: "v1.1.0",
        date: "14 Eylül 2025",
        changes: [
            { 
                type: "Yeni Özellik", 
                description: "Site geneline, kullanıcının sistem tercihini algılayan ve seçimini hafızada tutan Açık Mod / Koyu Mod desteği getirildi.",
                icon: <FaPalette /> 
            },
            { 
                type: "Yeni Özellik", 
                description: "Sayfa kaydırma ilerlemesini gösteren, Navbar'a entegre dinamik bir 'Progress Bar' eklendi.",
                icon: <FaPlus /> 
            },
            { 
                type: "Yeni Özellik", 
                description: "Kullanıcı etkileşimini artırmak için, Framer Motion fiziği ile geliştirilmiş, interaktif ve temaya duyarlı özel imleç (Custom Cursor) entegre edildi.",
                icon: <FaMousePointer />
            },
            { 
                type: "Yeni Özellik", 
                description: "Sayfa sonuna ulaşıldığında beliren ve tek tıkla en üste yumuşak bir geçiş sağlayan 'Yukarı Çık' butonu eklendi (react-scroll).",
                icon: <FaArrowUp /> 
            },
            { 
                type: "İyileştirme", 
                description: "Genel kaydırma çubuğu (scrollbar) tasarımı, sitenin estetiğiyle uyumlu hale getirildi.",
                icon: <FaWrench />
            },
        ]
    },
    {
        version: "v1.0.0",
        date: "26 Temmuz - 18 Ağustos 2025",
        changes: [
            { 
                type: "Lansman", 
                description: "Kişisel portfolyo sitesinin ilk versiyonu (React, Vite, Tailwind CSS) temel bileşenleriyle birlikte oluşturuldu ve yayınlandı.",
                icon: <FaRocket /> 
            },
            { 
                type: "Temel Yapı", 
                description: "Hero, Hakkımda, Projeler, Teknolojiler ve Footer gibi ana bölümlerin tasarımı ve kodlaması tamamlandı.",
                icon: <VscFileCode />
            },
            { 
                type: "Responsive Tasarım", 
                description: "Tüm bileşenler, mobil cihazlardan geniş ekranlara kadar farklı ekran boyutlarına uyumlu hale getirildi.",
                icon: <FaMobileAlt />
            },
            { 
                type: "Hata Düzeltme", 
                description: "X eksenindeki istenmeyen kaydırma çubuğu sorunu gibi çeşitli CSS ve responsive tasarım hataları giderildi.",
                icon: <FaBug />
            }
        ]
    },
];

const ChangelogPage = () => {
    return (
        <div id="changelog" className="bg-background text-primary min-h-screen py-24 sm:py-32 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
                    Geliştirme <span className="text-accent">Günlüğü</span>
                </h2>

                <div className="relative border-l-2 border-card-border/50 ml-6 md:mx-auto md:max-w-3xl">
                    {changelogData.map((entry, index) => (
                        <motion.div
                            key={entry.version}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="mb-12 pl-12 relative"
                        >
                            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-accent rounded-full border-4 border-background"></div>

                            <p className="text-sm text-secondary mb-1">{entry.date}</p>
                            <h3 className="text-3xl font-bold text-primary mb-4">{entry.version}</h3>
                            
                            <div className="bg-card-background border border-card-border rounded-lg p-6">
                                <ul className="space-y-4">
                                    {entry.changes.map((change, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <span className="text-accent mt-1">{change.icon}</span>
                                            <div className="flex flex-col">
                                                <p className="font-semibold text-primary/90">{change.type}</p>
                                                <p className="text-secondary">{change.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChangelogPage;