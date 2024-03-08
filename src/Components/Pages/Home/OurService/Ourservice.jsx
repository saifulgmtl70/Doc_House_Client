import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { SlCallIn } from "react-icons/sl";
import { useState } from "react";

const Ourservice = () => {

    const [activeTab, setActiveTab] = useState("cavity"); // Initial active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="px-10 lg:px-32 py-14">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                    <img src="https://i.ibb.co/pJ61BCg/Rectangle-20078.png" className="h-auto  w-full lg:w-[500px]" alt="" />
                </div>

                <div className="text-center lg:text-start"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                    <h3 className="text-[30px] lg:text-[40px] text-[#0A0808] font-[700] mb-3">Our Services</h3>
                    <p className="text-[#3B3A3A] text-[16px] font-[400]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <div className="w-full border rounded-md flex items-center my-6">

                        <button  onClick={() => handleTabClick("cavity")} className={`w-4/12 py-8 text-[18px] font-[700] text-[#3B3A3A] rounded-[2px] ${activeTab === "cavity" ? "bg-[#F7A582] text-white" : "bg-transparent text-[#3B3A3A]"}`}>
                            Cavity Protection
                        </button>

                        <button onClick={() => handleTabClick("cosmetic")} className={`w-4/12 py-8 text-[18px] font-[700] text-[#3B3A3A] rounded-[2px] ${activeTab === "cosmetic" ? "bg-[#F7A582] text-white" : "bg-transparent text-[#3B3A3A]"}`}>
                            Cosmetic Dentisty
                        </button>

                        <button onClick={() => handleTabClick("oral")} className={`w-4/12 py-8 text-[18px] font-[700] text-[#3B3A3A] rounded-[2px] ${activeTab === "oral" ? "bg-[#F7A582] text-white" : "bg-transparent text-[#3B3A3A]"}`}>
                            Oral Surgery
                        </button>
                    </div>

                    {
                        activeTab === "cavity" && (
                        <div className="my-5"
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        >
                            <img src="https://i.ibb.co/qyFrR0T/Rectangle-10.png"  className="rounded-[5px]" alt="" />
                        </div>
                    )}

                    {                   
                        activeTab === "cosmetic" && (
                        <div className="my-5"
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        >
                            <img src="https://i.ibb.co/MPd3bG4/cosmetic-dentistry-565135e0.png"  className="rounded-[5px]" alt="" />
                        </div>
                    )}

                    {                   
                        activeTab === "oral" && (
                        <div className="my-5"
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        >
                            <img src="https://i.ibb.co/0jnDm9b/oral-surgery-fa8f909d.png"  className="rounded-[5px]" alt="" />
                        </div>
                    )}

                    <h3 className="text-[26px] lg:text-[28px] text-[#0A0808] font-[700] my-3">Electro Gastrology Therap</h3>
                    <p className="text-[#3B3A3A] text-[16px] font-[400] mb-1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                    <p className="text-[#3B3A3A] text-[16px] font-[400] mb-2"> Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    <button  className="px-16 py-3 mt-3 rounded-[6px] bg-[#fff] border-2 border-[#F7A582] hover:bg-[#F7A582] text-[20px] hover:text-white hover:shadow-2xl hover:-translate-y-3 duration-500">More Details</button>

                </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-28 mb-16">
                <div className="w-full px-8 py-14 rounded-[3px] bg-[#07332F] hover:bg-[#F7A582] transition-all delay-150 cursor-pointer text-white"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                    <div className="flex gap-4">
                        <div>
                            <IoTimeOutline className="text-[40px]"/>
                        </div>
                        <div>
                            <h4 className="text-[25px]">Opening Hours</h4>
                            <p className="text-[19px]">Open 9.00 am to 5.00pm Everyday</p>
                        </div>
                    </div>
                </div>

                <div className="w-full px-8 py-14 rounded-[3px] bg-[#07332F] hover:bg-[#F7A582] transition-all delay-150 cursor-pointer text-white"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                    <div className="flex gap-4">
                        <div>
                            <CiLocationOn className="text-[40px]"/>
                        </div>
                        <div>
                            <h4 className="text-[25px]">Our Locations</h4>
                            <p className="text-[19px]">Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                        </div>
                    </div>
                </div>

                <div className="w-full px-8 py-14 rounded-[3px] bg-[#07332F] hover:bg-[#F7A582] transition-all delay-150 cursor-pointer text-white"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                    <div className="flex gap-4">
                        <div>
                            <SlCallIn className="text-[40px]"/>
                        </div>
                        <div>
                            <h4 className="text-[25px]">Contact Us</h4>
                            <p className="text-[19px]">+88 01750 00 00 00 <br/> +88 01750 00 00 00</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Ourservice;