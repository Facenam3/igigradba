import { Outlet } from "react-router-dom";

import MainNavigation from "../../components/navigation/MainNavigation.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "../../components/UI/ScrollToTop.jsx";

export default function RootLayout() {
    return (
        <div className="min-h-screen">
            <ScrollToTop />
            <MainNavigation />
            <Outlet/>
            <Footer />
        </div>
    );
}