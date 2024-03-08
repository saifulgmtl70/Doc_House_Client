import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  AiOutlineEye, AiTwotoneEyeInvisible } from 'react-icons/ai';
import { AuthContext } from "../../Provider/AuthProvider";

import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Signup = () => {

    const [showPass, setShowPass] = useState(null);

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const axiosPublic = useAxiosPublic();

    // const location = useLocation();
    const navigate = useNavigate();

    const handeSignUp = (e) =>{
        e.preventDefault();

        const form = e.target;

        const username = form.username.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = { username, photo, email, password };
        console.log(user);

        if(username === ""){
            toast.error("User Name is required",{
                position: "top-center"
            });
            return;
        }

        else if(password.length < 6){
            toast.error("Password Should be at least 6 character or more logner than that",{
                position: "top-center"
            });
            return;
        }

        else if( password === '' || email === ''){
            toast.error("Please fill out the password or email first",{
                position: "top-center"
            });
            return;
        }

        else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
            toast.error("Your password should contain with uppercae,lowercase,num and speical character.",{
                position: "top-center"
            })
            return;
        }
        

        createUser(email, password)
        .then(result => {
            if (result && result.user) {
                const loggedUser = result.user;
                console.log(loggedUser);
                return updateUserProfile(username, photo);
            } 
            else {
                toast.error("User Name is required",{
                    position: "top-center"
                });
            }
        })

        .then(() => {
            const userInfo = {
                username: username,
                email: email,
                photo: photo
            };

            axiosPublic.post('/users', userInfo)

            .then(res => {
                if(res.data.insertedId){
                    console.log("User Added to databse");
                    toast.success("Account Created Successfully", {
                        position: "top-center",
                        autoClose: 1000, // এক সেকেন্ডের মধ্যে বন্ধ হবে
                        onClose: () =>  navigate('/')// টোস্ট বন্ধ হওয়ার পরে নেভিগেট করুন
                    });
                }
            })

        });

        // .catch(error => {
        //     console.error('Error during user creation or profile update:', error);
        // });



    };


    return (
        <main>
            <Helmet>
                <title>Doc House | Signup</title>
            </Helmet>
            <ToastContainer/>

            <section className="">
                
                <div className="w-full lg:w-11/12 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center ">
                        <div className="">
                            <img alt="Night" src="https://i.ibb.co/0jDn5hF/Login-bg.png"className="w-auto h-auto "/>

                        </div>

                        <div className="px-4 py-20 sm:px-6 lg:px-8 w-full lg:w-7/12">
                            <div className="w-full border rounded-[5px] py-4">
                                <h2 className="text-center text-[30px] text-[#0A0808] py-3 font-bold"> Sign Up to Doc House </h2>
                                <form onSubmit={handeSignUp} className="mb-0 mt-6 space-y-8  p-4 sm:p-6 lg:p-8">

                                    <div>
                                        <label htmlFor="email" className='text-[20px] text-[#000] font-bold mb-4'> User Name </label>

                                        <div className="relative">
                                            <input type="text" name='username' className="w-full normal-case mt-2  rounded-[6px] border-none bg-[#F3F3F3] focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-3 text-[15px] focus:outline-none shadow-sm" placeholder="Enter your username " />
                                        </div>
                                    </div>
                                

                                    <div>
                                        <label htmlFor="email" className='text-[20px] text-[#000] font-bold mb-4'>Photo Url</label>

                                        <div className="relative">
                                            <input type="text" name='photo' className="w-full normal-case mt-2  rounded-[6px] border-none bg-[#F3F3F3] focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-3 text-[15px] focus:outline-none shadow-sm" placeholder="Enter your photo url" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className='text-[20px] text-[#000] font-bold mb-4'>Email</label>

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
                                        Already registered? Go to 
                                        <Link className=" ms-4 text-[#F8B193]" to="/login"> SIGN IN </Link>
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

export default Signup;