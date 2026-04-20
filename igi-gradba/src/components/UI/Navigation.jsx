import { NavLink } from "react-router-dom";
import { categories } from "../../helper/categories.js";

export default function Navigation() {
    return (
        <nav>
            <ul className="flex gap-3 items-center text-xl font-bold capitalize  text-cyan-400">
                {categories?.map((cat) => (
                    <li key={cat.id}>
                        <NavLink
                            to={`/${cat.path}`}
                            className={({ isActive }) =>
                                isActive
                                    ? "underline underline-offset-4 text-blue-500"
                                    : "hover:text-blue-500"
                            }
                        >
                            {cat.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}