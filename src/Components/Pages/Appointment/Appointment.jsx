import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import 'aos/dist/aos.css';

import './Appointment.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Appointmentcard from "./Appointmentcard";

const Appointment = () => {

    const [services, setServices] = useState([]);
    
   
    useEffect(() => {
        fetch('https://doc-house-server-tau.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    

    return (
        <main>
            <ToastContainer/>
            <section className="banner_bg banner-container">
                <div className="banner-content flex flex-col items-start px-12">
                    <p className="text-[18px] text-[#F3F3F3] font-[600] mb-2">
                        <Link to="/" className=" font-extrabold">
                            Home
                        </Link>
                        / Appointment
                    </p>
                    <h2 className="text-[45px] text-[#F3F3F3] font-[700]">
                        Appointment
                    </h2>
                </div>
            </section>

            <section className="appointment_bg ">
                <div className="text-center mb-10">
                    <span className="text-[#F7A582] text-[15px]">Available Services on April 30, 2022</span>
                    <h2 className="text-[#3B3A3A] text-[45px] font-[700]">Please select a service.</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {
                        services.map((service) => <Appointmentcard key={service._id} service={service}></Appointmentcard> )
                    }
                </div>
            </section>
        </main>
    );
};

export default Appointment;
