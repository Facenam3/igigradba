import { useState } from "react";

import MainHeader from "../components/UI/MainHeader.jsx";
import SemiHeader from "../components/UI/SemiHeader.jsx";
import ProjectCard from "../components/UI/ProjectCard.jsx";

import { projects, projectCategories } from "../helper/projects.jsx";
import { filterProjectsByCategory } from "../helper/projectFilters.js";

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects = filterProjectsByCategory(projects, activeCategory);

    return (
        <section className="py-36 px-3">
            <div className="container mx-auto">
                <SemiHeader description="ПРОЕКТИ" />

                <MainHeader title="Наши реализирани градежни проекти" />

                <p className="max-w-3xl mx-auto text-center text-gray-600 leading-8 mt-5">
                    Погледнете дел од нашите реализирани проекти, изведени со
                    професионален пристап, квалитетни материјали и внимание кон
                    секој детал.
                </p>

                <div className="flex flex-wrap justify-center gap-3 mt-10">
                    {projectCategories.map((category) => (
                        <button
                            key={category.id}
                            type="button"
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-5 py-2 rounded-full font-semibold transition-colors duration-300 ${
                                activeCategory === category.id
                                    ? "bg-amber-500 text-zinc-950"
                                    : "bg-zinc-900 text-white hover:bg-amber-500 hover:text-zinc-950"
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {filteredProjects.map((project) => (
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
                </div>
            </div>
        </section>
    );
}