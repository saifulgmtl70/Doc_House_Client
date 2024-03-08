

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { IoMdClose } from "react-icons/io";
import AOS from 'aos';

import 'react-time-picker/dist/TimePicker.css';
import useAuth from "../../Hooks/useAuth";


import { useEffect, useState } from 'react';

// import useAppointment from '../../Hooks/useAppointment';


import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appointmentcard = ({service}) => {

    const {_id, service_name, service_img, service_price, image_bg } = service;

    const navigate = useNavigate();

    const [startDate, setStartDate] = useState(new Date());
    
    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        AOS.init();
    }, []);

    const openModal = (modalId) => {
        document.getElementById(modalId).showModal();
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const form = e.target;
    
        const date = form.date.value;
        const time = form.time.value;
        const name = form.name.value;
        const phone = form.phone.value;
    
        const email = user.email;

        const servicePrice = service_price;
    
        const appointmentData = { service_name, servicePrice, date, time, name, phone, email };
    
        try {
            const res = await axiosSecure.post('/appointments', appointmentData);
            console.log(res.data);
    
            if (res.status === 201) {
                toast.success("Appointment is booked successfully", {
                    position: "top-center",
                    autoClose: 3000,
                    onClose: () =>  navigate('/userdashboard/myappointment')
                });
                // Close the modal after successful booking
                const modalId = `modal_${_id}`;
                document.getElementById(modalId).close();
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error("Appointment for this service already exists", {
                    position: "top-center",
                    autoClose: 3000,
                    onClose: () =>  navigate('/appointment')
                });
                const modalId = `modal_${_id}`;
                document.getElementById(modalId).close();
            } else {
                // console.error("Error booking appointment:", error);
                toast.error("Failed to book appointment. Please try again later.", {
                    position: "top-center",
                    autoClose: 3000,
                });
            }
        }
    };
    
    
    

    
    
    

    return (
        <div >
             <ToastContainer />
            <div
                className="flex items-center gap-3 cursor-pointer rounded-[5px] shadow-lg w-auto lg:w-[360px] h-[150px] p-6 bg-[#fff]"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                onClick={() => openModal(`modal_${_id}`)}
                
            >
                <div className="p-4 rounded-[4px]" style={{ backgroundColor: image_bg }}>
                    <img src={service_img} alt={service_name} />
                </div>
                <div>
                    <h2 className="text-[#3B3A3A] text-[27px] font-[700]">{service_name}</h2>
                </div>
            </div>
            {/* Modal for each service */}
            <dialog id={`modal_${_id}`} className="modal px-4">
           
                <div className="modal-box w-full lg:w-[510px] h-full lg:h-[540px] rounded-[5px]">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                        <button className=" bg-[#07332F] rounded-full p-2 text-[20px] text-white hover:bg-[#07332F] shadow-none border-0 absolute right-2 top-5"><IoMdClose  /></button>
                    </form>
                    <h3 className="font-bold text-[20px]">{service_name}</h3>

                    <div className="mt-7">
                        <form onSubmit={handleSubmit} action="" className="space-y-2">

                            <div className="flex flex-col">
                                <DatePicker id="checkInDate"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="d MMMM, yyyy"
                                    name="date"
                                    className="mt-2 w-full px-3 text-lg py-3 border border-[#E6E6E6] focus:border-none focus:outline-none focus:bg-[#E6E6E6] rounded-md"
                                />
                            </div>

                            <div className="flex flex-col">
                                <DatePicker
                                    
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    showTimeSelect
                                    dateFormat="HH:mm"
                                    name="time"
                                    className="mt-2 w-full px-3 text-lg py-3 border border-[#E6E6E6] focus:border-none focus:outline-none focus:bg-[#E6E6E6] rounded-md"
                                />
                            </div>

                            <div className="flex flex-col">
                                <input type="text" name="name" defaultValue={user?.displayName} placeholder="Full Name" className="mt-2 w-full px-3 text-lg py-3 border border-[#E6E6E6] focus:border-none focus:outline-none focus:bg-[#E6E6E6] rounded-md"/>
                            </div>

                            <div className="flex flex-col">
                                <input type="number" name="phone" placeholder="Phone Number" className="mt-2 w-full px-3 text-lg py-3 border border-[#E6E6E6] focus:border-none focus:outline-none focus:bg-[#E6E6E6] rounded-md"/>
                            </div>

                            <div className="flex flex-col">
                                <input type="email" name="email" defaultValue={user?.email} placeholder="Email Address" className="mt-2 w-full px-3 text-lg py-3 border border-[#E6E6E6] focus:border-none focus:outline-none focus:bg-[#E6E6E6] rounded-md"/>
                            </div>


                            <div className="flex flex-col">
                                

                                <button type="submit" className="mt-2 w-full px-3 text-lg py-3 border bg-[#07332F] text-white rounded-md">SUBMIT</button>

                            </div>


                        </form>
                    </div>
                    
                </div>
            </dialog>
                            
        </div>
    );
};

export default Appointmentcard;