import {
    AiFillGithub,
    AiFillLinkedin
} from "react-icons/ai";

export const Footer = () => {
    return (
        <footer className="py-8" id="contact">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex items-center justify-between flex-col md:flex-row">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white/80">
                            İletişime <span className="text-emerald-300">Geçin</span>
                        </h2>

                        <a
                            className="text-xl md:text-3xl font-semibold text-white underline decoration-gray-400 decoration-2 underline-offset-4 hover:text-emerald-300 hover:decoration-emerald-400 transition-all duration-300 break-all"
                            href="mailto:ender.karan14@gmail.com"
                        >
                            ender.karan14@gmail.com
                        </a>
                    </div>

                    <div className="text-white/50 mt-12">
                        

                        <div className="text-lg mb-8">
                            <p>Bursa</p>
                            <p>Türkiye</p>
                        </div>

                    </div>
                </div>

                <div className="relative z-10 text-center mt-8 py-12">
                    <h1 className="hidden md:block text-[10rem] md:text-[10rem] lg:text-[13rem] font-bold text-white opacity-10">
                        EnderKaran
                    </h1>

                    <h1 className="md:hidden relative text-9xl md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10">
                        Ender
                        <br />
                        Karan
                    </h1>
                </div>

                <div className="relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                    <p className="text-gray-200 text-lg">
                        © 2025. All rights reserved.
                    </p>

                    <ul className="flex gap-5 flex-wrap">

                        <li>
                            <a
                                href="https://github.com/EnderKaran"
                                aria-label="GitHub"
                                target="_blank"
                                className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors"
                            >
                                <AiFillGithub size={30} />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.linkedin.com/in/ender-karan-52303b187"
                                aria-label="Linkledin"
                                target="_blank"
                                className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors"
                            >
                                <AiFillLinkedin size={30} />
                            </a>
                        </li>

                    </ul>
                </div>


            </div>
        </footer>
    )
}