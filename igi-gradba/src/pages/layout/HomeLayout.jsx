import ChooseUs from "../home-layout/ChooseUs.jsx";
import Home from "../home-layout/Home.jsx";
import HomeServices from "../home-layout/HomeServices.jsx";
import WorkProcess from "../home-layout/WorkProcess.jsx";
import FeaturedProjects from "../home-layout/FeaturedProjects.jsx";
import ContactUs from "../home-layout/ContactUs.jsx";

export default function HomeLayout() {
    return (
        <>
         <Home />
         <HomeServices />
         <WorkProcess />
         <ChooseUs />
         <FeaturedProjects />
         <ContactUs />
        </>
    );
}