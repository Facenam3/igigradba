import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../pages/layout/Root.jsx";
import Home from "../pages/Home.jsx";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                }
            ]
        }
    ]
);