import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../pages/layout/Root.jsx";
import HomeLayout from "../pages/layout/HomeLayout.jsx";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <HomeLayout />
                }
            ]
        }
    ]
);