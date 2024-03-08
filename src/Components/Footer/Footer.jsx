import { Link } from "react-router-dom";

import footer_logo from '../../assets/footer_logo.png'
import TopButton from "./TopButton";

const Footer = () => {
    return (
        <section className="px-14 py-10 bg-[#F3F3F3]">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-12">

                <div className="">
                    <Link className="flex items-center gap-2 text-teal-600 mb-4" to="/">
                        <img src={footer_logo} alt="" className='w-[55px] h-[50px]'/>
                        <p className='text-[30px] font-[700] text-[#F7A582]'>Doc <span className='text-[#07332F]'>House</span> </p>
                    </Link>
                    <p className="text-[16px] mb-4 text-[#3B3A3A] font-[400] leading-[26px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been since the printer took.</p>
                    <button className="border-2 border-[#F7A582] mt-2 hover:bg-[#F7A582] transition-all delay-150 w-8/12 py-4 text-[18px] font-[700] text-[#F7A582] hover:text-white rounded-[4px]">More Details</button>
                </div>

                <div className="my-1">
                    <h2 className="text-[24px] text-[#0A0808] font-[700] mb-5">Quick Links</h2>
                    <ul>
                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]">About Us</a></li>

                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]">Service </a></li>

                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]">Doctors  </a></li>

                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]">Departments </a></li>

                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]">Payment Contact </a></li>

                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]"> Contact Us </a></li>

                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]"> My Account </a></li>
                    </ul>
                </div>

                <div className="my-1">
                    <h2 className="text-[24px] text-[#0A0808] font-[700] mb-5"> Doc House Services </h2>
                    <ul>
                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]">Pediatric Clinic</a></li>

                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]">Diagnosis Clinic </a></li>

                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]">Cardiac Clinic </a></li>

                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]">Laboratory Analysis </a></li>

                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]">Gynecological Clinic </a></li>

                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]"> Personal Counseling </a></li>

                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]"> Dental Clinic </a></li>
                    </ul>
                </div>

                
                <div className="my-1">
                    <h2 className="text-[24px] text-[#0A0808] font-[700] mb-5"> Working Hours </h2>
                    <ul>
                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]">Monday - 10 am to 7 pm</a></li>

                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]">Tuesday - 10 am to 7 pm </a></li>

                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]"> Wednesday - 10 am to 7 pm</a></li>

                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]">Thursday - 10 am to 7 pm </a></li>

                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]">Friday - 10 am to 7 pm </a></li>

                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]"> Saturday - 10 am to 7 pm </a></li>

                        <li><a href="#" className="text-[16px] text-[#6C6B6B] font-[600] leading-[37px]"> Sunday - 10 am to 7 pm </a></li>
                    </ul>
                </div>

                
            </div>

            <div className="flex flex-col my-5 w-full">

                <div className="divider"></div> 

            </div>

            <h2 className="text-center text-[18px] font-[500] text-[#6C6B6B]">Copyright © 2022 - All right reserved by Doc House Ltd</h2>

            <TopButton/>
        </section>
    );
};

export default Footer;