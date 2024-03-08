import { IoLocationOutline } from "react-icons/io5";
import { SlCallOut } from "react-icons/sl";

const ContactUs = () => {
    return (
        <section className="px-7 lg:px-14 py-10">
            <div className="bg-[#07332F] px-14 py-12 w-auto my-auto h-auto rounded-[5px]">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                    <div className="text-[#fff] py-10 space-y-5"
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    >
                        <h2 className="text-[37px] lg:text-[40px] text-[#fff] font-bold">Contact With Us</h2>
                        <p className="text-[16px] text-[#fff]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntoreveritatis et quai.</p>
                        <ul>
                            <li className="flex items-center gap-3 mb-2">
                                <SlCallOut /> 
                                <span>+88 01750 14 14 14</span>
                            </li>
                            <li className="flex items-center gap-3 mb-2">
                                <IoLocationOutline /> 
                                <span>Dhanmondi, Dhaka, Bangladesh</span>
                            </li>
                        </ul>
                    </div>

                    <div className="py-10 space-y-5 lg:col-span-2"
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    >
                        <form>
                            <div className="flex flex-col lg:flex-row items-center gap-5 mb-6">
                                <input type="text" className="px-5 py-5 w-full text-[16px] placeholder:text-[#fff] text-[#fff] border-0 focus:border focus:border-[#07332F] rounded-sm bg-[#123C38]" placeholder="Name" />
                                <input type="email" className="px-5 py-5 w-full text-[16px] text-[#fff] placeholder:text-[#fff] border-0 focus:border-0 rounded-sm bg-[#123C38]" placeholder="Email" />
                            </div>
                            <div className="flex flex-col lg:flex-row items-center gap-5 mb-6">
                                <input type="number" className="px-5 py-5 w-full text-[16px] placeholder:text-[#fff] text-[#fff] border-0 focus:border focus:border-[#07332F] rounded-sm bg-[#123C38]" placeholder="Mobile Number" />
                                <input type="text" className="px-5 py-5 w-full text-[16px] text-[#fff] placeholder:text-[#fff] border-0 focus:border-0 rounded-sm bg-[#123C38]" placeholder="Doctor Name" />
                            </div>
                            {/* Date and Time Fields using HTML5 date and time inputs */}
                            <div className="flex flex-col lg:flex-row items-center gap-5 mb-6">
                                <input type="date" className="px-5 py-5 w-full text-[16px] placeholder:text-[#fff] text-[#fff] border-0 focus:border focus:border-[#07332F] rounded-sm bg-[#123C38]" placeholder="Select Date" />
                                <input type="time" className="px-5 py-5 w-full text-[16px] text-[#fff] placeholder:text-[#fff] border-0 focus:border-0 rounded-sm bg-[#123C38]" placeholder="Select Time" />
                            </div>

                            <div className="flex flex-col lg:flex-row items-center gap-5 mb-6">
                                <button type="submit" className="w-full bg-[#F7A582] text-white font-[700] text-[17px] rounded-[5px] py-5">Book Now</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
