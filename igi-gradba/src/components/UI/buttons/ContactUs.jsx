import { NavLink } from "react-router-dom";

export default function ContactUs({ isTransparent, ...props }) {
    return (
        <NavLink
            to="/contact"
            className={`
                cursor-pointer
                rounded-2xl
                border-2
                px-3
                py-2
                text-md
                font-semibold
                transition-all
                duration-300

                ${
                    isTransparent
                        ? "border-white text-white hover:bg-white hover:text-black"
                        : "border-orange-400 bg-white text-orange-500 hover:border-amber-50 hover:bg-gradient-to-r hover:from-amber-950 hover:to-amber-600 hover:text-white"
                }
            `}
            {...props}
        >
            Контакт
        </NavLink>
    );
}