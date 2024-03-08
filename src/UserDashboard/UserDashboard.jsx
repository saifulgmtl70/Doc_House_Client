import { Helmet } from "react-helmet-async";
import  useAuth from "../Components/Hooks/useAuth";
import { useState } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { IoIosNotifications, IoMdHome } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { RiMenu3Fill } from "react-icons/ri";
import { SiAsciidoctor } from "react-icons/si";
import { GoCodeReview } from "react-icons/go";
import { FaHistory } from "react-icons/fa";

import './Userdashboard.css'


const UserDashboard = () => {

    const { user, logOut } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state);


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
    };

    const handleLogOut = () =>{
        logOut()
        .then(() =>{
            toast.success(" Logged Out Successfully", {
                position: "top-center",
                autoClose: 1000, // এক সেকেন্ডের মধ্যে বন্ধ হবে
                onClose: () =>  navigate(from, { replace: true })// টোস্ট বন্ধ হওয়ার পরে নেভিগেট করুন
            });
        })
    
        .catch(() =>{
          toast.error("Something went wrong",{
            position: "top-center"
          });
        })
    }


    return (
        <main className="nunito_sans">
            <Helmet>
                <title>Doc House | User Dashboard</title>
            </Helmet>

            <header className="px-5 lg:px-14 py-4  fixed w-full z-50 flex items-center justify-between bg-[#07332F]">
                <div className="flex-1">
                    <Link to="/" className="text-white font-bolder text-[25px] flex items-center gap-2"> 
                     <span>Doc House</span></Link>
                </div>

                <div className="flex items-center gap-4">

                    <div className="w-[40px] h-[40px] leading-[40px] p-3 bg-white bg-opacity-30 text-white rounded-full">
                        <IoIosNotifications />
                    </div>

                    {user && 
                        <div className="relative">
                            <button onClick={toggleDropdown} className="focus:outline-none flex  items-center gap-2">
                                <img src={user.photoURL} className="w-[40px] h-[40px] rounded-full" alt="" />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-auto lg:w-96 bg-white border rounded shadow-lg">
                                    <h2 className='text-[#F7A582] px-4 py-2 text-[18px] font-[700]'>{user.displayName}</h2>
                                    <h2 className='text-[#F7A582] px-4 py-2 text-[18px] font-[700]'>{user.email}</h2>
                                    <Link to="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Settings</Link>
                                    <button onClick={handleLogOut} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200" >Logout</button>
                                </div>
                            )}
                        </div>
                    }

                    <div className="block md:hidden">
                        <button onClick={toggleSidebar} className="rounded p-2 text-[#1E293B] dark:text-[#fcfcfc]">
                            {isSidebarOpen ? <CgClose className='w-[25px] text-[#fff] h-[23px] rounded-[3px]'/> : <RiMenu3Fill  className='w-[25px] text-[#fff] h-[23px] rounded-[3px]'/>} {/* Toggle between menu and close icons */}
                        </button>
                    </div>


                
                </div>

            </header>

            <section className="flex">
                <div className={` lg:block w-full lg:w-2/12 ${isSidebarOpen ? 'block' : 'hidden'}`}>
                    <div className="bg-[#FFFFFF] sidemenu h-full sticky top-0 -mt-5 list-none ">
                        <div className="py-3 mb-6 flex ">
                            <Link to="/" className="text-white font-extrabold text-[25px] flex items-center gap-2"> Doc House </Link>
                        </div>


                        <li className="-mt-[14px] mb-5">
                            <NavLink to="myappointment" className="flex items-center gap-[7px] hover:bg-[#F1F5F9] py-5 px-3  transition-none text-[#898989] hover:text-[#122033] transition-all delay-100 font-[700]">
                                <SiAsciidoctor   className="text-[23px]" />
                                <p className="text-[16px]"> My Appointments</p>
                            </NavLink>
                        </li>

                        <li className="-mt-[14px]  mb-5">
                            <NavLink to="myreviews" className="flex items-center gap-[7px] hover:bg-[#F1F5F9] py-5 px-3  transition-none text-[#898989] hover:text-[#122033] transition-all delay-100 font-[700]">
                                <GoCodeReview className="text-[23px]" />
                                <p className="text-[16px]"> My Reviews</p>
                            </NavLink>
                        </li>

                        <li className="-mt-[14px]  mb-5">
                            <NavLink to="myhistory" className="flex items-center gap-[7px] hover:bg-[#F1F5F9] py-5 px-3  transition-none text-[#898989] hover:text-[#122033] transition-all delay-100 font-[700]">
                                <FaHistory  className="text-[23px]" />
                                <p className="text-[16px]"> My History</p>
                            </NavLink>
                        </li>

                        <li className="-mt-[14px]  mb-5">
                            <NavLink to="/" className="flex items-center gap-[7px] hover:bg-[#F1F5F9] py-5 px-3  transition-none text-[#898989] hover:text-[#122033] transition-all delay-100 font-[700]">
                                <IoMdHome className="text-[23px]" />
                                <p className="text-[16px]"> Home</p>
                            </NavLink>
                        </li>

                    </div>
                </div>
            

                <div className="w-full lg:w-10/12 h-[100vh] bg-[#F1F5F9] overflow-y-scroll">
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </section>


        </main>
    );
};

export default UserDashboard;