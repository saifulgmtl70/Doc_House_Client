import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Components/Hooks/useAxiosPublic";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddDoctor = () => {

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    const handleSubmitForm = async(e) =>{
        e.preventDefault();

        const form = e.target;

        // const name = form.doctorname.value;
        // const email = form.email.value;
        // const doctorchembername = form.doctorchembername.value;
        // const chemberaddress = form.chemberaddress.value;
        // const speicality = form.speicality.value;
        // const appointmentFee = form.appointmentfee.value;
        // const availableday = form.availableday.value;

        // const start_Time = form.starttime.value;
        // const end_time = form.endtime.value; 

        // const timing = [start_Time, end_time];

        // const degrees = form.doctordegree.value;
        // const designation = form.designation.value;
        // const aboutDoctor = form.aboutDoctor.value;
        const photo = form.photo.value;

        const addDoctor = { name, email, doctorchembername, chemberaddress, appointmentFee, availableday, timing,  speicality, degrees, designation, aboutDoctor, photo };
        console.log(addDoctor);


        // const imageFile = photo
        // const res = await axiosPublic.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // });

        // if(res.data.success){
        //     const doctorRes = await axiosSecure.post('/doctors', addDoctor);
        //     console.log(doctorRes.data);
        //     if(doctorRes.data.insertedId){
        //         reset();
                // toast.success(" Added a Doctor Successfully", {
                //     position: "top-center",
                //     autoClose: 1000, // এক সেকেন্ডের মধ্যে বন্ধ হবে
                //     onClose: () =>  navigate(from, { replace: true })// টোস্ট বন্ধ হওয়ার পরে নেভিগেট করুন
                // });
        //     }
        // }




    }

    const onSubmit = async(data) =>{
        console.log(data);
        // Upload image to imbb and then get an url
        const imageFile = { image: data.photo[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        if(res.data.success){
            const doctorItems = {
                name: data.doctorname,
                email: data.email,
                doctorchembername: data.doctorchembername,
                chemberaddress: data.chemberaddress,
                speicality: data.speicality,
                appointmentfee: parseFloat(data.appointmentfee),
                availableday: data.availableday,
                timing: data.timing,
                degrees: data.doctordegree,
                designation: data.designation,
                aboutDoctor: data.aboutDoctor,
                image: res.data.data.display_url
            }

            const doctorRes = await axiosSecure.post('/doctors', doctorItems);
            console.log(doctorRes.data);

            if(doctorRes.data.insertedId){
                reset();
                toast.success(" Added a Doctor Successfully", {
                    position: "top-center",
                    autoClose: 1000, // এক সেকেন্ডের মধ্যে বন্ধ হবে
                    onClose: () =>  navigate(from, { replace: true })// টোস্ট বন্ধ হওয়ার পরে নেভিগেট করুন
                });
            }

        }

        console.log(res.data);

    }


    return (
        <section  className="px-12 my-14 py-12 ">
           <ToastContainer/>
            <h2 className="text-[23px] text-[#000000] font-extrabold mb-14">Add a New Doctor</h2>

            <div className="px-4 py-20 sm:px-6 lg:px-8 w-full bg-[#FFFFFF]">
                <div className="w-full border rounded-[5px] py-4">
                   
                    <form onSubmit={handleSubmit(onSubmit)} action="" className=" space-y-8  p-4 sm:p-6 lg:p-8">
                    

                        <div className="flex items-center gap-5">
                            <div className="w-full">
                                <label htmlFor="email" className='text-[20px] text-[#000] font-bold mb-4'>Doctor's Name</label>

                                <div className="relative">
                                    <input type="text" {...register('doctorname')} name='doctorname' className="w-full normal-case mt-2  rounded-[3px] border-none bg-[#F3F3F3] focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-4 text-[15px] focus:outline-none shadow-sm" placeholder="Enter doctor's name" />
                                </div>
                            </div>

                            <div className="w-full">
                                <label htmlFor="Email" className="text-[20px] text-[#000] font-bold mb-4">Email</label>

                                <div className="relative">
                                    <input type="email" {...register('email')} name='email' className="w-full normal-case mt-2  rounded-[3px] border-none bg-[#F3F3F3] focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-4 text-[15px] focus:outline-none shadow-sm" placeholder="Enter doctor's email address" />
                                </div>
                            </div>
                        </div>


                        <div className="flex items-center gap-5">
                            <div className="w-full">
                                <label htmlFor="email" className='text-[20px] text-[#000] font-bold mb-4'>Doctor's Chember</label>

                                <div className="relative">
                                    <input type="text" {...register('doctorchembername')} name='doctorchembername' className="w-full normal-case mt-2  rounded-[3px] border-none bg-[#F3F3F3] focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-4 text-[15px] focus:outline-none shadow-sm" placeholder="Enter doctor's Chember Name" />
                                </div>
                            </div>

                            <div className="w-full">
                                <label htmlFor="Email" className="text-[20px] text-[#000] font-bold mb-4">Chember Address</label>

                                <div className="relative">
                                    <input type="text" {...register('chemberaddress')} name='chemberaddress' className="w-full normal-case mt-2  rounded-[3px] border-none bg-[#F3F3F3] focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-4 text-[15px] focus:outline-none shadow-sm" placeholder="Enter Chember address" />
                                </div>
                            </div>
                        </div>


                        <div className="flex items-center gap-5">
                            <div className="w-full">
                                <label htmlFor="Email" className="text-[20px] text-[#000] font-bold mb-4">Speciality</label>

                                <div className="relative">
                                    <select defaultValue="default" {...register('speicality')} name="speicality" className="px-4 py-4 w-full focus:outline-none border-none mx-auto rounded-[3px] bg-[#F6F6F6]" >
                                        <option disabled value="default" >Select a Category</option>
                                        <option value="Teeth Orthodontics">Teeth Orthodontics</option>
                                        <option value="Pediatric Dental">Pediatric Dental</option>
                                        <option value="Teeth Cleaning">Teeth Cleaning</option>
                                        <option value="Cavity Protection">Cavity Protection</option>
                                        <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                                        <option value="Oral Surgery">Oral Surgery</option>
                                        
                                    </select>
                                </div>
                            </div>

                            <div className="w-full">
                                <label htmlFor="Email" className="text-[20px] text-[#000] font-bold">Appointment Fees</label>

                                <div className="relative">
                                    <input type="number" {...register('appointmentfee')} name='appointmentfee' className="w-full normal-case rounded-[6px] border-none bg-[#F3F3F3] focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-4 text-[15px] focus:outline-none shadow-sm" placeholder="Enter Appointment Fees" />
                                </div>
                            </div>

                        </div>

                        <div className="flex items-center gap-5">
                            <div className="w-full">
                                <label htmlFor="email" className='text-[20px] text-[#000] font-bold mb-4'>Available on</label>

                                <div className="relative">
                                    <input type="text" {...register('availableday')} name='availableday' className="w-full normal-case mt-2  rounded-[3px] border-none bg-[#F3F3F3] focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-4 text-[15px] focus:outline-none shadow-sm" placeholder="Available days" />
                                </div>
                            </div>

                            <div className="w-6/12">
                                <label htmlFor="Email" className="text-[20px] text-[#000] font-bold mb-4">Start Time</label>

                                <div className="relative">
                                    <input type="time" {...register('starttime')}  name='starttime' className="w-full normal-case mt-2  rounded-[3px] border-none bg-[#F3F3F3] focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-4 text-[15px] focus:outline-none shadow-sm" placeholder="Enter start time" />
                                </div>
                            </div>

                            <div className="w-6/12">
                                <label htmlFor="Email" className="text-[20px] text-[#000] font-bold mb-4">End Time<i className="el el-time"></i></label>

                                <div className="relative">
                                    <input type="time" {...register('endtime')} name='endtime' className="w-full normal-case mt-2  rounded-[3px] border-none bg-[#F3F3F3] focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-4 text-[15px] focus:outline-none shadow-sm" placeholder="Enter end time" />
                                </div>
                            </div>
                        </div>


                        <div className="flex items-center gap-5">
                            <div className="w-full">
                                <label htmlFor="email" className='text-[20px] text-[#000] font-bold mb-4'>Doctor's Degree</label>

                                <div className="relative">
                                    <input type="text" {...register('doctordegree')} name='doctordegree' className="w-full normal-case mt-2  rounded-[3px] border-none bg-[#F3F3F3] focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-4 text-[15px] focus:outline-none shadow-sm" placeholder="Enter doctor's Degree" />
                                </div>
                            </div>

                            {/* <div className="w-full">
                                <label htmlFor="email" className='text-[20px] text-[#000] font-bold mb-4'>Doctor's Designation</label>

                                <div className="relative">
                                    <input type="text" name='doctordegree' className="w-full normal-case mt-2  rounded-[6px] border-none bg-[#F3F3F3] focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-4 text-[15px] focus:outline-none shadow-sm" placeholder="Enter doctor's Designation" />
                                </div>
                            </div> */}

                            <div className="w-full">
                                <label htmlFor="Email" className="text-[20px] text-[#000] font-bold mb-4">Doctor's Designation</label>

                                <div className="relative">
                                    <select defaultValue="default" {...register('designation')} name="designation" className="px-4 py-4 mt-2 w-full focus:outline-none border-none mx-auto rounded-[3px] bg-[#F6F6F6]" >
                                        <option disabled value="default" >Select a Category</option>
                                        <option value="Internal Medicine Specialist">Internal Medicine Specialist</option>
                                        <option value="Family Physician">Family Physician</option>
                                        <option value="General Physician">General Physician</option>
                                        <option value="Gastroenterologist">Gastroenterologist</option>
                                        <option value="Hepatologist ">Cosmetic Dentistry</option>
                                        <option value="Oral Surgery">Internal Medicine Specialist</option>
                                        <option value="Surgery">Surgery</option>
                                        <option value="Pediatric Cardiologist.">Pediatric Cardiologist.</option>
                                        
                                    </select>
                                </div>
                            </div>

                            
                        </div>


                        <div className="w-full">
                            <label htmlFor="Email" className="text-[20px] text-[#000] font-bold mb-4">Chember Address</label>

                            <div className="relative">


                                <textarea className="block w-full h-40 border-none bg-[#F3F3F3] focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-4 text-[15px] focus:outline-none shadow-sm rounded-[3px] resize-none" {...register('aboutDoctor')} name="aboutDoctor" placeholder="About Doctor"
                                ></textarea>
                            </div>
                        </div>

                        

                        <div>
                            <label htmlFor="Email" className="text-[20px] text-[#000] font-bold mb-4">Upload Photo</label>

                            
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">


                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>

                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" {...register('photo')}  name="photo" className="hidden" />
                                </label>
                            </div> 

                        </div>

                        <button   type="submit"  className='block w-full rounded-lg bg-[#F7A582] px-5 py-4 text-sm font-bold text-white '> Sign in </button>


                    </form>
                </div>
            </div>

        </section>
    );
};

export default AddDoctor;