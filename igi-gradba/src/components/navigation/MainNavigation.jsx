import ContactUs from "../UI/buttons/Contact.jsx";
import Logo from "../UI/buttons/Logo.jsx";
import Navigation from "../UI/Navigation.jsx";

export default function MainNavigation() {
    return (
        <header className="shadow-xl">
            <div className="flex justify-between items-center container mx-auto p-5">
                <Logo />
                <div className="flex gap-4 items-center">
                    <Navigation />
                    <ContactUs />
                </div>
                
            </div>
        </header>
    );
}