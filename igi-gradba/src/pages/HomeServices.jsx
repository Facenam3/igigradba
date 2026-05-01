import Card from "../components/UI/Card";
import { homeServices } from "../helper/services";

export default function HomeServices() {
    return (
        <section
            className="p-5 my-10 "
        >
            <h1 
                className="text-3xl font-semibold text-center capitalize"
            >
                наши услуги
            </h1>

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