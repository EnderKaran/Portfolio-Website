'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaPlus, FaDatabase, FaMagic, FaCode, FaRocket, FaPalette, FaBug, FaCube, FaWrench, FaMobileAlt } from 'react-icons/fa';


// --- İKONLAR ---
const Icons = {
  Plus: () => <FaPlus />,
  Database: () => <FaDatabase />,
  Magic: () => <FaMagic />,
  Code: () => <FaCode />,
  Rocket: () => <FaRocket />,
  Palette: () => <FaPalette />,
  Bug: () => <FaBug />,
  Cube: () => <FaCube />,
  Wrench: () => <FaWrench />,
  Mobile: () => <FaMobileAlt />
};

const useTranslation = () => ({
    t: (key: string) => {
        const translations: Record<string, string> = {
            'changelog_title': 'Geliştirme Günlüğü',
            'changelog_type_newpage': 'Yeni Sayfa',
            'changelog_type_improvement': 'İyileştirme',
            'changelog_type_bugfix': 'Hata Düzeltmesi',
            'changelog_type_archchange': 'Mimari Değişiklik',
            'changelog_type_launch': 'Lansman',
            'changelog_type_structure': 'Temel Yapı',
            'changelog_type_responsive': 'Responsive Tasarım',
            // --- v2.2.0 ---
            'changelog_v2_2_0_desc1': 'Tüm site genelinde Apple ve Bento Grid tasarım diline geçiş yapılarak Premium bir görünüme ulaşıldı.',
            'changelog_v2_2_0_desc2': 'Renk paleti güncellendi; glassmorphism (cam efekti) ve soft glow efektleri ile derinlik hissi artırıldı.',
            'changelog_v2_2_0_desc3': 'Tipografi modernize edildi. Başlıklar ve metinler yüksek kontrastlı ve sıkışık (tracking-tighter) ağırlıklarla yeniden yapılandırıldı.',
            'changelog_v2_2_0_desc4': 'Bileşenler (Navbar, Footer, Hero, İletişim vb.) tam yuvarlatılmış hatlar ve daha akıcı Framer animasyonları ile revize edildi.',
            // --- v2.1.0 ---
            'changelog_v2_1_0_desc1': 'Dinamik Blog modülü eklendi ve tüm arayüz kodlamaları tamamlandı.',
            'changelog_v2_1_0_desc2': 'Sanity.io Headless CMS entegrasyonu sağlandı ve bulut tabanlı içerik yönetimine geçildi.',
            'changelog_v2_1_0_desc3': 'Next.js Image optimizasyonu Sanity CDN için yapılandırıldı.',
            'changelog_v2_1_0_desc4': 'Dinamik route yapısı (Slug) ve PortableText eklendi.',
            // --- v2.0.0 ---
            'changelog_v2_0_0_desc1': 'Proje altyapısı Next.js 15 (App Router) mimarisine taşındı.',
            'changelog_v2_0_0_desc2': 'Tüm kod tabanı TypeScript\'e (.tsx) dönüştürülerek tip güvenliği sağlandı.',
            'changelog_v2_0_0_desc3': 'Stil motoru Tailwind CSS v4\'e yükseltildi.',
            'changelog_v2_0_0_desc4': 'Dark Mode hidrasyon sorunları giderildi.',
            // Diğerleri
            'changelog_v1_9_0_desc1': 'Hero bölümüne 3D küp animasyonu eklendi.',
            'changelog_v1_9_0_desc2': 'Dinamik SEO başlıkları ve açıklamaları entegre edildi.',
            'changelog_v1_8_0_desc1': 'Hero arka plan gezegen efektinin Açık/Koyu mod sorunu çözüldü.',
            'changelog_v1_8_0_desc2': 'Metinlerin okunabilirlik sorunları tema değişkenleri ile çözüldü.',
            'changelog_v1_8_0_desc3': 'Mobildeki başlık çakışmaları (Responsive hataları) giderildi.',
            'changelog_v1_8_0_desc4': 'Tüm renk sistemi Tailwind CSS uyumlu CSS değişkenlerine taşındı.',
            'changelog_v1_0_0_desc1': 'Kişisel portfolyo sitesinin ilk versiyonu oluşturuldu.',
            'changelog_v1_0_0_desc2': 'Hero, Hakkımda, Projeler, Teknolojiler bölümleri kodlandı.',
            'changelog_v1_0_0_desc3': 'Farklı ekran boyutlarına uyumlu hale getirildi.',
            'changelog_v1_0_0_desc4': 'X eksenindeki istenmeyen kaydırma çubuğu sorunu giderildi.'
        };
        return translations[key] || key;
    }
});
// ---------------------------------------------

