import Card from "../components/UI/Card";
import { homeServices } from "../helper/services";

export default function Services() {
    return (
        <section
            className="p-5 lg:mt-30 "
        >
            <h1 
                className="text-3xl font-semibold text-center capitalize"
            >
                наши услуги
            </h1>

            <div
                className="p-5 flex lg:flex-row flex-col gap-3 mt-10"
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