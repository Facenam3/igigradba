import { useState } from "react";

import MainHeader from "../components/UI/MainHeader.jsx";
import SemiHeader from "../components/UI/SemiHeader.jsx";
import CardSection from "../components/UI/CardSection.jsx";

import { projects, projectCategories } from "../helper/projects.jsx";
import { filterProjectsByCategory, getFeaturedProjects } from "../helper/projectFilters.js";

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects = filterProjectsByCategory(projects, activeCategory);

    return (
        <section className="lg:py-36 py-16 px-3">
            <SemiHeader
                description="ПРОЕКТИ"
            />

            <MainHeader
                title="наши реализирани градежни проекти"
            />

            <SemiHeader
                description="
                Погледнете дел од нашите реализирани проекти, изведени со
                професионален пристап, квалитетни материјали и внимание кон
                секој детал.
                "
            />
            
             <div className="flex flex-wrap justify-center gap-3 mt-10">
                    {projectCategories.map((category) => (
                        <button
                            key={category.id}
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
                        <article
                            key={project.id}
                            className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={project.coverImage}
                                alt={project.title}
                                className="w-full h-64 object-cover"
                            />

                            <div className="p-6 space-y-4">
                                <span className="text-sm font-semibold text-amber-600">
                                    {project.categoryLabel}
                                </span>

                                <h3 className="text-2xl font-bold text-zinc-900">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    {project.shortDescription}
                                </p>

                                <div className="flex justify-between text-sm text-gray-500 pt-2">
                                    <span>{project.location}</span>
                                    <span>{project.year}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>         
        </section>
    );
}