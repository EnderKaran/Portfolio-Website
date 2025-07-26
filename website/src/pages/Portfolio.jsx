import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import proj1 from "../assets/images/project-1.png"
import proj2 from "../assets/images/project-2.png"
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

const projects = [
    {
        title: "Coffee-Website",
        desc: "Bu proje, React, Vite ve Tailwind CSS kullanılarak geliştirilmiş, modern ve tamamen duyarlı (responsive) bir tek sayfalık kahve dükkanı web sitesidir. Proje, hem modern web geliştirme pratiklerini sergilemek hem de React'ın temel ve orta seviye konseptlerini (component yapısı, state yönetimi, hook'lar) uygulamak amacıyla oluşturulmuştur.",
        devstack: " React-İcons, React, TailwindCss, Vite , Npm",
        link: "https://enderkaran.github.io/Coffee-Website",
        git: "https://github.com/EnderKaran/Coffee-Website",
        src: proj1,
        type: "frontend",
    },
    {
        title: "SenOlé",
        desc: "SenOlé markası için geliştirdiğim bu modern web arayüzü, estetik tasarımı ileri düzey işlevsellikle birleştirerek kullanıcı dostu ve akıcı bir deneyim sunuyor. React ekosisteminin güçlü araçlarıyla geliştirilen bu proje, marka kimliği, ürün tanıtımı ve iletişim süreçlerini merkezi bir yapıda yönetiyor.",
        devstack: " React-İcons, React, React Router DOM, React Bootstrap , React Context API , Npm , Material UI (MUI) , Framer Motion , Swiper.js , React Helmet , Formik & Yup , React Leaflet, Leaflet.js",
        link: "https://senole.vercel.app",
        git: "https://github.com/EnderKaran/Senole",
        src: proj2,
        type: "frontend",
    },
  ];

export const Portfolio = () => {
    const [expandedIndex, SetexpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        SetexpandedIndex(expandedIndex === index ? null : index);
    }
    
    return (
        <div className="text-white py-24 md:py-64" id="portfolio">
            <div className="container mx-auto px-4">
                <h2 className="text-6xl font-bold text-center mb-8">
                    Proj<span className="text-emerald-300">eler</span>
                </h2>

                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10"
                                onClick={() => toggleExpand(index)}
                            >
                                <h3 className="text-4xl font-semibold">{project.title}</h3>
                                    <div className="flex items-center space-x-4">
                                        <span className="text-3xl font-light text-emerald-300">
                                            0{index + 1}
                                    </span>
                                    <FiChevronDown
                                        className={`w-6 h-6 transform transition-transform ${expandedIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                    </div>
                            </div>

                            <AnimatePresence>
                                {expandedIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-6 bg-black/20 border border-white/10"
                                    >
                                        
                                        <div className="flex flex-col md:flex-row gap-8">
                                            <img
                                                src={project.src}
                                                alt={project.title}
                                                className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                                            />
                                            <div className="flex-1">
                                                <p className="text-white/70 mb-4 mt-4">{project.desc}</p>
                                                <p className="text-emerald-300 font-medium mb-2">
                                                    Teknojiler : {project.devstack}
                                                </p>
                                                <p className="text-emerald-400/60 font-medium mb-4 capitalize">
                                                    Tür : {project.type}
                                                </p>
                                                <div className="flex justify-start items-center space-x-4">
                                                    <a
                                                        target="_blank"
                                                        href={project.link}
                                                        className="text-emerald-400 hover:text-blue-300 transtion-colors"
                                                    >
                                                        <HiOutlineExternalLink/>
                                                    </a>

                                                    <a
                                                        target="_blank"
                                                        href={project.git}
                                                        className="text-emerald-400 hover:text-blue-300 transtion-colors"
                                                    >
                                                        <FaGithub />
                                                    </a>

                                                </div>
                                            </div>
                                        </div>

                                    </motion.div>
                                )}           
                            </AnimatePresence>               
                        </motion.div>
                    

                    ) )

                    }
                </div>

            </div>
        </div>
    )
}