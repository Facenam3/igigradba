import Card from "../../components/UI/Card.jsx";
import MainHeader from "../../components/UI/MainHeader";

import { homeServices } from "../../helper/services";

export default function HomeServices() {
    return (
        <section
            className="lg:py-20 py-10 px-3"
        >
            <MainHeader
                title="наши услуги"
            />

            <div
                className="p-5 flex lg:flex-row flex-col gap-5 mt-10"
            >
                {homeServices?.map((service) => (
                    <Card
                        key={service.id}
                        title={service.title}
                        img={service.img}
                        description={service.description}
                    />
                ))}
            </div>
        </section>
    );
}