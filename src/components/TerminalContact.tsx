'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Icons = {
    Terminal: ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>,
    RefreshCw: ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>,
    Send: ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>,
    X: ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>,
    MessageSquare: ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>,
    Minus: ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
};

type Step = {
    id: string;
    question: string;
    options: { label: string; nextStep: string; value: string }[];
};

// Terminal Senaryosu (Karar Ağacı)
const conversationFlow: Record<string, Step> = {
    start: {
        id: 'start',
        question: 'EnderKaran_OS v2.3.0 başlatıldı. Bağlantı kuruldu. Hangi konu hakkında görüşmek istersiniz?',
        options: [
            { label: 'İş Teklifi / İşe Alım', nextStep: 'job', value: 'İş Teklifi' },
            { label: 'Proje Geliştirme (Freelance)', nextStep: 'project', value: 'Proje Geliştirme' },
            { label: 'Sadece Tanışmak / Selam Vermek', nextStep: 'hello', value: 'Tanışma' },
        ]
    },
    job: {
        id: 'job',
        question: 'Harika! Hangi teknoloji yığınıyla ilgileniyorsunuz?',
        options: [
            { label: 'Frontend (React/Next.js)', nextStep: 'finish', value: 'Frontend Pozisyonu' },
            { label: 'Full Stack', nextStep: 'finish', value: 'Full Stack Pozisyonu' },
            { label: 'Diğer / Karma', nextStep: 'finish', value: 'Farklı Bir Pozisyon' },
        ]
    },
    project: {
        id: 'project',
        question: 'Yeni bir fikir duymayı çok severim. Proje aşaması nedir?',
        options: [
            { label: 'Sıfırdan Mimari & Geliştirme', nextStep: 'finish', value: 'Sıfırdan Proje' },
            { label: 'Mevcut Projeye Destek / Refactor', nextStep: 'finish', value: 'Mevcut Projeye Destek' },
        ]
    },
    hello: {
        id: 'hello',
        question: 'Merhaba! Kahve içip teknoloji konuşmak her zaman güzeldir. Nereden ulaşıyorsunuz?',
        options: [
            { label: 'LinkedIn Üzerinden', nextStep: 'finish', value: 'LinkedIn' },
            { label: 'Açık Kaynak (GitHub)', nextStep: 'finish', value: 'GitHub' },
        ]
    },
    finish: {
        id: 'finish',
        question: 'Bilgiler derleniyor... E-posta istemcinizi başlatmak için onaylayın.',
        options: [
            { label: 'E-postayı Oluştur ve Gönder', nextStep: 'done', value: 'send' },
            { label: 'Terminali Sıfırla', nextStep: 'start', value: 'reset' },
        ]
    }
};

