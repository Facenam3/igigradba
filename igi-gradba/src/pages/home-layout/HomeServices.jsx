import Card from "../../components/UI/Card.jsx";
import CardSection from "../../components/UI/CardSection.jsx";
import MainHeader from "../../components/UI/MainHeader";

import { homeServices } from "../../helper/services";

export default function HomeServices() {
    return (
        <section
            className="py-16 lg:py-20 px-3"
        >
            <MainHeader
                title="наши услуги"
            />
            <CardSection>
                {homeServices?.map((service) => (
                    <Card
                        key={service.id}
                        title={service.title}
                        img={service.img}
                        description={service.description}
                    />
                ))}
            </CardSection>
        </section>
    );
}