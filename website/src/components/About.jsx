import React from 'react';
import { SkillProgressBar } from './SkillProgressBar';
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";

export const About = () => {
    return (
        <section id="about" className="p-8 transition-colors duration-300 bg-background text-primary">
            <h2 className="mb-12 text-5xl font-bold text-center md:text-6xl">
                Beni<span className="text-accent"> Tanıyın</span>
            </h2>

            {/* Üst Kartlar Grubu */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                
                {/* 01. Arkaplan Kartı */}
                <div className="p-6 border rounded-lg bg-card-background border-card-border">
                    <h3 className="mb-2 text-2xl font-bold text-primary">01. Arkaplan</h3>
                    <p className="mb-6 leading-relaxed text-secondary">
                        Bilgisayar bilimlerinde güçlü bir temele ve yenilikçi web çözümleri yaratmaya tutkuyla bağlı, tutkulu bir Front-end geliştiriciyim. Teknoloji yolculuğum, işlerin nasıl yürüdüğüne dair merakımla başladı ve bu da beni web geliştirme alanında bir kariyer yapmaya yöneltti.
                    </p>
                    <div className="p-4 border rounded-lg border-white/10 bg-black/20">
                        <code className="text-sm text-accent/80">
                            const miscSkills = [
                            <br />
                            &nbsp;&nbsp;'C#',
                            <br />
                            &nbsp;&nbsp;'SQL / MySQL',
                            <br />
                            &nbsp;&nbsp;'Bootstrap',
                            <br />
                            &nbsp;&nbsp;'Git & GitHub'
                            <br />
                            ];
                        </code>
                    </div>
                </div>

                {/* 02. Uzmanlık Kartı */}
                <div className="p-6 border rounded-lg bg-card-background border-card-border">
                    <h3 className="mb-2 text-2xl font-bold text-primary">02. Uzmanlık</h3>
                    <p className="leading-relaxed text-secondary">
                        Masaüstü (Delphi) ve backend (.NET) geliştirme temellerinden gelen, uzmanlığını modern frontend teknolojileri üzerine inşa etmiş çok yönlü bir yazılım geliştiriciyim. Özellikle React ve Tailwind CSS kullanarak, sadece estetik değil, aynı zamanda mühendislik prensipleriyle tasarlanmış sağlam ve ölçeklenebilir çözümler üretmeye odaklanıyorum.
                    </p>
                    
                    <div className="mt-4 relative rounded-lg h-[220px] overflow-hidden">
                        <img
                            src={project1}
                            alt="Project 1"
                            className="absolute inset-0 object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* 03. Yetenekler Kartı */}
                <div className="p-6 border rounded-lg bg-card-background border-card-border">
                    <h3 className="mb-2 text-2xl font-bold text-primary">03.Hedeflediğim Yetenekler</h3>
                    <p className="mb-4 leading-relaxed text-secondary">
                        Çok çeşitli teknolojilerde uzmanlığım var ve web geliştirmenin ön saflarında kalmak için becerilerimi sürekli olarak geliştiriyorum.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-3 border rounded-lg border-card-border/50 bg-black/20">
                            <h4 className="mb-2 font-medium text-accent">Frontend</h4>
                            <ul className="space-y-1 text-sm text-secondary/80">
                                <li>TypeScript</li>
                                <li>Next.js</li>
                                <li>React Query</li>
                                <li>Zustand</li>
                            </ul>
                        </div>
                        <div className="p-3 border rounded-lg border-card-border/50 bg-black/20">
                            <h4 className="mb-2 font-medium text-accent">Backend</h4>
                            <ul className="space-y-1 text-sm text-secondary/80">
                                <li>Node.js & Express.js</li>
                                <li>PostgreSQL</li>
                                <li>Supabase</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Alt Kartlar Grubu */}
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
                
                {/* 04. Yaklaşım ve Yetenek Seviyeleri Kartı */}
                <div className="p-6 border rounded-lg bg-card-background border-card-border">
                    
                    <h3 className="mb-2 text-2xl font-bold text-emerald-600">04. Yaklaşım</h3>
                    
                    <p className="mb-6 leading-relaxed text-secondary">
                        Temiz, sürdürülebilir kod yazmaya ve en iyi uygulamaları takip etmeye inanıyorum. Yaklaşımım, müşteri ihtiyaçlarını anlamak, kapsamlı planlama yapmak ve zamanında yüksek kaliteli çözümler sunmaktır.
                    </p>
                    
                    <div className="pt-6 mt-6 space-y-6 border-t border-card-border">
                        <SkillProgressBar skill="Frontend (React, Tailwind)" percentage={85} />
                        <SkillProgressBar skill="Backend (ASP.NET, C#)" percentage={50} />
                        <SkillProgressBar skill="UI/UX Design (Figma)" percentage={65} />
                    </div>
                </div>

                {/* 05. Hedefler Kartı */}
                <div className="flex flex-col justify-between p-6 border rounded-lg bg-card-background border-card-border">
                    
                    <div className="relative rounded-lg h-[200px] overflow-hidden mb-4">
                        <img
                            src={project2}
                            alt="Project 2"
                            className="absolute inset-0 object-cover w-full h-full"
                        />
                    </div>
                    <div>
                        <h3 className="mb-2 text-2xl font-bold text-primary">05. Hedefler</h3>
                        <p className="leading-relaxed text-secondary">
                            Hedefim, React, Next.js ve TypeScript ekosisteminde uzmanlaşarak, sadece kod yazan değil, aynı zamanda ürün geliştiren bütünsel bir yazılım geliştirici olmaktır. Zorlu projelerle teknik sınırlarımı zorlarken, öğrendiklerimi teknoloji topluluğuyla paylaşarak kendimi ve çevremi sürekli geliştirmeyi amaçlıyorum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};