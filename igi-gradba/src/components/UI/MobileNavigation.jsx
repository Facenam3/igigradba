import { NavLink } from "react-router-dom";
import { categories } from "../../helper/categories.js";

import ContactUs from "./buttons/ContactUs.jsx";

export default function MobileNavigation({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="absolute left-0 top-full z-50 w-full bg-white text-black shadow-xl lg:hidden">
            <ul className="flex flex-col justify-center items-center gap-4 p-5 capitalize">
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

                <ContactUs
                    onClick={onClose}
                />
            </ul>
        </div>
    );
}