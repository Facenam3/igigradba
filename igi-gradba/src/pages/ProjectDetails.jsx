import { Link, useParams } from "react-router-dom";

import { projects } from "../helper/projects.jsx";

export default function ProjectDetails() {
    const { slug } = useParams();

    const project = projects.find((project) => project.slug === slug);

    if (!project) {
        return (
            <section className="py-36 px-5 text-center">
                <h1 className="text-3xl font-bold text-zinc-900">
                    Проектот не е пронајден
                </h1>

                <Link
                    to="/projects"
                    className="mt-5 inline-block text-amber-600 font-semibold"
                >
                    ← Назад кон проекти
                </Link>
            </section>
        );
    }

    return (
        <section className="py-36 px-5">
            <div className="container mx-auto">
                <div className="mb-10">
                    <Link to="/projects" className="text-amber-600 font-semibold">
                        ← Назад кон проекти
                    </Link>

                    <p className="text-amber-600 font-semibold mt-6">
                        {project.categoryLabel}
                    </p>

                    <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 mt-3">
                        {project.title}
                    </h1>

                    <p className="text-gray-600 leading-8 mt-6 max-w-3xl">
                        {project.shortDescription}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2">
                        <img
                            src={project.coverImage}
                            alt={project.title}
                            className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
                        />
                    </div>

                    <aside className="bg-zinc-950 text-white rounded-3xl p-6 lg:p-8 shadow-xl h-fit space-y-4">
                        <p><strong>Локација:</strong> {project.location}</p>
                        <p><strong>Година:</strong> {project.year}</p>
                        <p><strong>Тип:</strong> {project.type}</p>
                        <p><strong>Површина:</strong> {project.area}</p>
                        <p><strong>Времетраење:</strong> {project.duration}</p>
                    </aside>
                </div>

                <div className="mt-16 max-w-4xl">
                    <h2 className="text-3xl font-bold text-zinc-900 mb-5">
                        Опис на проектот
                    </h2>

                    <p className="text-gray-600 leading-8">
                        {project.description}
                    </p>
                </div>
            </div>
        </section>
    );
}