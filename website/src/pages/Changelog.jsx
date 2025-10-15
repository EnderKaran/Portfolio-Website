import React from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaWrench, FaRocket, FaPalette, FaMobileAlt, FaArrowUp, FaMousePointer, FaColumns, FaBug } from 'react-icons/fa'; 
import { VscFileCode } from "react-icons/vsc";

const changelogData = [
    {
        version: "v1.5.0",
        date: "15 Ekim 2025",
        changes: [
            { 
                type: "Yeni Sayfa", 
                description: "GitHub API'si ile entegre, dinamik bir '/projects' sayfası oluşturuldu. Projeler, arama ve filtreleme özellikleriyle birlikte modern kartlar halinde sergileniyor.",
                icon: <FaPlus />  
            },
            { 
                type: "İyileştirme", 
                description: "Proje kartlarındaki teknoloji etiketleri, artık GitHub repolarındaki 'topics' alanından dinamik olarak çekilerek daha doğru ve yönetimi kolay bir hale getirildi.",
                icon: <FaWrench />
            },
            { 
                type: "Hata Düzeltme", 
                description: "Projeler sayfasının tasarımı, hem açık hem de koyu modda tasarımla tam uyumlu olacak şekilde düzeltildi ve iyileştirildi.",
                icon: <FaPalette /> 
            },
        ]
    },
    {
        version: "v1.4.0",
        date: "14 Ekim 2025",
        changes: [
            { 
                type: "Yeni Sayfa", 
                description: "Teknoloji yığınını sergilemek için, React Router ile erişilen, kategorilere ayrılmış ve animasyonlu yeni bir '/technologies' sayfası eklendi.",
                icon: <FaPlus />  
            },
            { 
                type: "İyileştirme", 
                description: "Anasayfa Proje yol haritası güncellendi: Geliştirme hedefleri arasına Next.js ve TypeScript ekosistemlerinde uzmanlaşmak eklendi.",
                icon: <FaPalette /> 
            },
        ]
    },
    {
        version: "v1.3.0",
        date: "29 Eylül 2025",
        changes: [
            { 
                type: "Yeni Sayfa", 
                description: "Formik ve Yup kullanılarak 'mailto' işlevselliğine sahip, modern ve doğrulamalı bir 'İletişim' sayfası eklendi.",
                icon: <FaPlus /> 
            },
            { 
                type: "Yeni Sayfa", 
                description: "Kariyer ve eğitim geçmişini şık ve duyarlı bir zaman tüneli formatında sunan kapsamlı bir 'Hakkımda' sayfası oluşturuldu.",
                icon: <FaPlus /> 
            },
            { 
                type: "İyileştirme", 
                description: "Site genelindeki metin seçimi (::selection) rengi, site kimliğiyle uyumlu hale getirilerek kullanıcı deneyimi zenginleştirildi.",
                icon: <FaPalette /> 
            },
            { 
                type: "Hata Düzeltme", 
                description: "Açık modda yaşanan metin ve başlık okunabilirlik sorunları, tema ile tam uyumlu renkler kullanılarak tamamen giderildi.",
                icon: <FaBug />
            },
        ]
    },
    // --- ESKİ SÜRÜM BİLGİLERİ ---
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
        <div id="changelog" className="min-h-screen py-24 transition-colors duration-300 bg-background text-primary sm:py-32">
            <div className="container px-4 mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-5xl font-bold text-center md:text-6xl text-slate-900 dark:text-white"
                >
                    <span className="text-emerald-500">Geliştirme Günlüğü</span>
                </motion.h2>

                <div className="relative ml-6 border-l-2 border-slate-200 dark:border-slate-700 md:mx-auto md:max-w-3xl">
                    {changelogData.map((entry, index) => (
                        <motion.div
                            key={entry.version}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative pl-12 mb-12"
                        >
                            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-background transition-colors duration-300"></div>

                            <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">{entry.date}</p>
                            <h3 className="mb-4 text-3xl font-bold text-emerald-500">{entry.version}</h3>
                            
                            <div className="p-6 transition-colors duration-300 bg-white border rounded-lg dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                                <ul className="space-y-4">
                                    {entry.changes.map((change, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <span className="mt-1 text-lg text-emerald-500">{change.icon}</span>
                                            <div>
                                                <p className="font-semibold text-slate-800 dark:text-slate-100">{change.type}</p>
                                                <p className="text-slate-600 dark:text-slate-400">{change.description}</p>
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