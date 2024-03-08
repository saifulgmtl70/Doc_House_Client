import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaStar } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar, CiDollar } from "react-icons/ci";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";

const AllDoctors = () => {

    const [ doctors, setDoctors ] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() =>{
        axiosPublic.get("/doctors")
        .then(res =>{
            setDoctors(res.data);
        })
    },[])

    return (
        <main>
             <Helmet>
                <title>Doc House | All Doctors</title>
            </Helmet>
            <section className="banner_bg banner-container">
                <div className="banner-content flex flex-col items-start px-12">
                    <p className="text-[18px] text-[#F3F3F3] font-[600] mb-2">
                        <Link to="/" className=" font-extrabold">
                            Home
                        </Link>
                        / All Doctors
                    </p>
                    <h2 className="text-[45px] text-[#F3F3F3] font-[700]">
                        All Doctors
                    </h2>
                </div>
            </section>

            <section className="px-12 py-10">
                <div className="grid grid-grid-cols-1 lg:grid-cols-3 gap-3">
                    {
                        doctors.map(doctor => (
                            <div key={doctor._id} className="card w-full p-4 lg:w-[400px] bg-base-100 rounded-[5px] border shadow-xl"
                            data-aos="zoom-in"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            >

                                <img src={doctor.image} alt="Shoes" className="h-[220px] rounded-[5px]" />
                                <div className="card-body items-start text-start">
                                    <h2 className="card-title">{doctor.name}</h2>
                                    <div className="flex flex-col justify-between gap-2">
                                        <h4 className="text-[#24ACF2]">{doctor.degrees[0]} <span>{doctor.degrees[1]}</span> </h4>
                                        <p className="text-[#F7A582]">({doctor.designation})</p>
                                    </div>
                                    <div className="my-2 flex items-center gap-[3px] border-b-2 w-full pb-[20px]">
                                        <FaStar className="text-[#F2871D]" />
                                        <FaStar className="text-[#F2871D]" />
                                        <FaStar className="text-[#F2871D]" />
                                        <FaStar className="text-[#F2871D]" />
                                        <FaStar className="text-[#F2871D]" />
                                    </div>

                                    <ul>
                                        <li className="flex gap-3 mb-2">
                                            <IoLocationOutline className="mt-1"/> 
                                            <span> {doctor.address} </span>
                                        </li>
                                        <li className="flex items-center gap-3 mb-2">
                                            <CiCalendar /> 
                                            <span> {doctor.timing} </span>
                                        </li>
                                        <li className="flex items-center gap-3 mb-2">
                                            <CiDollar /> 
                                            <span> {doctor.appointmentFee} </span>
                                        </li>
                                    </ul>

                                    <div className="w-full">
                                        <Link to={`/doctorprofile/${doctor._id}`} state={{ doctorId: doctor._id }} >
                                            <button className="btn bg-transparent w-full rounded-[5px] border-2 border-[#F7A582] text-[18px] font-[700] text-[#F7A582] transition-all delay-100 hover:bg-[#F7A582] hover:text-white hover:border-0"> View Profile </button>
                                        </Link>
                                    </div>
                                </div>
                                
                            </div>
                        ))
                    }

                </div>
            </section>

        </main>
    );
};

export default AllDoctors;