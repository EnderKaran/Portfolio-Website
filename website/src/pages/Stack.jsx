import React from 'react';
import { motion } from "framer-motion";
import { SiFramer, SiBootstrap, SiReact, SiNodedotjs, SiGit } from "react-icons/si";


// Projede kullanılacak teknolojilerin verisi
const stackItems = [
    {
        id: 1,
        name: "Framer",
        icon: <SiFramer size={100} />,
        color: "text-emerald-200",
    },
    {
        id: 2,
        name: "Boostrap",
        icon: <SiBootstrap size={100} />,
        color: "text-emerald-200",
    },
    {
        id: 3,
        name: "React",
        icon: <SiReact size={100} />,
        color: "text-emerald-200",
    },
    {
        id: 4,
        name: "Node.js",
        icon: <SiNodedotjs size={100} />,
        color: "text-emerald-200",
    },
    {
        id: 5,
        name: "Git",
        icon: <SiGit size={100} />,
        color: "text-emerald-200",
    },
];

// Ana Stack bileşeni
export const Stack = () => {
    // Bu modern yaklaşımda hook'lara gerek kalmadı!

    const variants = {
        hidden: (index) => ({
            opacity: 0,
            y: index % 2 === 0 ? -100 : 100,
        }),
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.0, // Süreyi biraz daha ayarlı hale getirdim
            },
        },
    };

    return (
        <section
            id="stack"
            className="text-white py-24 md:py-48"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-7xl text-center text-gray-100 font-bold mb-20">
                    Kullandığım Teknolojiler
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
                            className="aspect-square w-40 rounded-2xl bg-white/5 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-emerald-400/20 flex flex-col items-center justify-center text-center md:w-48"
                        >
                            <div className={`mb-4 ${item.color}`}>
                                {item.icon}
                            </div>
                            <p className="text-white/80 text-lg font-semibold">
                                {item.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};