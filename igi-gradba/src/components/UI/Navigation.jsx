import { NavLink } from "react-router-dom";
import { categories } from "../../helper/categories.js";
import ContactUs from "./buttons/Contact.jsx";

export default function Navigation() {
    return (
        <nav>
            <ul className="hidden lg:flex gap-3 items-center text-xl font-semibold capitalize  ">
                {categories?.map((cat) => (
                    <li key={cat.id}>
                        <NavLink
                            to={`/${cat.path}`}
                            className={({ isActive }) =>
                                isActive
                                    ? "underline underline-offset-4 text-orange-500"
                                    : "hover:text-orange-500"
                            }
                        >
                            {cat.name}
                        </NavLink>
                    </li>
                ))}
                <ContactUs />
            </ul>
        </nav>
    );
}