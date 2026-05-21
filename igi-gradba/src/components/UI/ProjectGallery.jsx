import { useState } from "react";

export default function ProjectGallery({ images = [], title }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images.length) {
        return (
            <div className="w-full h-[420px] rounded-3xl bg-gray-100 flex items-center justify-center text-gray-500">
                Нема достапни слики.
            </div>
        );
    }

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="space-y-4">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <img
                    src={images[currentIndex]}
                    alt={`${title} ${currentIndex + 1}`}
                    className="w-full h-[320px] md:h-[420px] lg:h-[520px] object-cover"
                />

                {images.length > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-zinc-950/80 text-white w-11 h-11 hover:bg-amber-500 transition"
                            aria-label="Previous image"
                        >
                            ‹
                        </button>

                        <button
                            type="button"
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-zinc-950/80 text-white w-11 h-11 hover:bg-amber-500 transition"
                            aria-label="Next image"
                        >
                            ›
                        </button>
                    </>
                )}
            </div>

            {images.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                    {images.map((image, index) => (
                        <button
                            key={`${image}-${index}`}
                            type="button"
                            onClick={() => setCurrentIndex(index)}
                            className={`overflow-hidden rounded-xl border-2 transition ${
                                currentIndex === index
                                    ? "border-amber-500"
                                    : "border-transparent"
                            }`}
                        >
                            <img
                                src={image}
                                alt={`${title} thumbnail ${index + 1}`}
                                className="h-20 w-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}