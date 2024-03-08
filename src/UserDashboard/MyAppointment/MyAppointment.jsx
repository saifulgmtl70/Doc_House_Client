import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import useAuth from "../../Components/Hooks/useAuth";
// import useAxiosPublic from "../../Components/Hooks/useAxiosPublic";
// import { IoMdClose } from "react-icons/io";

import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyAppointment = () => {

    const {user} =  useAuth();

    // const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure();


    const { data: appointments = [], refetch} = useQuery({
        queryKey: ['appointments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/appointments?email=${user.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;
        }
    })



    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Calculate total price when appointments data changes
        const calculateTotalPrice = () => {
            let total = 0;
            appointments.forEach((appointment) => {
                total += parseInt(appointment.servicePrice) || 0;
            });
            setTotalPrice(total);
        };
        calculateTotalPrice();
    }, [appointments]);
    


    const convertTo12HourFormat = (timeString) => {
        const [hours, minutes] = timeString.split(':');
        let period = 'AM';
        let hours12 = parseInt(hours, 10);
    
        if (hours12 >= 12) {
            period = 'PM';
            if (hours12 > 12) {
                hours12 -= 12;
            }
        }
    
        return `${hours12}:${minutes} ${period}`;
    };


    const handleDeleteAppointment = appointment => {
        axiosSecure.delete(`/appointments/${appointment._id}`)
        .then(res => {
            if (res.data.deletedCount > 0) {
                refetch();
                toast.success(`Appointment for ${appointment.service_name} has been Deleted Successfully`, {
                    position: "top-center",
                    autoClose: 1000, // এক সেকেন্ডের মধ্যে বন্ধ হবে

                });
            }
        })
    }


    // const openModal = (modalId) => {
    //     document.getElementById(modalId).showModal();
    // };



    return (
        <section className="px-12 my-20 py-12">
            <ToastContainer/>
            <div className="flex items-center justify-around gap-5 mb-14">
                <h2 className="text-[22px] text-[#000000] font-extrabold ">My Appointments: <span className="text-[#3f7eb3]">{appointments.length}</span></h2>
                <h2 className="text-[#151515] text-[21px] font-[700]">Total Price: <span className="text-[#3f7eb3]">${totalPrice}</span> </h2>
                {    
                    appointments.length ? 
                    <Link to="/userdashboard/payment">
                        <button  className="text-white text-[14px] bg-[#07332F] p-3 rounded-[5px]">
                            Pay
                        </button>
                    </Link>
                    :
                <button disabled className="text-white text-[14px] bg-[#07332F] p-3 rounded-[5px]">
                Pay
                </button>
                }
            </div>

            <div className="w-full mb-8 overflow-x-scroll lg:overflow-x-hidden rounded-[5px] shadow-xl">
                <div className="w-full ">
                    <table className="w-full">
                        <thead>
                            <tr className="text-[15px] font-semibold tracking-wide text-left text-[#111] uppercase rounded-t-md bg-[#E6E6E6] px-12 py-12 mb-10 font_Inter">
                                <th></th>
                                <th className="px-4 py-3"> Name</th>
                                <th className="px-4 py-3">Date</th>
                                <th className="px-4 py-3">Time</th>
                                <th className="px-4 py-3">Treatment</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">

                        {
                            appointments.map((appointment, index) =>

                            <tr key={appointment._id} className="text-gray-700 border-b last:border-none">
                                <th className="px-4 py-3 ">{index + 1}</th>
                                <td className="px-4 py-3 ">
                                    <div>
                                        <p className="font-semibold text-black"> {appointment.name} </p>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold ">{appointment.date}</td>
                                <td className="px-4 py-3 text-ms font-semibold">{convertTo12HourFormat(appointment.time)}</td>
                                <td className="px-4 py-3 text-ms font-semibold ">{appointment.service_name}</td>
                                <td className="px-4 py-3 text-sm flex items-center gap-2">
                                    
                                    <button onClick={() => handleDeleteAppointment(appointment)} className="text-white text-[14px] bg-[#B91C1C] p-3 rounded-[5px]">
                                        Delete
                                    </button>
                                </td>
                               



                               



                            </tr>


                                


                        )}
                        
                        </tbody>
                    </table>
                </div>
            </div>


            


        </section>
    );
};

export default MyAppointment;