import { SkillProgressBar } from '../components/SkillProgressBar';
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";

export const About = () => {
    return (
        <section id="about" className="text-white p-8">
            <h2 className="text-6xl font-bold mb-12 text-center">
                Hakkım<span className="text-emerald-300">da</span>
            </h2>

           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                
                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">01. Arkaplan</h3>
                    <p className="text-white/70 mb-6 leading-relaxed">
                        Bilgisayar bilimlerinde güçlü bir temele ve yenilikçi web çözümleri yaratmaya tutkuyla bağlı, tutkulu bir Front-end geliştiriciyim. Teknoloji yolculuğum, işlerin nasıl yürüdüğüne dair merakımla başladı ve bu da beni web geliştirme alanında bir kariyer yapmaya yöneltti.
                    </p>
                    <div className="rounded-lg p-4 border border-white/10 bg-black/20">
                        <code className="text-emerald-400/80 text-sm">
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

                
                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">02. Uzmanlık</h3>
                    <p className="text-white/70 leading-relaxed">
                        Masaüstü (Delphi) ve backend (.NET) geliştirme temellerinden gelen, uzmanlığını modern frontend teknolojileri üzerine inşa etmiş çok yönlü bir yazılım geliştiriciyim. Özellikle React ve Tailwind CSS kullanarak, sadece estetik değil, aynı zamanda mühendislik prensipleriyle tasarlanmış sağlam ve ölçeklenebilir çözümler üretmeye odaklanıyorum.
                    </p>
                    
                    <div className="mt-4 relative rounded-lg h-[220px] overflow-hidden">
                        <img
                            src={project1}
                            alt="Project 1"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                
                <div className="border border-white/20 rounded-lg p-6 lg:col-span-1"> {/* Gerekirse düzeni ayarlayın */}
                    <h3 className="text-2xl font-bold mb-2">03. Yetenekler</h3>
                    <p className="text-white/70 mb-4 leading-relaxed">
                        Çok çeşitli teknolojilerde uzmanlığım var ve web geliştirmenin ön saflarında kalmak için becerilerimi sürekli olarak geliştiriyorum.
                    </p>
                    <div className="grid grid-cols-2 text-center gap-4">
                        <div className="border border-white/10 bg-black/20 rounded-lg p-3">
                            <h4 className="text-emerald-300 font-medium mb-2">Frontend</h4>
                            <ul className="text-white/60 space-y-1 text-sm">
                                <li>React</li>
                                <li>Javascript(ES6+)</li>
                                <li>Tailwind CSS</li>
                                <li>Framer Motion</li>
                            </ul>
                        </div>
                        <div className="border border-white/10 bg-black/20 rounded-lg p-3">
                            <h4 className="text-emerald-300 font-medium mb-2">Backend</h4>
                            <ul className="text-white/60 space-y-1 text-sm">
                                <li>ASP.NET MVC (C#)</li>
                                <li>PHP(Temel)</li>
                                <li>SQL / MySQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                
                
                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">04. Yaklaşım</h3>
                    <p className="text-white/70 mb-6 leading-relaxed">
                        Temiz, sürdürülebilir kod yazmaya ve en iyi uygulamaları takip etmeye inanıyorum. Yaklaşımım, müşteri ihtiyaçlarını anlamak, kapsamlı planlama yapmak ve zamanında yüksek kaliteli çözümler sunmaktır.
                    </p>
                    
                    <div className="space-y-6 mt-6 border-t border-white/10 pt-6">
                        <SkillProgressBar skill="Frontend (React, Tailwind)" percentage={85} />
                        <SkillProgressBar skill="Backend (ASP.NET, C#)" percentage={50} />
                        <SkillProgressBar skill="UI/UX Design (Figma)" percentage={65} />
                    </div>
                </div>

                {/* 05. Hedefler Kartı */}
                <div className="border border-white/20 rounded-lg p-6 flex flex-col justify-between">
                    
                    <div className="relative rounded-lg h-[200px] overflow-hidden mb-4">
                        <img
                            src={project2}
                            alt="Project 2"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">05. Hedefler</h3>
                        <p className="text-white/70 leading-relaxed">
                            Hedefim, React, Next.js ve TypeScript ekosisteminde uzmanlaşarak, sadece kod yazan değil, aynı zamanda ürün geliştiren bütünsel bir yazılım geliştirici olmaktır. Zorlu projelerle teknik sınırlarımı zorlarken, öğrendiklerimi teknoloji topluluğuyla paylaşarak kendimi ve çevremi sürekli geliştirmeyi amaçlıyorum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};