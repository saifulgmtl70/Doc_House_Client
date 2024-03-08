import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const ExpertDoctors = () => {

    const [ doctors, setDoctors ] = useState([]);

    useEffect(() =>{
        fetch('https://doc-house-server-tau.vercel.app/doctors')
        .then(res => res.json())
        .then(data =>setDoctors(data))
    },[])

    return (
        <section className="px-14 py-10">

            <div className="text-center mb-8"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            >
                <h2 className="text-[38px] text-[#0A0808] font-[700]">Our Expert Doctors</h2>
                <p className="text-[16px] text-[#3B3A3A] px-0 lg:px-14 font-[400]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa accordion quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>

            <div className="grid grid-grid-cols-1 lg:grid-cols-3 gap-3">
                {
                    doctors.slice(0, 3).map(doctor => (
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

            <div className="text-center mt-14"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            >
                <Link to="/alldoctor">
                    <button className="px-16 py-4 rounded-sm bg-[#fff] border-2 border-[#F7A582] hover:bg-[#F7A582] text-[20px] hover:text-white hover:shadow-2xl hover:-translate-y-3 duration-500">View All Doctors</button>
                </Link>
            </div>

        </section>
    );
};

export default ExpertDoctors;