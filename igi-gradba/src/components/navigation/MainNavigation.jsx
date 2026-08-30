import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Logo from "../UI/buttons/Logo.jsx";
import Navigation from "../UI/Navigation.jsx";
import MobileNavigation from "../UI/MobileNavigation.jsx";
import NavigationMenuButton from "../UI/buttons/NavigationMenuButton.jsx";
import ContactUs from "../UI/buttons/ContactUs.jsx";

export default function MainNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();
    const isHome = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isTransparent = isHome && !scrolled && !isMenuOpen;

    return (
       <header
            className={`
                fixed left-0 top-0 z-50 w-full
                transition-all duration-500
                ${
                    isTransparent
                        ? "bg-transparent text-white shadow-none"
                        : "bg-white text-black shadow-xl"
                }
            `}
        >
            <div className="container mx-auto p-4">
                <div className="flex items-center justify-between">
                    <Logo isTransparent={isTransparent} />

                    <div className="hidden lg:flex items-center gap-8">
                        <Navigation isTransparent={isTransparent} />

                       <div className="ml-10">
                            <ContactUs isTransparent={isTransparent} />
                        </div>
                    </div>

                    <div className="lg:hidden">
                        <NavigationMenuButton
                            isOpen={isMenuOpen}
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                        />
                    </div>
                </div>

                <MobileNavigation
                    isOpen={isMenuOpen}
                    onClose={() => setIsMenuOpen(false)}
                />
            </div>
        </header>
    );
}