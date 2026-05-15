'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

// --- MOCK İKONLAR (Önizleme Ortamında Çalışması İçin) ---
// Yerel projenize geçirirken bu objeyi silip orijinal react-icons importlarınızı kullanabilirsiniz.
const Icons = {
    MapPin: ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
    Code: ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
    Layers: ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 12 12 17 22 12"></polyline><polyline points="2 17 12 22 22 17"></polyline></svg>,
    Activity: ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>,
    Star: ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
    Cpu: ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
};

// --- ANIMASYONLU SAYAÇ BİLEŞENİ (Framer Motion ile 0'dan hedefe akar) ---
const AnimatedCounter = ({ value, className = "" }: { value: number, className?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    });
    const rounded = useTransform(springValue, (latest) => Math.round(latest));

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    return <motion.span ref={ref} className={className}>{rounded}</motion.span>;
};

// --- ANA BİLEŞEN: PROJECT HUB (BENTO GRID) ---
export default function ProjectHub() {
    // Sanity'den gelecek veriyi tutacağımız state
    const [stats, setStats] = useState({
        waypointCount: 0,
        frontendMentorCount: 0,
        interfaceFoundryText: "Yükleniyor..."
    });
    const [loading, setLoading] = useState(true);

    // Veri Çekme İşlemi
    useEffect(() => {
        const fetchStats = async () => {
            try {
                // NOT: Gerçek projende buradaki setTimeout'u silip Sanity Client'ını kullanacaksın.
                // ÖRNEK SANITY SORGUSU: 
                // const data = await client.fetch(`*[_type == "projectStats"][0]`);
                
                // Şimdilik simüle ediyoruz (Sanity'den geliyormuş gibi)
                setTimeout(() => {
                    setStats({
                        waypointCount: 14, // Sanity'den girdiğin rakam
                        frontendMentorCount: 125, // Sanity'den girdiğin rakam
                        interfaceFoundryText: "50+ Components" // Sanity'den girdiğin metin
                    });
                    setLoading(false);
                }, 1000);
                
            } catch (error) {
                console.error("İstatistikler çekilemedi:", error);
            }
        };

        fetchStats();
    }, []);

    return (
        <section className="py-24 relative overflow-hidden bg-[#030303]">
            {/* Arka Plan Glow Efektleri */}
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
                <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-emerald-500 blur-[150px] rounded-full mix-blend-multiply"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-purple-500 blur-[150px] rounded-full mix-blend-multiply"></div>
            </div>

            <div className="container relative z-10 px-4 mx-auto max-w-[1000px]">
                
                {/* Başlık */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4 text-emerald-500">
                        <Icons.Activity size={24} />
                        <span className="font-bold tracking-widest uppercase text-sm">Canlı Veri Paneli</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                        Proje <span className="text-gray-500">Ekosistemi</span>
                    </h2>
                </motion.div>

                {/* BENTO GRID BAŞLIYOR */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* 1. WAYPOINT KARTI (Geniş - Sol Üst) */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 relative flex flex-col justify-between p-8 md:p-10 bg-[#0a0a0a] rounded-[2.5rem] border border-emerald-500/20 shadow-2xl group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
                        
                        <div>
                            <div className="flex items-center justify-between mb-8 relative z-10">
                                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl border border-emerald-500/20">
                                    <Icons.MapPin size={24} />
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full border border-emerald-500/20">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                                    Active Learning
                                </div>
                            </div>
                            <h3 className="text-2xl font-black text-white tracking-tight relative z-10">Waypoint</h3>
                            <p className="text-gray-400 font-medium mt-2 max-w-sm relative z-10">Harita tabanlı yolculuk uygulaması ve gerçek dünya senaryolu görevler serisi.</p>
                        </div>

                        <div className="mt-12 relative z-10">
                            <div className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 tracking-tighter">
                                {!loading ? <AnimatedCounter value={stats.waypointCount} /> : "..."}
                            </div>
                            <p className="text-emerald-500 font-bold uppercase tracking-widest mt-2 text-sm">Tamamlanan Görev</p>
                        </div>
                    </motion.div>

                    {/* 2. FRONTEND MENTOR KARTI (Dar - Sağ Üst) */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1 relative flex flex-col justify-between p-8 md:p-10 bg-[#0a0a0a] rounded-[2.5rem] border border-purple-500/20 shadow-2xl group overflow-hidden"
                    >
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 blur-[60px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>

                        <div>
                            <div className="flex items-center justify-between mb-8 relative z-10">
                                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-2xl border border-purple-500/20">
                                    <Icons.Code size={24} />
                                </div>
                                <Icons.Star size={20} className="text-purple-500" />
                            </div>
                            <h3 className="text-xl font-black text-white tracking-tight relative z-10">Frontend Mentor</h3>
                            <p className="text-gray-400 font-medium text-sm mt-2 relative z-10">UI/UX çözümleri ve kodlama maratonu ilerleyişi.</p>
                        </div>

                        <div className="mt-12 relative z-10">
                            <div className="flex items-baseline gap-2">
                                <div className="text-6xl font-black text-white tracking-tighter">
                                    {!loading ? <AnimatedCounter value={stats.frontendMentorCount} /> : "..."}
                                </div>
                                <span className="text-gray-500 font-bold text-2xl">/ ∞</span>
                            </div>
                            <div className="w-full h-2 bg-gray-800 rounded-full mt-4 overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "65%" }} // Örnek doluluk
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
                                ></motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3. INTERFACE FOUNDRY KARTI (Tam Genişlik - Alt) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-3 relative flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-10 bg-[#0a0a0a] rounded-[2.5rem] border border-blue-500/20 shadow-2xl group overflow-hidden gap-8"
                    >
                        <div className="absolute right-[20%] top-[50%] -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>

                        <div className="flex items-center gap-6 relative z-10 w-full md:w-auto">
                            <div className="p-4 bg-blue-500/10 text-blue-400 rounded-3xl border border-blue-500/20 shrink-0">
                                <Icons.Layers size={32} />
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-white tracking-tight">Interface Foundry</h3>
                                <p className="text-gray-400 font-medium mt-1">Özel tasarım UI bileşenleri ve şablon kütüphanesi.</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex items-center gap-4 w-full md:w-auto">
                            <div className="hidden md:flex gap-2 mr-4">
                                <span className="p-2 bg-gray-900 rounded-xl border border-gray-800 text-gray-500"><Icons.Cpu size={20} /></span>
                                <span className="p-2 bg-gray-900 rounded-xl border border-gray-800 text-gray-500"><Icons.Activity size={20} /></span>
                            </div>
                            <div className="px-6 py-4 bg-blue-500 text-white font-black tracking-widest uppercase text-sm rounded-2xl w-full text-center md:w-auto whitespace-nowrap shadow-lg shadow-blue-500/25">
                                {!loading ? stats.interfaceFoundryText : "Yükleniyor..."}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}