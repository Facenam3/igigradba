import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({
    title,
    coverImage,
    beforeImg,
    afterImg,
    shortDescription,
    categoryLabel,
    location,
    slug,
}) {
    const [showBefore, setShowBefore] = useState(false);

    const imageToShow =
        showBefore && beforeImg ? beforeImg : afterImg || coverImage;

    return (
        <article className="overflow-hidden rounded-xl border border-amber-600 bg-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img
                className="h-52 w-full object-contain sm:h-60 lg:h-64"
                src={imageToShow}
                alt={title}
            />

            <div className="p-4">
                {categoryLabel && (
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-700">
                        {categoryLabel}
                    </p>
                )}

                <h3 className="mb-3 text-xl font-bold text-amber-800 lg:text-2xl">
                    {title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600 lg:text-base">
                    {shortDescription}
                </p>

                {location && (
                    <p className="mt-4 text-sm font-semibold text-gray-900 lg:text-base">
                        <span className="text-gray-500">Локација:</span>{" "}
                        {location}
                    </p>
                )}

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    {beforeImg && afterImg && (
                        <button
                            type="button"
                            onClick={() => setShowBefore((prev) => !prev)}
                            className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
                        >
                            {showBefore ? "Погледни после" : "Погледни пред"}
                        </button>
                    )}

                    <Link
                        to={`/projects/${slug}`}
                        className="rounded-xl bg-amber-500 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-amber-600"
                    >
                        Погледни проект
                    </Link>
                </div>
            </div>
        </article>
    );
}