
import { useQuery} from "@tanstack/react-query";


import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { FaTrashCan } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";



const AllUsers = () => {

    const axiosSecure = useAxiosSecure();
    

    const { data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;
        }
    })



    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch();
                toast.success(`${user.username} is admin now`, {
                    position: "top-center",
                    autoClose: 1000, // এক সেকেন্ডের মধ্যে বন্ধ হবে

                });
            }
        })
    }

   

    const handleDeleteUser = user => {
        axiosSecure.delete(`/users/${user._id}`)
        .then(res => {
            if (res.data.deletedCount > 0) {
                refetch();
                toast.success("User Deleted Successfully", {
                    position: "top-center",
                    autoClose: 1000, // এক সেকেন্ডের মধ্যে বন্ধ হবে

                });
            }
        })
    }


    return (
        <div className="px-12 my-20 py-12 ">
            <ToastContainer/>
            <h2 className="text-[22px] text-[#000000] font-extrabold mb-14">All Users : {users.length}</h2>


            <div className="w-full mb-8 overflow-x-scroll lg:overflow-x-hidden rounded-[5px] shadow-xl">
                <div className="w-full ">
                    <table className="w-full">
                        <thead>
                            <tr className="text-[15px] font-semibold tracking-wide text-left text-[#111] uppercase rounded-t-md bg-[#E6E6E6] px-12 py-12 mb-10 font_Inter">
                                <th className="px-4 py-3">Image / Name</th>
                                <th className="px-4 py-3">Email</th>
                                <th className="px-4 py-3">Role</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">

                        {
                            users.map(user =>

                            <tr key={user._id} className="text-gray-700 border-b last:border-none">
                                <td className="px-4 py-3 ">
                                    <div className="flex items-center text-sm">
                                        <div className="relative w-20 h-20 mr-3 rounded-full md:block">
                                            <img className="object-cover w-full h-full rounded-[2px]" src={user.photo} alt="" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-black"> {user.username} </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold ">{user.email}</td>
                                <td className="px-4 py-3 text-xs ">

                                    {user.role === 'admin' ?  <p className="text-[18px] text-orange-700 font-bold">Admin</p> :  <button onClick={() => handleMakeAdmin(user)} className="text-white text-[14px] bg-[#07332F] p-3 rounded-md">
                                            Make Admin
                                        </button>}
{/* 
                                        <button onClick={() => handleMakeAdmin(user)} className="text-white text-[14px] bg-[#07332F] p-3 rounded-md">
                                            Make Admin
                                        </button> */}
                                  

                                </td>
                                <td className="px-4 py-3 text-sm ">
                                    {/* <button   className="p-3 rounded-[4px] bg-[#B91C1C] text-[#fff]"> 
                                        <FaTrashAlt className=" text-white"/>
                                    </button> */}

                                    <button onClick={() => handleDeleteUser(user)} className="text-white text-[14px] bg-[#B91C1C] p-3 rounded-md">
                                        Remove User
                                    </button>
                                </td>
                            </tr>

                        )}
                        
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;