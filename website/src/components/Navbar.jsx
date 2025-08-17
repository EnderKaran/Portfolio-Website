import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navlinks = [
    { title: "Hakkımda", path: "about" },
    { title: "Projeler", path: "portfolio" },
    { title: "Teknojiler", path: "stack" },
    { title: "İletişim", path: "contact" },
];

export const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    return (
        <div className="z-50 fixed flex justify-center w-full text-white font-bold">
            {/* Masaüstü Menüsü */}
            <div className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto">
                <ul className="flex flex-row p-2 space-x-8">
                    {navlinks.map((link, index) => (
                        <li key={index}>
                            <ScrollLink
                                to={link.path}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                activeClass="active"
                                className="text-base cursor-pointer transform hover:skew-x-12 hover:text-white/50 transition-all duration-300 ease-in-out"
                            >
                                {link.title}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobil Menü Butonu */}
            <div
                onClick={toggleNav}
                className="md:hidden absolute top-5 right-5 border rounded-lg z-50 text-white/70 border-white/20 p-2 cursor-pointer"
            >
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            {/* Mobil Menü Paneli */}
            <div
                className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 ${
                    nav ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <ul className="flex flex-col items-center justify-center space-y-8 h-full">
                    {navlinks.map((link, index) => (
                        <li key={index}>
                            <ScrollLink
                                to={link.path}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={closeNav}
                                className="text-5xl cursor-pointer"
                            >
                                {link.title}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};