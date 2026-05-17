import { useState } from "react";

import Logo from "../UI/buttons/Logo.jsx";
import Navigation from "../UI/Navigation.jsx";
import MobileNavigation from "../UI/MobileNavigation.jsx";
import NavigationMenuButton from "../UI/buttons/NavigationMenuButton.jsx";

export default function MainNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-45 bg-white shadow-xl p-5">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo />

                    <div className="flex gap-4 items-center">
                        <Navigation />

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