export default function TerminalContact() {
    const [isOpen, setIsOpen] = useState(false); // Widget açık/kapalı durumu
    const [currentStep, setCurrentStep] = useState<string>('start');
    const [history, setHistory] = useState<{ type: 'q' | 'a' | 'system', text: string }[]>([
        { type: 'system', text: 'System logging: Server connected. [IP: Hidden]' },
        { type: 'system', text: 'Initializing root connection... Done.' }
    ]);
    const [isTyping, setIsTyping] = useState<boolean>(true);
    const [selections, setSelections] = useState<string[]>([]);
    const terminalEndRef = useRef<HTMLDivElement>(null);

    // Otomatik aşağı kaydırma
    useEffect(() => {
        if (terminalEndRef.current && isOpen) {
            terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [history, isTyping, isOpen]);

    // Soruyu daktilo efektiyle yazma
    useEffect(() => {
        setIsTyping(true);
        const timer = setTimeout(() => {
            setHistory(prev => [...prev, { type: 'q', text: conversationFlow[currentStep].question }]);
            setIsTyping(false);
        }, 800); // Terminal bekleme hissi
        return () => clearTimeout(timer);
    }, [currentStep]);

    const handleOptionClick = (option: { label: string; nextStep: string; value: string }) => {
        if (isTyping) return;

        // Kullanıcının cevabını sağa yaslı bir chat balonu/komut olarak ekrana yaz
        setHistory(prev => [...prev, { type: 'a', text: option.label }]);

        if (option.value === 'reset') {
            setHistory([
                { type: 'system', text: 'System rebooting...' },
                { type: 'system', text: 'Server connected.' }
            ]);
            setSelections([]);
            setCurrentStep('start');
            return;
        }

        if (option.value === 'send') {
            // E-posta oluşturma mantığı
            const subject = encodeURIComponent(`İletişim: ${selections[0]}`);
            const body = encodeURIComponent(`Merhaba Ender,\n\nPortfolyonuzdaki terminal üzerinden ulaşıyorum.\nKonu: ${selections[0]}\nDetay: ${selections[1]}\n\nGörüşmek üzere!`);
            window.open(`mailto:ender.karan14@gmail.com?subject=${subject}&body=${body}`, '_blank');
            
            setHistory(prev => [...prev, { type: 'system', text: 'E-posta istemcisi başlatıldı. Teşekkürler! (Terminal bağlantısı kapatıldı)' }]);
            setCurrentStep('done');
            return;
        }

        // Seçimi kaydet ve sonraki adıma geç
        setSelections(prev => [...prev, option.value]);
        setCurrentStep(option.nextStep);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
            
            {/* TERMINAL CHAT PENCERESİ */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ type: "spring", stiffness: 250, damping: 25 }}
                        className="mb-4 w-[calc(100vw-3rem)] sm:w-[380px] h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/10 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 flex flex-col"
                    >
                        {/* Terminal Üst Bar (MacOS Style) */}
                        <div className="flex items-center justify-between px-4 py-3 bg-gray-100/80 dark:bg-[#111]/80 border-b border-gray-200 dark:border-white/5 backdrop-blur-md">
                            <div className="flex space-x-1.5">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10 cursor-pointer" onClick={() => setIsOpen(false)}></div>
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10"></div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs font-semibold tracking-wider font-mono">
                                <Icons.Terminal size={12} /> <span>guest@enderkaran.dev:~</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
                                <Icons.Minus size={18} />
                            </button>
                        </div>

                        {/* Terminal / Chat İçeriği */}
                        <div className="p-4 h-full overflow-y-auto custom-scrollbar flex flex-col font-mono text-xs md:text-sm bg-transparent">
                            
                            {/* Sohbet Geçmişi */}
                            {history.map((msg, index) => (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    key={index} 
                                    className={`mb-3 flex w-full ${msg.type === 'a' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {msg.type === 'system' ? (
                                        <div className="text-gray-400 dark:text-gray-500 text-[10px] w-full text-center my-2">
                                            -- {msg.text} --
                                        </div>
                                    ) : msg.type === 'q' ? (
                                        <div className="flex items-start max-w-[85%]">
                                            <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mr-2 mt-1 border border-emerald-500/20">
                                                <Icons.Terminal size={10} />
                                            </div>
                                            <div className="bg-gray-100 dark:bg-[#151515] text-gray-800 dark:text-gray-300 px-4 py-2.5 rounded-2xl rounded-tl-sm border border-gray-200 dark:border-white/5 shadow-sm">
                                                {msg.text}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm shadow-md">
                                            <Icons.Send size={12} className="opacity-70" />
                                            {msg.text}
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            {/* Yükleniyor Efekti */}
                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start max-w-[85%] mb-3">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mr-2 mt-1 border border-emerald-500/20">
                                        <Icons.Terminal size={10} />
                                    </div>
                                    <div className="bg-gray-100 dark:bg-[#151515] px-4 py-3 rounded-2xl rounded-tl-sm border border-gray-200 dark:border-white/5 flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Seçenekler (Kullanıcı Tıklama Alanı) */}
                            {!isTyping && currentStep !== 'done' && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    className="mt-2 flex flex-col items-end gap-2 w-full"
                                >
                                    {conversationFlow[currentStep].options.map((opt, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleOptionClick(opt)}
                                            className="group relative px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 bg-white dark:bg-[#111] hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all duration-300 shadow-sm max-w-[85%] text-right overflow-hidden flex items-center justify-end gap-2"
                                        >
                                            <span className="relative z-10 text-[11px] font-medium leading-tight">{opt.label}</span>
                                            <div className="w-5 h-5 shrink-0 rounded-md bg-gray-100 dark:bg-white/5 flex items-center justify-center text-[10px] font-bold relative z-10 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                                {i + 1}
                                            </div>
                                        </button>
                                    ))}
                                </motion.div>
                            )}

                            {/* İşlem Tamamlandıysa Yenileme Butonu */}
                            {currentStep === 'done' && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 flex justify-center">
                                    <button
                                        onClick={() => {
                                            setHistory([
                                                { type: 'system', text: 'System rebooting...' },
                                                { type: 'system', text: 'Server connected.' }
                                            ]);
                                            setSelections([]);
                                            setCurrentStep('start');
                                        }}
                                        className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors w-fit px-4 py-2 border border-gray-200 dark:border-white/10 rounded-xl bg-white dark:bg-[#111] shadow-sm text-xs font-bold"
                                    >
                                        <Icons.RefreshCw size={14} /> Oturumu Yeniden Başlat
                                    </button>
                                </motion.div>
                            )}

                            <div ref={terminalEndRef} className="h-4 shrink-0" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FLOATING ACTION BUTTON (Chat Açma/Kapama Butonu) */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-500/30 hover:bg-emerald-600 transition-colors focus:outline-none z-50"
            >
                {/* Dışındaki yanıp sönen radar (pulse) efekti */}
                {!isOpen && (
                    <span className="absolute w-full h-full rounded-full bg-emerald-500 opacity-40 animate-ping"></span>
                )}
                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isOpen ? 'close' : 'open'}
                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isOpen ? <Icons.X size={24} /> : <Icons.MessageSquare size={24} />}
                    </motion.div>
                </AnimatePresence>
            </motion.button>

        </div>
    );
}