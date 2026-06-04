import { useState } from "react";
import { Link } from "react-router";

export default function Card({
    title,
    img,
    beforeImg,
    afterImg,
    description,
    projectCard = false,
    category,
    location,
    slug,
    ...props
}) {

    const [showBefore, setShowBefore] = useState(false);

    const projectImage =
        showBefore && beforeImg ? beforeImg : afterImg || img;

    return (
        <div
            {...props}
            className="overflow-hidden rounded-xl border border-amber-600 bg-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <img
                className="h-52 w-full object-cover sm:h-60 lg:h-64"
                src={projectCard ? projectImage : img}
                alt={title}
            />

            <div className="p-4">
                {projectCard && category && (
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-700">
                        {category}
                    </p>
                )}

                <h3 className="mb-3 text-xl font-bold text-amber-800 lg:text-2xl">
                    {title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600 lg:text-base">
                    {description}
                </p>

                {projectCard && location && (
                    <p className="mt-4 text-sm font-semibold text-gray-900 lg:text-base">
                        <span className="text-gray-500">Локација:</span>{" "}
                        {location}
                    </p>
                )}

                {projectCard && beforeImg && afterImg && (
                    <div className="flex lg:flex-row flex-col gap-5 justify-center items-center">
                        <button
                            onClick={() => setShowBefore((prev) => !prev)}
                            className="mt-5 rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
                        >
                            {showBefore
                                ? "Погледни после"
                                : "Погледни пред"}
                        </button>
                        <Link
                            to={`/projects/${slug}`}
                            className="mt-5 rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
                        >Погледни проект</Link>
                    </div> 
                    
                )}
            </div>
        </div>
    );
}