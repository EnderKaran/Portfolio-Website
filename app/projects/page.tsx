'use client';

import React, { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { FiSearch, FiGithub, FiLink, FiAlertCircle, FiEye, FiX } from 'react-icons/fi';
import { FaStar, FaBrain } from 'react-icons/fa';
import { HiCheckCircle, HiTrendingUp } from 'react-icons/hi';
import { RiRobot2Line } from 'react-icons/ri';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';

const GITHUB_USERNAME = 'EnderKaran';

interface Repo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    topics: string[];
    language: string | null;
    stargazers_count: number;
    fork: boolean;
    default_branch: string;
    languages_url: string;
}

interface CaseStudy {
    problem: string;
    approach: string;
    solution: string;
    impact: string;
}

// -------------------------------------------------------------
// YZ (GEMINI API) BAĞLANTISI VE FORMATLAMA ALGORİTMASI
// -------------------------------------------------------------
const generateCaseStudyWithAI = async (repo: Repo, readmeText: string, languages: string, maxRetries = 3): Promise<CaseStudy> => {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";

    if (!apiKey) {
        return {
            problem: `❌ API ANAHTARI EKSİK`,
            approach: `Yapay zeka analizini kullanabilmek için geçerli bir Gemini API anahtarına ihtiyacınız var.`,
            solution: `.env.local dosyasına NEXT_PUBLIC_GEMINI_API_KEY değerini eklediğinizden emin olun.`,
            impact: `API anahtarı olmadan bu özellik çalışmayacaktır.`
        };
    }

    // Google Generative AI resmi SDK'sını başlatıyoruz
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const systemPrompt = `Sen Senior bir Yazılım Mimarı ve Ürün Yöneticisisin. Sana bir projenin README dosyasını, kullanılan dilleri ve özetini vereceğim. Senden bu projeyi profesyonel bir dille 4 aşamalı "Vaka Çalışması" (Case Study) formatında Türkçeye çevirmeni/özetlemeni istiyorum.

KURALLAR (KESİNLİKLE UYULACAK):
1. Dört bölüm (problem, approach, solution, impact) birbirinden TAMAMEN FARKLI olmalıdır. Bir bölümde kurduğun cümleyi veya mantığı diğerinde asla tekrar etme.
2. "problem": Sadece yaşanan krizi, müşteri/sistem açığını veya çıkış noktasını anlat (Teknoloji ismi verme). Eğer readme boşsa, "Verilen repo açıklamasına göre..." diyerek tahminde bulun.
3. "approach": NEDEN bu dillerin/teknolojilerin seçildiğini (bana verilen diller listesine göre) çok teknik bir dille anlat. "Şunun yerine şunu seçtik çünkü..." gibi.
4. "solution": Kodun tam olarak ne yaptığını, hangi özellikleri sunduğunu ve nasıl çalıştığını anlat.
5. "impact": Ölçülebilir sonuçlar veya projeden elde edilen net yazılım/iş faydalarını (%100 hız artışı, hatasız sistem vb.) yaz.
SADECE JSON döndür ve tüm alanları EKSİKSİZ doldur.`;

    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash", // Eğer 503 hatası hiç düzelmezse burayı geçici olarak "gemini-2.0-flash" yapabilirsiniz.
        systemInstruction: systemPrompt,
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
                type: SchemaType.OBJECT,
                properties: {
                    problem: { type: SchemaType.STRING, description: "1. Kriz & Sorun: Sadece çıkış noktası ve sorun." },
                    approach: { type: SchemaType.STRING, description: "2. Mimari Karar: Seçilen teknolojilerin neden seçildiği ve mimari yaklaşım." },
                    solution: { type: SchemaType.STRING, description: "3. Çözüm & Geliştirme: Kodun özellikleri ve çalışma mantığı." },
                    impact: { type: SchemaType.STRING, description: "4. İş Etkisi (Result): Kazanımlar ve net sonuçlar." }
                },
                // DİKKAT: Eksik gelen alanlar için "required" eklendi. Yapay zeka artık bu 4 alanı göndermek ZORUNDA.
                required: ["problem", "approach", "solution", "impact"]
            }
        }
    });

    const userPrompt = `Proje: ${repo.name}\nAçıklama: ${repo.description || 'Yok'}\nEtiketler: ${repo.topics.join(', ')}\nKullanılan Diller: ${languages}\n\nREADME İçeriği:\n${readmeText.substring(0, 3000)}`;

    // 503 hatası (Sunucu yoğunluğu) nedeniyle bekleme sürelerini artırdık
    const delays =[2000, 4000, 8000];
    
    for (let i = 0; i < maxRetries; i++) {
        try {
            const result = await model.generateContent(userPrompt);
            const responseText = result.response.text();
            
            if (!responseText) throw new Error("Yapay Zeka boş yanıt döndürdü.");
            
            const parsedData = JSON.parse(responseText);
            
            // Eğer yapay zeka hala inat edip bir alanı eksik verirse diye varsayılan değer (fallback) atıyoruz
            return {
                problem: parsedData.problem || "Belirtilmedi.",
                approach: parsedData.approach || "README eksikliği nedeniyle mimari karar tespit edilemedi.",
                solution: parsedData.solution || "Belirtilmedi.",
                impact: parsedData.impact || "Projenin etkisine dair net veri bulunamadı."
            };

        } catch (error: any) {
            console.log(`Yapay Zeka Analiz Hatası (Detay - Deneme ${i + 1}):`, error.message);
            
            if (i === maxRetries - 1) {
                // Eğer hata 503 ise kullanıcıya özel mesaj gösterelim
                if (error.message?.includes("503") || error.message?.includes("high demand")) {
                    return {
                        problem: `⏳ GOOGLE SUNUCULARI ÇOK YOĞUN`,
                        approach: `Google Gemini API şu anda çok yüksek talep alıyor (Hata 503).`,
                        solution: `Yazdığımız algoritma arka planda 3 kez tekrar denedi ancak sunucular yanıt vermedi.`,
                        impact: `Lütfen birkaç dakika bekleyip projeye tekrar tıklayarak analizi yeniden başlatın.`
                    };
                }

                return {
                    problem: `❌ YAPAY ZEKA ANALİZ HATASI`,
                    approach: `Maalesef analiz sırasında bir sorun oluştu.`,
                    solution: `Hata Detayı: ${error.message || "Bilinmeyen hata"}`,
                    impact: `Lütfen sayfayı yenileyip tekrar deneyin.`
                };
            }
            
            // Hata aldıysa belirlenen süre kadar bekle ve döngünün başına dön
            await new Promise(resolve => setTimeout(resolve, delays[i]));
        }
    }

    return {
        problem: `❌ YAPAY ZEKA ANALİZ HATASI`,
        approach: `Beklenmeyen bir hata.`,
        solution: `Sistem yanıt veremedi.`,
        impact: `Lütfen sayfayı yenileyip tekrar deneyin.`
    };
};
// -------------------------------------------------------------

