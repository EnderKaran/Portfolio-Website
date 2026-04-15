'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FiBriefcase, 
    FiCalendar, 
    FiArrowRight, 
    FiX, 
    FiLink, 
    FiCheckCircle 
} from 'react-icons/fi';
import { FaRegBuilding } from 'react-icons/fa';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

// --- KURUMSAL PROJE VERİLERİ ---
const workProjects =[
    {
        id: 1,
        title: "LMS Real-Time Subtitle Translator",
        date: "Şub 2026 – Mar 2026",
        company: "Stok Endüstriyel A.Ş.",
        shortDesc: "Kurumsal eğitim platformlarında (Docebo vb.) İngilizce videolar için sıfır gecikmeli, DOM izleme tabanlı Türkçe altyazı eklentisi.",
        techStack: ["React", "TypeScript", "REST API", "Plasmo", "MutationObserver", "Lingva API"],
        link: null,
        details:[
            {
                title: "Mimari",
                desc: "Proje, modern eklenti geliştirme framework'ü olan Plasmo üzerine React ve TypeScript ile inşa edildi."
            },
            {
                title: "Dinamik DOM İzleme",
                desc: "Eğitim slaytlarının içindeki altyazı değişimlerini anlık olarak yakalamak için MutationObserver API kullanıldı. Bu sayede karmaşık iframe yapıları içinde bile kesintisiz veri takibi sağlandı."
            },
            {
                title: "Verimli Çeviri Akışı",
                desc: "Başlangıçta yerel bir yapay zeka modeli (Whisper WASM) planlanmış olsa da, tarayıcı kaynaklarını tüketmemek ve sıfır gecikme (zero-latency) sağlamak adına Lingva API entegrasyonuna gidildi."
            },
            {
                title: "Stratejik İş Kararı & Sonuç",
                desc: "Yüksek kaynak tüketen yerel AI modelleri yerine DOM parsing yöntemine geçilerek CPU/RAM yükü minimize edildi. Ses gecikmeleri ortadan kaldırılarak %100 senkronize bir eğitim deneyimi sunuldu."
            }
        ]
    },
    {
        id: 2,
        title: "Stok RandevuQR",
        date: "Mar 2026 – Mar 2026",
        company: "Stok Endüstriyel A.Ş.",
        shortDesc: "Toplantı odası trafiğini disipline eden, akıllı iş kuralları ve 'Take-over' mekanizmasına sahip Kurumsal Kaynak Yönetimi sistemi.",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL" , "Enterprise Logic"],
        link: null,
        details:[
            {
                title: "Dinamik Kaynak Yönetimi",
                desc: "Kullanıcıların haftalık takvim üzerinden oda rezervasyonu yapmasını sağlayan, çakışmaları anında önleyen interaktif arayüz."
            },
            {
                title: "Akıllı İş Kuralları",
                desc: "Molasız kullanım engeli (maks. 1 saat), günlük rezervasyon limiti ve zorunlu mola kısıtlamaları ile ofis içi adil kullanım altyapısı kuruldu."
            },
            {
                title: "Check-in & Take-over Mekanizması",
                desc: "Randevu saatinden sonraki ilk 5 dakika içinde onaylanmayan oturumların otomatik olarak boşa çıkmasını ve diğer personeller tarafından devralınabilmesini sağlayan algoritmik kontrol sistemi."
            },
            {
                title: "Canlı Durum Takibi",
                desc: "Rezervasyonların mevcut durumuna göre (Beklemede/Aktif) gerçek zamanlı renk geçişleri ile görsel bilgilendirme ve hiyerarşik yetkilendirme (Admin/Kullanıcı) sağlandı."
            }
        ]
    },
    {
        id: 3,
        title: "Etkileşimli Satış Analiz Paneli",
        date: "Ağu 2025 – Eyl 2025",
        company: "Stok Endüstriyel A.Ş.",
        shortDesc: "Binlerce ham satış verisini milisaniyeler içinde stratejik iş zekası (BI) grafiklerine dönüştüren veri paneli.",
        techStack:["React.js", "Vite", "Scrum" , "React Router DOM" ,   "Shadcn UI", "Chart.js"],
        link: null,
        details:[
            {
                title: "Analiz Modülleri",
                desc: "Şirketin genel satış KPI'larını, onay oranlarını ve teklif listelerini sayfalama, akıllı sıralama ve bağlamsal filtrelerle yüksek performansta listeler."
            },
            {
                title: "Veri Yönetimi & Performans",
                desc: "Binlerce satırlık veri seti üzerinde yapılan karmaşık filtreleme işlemleri, useMemo kullanılarak arayüzü dondurmadan milisaniyeler içinde gerçekleşecek şekilde optimize edildi."
            },
            {
                title: "Görselleştirme & Drill-down",
                desc: "En değerli müşterileri ve personelleri Chart.js grafikleriyle sıralar. Halka grafiklerle onay/red oranları karşılaştırılarak tıklanabilir detaylandırma (drill-down) imkanı sunuldu."
            },
            {
                title: "Teknoloji Yığını",
                desc: "React Router DOM, Shadcn UI, Tailwind CSS ve Lucide React ile modern, responsive ve tamamen özelleştirilebilir bir mimari kuruldu."
            }
        ]
    },
    {
        id: 4,
        title: "Senole Web Arayüzü",
        date: "Mar 2025 – Nis 2025",
        company: "Stok Endüstriyel A.Ş.",
        shortDesc: "Framer Motion, Leaflet ve Context API kullanılarak geliştirilmiş, yüksek performanslı ve etkileşimli kurumsal web sitesi.",
        techStack:["React", "Framer Motion", "React Leaflet", "SCSS"],
        link: "https://senole.vercel.app",
        details:[
            {
                title: "Modern Arayüz & Etkileşim",
                desc: "Slider, öne çıkan özellikler ve bülten aboneliği ile donatılmış Anasayfa; Skeleton ve Lightbox destekli dinamik Ürünler sayfası."
            },
            {
                title: "Gelişmiş Form & Harita Entegrasyonu",
                desc: "İletişim bölümünde Formik & Yup ile güvenli form doğrulama kurgulandı. React Leaflet, OSMBuildings ve Overpass API ile 3D binalı özel temalı harita entegrasyonu yapıldı."
            },
            {
                title: "Performans & SEO",
                desc: "Sayfa bazlı dinamik meta etiketler (React Helmet) ve Context API + localStorage destekli Açık/Karanlık (Dark Mode) tema altyapısı kuruldu."
            },
            {
                title: "AI Destekli Görseller",
                desc: "Kullanıcı deneyimini artırmak için sitede yer alan kartlardaki tüm görseller Gemini 2.5 Flash Image Generation yapay zekası ile özel olarak üretildi."
            }
        ]
    }
];

