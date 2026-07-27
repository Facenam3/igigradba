import { Link } from "react-router-dom";

import logo from "../../../assets/logo/igigradba1.png";

export default function Logo() {
    return (
        <Link 
            to="/"
            className="w-[80px] h-[80px]"
        >
           <img 
            src={logo} 
            alt="company logo" 
            className="w-full h-full object-cover"
            />
        </Link>
    );
}