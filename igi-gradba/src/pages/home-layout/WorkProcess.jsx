import MainHeader from "../../components/UI/MainHeader";
import SemiHeader from "../../components/UI/SemiHeader";
import WorkProcessCard from "../../components/UI/WorkProcessCard";
import CardSection from "../../components/UI/CardSection.jsx";

import { workProcess } from "../../helper/workprocess.jsx";

export default function WorkProcess() {
    return (
        <section
            className="lg:py-20 py-10 px-3 bg-gradient-to-r from-amber-950 to-amber-600"
        >
            <MainHeader
                title="како работиме"
                text
            />
            <SemiHeader
                description="Од првиот контакт до финалната изведба, секој проект го водиме внимателно, организирано и со јасна комуникација.
                Нашата цел е клиентот да знае што се случува во секоја фаза од работата."
                text
            />
            <CardSection>
                {workProcess?.map((process) => (
                    <WorkProcessCard
                        white
                        key={process.id}
                        title={process.title}
                        description={process.description}
                        icon={process.icon}
                    />
                ))}
            </CardSection>
        </section>
    );
}