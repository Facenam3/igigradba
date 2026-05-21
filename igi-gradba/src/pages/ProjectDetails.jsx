import { Link, useParams } from "react-router-dom";

import ProjectGallery from "../components/UI/ProjectGallery.jsx";

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
                        <ProjectGallery
                            images={project.images}
                            title={project.title}
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
                {project.workPerformed && project.workPerformed.length > 0 && (
                    <div className="mt-10">
                        <h2 className="text-3xl font-bold text-zinc-900 mb-5">
                            Изведени работи
                        </h2>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.workPerformed.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 rounded-xl bg-gradient-to-tl from-zinc-950 to-zinc-600 border border-gray-100 px-5 py-4"
                                >
                                    <span className="text-amber-600 font-bold">✓</span>
                                    <span className="text-gray-50 leading-7">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}