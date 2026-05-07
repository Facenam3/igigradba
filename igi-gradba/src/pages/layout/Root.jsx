import { Outlet } from "react-router-dom";

import MainNavigation from "../../components/navigation/MainNavigation.jsx";
import Footer from "./Footer.jsx";

export default function RootLayout() {
    return (
        <div className="min-h-screen">
            <MainNavigation />
            <Outlet/>
            <Footer />
        </div>
    );
}