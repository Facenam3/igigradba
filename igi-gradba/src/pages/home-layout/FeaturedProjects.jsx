import CardSection from "../../components/UI/CardSection.jsx";
import MainHeader from "../../components/UI/MainHeader.jsx";
import SemiHeader from "../../components/UI/SemiHeader.jsx";
import Card from "../../components/UI/Card.jsx";

import { featuredProjects } from "../../helper/projects.jsx";

export default function FeaturedProjects() {
    return (
        <section
            className="lg:py-20 py-16 px-3 bg-gradient-to-r from-amber-950 to-amber-600"
        >
            <MainHeader 
                title="наши проекти"
                text
            />
            <SemiHeader 
                description="Погледнете дел од проектите кои ги реализиравме со квалитет, посветеност и внимание на деталите."
                text
            />
            <CardSection>
                {featuredProjects?.map((project) => (
                    <Card
                        projectCard
                        key={project.id}
                        title={project.title}
                        category={project.category}
                        description={project.description}
                        location={project.location}
                        beforeImg={project.beforeImg}
                        afterImg={project.afterImg}                        
                    />
                ))}
            </CardSection>
        </section>
    );
}