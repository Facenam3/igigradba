import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../pages/layout/Root.jsx";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout />,
        }
    ]
);