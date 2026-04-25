import { NavLink } from "react-router-dom";
import { categories } from "../../helper/categories.js";

import ContactUs from "../UI/buttons/Contact.jsx";

export default function MobileNavigation() {
   return (
        <div className="md:hidden">
            <ul className="flex flex-col justify-center items-center gap-2 p-3">
                {categories?.map((cat) => (
                    <li 
                        key={cat.id}
                    >
                        <NavLink 
                            to={`/${cat.path}`}
                            className={({isActive}) => 
                                isActive 
                                    ? "underline underline-offset-4 text-blue-500"
                                    : "hover:text-blue-500"
                            }
                        ></NavLink>
                    </li>
                ))}
                <ContactUs />
            </ul>
        </div>
   ); 
}