import { useEffect } from "react";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import ExpertDoctors from "./ExpertDoctors/ExpertDoctors";
import Ourservice from "./OurService/Ourservice";
import ReviewSlider from "./ReviewSlider/ReviewSlider";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";

const Home = () => {

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <main>
            <Helmet>
                <title>Doc House | Home</title>
            </Helmet>
            <Banner />
            <Ourservice/>
            <ReviewSlider/>
            <ExpertDoctors/>
            <ContactUs/>

        </main>
    );
};

export default Home;