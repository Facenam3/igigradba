import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../pages/layout/Root.jsx";
import HomeLayout from "../pages/layout/HomeLayout.jsx";
import Services from "../pages/Services.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import Projects from "../pages/Projects.jsx";
import Contact from "../pages/Contact.jsx";
import Policy from "../pages/Policy.jsx";
import ProjectDetails from "../pages/ProjectDetails.jsx";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <HomeLayout />
                },
                {
                    path: "services",
                    element: <Services />
                },
                {
                    path: "about-us",
                    element: <AboutUs />
                },
                {
                    path: "projects",
                    element: <Projects />
                },
                {
                    path: "contact",
                    element: <Contact />
                },
                {
                    path: "privacy-policy",
                    element: <Policy />
                },
                {
                    path: "projects/:slug",
                    element: <ProjectDetails />
                }
            ]
        }
    ]
);