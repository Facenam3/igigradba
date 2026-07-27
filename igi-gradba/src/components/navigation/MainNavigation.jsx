import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Logo from "../UI/buttons/Logo.jsx";
import Navigation from "../UI/Navigation.jsx";
import MobileNavigation from "../UI/MobileNavigation.jsx";
import NavigationMenuButton from "../UI/buttons/NavigationMenuButton.jsx";

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

    const isTransparent = isHome && !scrolled;

    return (
        <header
            className={`
                p-3
                fixed
                top-0
                left-0
                z-50
                w-full
                shadow-xl
                transition-all
                duration-500
                ${
                    isTransparent
                        ? "bg-transparent text-white shadow-none"
                        : "bg-white text-black shadow-xl"
                }
            `}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <Logo />

                    <div className="flex items-center gap-4">
                        <Navigation isTransparent={isTransparent} />

                        <NavigationMenuButton
                            isOpen={isMenuOpen}
                            isTransparent={isTransparent}
                            onClick={() => {
                                setIsMenuOpen((prev) => !prev);
                            }}
                        />
                    </div>
                </div>

                <MobileNavigation
                    isOpen={isMenuOpen}
                    isTransparent={isTransparent}
                    onClose={() => setIsMenuOpen(false)}
                />
            </div>
        </header>
    );
}