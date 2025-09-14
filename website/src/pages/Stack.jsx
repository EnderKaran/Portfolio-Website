import React from 'react';
import { motion } from "framer-motion";
import { SiFramer, SiBootstrap, SiReact, SiNodedotjs, SiGit } from "react-icons/si";


// Projede kullanılacak teknolojilerin verisi
// DEĞİŞİKLİK: 'color' özelliği kaldırıldı, çünkü renkler artık doğrudan CSS ile yönetiliyor.
const stackItems = [
    { id: 1, name: "Framer", icon: <SiFramer size={80} /> },
    { id: 2, name: "Bootstrap", icon: <SiBootstrap size={80} /> },
    { id: 3, name: "React", icon: <SiReact size={80} /> },
    { id: 4, name: "Node.js", icon: <SiNodedotjs size={80} /> },
    { id: 5, name: "Git", icon: <SiGit size={80} /> },
];

// Ana Stack bileşeni
export const Stack = () => {
    const variants = {
        hidden: (index) => ({
            opacity: 0,
            y: index % 2 === 0 ? -100 : 100,
        }),
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.0,
            },
        },
    };

    return (
        // DEĞİŞİKLİK: Ana kapsayıcı anlamsal renklere bağlandı
        <section
            id="stack"
            className="bg-background text-primary py-24 md:py-48 transition-colors duration-300"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-7xl text-center font-bold mb-20">
                    Kullandığım <span className="text-accent">Teknolojiler</span>
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {stackItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index}
                            // DEĞİŞİKLİK: Kart stili anlamsal renklere bağlandı
                            className="aspect-square w-40 rounded-2xl bg-card-background border border-card-border p-4 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-accent/20 flex flex-col items-center justify-center text-center md:w-48"
                        >
                            {/* DEĞİŞİKLİK: İkon ve metin renkleri anlamsal sınıflara bağlandı */}
                            <div className="mb-4 text-accent">
                                {item.icon}
                            </div>
                            <p className="text-secondary text-lg font-semibold">
                                {item.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};