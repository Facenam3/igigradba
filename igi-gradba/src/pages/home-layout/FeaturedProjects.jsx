import CardSection from "../../components/UI/CardSection.jsx";
import MainHeader from "../../components/UI/MainHeader.jsx";
import SemiHeader from "../../components/UI/SemiHeader.jsx";
import ProjectCard from "../../components/UI/ProjectCard.jsx";

import { projects } from "../../helper/projects.jsx";
import { getFeaturedProjects } from "../../helper/projectFilters.js";


export default function FeaturedProjects() {
    const featuredProjects = getFeaturedProjects(projects);

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
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        coverImage={project.coverImage}
                        beforeImg={project.beforeImg}
                        afterImg={project.afterImg}
                        shortDescription={project.shortDescription}
                        categoryLabel={project.categoryLabel}
                        location={project.location}
                        slug={project.slug}
                    />
                ))}
            </CardSection>
        </section>
    );
}