export default function WorkProjects() {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    // Modal açıkken arkadaki kaydırmayı engelle
    useEffect(() => {
        if (selectedProject) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; }
    }, [selectedProject]);

    return (
        <section className="py-24 overflow-hidden bg-gray-50/50 dark:bg-[#050505] relative">
            
            {/* Arka Plan Dekorasyonu */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 dark:opacity-30 -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-emerald-500 blur-[160px] rounded-full mix-blend-multiply opacity-20"></div>
            </div>

            <div className="container px-4 mx-auto max-w-[1200px]">
                
                {/* Başlık */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-3 mb-4 text-emerald-500">
                            <FiBriefcase size={24} />
                            <span className="font-bold tracking-widest uppercase text-sm">İş Deneyimi</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white">
                            Kurumsal <span className="text-emerald-500">Projeler</span>
                        </h2>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-md">
                        <p className="text-gray-500 dark:text-gray-400 font-medium">
                             İş süreçlerini dijitalleştiren, operasyonel krizleri çözen ve verimliliği artıran profesyonel çözümlerim.
                        </p>
                    </motion.div>
                </div>

                {/* SHADCN CAROUSEL ALANI */}
                <Carousel
                    opts={{
                        align: "start",
                        loop: false,
                    }}
                    className="w-full relative pb-4"
                >
                    <CarouselContent className="-ml-4 md:-ml-6">
                        {workProjects.map((project, index) => (
                            <CarouselItem key={project.id} className="pl-4 md:pl-6 basis-[90%] md:basis-[450px]">
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="h-full flex flex-col bg-white dark:bg-[#0a0a0a] rounded-[2.5rem] p-8 border border-gray-200 dark:border-white/5 shadow-lg hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-300 group"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-gray-600 bg-gray-100 rounded-lg dark:text-gray-300 dark:bg-white/5">
                                            <FiCalendar size={14} /> {project.date}
                                        </div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 rounded-lg dark:text-emerald-400 dark:bg-emerald-500/10">
                                            <FaRegBuilding size={14} /> {project.company}
                                        </div>
                                    </div>

                                    <h3 className="mb-4 text-2xl font-black tracking-tight text-gray-900 transition-colors dark:text-white group-hover:text-emerald-500">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="mb-6 font-medium leading-relaxed text-gray-600 dark:text-gray-400 flex-grow">
                                        {project.shortDesc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="px-3 py-1.5 text-xs font-bold rounded-xl bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <button 
                                        onClick={() => setSelectedProject(project)}
                                        className="flex items-center justify-between w-full px-6 py-4 font-bold transition-colors border bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500"
                                    >
                                        Teknik Detayları İncele
                                        <FiArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                                    </button>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    {/* Carousel Yön Okları (Sadece Tablet/Masaüstünde Görünür) */}
                    <div className="hidden md:flex items-center justify-end gap-3 mt-8 pr-4">
                        <CarouselPrevious className="static translate-y-0 bg-white dark:bg-[#0a0a0a] border-gray-200 dark:border-white/10 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-colors h-12 w-12" />
                        <CarouselNext className="static translate-y-0 bg-white dark:bg-[#0a0a0a] border-gray-200 dark:border-white/10 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-colors h-12 w-12" />
                    </div>
                </Carousel>
            </div>

            {/* --- DETAY MODALI (DIALOG) --- */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
                        <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedProject(null)}></div>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 20 }} 
                            animate={{ opacity: 1, scale: 1, y: 0 }} 
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0a0a0a] rounded-[2.5rem] shadow-2xl border border-gray-200 dark:border-white/10 custom-scrollbar"
                        >
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 z-10 p-3 bg-gray-100 dark:bg-white/10 rounded-full text-gray-500 dark:text-gray-400 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white transition-colors"
                            >
                                <FiX size={24} />
                            </button>

                            {/* Modal Başlık Bölümü */}
                            <div className="p-8 md:p-12 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02] relative overflow-hidden">
                                <div className="absolute top-[-50%] right-[-10%] w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                                
                                <div className="flex flex-wrap gap-3 mb-4 relative z-10">
                                    <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-bold text-emerald-600 bg-emerald-50 rounded-lg dark:text-emerald-400 dark:bg-emerald-500/10">
                                        <FaRegBuilding size={16} /> {selectedProject.company}
                                    </span>
                                    <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-bold text-gray-600 bg-gray-100 rounded-lg dark:text-gray-300 dark:bg-white/5">
                                        <FiCalendar size={16} /> {selectedProject.date}
                                    </span>
                                </div>

                                <h2 className="mb-6 text-3xl font-black tracking-tighter text-gray-900 md:text-5xl dark:text-white relative z-10">
                                    {selectedProject.title}
                                </h2>

                                {selectedProject.link && (
                                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white transition-colors rounded-xl bg-emerald-500 hover:bg-emerald-600 relative z-10">
                                        <FiLink size={18} /> Canlı Siteye Git
                                    </a>
                                )}
                            </div>

                            {/* Modal İçerik (Case Study Detayları) */}
                            <div className="p-8 md:p-12 space-y-8">
                                {selectedProject.details.map((detail: any, index: number) => (
                                    <div key={index} className="flex gap-4 md:gap-6">
                                        <div className="flex-shrink-0 mt-1 text-emerald-500">
                                            <FiCheckCircle size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black tracking-tight text-gray-900 dark:text-white mb-2">
                                                {detail.title}
                                            </h3>
                                            <p className="font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                                                {detail.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                {/* Teknoloji Yığını Rozetleri (Alt kısımda) */}
                                <div className="pt-8 mt-8 border-t border-gray-100 dark:border-white/5">
                                    <h4 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Kullanılan Teknolojiler</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack.map((tech: string, i: number) => (
                                            <span key={i} className="px-4 py-2 text-sm font-bold bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-xl">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}