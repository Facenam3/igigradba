import { Link } from "react-router-dom";

import Logo from "../../components/UI/buttons/Logo.jsx";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-amber-950 to-amber-600 text-white rounded-t-3xl py-12 lg:py-16 px-4 border-t border-zinc-800">
            <div className="container mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center lg:text-left">

                    <div className="flex flex-col gap-5">
                        <Logo />

                        <p className="text-sm leading-7 text-gray-50 max-w-sm">
                            Професионална изградба и реновирање со квалитет,
                            сигурност и внимание на секој детал.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h3 className="text-lg font-semibold text-amber-400">
                            Брзи Линкови
                        </h3>

                        <div className="flex flex-col gap-3 text-gray-50">

                            <Link
                                to="/"
                                className="hover:text-amber-300 transition-colors duration-300"
                            >
                                Почетна
                            </Link>

                            <Link
                                to="/about"
                                className="hover:text-amber-300 transition-colors duration-300"
                            >
                                За Нас
                            </Link>

                            <Link
                                to="/services"
                                className="hover:text-amber-300 transition-colors duration-300"
                            >
                                Услуги
                            </Link>

                            <Link
                                to="/projects"
                                className="hover:text-amber-300 transition-colors duration-300"
                            >
                                Проекти
                            </Link>

                            <Link
                                to="/contact"
                                className="hover:text-amber-300 transition-colors duration-300"
                            >
                                Контакт
                            </Link>

                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h3 className="text-lg font-semibold text-amber-400">
                            Контакт
                        </h3>

                        <div className="flex flex-col gap-3 text-gray-50 ">

                            <p className="hover:text-amber-300 cursor-pointer">+389 71 949 527</p>

                            <p className="hover:text-amber-300 cursor-pointer">+389 78 284 974</p>

                            <p className="hover:text-amber-300 cursor-pointer">igigradba@gmail.com</p>

                            <p className="hover:text-amber-300 cursor-pointer">Скопје, Македонија</p>

                        </div>
                    </div>

                </div> 

                <div className="border-t border-gray-50 mt-12 pt-6 text-center text-sm text-gray-50">
                    © 2026 ИГИ Градба ДОО Скопје. Сите права се задржани.
                </div>

            </div>
        </footer>
    );
}