import { Link, useLocation, useNavigate } from 'react-router-dom';

import {  AiOutlineEye, AiTwotoneEyeInvisible } from 'react-icons/ai';
import {  useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const [showPass, setShowPass] = useState(null);

    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state)

    const handleLogin = (event) =>{
        event.preventDefault();

        const form = event.target;
        // console.log(form);
        const email = form.email.value;
        const password = form.password.value;

        console.log( email, password)

        signIn(email, password)
        .then(() =>{
            toast.success("Logged in Successfully", {
                position: "top-center",
                autoClose: 1000, // এক সেকেন্ডের মধ্যে বন্ধ হবে
                onClose: () => navigate(from, { replace: true }) // টোস্ট বন্ধ হওয়ার পরে নেভিগেট করুন
            });
            
        })
        .catch(() =>{
            toast.error("Please provide valid email and password", {
                position: "top-center"
            });
        })

        form.reset();

    }

   
    return (
        <main>
            <ToastContainer/>
            <section className="">
                
                <div className="w-full lg:w-11/12 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center ">
                        <div className="">
                            <img alt="Night" src="https://i.ibb.co/0jDn5hF/Login-bg.png"className="w-auto h-auto "/>

                        </div>

   

                        <div className="px-4 py-20 sm:px-6 lg:px-8 w-full lg:w-7/12">
                            <div className="w-full border rounded-[5px] py-4">
                                <h2 className="text-center text-[30px] text-[#0A0808] py-3 font-bold"> Sign in to Doc House </h2>
                                <form onSubmit={handleLogin} action="" className="mb-0 mt-6 space-y-8  p-4 sm:p-6 lg:p-8">
                                

                                    <div>
                                        <label htmlFor="email" className='text-[20px] text-[#000] font-bold mb-4'>Username or Email Address</label>

                                        <div className="relative">
                                            <input type="email" name='email' className="w-full normal-case mt-2  rounded-[6px] border-none bg-[#F3F3F3] focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-3 text-[15px] focus:outline-none shadow-sm" placeholder="Enter your username or address" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="text-[20px] text-[#000] font-bold mb-4">Password</label>

                                        <div className="relative">
                                            <input type={showPass ? "text" : "password"}  name='password' className="w-full normal-case mt-2  rounded-[6px] border-none bg-[#F3F3F3] focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-3 focus:outline-none text-[15px] shadow-sm" placeholder="Enter password" />

                                            <span onClick={() => setShowPass(!showPass)} className="absolute cursor-pointer inset-y-0  end-0 grid place-content-center px-4">
                                    
                                            {
                                                showPass ? <AiTwotoneEyeInvisible></AiTwotoneEyeInvisible> : <AiOutlineEye></AiOutlineEye>
                                            }

                                            </span>
                                        </div>
                                    </div>

                                    

                                    <button   type="submit"  className='block w-full rounded-lg bg-[#F7A582] px-5 py-4 text-sm font-bold text-white '
                                         > Sign in </button>

                                    <p className="text-center text-[15px] font-bold text-[#6C6B6B]">
                                        Please register at first. Go to 
                                        <Link className=" text-[#F8B193] ms-4" to="/signup"> SIGN UP </Link>
                                    </p>


                                </form>
                            </div>
                        </div>

                        
                    </div>
                </div>



            </section>



        </main>
    );
};

export default Login;