export default function ProjectsPage() {
    const[repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeRepo, setActiveRepo] = useState<Repo | null>(null);
    const [caseStudy, setCaseStudy] = useState<{ loading: boolean; data: CaseStudy | null; error: string | null }>({ loading: false, data: null, error: null });

    useEffect(() => {
        if (activeRepo) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; }
    }, [activeRepo]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`);
                const data = await response.json();
                setRepos(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    },[]);

    useEffect(() => {
        if (!activeRepo) return;

        const processCaseStudy = async () => {
            setCaseStudy({ loading: true, data: null, error: null });
            try {
                let languagesText = "Belirtilmemiş";
                try {
                    const langRes = await fetch(activeRepo.languages_url);
                    if (langRes.ok) {
                        const langData = await langRes.json();
                        languagesText = Object.keys(langData).join(", ");
                    }
                } catch (e) {
                    console.log("Diller çekilemedi.");
                }

                let readmeText = "";
                try {
                    const branch = activeRepo.default_branch || 'main';
                    let res = await fetch(`https://raw.githubusercontent.com/${GITHUB_USERNAME}/${activeRepo.name}/${branch}/README.md`);
                    if (!res.ok && branch === 'main') {
                        res = await fetch(`https://raw.githubusercontent.com/${GITHUB_USERNAME}/${activeRepo.name}/master/README.md`);
                    }
                    if (res.ok) {
                        readmeText = await res.text();
                    } else {
                        readmeText = activeRepo.description || "Detaylı açıklama bulunmuyor.";
                    }
                } catch (e) {
                    readmeText = activeRepo.description || "Detaylı açıklama bulunmuyor.";
                }
                
                const aiResult = await generateCaseStudyWithAI(activeRepo, readmeText, languagesText);
                setCaseStudy({ loading: false, data: aiResult, error: null });
            } catch (err: any) {
                console.error("Beklenmeyen Hata:", err);
                setCaseStudy({ loading: false, data: null, error: err.message || "Bilinmeyen bir hata oluştu." });
            }
        };

        processCaseStudy();
    }, [activeRepo]);

    const filteredRepos = repos.filter(repo => 
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) && !repo.fork
    );

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };
    const cardVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    return (
        <div className="relative min-h-screen pt-32 pb-24 overflow-hidden transition-colors duration-500 bg-white dark:bg-[#030303] text-gray-900 dark:text-white">
            
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 dark:opacity-40 -z-10">
                <div className="absolute top-[-10%] right-[10%] w-[40vw] h-[40vw] bg-emerald-500 blur-[150px] rounded-full mix-blend-multiply opacity-30 animate-pulse"></div>
            </div>

            <div className="container relative z-10 px-4 mx-auto max-w-[1200px]">
                
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-20 text-center">
                    <h1 className="mb-6 text-5xl font-black tracking-tighter md:text-7xl text-gray-900 dark:text-white">
                        Vaka Çalışmaları <span className="text-emerald-500">& Projeler</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg font-medium leading-relaxed text-gray-500 md:text-xl dark:text-gray-400">
                        Aşağıdaki projelerden birini seçin, Yapay Zeka (AI) sistemi anında analiz edip projeyi detaylı bir vaka çalışması formatında size sunsun.
                    </p>
                </motion.div>

                <div className="relative max-w-xl mx-auto mb-16 group">
                    <div className="absolute inset-0 transition-all duration-300 rounded-full bg-emerald-500/10 blur-xl group-hover:bg-emerald-500/20"></div>
                    <div className="relative flex items-center p-2 transition-colors border shadow-sm bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl rounded-full border-gray-200 dark:border-white/10 group-hover:border-emerald-500/50">
                        <span className="pl-4 text-emerald-500"><FiSearch size={20} /></span>
                        <input
                            type="text"
                            placeholder="Projelerde ara..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-3 text-lg font-medium text-gray-900 bg-transparent outline-none dark:text-white placeholder:text-gray-400"
                        />
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="w-12 h-12 border-4 border-t-emerald-500 border-emerald-500/20 rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {filteredRepos.map((repo) => (
                            <motion.div 
                                key={repo.id}
                                variants={cardVariants}
                                whileHover={{ y: -5 }}
                                className="flex flex-col justify-between p-8 transition-all duration-500 border shadow-lg bg-white dark:bg-[#0a0a0a] rounded-[2.5rem] border-gray-100 dark:border-white/5 hover:shadow-2xl hover:border-emerald-500/30 group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center justify-center w-12 h-12 text-emerald-500 rounded-2xl bg-emerald-500/10">
                                            <FiGithub size={20} />
                                        </div>
                                        <div className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-amber-500 bg-amber-500/10 rounded-xl">
                                            <FaStar size={14} /> {repo.stargazers_count}
                                        </div>
                                    </div>
                                    <h2 className="mb-3 text-3xl font-black tracking-tight text-gray-900 transition-colors dark:text-white group-hover:text-emerald-500">
                                        {repo.name}
                                    </h2>
                                    <p className="mb-6 font-medium leading-relaxed text-gray-600 line-clamp-3 dark:text-gray-400">
                                        {repo.description || 'Bu proje için kısa açıklama bulunmuyor.'}
                                    </p>
                                    
                                    {repo.topics.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {repo.topics.slice(0, 4).map((tech, i) => (
                                                <span key={i} className="px-3 py-1.5 text-xs font-bold rounded-xl bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                
                                <div className="pt-6 mt-auto border-t border-gray-100 dark:border-white/5">
                                    <button 
                                        onClick={() => setActiveRepo(repo)}
                                        className="flex items-center justify-center w-full gap-3 px-6 py-4 font-black text-white transition-all bg-gray-900 rounded-2xl dark:bg-white dark:text-black hover:bg-emerald-500 dark:hover:bg-emerald-500 hover:text-white dark:hover:text-white hover:scale-[1.02] shadow-xl"
                                    >
                                        <RiRobot2Line size={20} /> AI Analizi ve Vaka Çalışması
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>

            <AnimatePresence>
                {activeRepo && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
                        <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveRepo(null)}></div>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 20 }} 
                            animate={{ opacity: 1, scale: 1, y: 0 }} 
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0a0a0a] rounded-[2.5rem] shadow-2xl border border-gray-200 dark:border-white/10 custom-scrollbar"
                        >
                            <button 
                                onClick={() => setActiveRepo(null)}
                                className="absolute top-6 right-6 z-10 p-3 bg-gray-100 dark:bg-white/10 rounded-full text-gray-500 dark:text-gray-400 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white transition-colors"
                            >
                                <FiX size={24} />
                            </button>

                            <div className="p-8 md:p-12 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02] relative overflow-hidden">
                                <div className="absolute top-[-50%] right-[-10%] w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                                <h2 className="mb-4 text-4xl font-black tracking-tighter text-gray-900 md:text-5xl dark:text-white relative z-10">{activeRepo.name}</h2>
                                <div className="flex flex-wrap items-center gap-4 mb-6 relative z-10">
                                    <a href={activeRepo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-700 transition-colors border rounded-xl bg-white/50 dark:bg-black/50 border-gray-200 dark:border-white/10 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500">
                                        <FiGithub size={18} /> GitHub'da İncele
                                    </a>
                                    {activeRepo.homepage && (
                                        <a href={activeRepo.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white transition-colors rounded-xl bg-emerald-500 hover:bg-emerald-600">
                                            <FiLink size={18} /> Canlı Demo
                                        </a>
                                    )}
                                </div>
                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {activeRepo.topics.map((tech: string, i: number) => (
                                        <span key={i} className="px-4 py-2 text-xs font-bold bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-xl">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 md:p-12">
                                {caseStudy.loading ? (
                                    <div className="flex flex-col items-center justify-center py-20 text-center">
                                        <div className="relative flex items-center justify-center w-20 h-20 mb-6">
                                            <div className="absolute w-full h-full border-4 border-emerald-500/20 rounded-full animate-ping"></div>
                                            <div className="absolute w-full h-full border-4 border-t-emerald-500 rounded-full animate-spin"></div>
                                            <span className="text-emerald-500"><RiRobot2Line size={24} /></span>
                                        </div>
                                        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Yapay Zeka Analiz Ediyor...</h3>
                                        <p className="text-gray-500">README dosyası okunuyor ve profesyonel vaka analizi oluşturuluyor.</p>
                                    </div>
                                ) : caseStudy.error ? (
                                    <div className="py-12 text-center text-gray-500 bg-red-50 dark:bg-red-500/5 rounded-[2rem] border border-red-100 dark:border-red-500/10">
                                        <p className="font-bold text-red-500">Analiz sırasında bir hata oluştu:</p>
                                        <p className="mt-2 text-sm text-red-400">{caseStudy.error}</p>
                                    </div>
                                ) : caseStudy.data ? (
                                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                        <div className="bg-red-50 dark:bg-red-500/5 border border-red-100 dark:border-red-500/10 rounded-[2rem] p-8 hover:-translate-y-1 transition-transform">
                                            <div className="flex items-center gap-3 mb-4 text-red-500">
                                                <div className="p-3 bg-red-100 rounded-xl dark:bg-red-500/20"><FiAlertCircle size={20} /></div>
                                                <h3 className="text-xl font-black tracking-tight">1. Kriz & Sorun</h3>
                                            </div>
                                            <p className="font-medium leading-relaxed text-gray-700 dark:text-gray-300">{caseStudy.data.problem}</p>
                                        </div>

                                        <div className="bg-blue-50 dark:bg-blue-500/5 border border-blue-100 dark:border-blue-500/10 rounded-[2rem] p-8 hover:-translate-y-1 transition-transform">
                                            <div className="flex items-center gap-3 mb-4 text-blue-500">
                                                <div className="p-3 bg-blue-100 rounded-xl dark:bg-blue-500/20"><FaBrain size={20} /></div>
                                                <h3 className="text-xl font-black tracking-tight">2. Mimari Karar</h3>
                                            </div>
                                            <p className="font-medium leading-relaxed text-gray-700 dark:text-gray-300">{caseStudy.data.approach}</p>
                                        </div>

                                        <div className="bg-emerald-50 dark:bg-emerald-500/5 border border-emerald-100 dark:border-emerald-500/10 rounded-[2rem] p-8 hover:-translate-y-1 transition-transform">
                                            <div className="flex items-center gap-3 mb-4 text-emerald-500">
                                                <div className="p-3 bg-emerald-100 rounded-xl dark:bg-emerald-500/20"><HiCheckCircle size={22} /></div>
                                                <h3 className="text-xl font-black tracking-tight">3. Çözüm & Geliştirme</h3>
                                            </div>
                                            <p className="font-medium leading-relaxed text-gray-700 dark:text-gray-300">{caseStudy.data.solution}</p>
                                        </div>

                                        <div className="bg-amber-50 dark:bg-amber-500/5 border border-amber-100 dark:border-amber-500/10 rounded-[2rem] p-8 hover:-translate-y-1 transition-transform">
                                            <div className="flex items-center gap-3 mb-4 text-amber-500">
                                                <div className="p-3 bg-amber-100 rounded-xl dark:bg-amber-500/20"><HiTrendingUp size={22} /></div>
                                                <h3 className="text-xl font-black tracking-tight">4. İş Etkisi (Result)</h3>
                                            </div>
                                            <p className="font-medium leading-relaxed text-gray-700 dark:text-gray-300">{caseStudy.data.impact}</p>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}