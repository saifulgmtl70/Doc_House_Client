import { Link, useLoaderData, useParams } from "react-router-dom";
import "./DoctorProfile.css";

import { FaStar } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const DoctorProfile = () => {
  



    const [activeTab, setActiveTab] = useState("overview"); // Initial active tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const location = useLocation();
    const doctorsProfile = useLoaderData();

    const doctorId = location.state?.doctorId;
    const profile = Array.isArray(doctorsProfile)
        ? doctorsProfile.find((profile) => profile._id === doctorId)
        : null;

    if (!profile) {
        // Handle loading state or display an error message
        return <div>Loading...</div>;
    }

  return (
    <main>
        <Helmet>
            <title>Doc House | DoctorProfile</title>
        </Helmet>
        <section className="banner_bg banner-container ">
            <div className="banner-content flex flex-col items-start px-12">
            <p className="text-[18px] text-[#F3F3F3] font-[600] mb-2">
                {" "}
                <Link to="/" className=" font-extrabold">
                Home
                </Link>{" "}
                / Doctor Profile{" "}
            </p>
            <h2 className="text-[45px] text-[#F3F3F3] font-[700]">
                Doctor Profile
            </h2>
            </div>
        </section>

        <section className="bg-[#F3F3F3] px-5 lg:px-12 py-20">
            <div className="w-full lg:w-10/12 mx-auto my-10 p-7 bg-[#FFFFFF] rounded-[5px]">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    <div>
                        <img
                       
                            src={profile.image}
                            className="w-full lg:w-[350px] h-[378px] rounded-[5px]"
                            alt=""
                        />
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-[#0A0808] text-[40px] font-[700]">
                            {" "}
                            {profile.name}{" "}
                        </h2>
                        <div className="flex flex-col gap-4">
                            <p className="text-[#6C6B6B] text-18px font-[400]">
                            {" "}
                            {profile.degrees}{" "}
                            </p>
                            <p className="text-[#6C6B6B] text-18px font-[400]">
                            {profile.designation}
                            </p>
                        </div>

                        <div className="flex items-center gap-1">
                            <FaStar className="text-[#F2871D] text-[21px] font-bold" />
                            <FaStar className="text-[#F2871D] text-[21px] font-bold" />
                            <FaStar className="text-[#F2871D] text-[21px] font-bold" />
                            <FaStar className="text-[#F2871D] text-[21px] font-bold" />
                            <FaStar className="text-[#F2871D] text-[21px] font-bold" />
                            <FaStar className="text-[#F2871D] text-[21px] font-bold" />
                        </div>

                        <div className="flex gap-3 mb-2">
                            <IoLocationOutline className="mt-1" />
                            <span> {profile.address} </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="px-3 py-3 text-[#6C6B6B] hover:bg-[#6C6B6B] transition-all delay-100  hover:text-[#fff] text-[20px] border-2 rounded-[5px] cursor-pointer">
                            Dental Filling
                            </button>
                            <button className="px-3 py-3 text-[#6C6B6B] hover:bg-[#6C6B6B] transition-all delay-100 text-[20px] border-2  hover:text-[#fff] rounded-[5px] cursor-pointer">
                            Teeth Whitneing
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-10/12 mx-auto p-7 bg-[#FFFFFF] rounded-[5px]">
            {/* Tabs */}
                <div className="flex justify-normal gap-3 lg:justify-between overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
                    <button
                    onClick={() => handleTabClick("overview")}
                    className={`inline-flex items-center w-[260px] h-[65px] px-4 -mb-px text-sm text-center ${
                        activeTab === "overview"
                        ? "text-[#fff] bg-[#F7A582] hover:text-[#fff] hover:bg-[#F7A582]"
                        : "text-[#878686] hover:text-[#fff] hover:bg-[#F7A582]"
                    } border-b-2 rounded-tl-[5px] sm:text-base whitespace-nowrap focus:outline-none`}
                    >
                    Overview
                    </button>

                    {/* Add similar onClick handlers for other tabs */}
                    <button
                    onClick={() => handleTabClick("location")}
                    className={`inline-flex items-center w-[260px] h-[65px] px-4 -mb-px text-sm text-center ${
                        activeTab === "location"
                        ? "text-[#fff] bg-[#F7A582] hover:text-[#fff] hover:bg-[#F7A582]"
                        : "text-[#878686] hover:text-[#fff] hover:bg-[#F7A582]"
                    } border-b-2 rounded-tl-[5px] sm:text-base whitespace-nowrap focus:outline-none`}
                    >
                    Location
                    </button>

                    {/* Repeat the pattern for other tabs */}
                    <button
                    onClick={() => handleTabClick("reviews")}
                    className={`inline-flex items-center w-[260px] h-[65px] px-4 -mb-px text-sm text-center ${
                        activeTab === "reviews"
                        ? "text-[#fff] bg-[#F7A582] hover:text-[#fff] hover:bg-[#F7A582]"
                        : "text-[#878686] hover:text-[#fff] hover:bg-[#F7A582]"
                    } border-b-2 rounded-tl-[5px] sm:text-base whitespace-nowrap focus:outline-none`}
                    >
                    Reviews
                    </button>

                    <button
                    onClick={() => handleTabClick("businessHours")}
                    className={`inline-flex items-center w-[260px] h-[65px] px-4 -mb-px text-sm text-center ${
                        activeTab === "businessHours"
                        ? "text-[#fff] bg-[#F7A582] hover:text-[#fff] hover:bg-[#F7A582]"
                        : "text-[#878686] hover:text-[#fff] hover:bg-[#F7A582]"
                    } border-b-2 rounded-tl-[5px] sm:text-base whitespace-nowrap focus:outline-none`}
                    >
                    Business Hours
                    </button>
                </div>

            {/* Content based on active tab */}
            {activeTab === "overview" && (
                <div className="mt-4">
                    <h2 className="text-[20px] text-[#3B3A3A] font-[700] mb-2">About</h2>
                    <p className="text-[16px] text-[#3B3A3A] font-[400] leading-[26px] mb-2"> {profile.aboutDoctor} </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        <div>
                            <div className="mb-3">
                                <h2 className="text-[20px] text-[#3B3A3A] font-[700] mb-4">Education</h2>
                                <ul className="mx-3 lg:mx-10 list-disc">
                                    <li className="mb-3">
                                        <h4 className="text-[16px] text-[#3B3A3A] border border-[#000000] leading-[26px]"> {profile.education[0].institution} </h4>
                                        <p className="text-[16px] text-[#3B3A3A] font-[400] leading-[26px] mb-2">{profile.education[0].degree}  </p>
                                        <p className="text-[16px] text-[#3B3A3A] font-[400] leading-[26px] mb-2"></p>
                                    </li>
                                    <li className="mb-3">
                                        <h4 className="text-[16px] text-[#3B3A3A] w-full border border-[#000000] leading-[26px]"> {profile.education[1].institution} </h4>
                                        <p className="text-[16px] text-[#3B3A3A] font-[400] leading-[26px] mb-2">{profile.education[1].degree}  </p>
                                        <p className="text-[16px] text-[#3B3A3A] font-[400] leading-[26px] mb-2"></p>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-3">
                                <h2 className="text-[20px] text-[#3B3A3A] font-[700] mb-4">Work & Experience</h2>
                                <ul className="mx-3 lg:mx-10 list-disc">
                                    <li className="mb-3">
                                        <h4 className="text-[16px] text-[#3B3A3A] w-full border border-[#000000] leading-[26px]"> {profile.experience[0].position} </h4>
                                        <p className="text-[16px] text-[#3B3A3A] font-[400] leading-[26px] mb-2">{profile.experience[0].clinic}  </p>
                                        <p className="text-[16px] text-[#3B3A3A] font-[400] leading-[26px] mb-2">{profile.experience[0].years} Years</p>
                                    </li>
                                    <li className="mb-3">
                                        <h4 className="text-[16px] text-[#3B3A3A] w-full leading-[26px] border border-[#000000]"> {profile.experience[1].position} </h4>
                                        <p className="text-[16px] text-[#3B3A3A] font-[400] leading-[26px] mb-2">{profile.experience[1].hospital}  </p>
                                        <p className="text-[16px] text-[#3B3A3A] font-[400] leading-[26px] mb-2">{profile.experience[1].years} Years</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-3">
                                <h2 className="text-[20px] text-[#3B3A3A] font-[700] mb-4">Services</h2>
                                <ul className="mx-6 lg:mx-10 list-disc">
                                
                                    {
                                        profile.services.map((service, i) => (
                                            <li key={i} className="mb-3 text-[#676666]">{service}</li>
                                        ))
                                    }
                                </ul>

                            </div>

                        </div>

                        <div className=" col-span-2">
                            <div className="mb-3">
                                <h2 className="text-[20px] text-[#3B3A3A] font-[700] mb-4">Awards</h2>
                                <ul className="mx-3 lg:mx-10 list-disc">
                                    <li className="mb-3">
                                        <h4 className="text-[16px] text-[#3B3A3A] font-[700] leading-[26px]"> Humanitarian Award </h4>
                                        <p className="text-[16px] text-[#3B3A3A] font-[400] leading-[26px] mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.  </p>
                                        <p className="text-[16px] text-[#3B3A3A] font-[400] leading-[26px] mb-2"> July 2019</p>
                                    </li>
                                    <li className="mb-3">
                                        <h4 className="text-[16px] text-[#3B3A3A] font-[700] leading-[26px]"> Certificate for International Volunteer Service </h4>
                                        <p className="text-[16px] text-[#3B3A3A] font-[400] leading-[26px] mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.  </p>
                                        <p className="text-[16px] text-[#3B3A3A] font-[400] leading-[26px] mb-2"> March 2011</p>
                                    </li>
                                    <li className="mb-3">
                                        <h4 className="text-[16px] text-[#3B3A3A] font-[700] leading-[26px]"> The Dental Professional of The Year Award </h4>
                                        <p className="text-[16px] text-[#3B3A3A] font-[400] leading-[26px] mb-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                                        <p className="text-[16px] text-[#3B3A3A] font-[400] leading-[26px] mb-2">  May 2008 </p>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-3">
                                <h2 className="text-[20px] text-[#3B3A3A] font-[700] mb-4">Specializations</h2>
                                <ul className="mx-6 lg:mx-10 list-disc">
                                
                                    <li className="mb-3 text-[#676666]">Children Care</li>
                                    <li className="mb-3 text-[#676666]">Dental Care</li>
                                    <li className="mb-3 text-[#676666]">Oral and Maxillofacial Surgery</li>
                                    <li className="mb-3 text-[#676666]">Orthodontist</li>
                                    <li className="mb-3 text-[#676666]">Periodontist</li>
                                    <li className="mb-3 text-[#676666]">Prosthodontics</li>
                                     
                                </ul>

                            </div>

                        </div>


                    </div>
                </div>
            )}

            {activeTab === "location" && (
                <div className="mt-4">
                    <h2>Location</h2>
                </div>
            )}

            {activeTab === "reviews" && (
                <div className="mt-4">
                    <h2>Reviews</h2>
                </div>
            )}

            {activeTab === "businessHours" && (
                <div className="mt-4">
                    <h2>Business Hourse</h2>
                </div>
            )}
            </div>
            
        </section>
    </main>
  );
};

export default DoctorProfile;
