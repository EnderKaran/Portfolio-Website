import project1 from "../assets/images/project-1.png"
import project2 from "../assets/images/project-2.png"

export const About = () => {
    return (
        <section id="about" className="text-white p-8">
            <h2 className="text-6xl font-bold mb-8">
                Hakkım<span className="text-emerald-300">da</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">01. Arkaplan</h3>
                    <p className="text-white/50 mb-6">
                        Bilgisayar bilimlerinde güçlü bir temele ve yenilikçi web çözümleri yaratmaya tutkuyla bağlı, tutkulu bir Front-end geliştiriciyim.
                        Teknoloji yolculuğum, işlerin nasıl yürüdüğüne dair merakımla başladı ve bu da beni web geliştirme alanında bir kariyer yapmaya yöneltti.
                    </p>

                    <div className="rounded-lg p-4 mb-4 border border-white/20">
                        <code className="text-emerald-200/50">
                            const skills = [
                            <br />
                            &nbsp;&nbsp;'JavaScript',
                            <br />
                            &nbsp;&nbsp;'React',
                            <br />
                            &nbsp;&nbsp;'Bootstrap',
                            <br />
                            &nbsp;&nbsp;'C#',
                            <br />
                            &nbsp;&nbsp;'SQL',
                            <br />
                            &nbsp;&nbsp;'Git'
                            <br />
                            ];
                        </code>
                    </div>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">02. Uzmanlık</h3>
                    <p className="text-white/50">
                        Masaüstü (Delphi) ve backend (.NET) geliştirme temellerinden gelen, uzmanlığını modern frontend teknolojileri üzerine inşa etmiş çok yönlü bir yazılım geliştiriciyim. Özellikle React, TailwindCss kullanarak, sadece estetik değil, aynı zamanda mühendislik prensipleriyle tasarlanmış sağlam ve ölçeklenebilir çözümler üretmeye odaklanıyorum.
                    </p>

                    <div className="mt-4 relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden">
                        <img
                            src={project1}
                            alt="Project 1"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">03. Yetenekler</h3>
                    <p className="text-white/50 mb-4">
                        Çok çeşitli teknolojilerde uzmanlığım var ve web geliştirmenin ön saflarında kalmak için becerilerimi sürekli olarak geliştiriyorum.
                    </p>

                    <div className="grid grid-cols-2 text-center gap-4">
                        <div className="border border-white/20 rounded-lg p-3">
                            <h4 className="text-emerald-300 font-medium mb-2">Frontend</h4>
                            <ul className="text-white/50 space-y-1 text-sm">
                                <li>React</li>
                                <li>Javascript(ES6+)</li>
                                <li>Bootstrap 5</li>
                                <li>Tailwind CSS</li>
                                <li>Framer Motion</li>
                            </ul>
                        </div>

                        <div className="border border-white/20 rounded-lg p-3">
                            <h4 className="text-emerald-300 font-medium mb-2">Backend</h4>
                            <ul className="text-white/50 space-y-1 text-sm">
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
                    <div className="space-y-4">

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Front-end
                            </label>
                            <div className="w-full bg-white/10 rounded-full h-2">
                                <div
                                    className="bg-emerald-300 h-2 rounded-full"
                                    style={{ width: "70%" }}
                                ></div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Back-end
                            </label>
                            <div className="w-full bg-white/10 rounded-full h-2">
                                <div
                                    className="bg-emerald-300 h-2 rounded-full"
                                    style={{ width: "40%" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mt-4 mb-2">04.Yaklaşım</h3>
                    <p className="text-white/50">
                        Temiz, sürdürülebilir kod yazmaya ve en iyi uygulamaları takip etmeye inanıyorum. Yaklaşımım, müşteri ihtiyaçlarını anlamak, kapsamlı planlama yapmak ve zamanında yüksek kaliteli çözümler sunmaktır.
                    </p>
                </div>
                
                <div className="border border-white/20 rounded-lg p-6 flex flex-col justify-between">
                    <div className="relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden">
                        <img
                            src={project2}
                            alt="Project 2"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                
                    <div>
                        <h3 className="text-2xl font-bold mb-2">05. Hedefler</h3>
                        <p className="text-white/50">
                            "Hedefim, React, Next.js ve TypeScript ekosisteminde uzmanlaşarak, sadece kod yazan değil, aynı zamanda ürün geliştiren bütünsel bir yazılım geliştirici olmaktır. Zorlu projelerle teknik sınırlarımı zorlarken, öğrendiklerimi teknoloji topluluğuyla paylaşarak kendimi ve çevremi sürekli geliştirmeyi amaçlıyorum. Nihai amacım, sağlam, ölçeklenebilir ve kullanıcı odaklı web uygulamaları inşa eden, aranan bir geliştirici olmaktır."
                        </p>
                    </div>

                </div>
            </div>                
        </section>
    )
}