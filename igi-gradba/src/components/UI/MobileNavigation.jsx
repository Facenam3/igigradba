import { NavLink } from "react-router-dom";
import { categories } from "../../helper/categories.js";

import ContactUs from "../UI/buttons/Contact.jsx";

export default function MobileNavigation({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="lg:hidden">
            <ul className="flex flex-col justify-center items-center gap-4 p-5">
                {categories.map((cat) => (
                    <li key={cat.id}>
                        <NavLink
                            to={`/${cat.path}`}
                            onClick={onClose}
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
        </div>
    );
}