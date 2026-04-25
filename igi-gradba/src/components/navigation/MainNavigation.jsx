import Logo from "../UI/buttons/Logo.jsx";
import Navigation from "../UI/Navigation.jsx";
import NavigationMenuButton from "../UI/buttons/NavigationMenuButton.jsx";

export default function MainNavigation() {
    return (
        <header className="fixed top-0 left-0 right-0 z-45 bg-white shadow-xl p-5">
            <div className="flex justify-between items-center container mx-auto">
                <Logo />
                <div className="flex gap-4 items-center">
                    <Navigation />
                    <NavigationMenuButton />
                </div>
            </div>
        </header>
    );
}