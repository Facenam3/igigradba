import MainHeader from "../components/UI/MainHeader.jsx";
import SemiHeader from "../components/UI/SemiHeader.jsx";

export default function ChooseUs() {
    return (
        <section
            className="lg:py-20 py-10 px-3 bg-gradient-to-r from-amber-950 to-amber-600"
        >
            <MainHeader 
                title="зошто да не одберете нас"
                text
            />
            <SemiHeader
                description="Од првиот контакт до финалната изведба, секој проект го водиме внимателно, организирано и со јасна комуникација.
                            Нашата цел е клиентот да знае што се случува во секоја фаза од работата."
            />
        </section>
    );
}