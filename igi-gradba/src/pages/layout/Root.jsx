import { Outlet } from "react-router-dom";

import MainNavigation from "../../components/navigation/MainNavigation.jsx";

export default function RootLayout() {
    return (
        <div className="min-h-screen">
            <MainNavigation />
            <Outlet/>
        </div>
    );
}