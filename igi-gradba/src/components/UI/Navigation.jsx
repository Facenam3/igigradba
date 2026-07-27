import { NavLink } from "react-router-dom";
import { categories } from "../../helper/categories.js";

export default function Navigation({ isTransparent }) {
    return (
        <nav>
            <ul className="flex items-center gap-6 text-xl font-semibold capitalize">
                {categories?.map((cat) => (
                    <li key={cat.id}>
                        <NavLink
                            to={`/${cat.path}`}
                            className={({ isActive }) => {
                                if (isActive) {
                                    return "text-orange-500 underline underline-offset-4";
                                }

                                return `
                                    transition-colors duration-300
                                    ${
                                        isTransparent
                                            ? "text-white hover:text-orange-400"
                                            : "text-black hover:text-orange-500"
                                    }
                                `;
                            }}
                        >
                            {cat.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}