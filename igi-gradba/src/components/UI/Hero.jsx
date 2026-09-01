import { useEffect, useState } from "react";

import cover1 from "../../assets/projects/project-1/after.JPG";
import cover2 from "../../assets/projects/project-2/cover.jfif";
import cover3 from "../../assets/projects/project-3/after.jpeg";
import cover4 from "../../assets/projects/project-4/cover.jfif";
import cover5 from "../../assets/projects/project-5/after.JPG";
import cover6 from "../../assets/projects/project-6/cover.jfif";
import cover7 from "../../assets/projects/project-7/cover.JPG";
import cover8 from "../../assets/projects/project-8/cover.JPG";
import cover9 from "../../assets/projects/project-9/cover.JPG";

export default function Hero() {
    const heroImages = [
        cover1,
        cover2,
        cover3,
        cover4,
        cover5,
        cover6,
        cover7,
        cover8,
        cover9,
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const Interval = setInterval(() => {
            setCurrentImage(
                (prev) => (prev + 1) % heroImages.length
            );
        }, 6000);

        return () => clearInterval(Interval);
    }, [])

    return (
        <div className="absolute inset-0">
            {heroImages.map((image, index) => (
                <img
                    key={image}
                    src={image}
                    alt=""
                    className={`
                        absolute inset-0 h-full w-full object-cover
                        transition-opacity duration-1000
                        ${
                            index === currentImage
                                ? "opacity-100"
                                : "opacity-0"
                        }
                    `}
                />
            ))}
        </div>
    );
}