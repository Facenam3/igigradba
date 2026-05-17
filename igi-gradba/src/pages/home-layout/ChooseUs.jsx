import CardSection from "../../components/UI/CardSection.jsx";
import MainHeader from "../../components/UI/MainHeader.jsx";
import SemiHeader from "../../components/UI/SemiHeader.jsx";

import WorkProcessCard from "../../components/UI/WorkProcessCard.jsx";

import { whyChooseUs } from "../../helper/whyChooseus.jsx";

export default function ChooseUs() {
    return (
        <section
            className="lg:py-20 py-16 px-3 "
        >
            <MainHeader 
                title="зошто да не одберете нас"
            />
            <SemiHeader
                description="Од првиот контакт до финалната изведба, секој проект го водиме внимателно, организирано и со јасна комуникација.
                            Нашата цел е клиентот да знае што се случува во секоја фаза од работата."
            />
            <CardSection>
                {whyChooseUs?.map((choose) => (
                    <WorkProcessCard
                        key={choose.id}
                        title={choose.title}
                        description={choose.description}
                        icon={choose.icon}
                    />
                ))}
            </CardSection>

        </section>
    );
}