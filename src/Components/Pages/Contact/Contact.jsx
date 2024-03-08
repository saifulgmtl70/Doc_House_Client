import { CiUser } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";

import { Link } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
    return (
        <main>

            <section className="banner_bg banner-container">
                <div className="banner-content flex flex-col items-start px-12">
                    <p className="text-[18px] text-[#F3F3F3] font-[600] mb-2">
                        <Link to="/" className=" font-extrabold">
                            Home
                        </Link>
                        / Contact Us
                    </p>
                    <h2 className="text-[45px] text-[#F3F3F3] font-[700]">
                        Contact Us
                    </h2>
                </div>
            </section>

            <section className='px-14 py-10 bg-[#FFFFFF]'>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mb-10">
                    <div className=" bg-[#FFFFFF] p-6 rounded-[3px] shadow-md">
                        <div className="flex items-center gap-6">
                            <div className="bg-[#00ACB1] p-4 rounded-md">
                                <CiUser className="text-[#f4ecee] text-[23px]"/>
                            </div>
                            <div className="">
                                <h2 className="text-[23px] text-[#339fa3] font-extrabold">Our Address</h2>
                                <p className="text-lg">Choumohoni, Agrabad, Chattogram, Bangladesh</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className=" bg-[#FFFFFF] p-6 rounded-[3px] shadow-md">
                        <div className="flex items-center gap-6 ">
                            <div className="bg-[#00ACB1] p-4 rounded-md">
                                <FaUserFriends className="text-[#f4ecee] text-[23px]"/>
                            </div>
                            <div className="">
                                <h2 className="text-[23px] text-[#339fa3] font-extrabold ">Our Phone</h2>
                                <p className="text-lg">Telephone: 0029129102320</p>
                                <p className="text-lg">Mobile: +8801312635965</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className=" bg-[#FFFFFF] p-6 rounded-[3px] shadow-md">
                        <div className="flex items-center gap-6 ">
                            <div className="bg-[#00ACB1] p-4 rounded-md">
                                <FaFileContract className="text-[#f4ecee] text-[23px]"/>
                            </div>
                            <div className="">
                                <h2 className="text-[23px] text-[#339fa3] font-extrabold">Our Email</h2>
                                <p className="text-lg">doc@house.com</p>
                                <p className="text-lg">azadcoxgmtl@gmail.com</p>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="text-center mb-12">
                    <p className="text-[18px] text-[#39a7ab] font-[700] mb-2">
                        Call to Action
                    </p>
                    <h2 className="text-[45px] text-[#39a7ab] font-[700]">
                        Make a Request
                    </h2>
                </div>


                <div className='w-full lg:w-11/12 mx-auto h-auto px-6 lg:px-10 py-5'
                
            >
                <form  action="">

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-7'>
                        <div>
                            <input type="text" name='user_name' className='px-4 py-4 text-[16px] text-[#686A6F] border border-gray-200 focus:border-[1px] focus:border-[#c4fdff] rounded-sm w-full' placeholder='Enter your name' />
                        </div>

                        <div >
                            <input type="email" className='px-4 py-4 text-[16px] text-[#686A6F] border border-gray-200 focus:border-[1px] focus:border-[#c4fdff] rounded-sm w-full' placeholder='Email Address' />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-7'>
                        <div>
                            <input type="number" name='user_name' className='px-4 py-4 text-[16px] text-[#686A6F] border border-gray-200 focus:border-[1px] focus:border-[#c4fdff] rounded-sm w-full' placeholder='Phone Number' />
                        </div>

                        <div >
                            <input type="text" className='px-4 py-4 text-[16px] text-[#686A6F] border border-gray-200 focus:border-[1px] focus:border-[#c4fdff] rounded-sm w-full' placeholder='Subject' />
                        </div>
                    </div>

                    <div className=''>
                        <textarea type="text" name="message" className='px-4 py-4 text-[16px] text-[#686A6F] border border-gray-200 focus:border-[1px] focus:border-[#c4fdff] rounded-sm w-full resize-none' cols="40" rows="10" placeholder='Write your message here' >
                        </textarea>
                        
                    </div>

                    <div className='text-center my-4'>
                        <button
                            type='submit'
                            className='flex items-center text-center mx-auto px-10 py-3 rounded-sm bg-gradient-to-r from-[#2aaf80] to-[#82e6a6] text-white'
                            >
                            Send Message
                            
                        </button>
                    </div>

                </form>
                </div>


                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.343679202935!2d-74.00619648571206!3d40.71277599705958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598b4fcd63b7%3A0xbba79714f31b30f3!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1646671717062!5m2!1sen!2sbd"
                    className="w-full h-[70vh]"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>


            </section>



        </main>
    );
};

export default Contact;