export default function ChangelogPage() {
    const { t } = useTranslation();

    const changelogData = [
        {
            version: "v2.2.0",
            date: "01 Nisan 2026",
            changes: [
                { type: t('changelog_type_archchange'), description: t('changelog_v2_2_0_desc1'), icon: <Icons.Palette /> },
                { type: t('changelog_type_improvement'), description: t('changelog_v2_2_0_desc2'), icon: <Icons.Magic /> },
                { type: t('changelog_type_improvement'), description: t('changelog_v2_2_0_desc3'), icon: <Icons.Wrench /> },
                { type: t('changelog_type_improvement'), description: t('changelog_v2_2_0_desc4'), icon: <Icons.Cube /> },
            ]
        },
        {
            version: "v2.1.0",
            date: "10 Mart 2026",
            changes: [
                { type: t('changelog_type_newpage'), description: t('changelog_v2_1_0_desc1'), icon: <Icons.Plus /> },
                { type: t('changelog_type_archchange'), description: t('changelog_v2_1_0_desc2'), icon: <Icons.Database /> },
                { type: t('changelog_type_improvement'), description: t('changelog_v2_1_0_desc3'), icon: <Icons.Magic /> },
                { type: t('changelog_type_structure'), description: t('changelog_v2_1_0_desc4'), icon: <Icons.Code /> },
            ]
        },
        {
            version: "v2.0.0",
            date: "15 Ocak 2026",
            changes: [
                { type: t('changelog_type_archchange'), description: t('changelog_v2_0_0_desc1'), icon: <Icons.Rocket /> },
                { type: t('changelog_type_structure'), description: t('changelog_v2_0_0_desc2'), icon: <Icons.Code /> },
                { type: t('changelog_type_improvement'), description: t('changelog_v2_0_0_desc3'), icon: <Icons.Palette /> },
                { type: t('changelog_type_bugfix'), description: t('changelog_v2_0_0_desc4'), icon: <Icons.Bug /> },
            ]
        },
        {
            version: "v1.9.0", 
            date: "03 Aralık 2025", 
            changes: [
                 { type: t('changelog_type_archchange'), description: t('changelog_v1_9_0_desc1'), icon: <Icons.Cube /> },
                { type: t('changelog_type_improvement'), description: t('changelog_v1_9_0_desc2'), icon: <Icons.Wrench /> },
            ]
        },
        {
            version: "v1.8.0",
            date: "02 Aralık 2025",
            changes: [
                { type: t('changelog_type_bugfix'), description: t('changelog_v1_8_0_desc1'), icon: <Icons.Palette /> },
                { type: t('changelog_type_improvement'), description: t('changelog_v1_8_0_desc2'), icon: <Icons.Wrench /> },
                { type: t('changelog_type_responsive'), description: t('changelog_v1_8_0_desc3'), icon: <Icons.Mobile /> },
                { type: t('changelog_type_archchange'), description: t('changelog_v1_8_0_desc4'), icon: <Icons.Code /> },
            ]
        },
        {
            version: "v1.0.0",
            date: "Ağustos 2025",
            changes: [
                { type: t('changelog_type_launch'), description: t('changelog_v1_0_0_desc1'), icon: <Icons.Rocket /> },
                { type: t('changelog_type_structure'), description: t('changelog_v1_0_0_desc2'), icon: <Icons.Code /> },
                { type: t('changelog_type_responsive'), description: t('changelog_v1_0_0_desc3'), icon: <Icons.Mobile /> },
                { type: t('changelog_type_bugfix'), description: t('changelog_v1_0_0_desc4'), icon: <Icons.Bug /> }
            ]
        },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const cardVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    return (
        <section id="changelog" className="relative min-h-screen pt-32 pb-24 overflow-hidden transition-colors duration-500 bg-white dark:bg-[#030303] text-gray-900 dark:text-white">
            
            {/* Arka Plan Glow Efektleri */}
            <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-50 -z-10">
                <div className="absolute top-[5%] right-[5%] w-[40vw] h-[40vw] bg-emerald-500 blur-[150px] rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>
                <div className="absolute bottom-[10%] left-[5%] w-[30vw] h-[30vw] bg-blue-500 blur-[130px] rounded-full mix-blend-multiply opacity-20"></div>
            </div>

            <div className="container relative z-10 px-4 mx-auto max-w-[900px]">
                
                {/* --- BAŞLIK BÖLÜMÜ --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h1 className="mb-6 text-6xl font-black tracking-tighter md:text-8xl">
                        Sürüm <span className="text-emerald-500">Notları</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg font-medium leading-relaxed text-gray-500 md:text-xl dark:text-gray-400">
                        Projenin evrimi. Eklenen yeni özellikler, mimari değişiklikler ve hata düzeltmelerinin geçmişi.
                    </p>
                </motion.div>

                {/* --- SÜRÜM NOTLARI (RELEASE CARDS) --- */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-12"
                >
                    {changelogData.map((entry, index) => (
                        <motion.div
                            key={entry.version}
                            variants={cardVariants}
                            className="relative"
                        >
                            {/* Dikey Bağlantı Çizgisi (İlk eleman hariç kartları birbirine bağlar) */}
                            {index !== changelogData.length - 1 && (
                                <div className="absolute left-[3rem] top-[8rem] bottom-[-3rem] w-1 bg-gray-100 dark:bg-white/5 z-0 hidden md:block"></div>
                            )}

                            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10">
                                
                                {/* Sol Taraf: Versiyon ve Tarih */}
                                <div className="flex flex-col items-start md:items-end w-full md:w-48 shrink-0 pt-2">
                                    <div className="inline-flex items-center justify-center px-4 py-2 mb-3 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl font-black tracking-tighter text-2xl border border-emerald-100 dark:border-emerald-500/20 shadow-sm">
                                        {entry.version}
                                    </div>
                                    <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">
                                        {entry.date}
                                    </p>
                                </div>

                                {/* Sağ Taraf: Değişiklik Kartı (Bento Style) */}
                                <div className="flex-1 p-8 md:p-10 transition-all duration-300 bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-white/5 rounded-[2.5rem] shadow-lg hover:shadow-2xl hover:shadow-emerald-500/5 group">
                                    <ul className="space-y-8">
                                        {entry.changes.map((change, i) => (
                                            <li key={i} className="flex items-start gap-5">
                                                {/* İkon Kutusu */}
                                                <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-2xl bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-500/10 group-hover:text-emerald-500 transition-colors duration-300 border border-gray-100 dark:border-white/5">
                                                    {change.icon}
                                                </div>
                                                
                                                {/* Metin İçeriği */}
                                                <div className="pt-1.5">
                                                    <p className="mb-1 text-sm font-black tracking-widest uppercase text-emerald-500">
                                                        {change.type}
                                                    </p>
                                                    <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300">
                                                        {change.description}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}