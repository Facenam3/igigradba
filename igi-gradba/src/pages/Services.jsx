import MainHeader from "../components/UI/MainHeader.jsx";
import SemiHeader from "../components/UI/SemiHeader.jsx";
import CardSection from "../components/UI/CardSection.jsx";
import Card from "../components/UI/Card.jsx";

import { services } from "../helper/services.js";

export default function Services() {
    return (
        <section className="lg:py-36 py-16 px-3">
            <MainHeader 
                title="професионални градежни решенија"
            />
            <SemiHeader 
                description="Нудиме комплетни услуги за изградба,
                    реновирање и уредување на станбени
                    и деловни објекти."
            />
            <CardSection
                columns={3}
            >
                {services?.map((service) => (
                    <Card 
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        img={service.img}
                    />
                ))}
            </CardSection>

        </section>
    );
}