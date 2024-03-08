import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";


const ManageDoctor = () => {

    const axiosSecure = useAxiosSecure();
    

    const { data: doctors = [], refetch} = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await axiosSecure.get('/doctors', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;
        }
    })


    const handleDeleteDoctor = doctor => {
        axiosSecure.delete(`/doctors/${doctor._id}`)
        .then(res => {
            if (res.data.deletedCount > 0) {
                refetch();
                toast.success("One Doctor Deleted Successfully", {
                    position: "top-center",
                    autoClose: 1000, // এক সেকেন্ডের মধ্যে বন্ধ হবে

                });
            }
        })
    }



    return (
        <section className="px-12 my-14 py-12 ">
            <ToastContainer/>
            <h2 className="text-[23px] text-[#000000] font-extrabold mb-14">Manage Doctors</h2>

            <div className="w-full mb-8 overflow-x-scroll lg:overflow-x-hidden rounded-[5px] shadow-xl">
                <div className="w-full ">
                    <table className="w-full">
                        <thead>
                            <tr className="text-[15px] font-semibold tracking-wide text-left text-[#111] uppercase rounded-t-md bg-[#E6E6E6] px-12 py-12 mb-10 font_Inter">
                                <th></th>
                                <th className="px-4 py-3">Image/Designation</th>
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">SPECIALITY</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white px-4">

                        {
                            doctors.map((doctor, index) =>

                            <tr key={doctor._id} className="text-gray-700 border-b px-4 last:border-none">

                                <th className="px-4 py-3 ">{index + 1}</th>

                                <td className="px-4 py-3 ">

                                    <div className="relative mr-3 rounded-full md:block">
                                        <img className="object-cover w-[50px] h-[50px] leading-[50px] rounded-full" src={doctor.image} alt="" />
                                    </div>
                                    {/* <div>
                                        <p className="font-semibold text-black"> {doctor.designation} </p>
                                    </div> */}
                                </td>

                                <td className="px-4 py-3 text-md font-semibold ">{doctor.name}</td>

                                <td className="px-4 py-3 text-md font-semibold ">{doctor.designation}</td>
                                
                                <td className="px-4 py-3 text-sm ">
                                    
                                    <button onClick={() => handleDeleteDoctor(doctor)} className="text-white text-[14px] bg-[#B91C1C] p-3 rounded-md">
                                         Delete
                                    </button>
                                </td>
                            </tr>

                        )}
                        
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    );
};

export default ManageDoctor;