import ChooseUs from "../home-layout/ChooseUs.jsx";
import Home from "../home-layout/Home.jsx";
import HomeServices from "../home-layout/HomeServices.jsx";
import WorkProcess from "../home-layout/WorkProcess.jsx";

export default function HomeLayout() {
    return (
        <>
         <Home />
         <HomeServices />
         <ChooseUs />
         <WorkProcess />
        </>
    );
}