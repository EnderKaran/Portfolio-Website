import React, { useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import proj1 from "../assets/images/project-1.png";
import proj2 from "../assets/images/project-2.png";
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
    
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

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
                            <div
                                className="p-6 flex justify-between items-center cursor-pointer bg-black/20"
                                onClick={() => toggleExpand(index)}
                            >
                                <h3 className="text-2xl md:text-4xl font-semibold">{project.title}</h3>
                                <div className="flex items-center space-x-4">
                                    <span className="text-xl md:text-3xl font-light text-emerald-300">
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
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="bg-black/20 border-t border-white/10"
                                    >
                                        <div className="p-6 flex flex-col md:flex-row gap-8">
                                            <img
                                                src={project.src}
                                                alt={project.title}
                                                className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                                            />
                                            <div className="flex-1">
                                                <p className="text-white/80 mb-4 leading-relaxed">{project.desc}</p>
                                                <p className="text-emerald-300 font-medium mb-2 text-sm">
                                                    <span className="font-bold">Teknolojiler:</span> {project.devstack}
                                                </p>
                                                <p className="text-emerald-400/70 font-medium mb-4 capitalize text-sm">
                                                    <span className="font-bold">Tür:</span> {project.type}
                                                </p>
                                                <div className="flex justify-start items-center space-x-6 text-2xl">
                                                    
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href={project.link}
                                                        className="text-emerald-400 hover:text-emerald-200 transition-colors"
                                                    >
                                                        <HiOutlineExternalLink />
                                                    </a>
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href={project.git}
                                                        className="text-emerald-400 hover:text-white transition-colors"
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
                    ))}
                </div>
            </div>
        </div>
    );
};