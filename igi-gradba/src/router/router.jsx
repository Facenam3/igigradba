import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../pages/layout/Root.jsx";
import Services from "../pages/Services.jsx";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <Services />
                }
            ]
        }
    ]
);