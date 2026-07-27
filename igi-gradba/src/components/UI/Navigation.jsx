import { NavLink } from "react-router-dom";
import { categories } from "../../helper/categories.js";
import ContactUs from "./buttons/ContactUs.jsx";

export default function Navigation({ isTransparent }) {
    return (
        <nav>
            <ul className="hidden lg:flex gap-3 items-center text-xl font-semibold capitalize  ">
                {categories?.map((cat) => (
                    <li key={cat.id}>
                        <NavLink
                    to={`/${cat.path}`}
                    className={({ isActive }) => {
                        if (isActive) {
                            return "underline underline-offset-4 text-orange-500";
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
                <ContactUs isTransparent={isTransparent} />
            </ul>
        </nav>
    );
}