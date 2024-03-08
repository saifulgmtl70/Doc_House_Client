import React from 'react';
import useAuth from '../../Components/Hooks/useAuth';
import useAxiosSecure from '../../Components/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyHistory = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();


    const { data: payments = [], refetch} = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;
        }
    })


    const handleDeleteAppointment = payment => {
        axiosSecure.delete(`/payments/${payment._id}`)
        .then(res => {
            if (res.data.deletedCount > 0) {
                refetch();
                toast.success(`Payment has been Deleted Successfully`, {
                    position: "top-center",
                    autoClose: 1000, // এক সেকেন্ডের মধ্যে বন্ধ হবে

                });
            }
        })
    }


    return (
        <section className="px-12 my-20 py-12">
            {/* <h2 className="text-[22px] text-[#000000] font-extrabold mb-14">My History</h2> */}
            <div className="flex items-center justify-between gap-4 font_cinzel mb-14">
                <h2 className="text-[#151515] text-[21px] font-[700]">Total Payments:  {payments.length} </h2>
            </div>



            <div className="w-full mb-8 overflow-x-scroll lg:overflow-x-hidden rounded-[5px] shadow-xl">
                <div className="w-full ">
                    <table className="w-full">
                        <thead>
                            <tr className="text-[15px] font-semibold tracking-wide text-left text-[#111] uppercase rounded-t-md bg-[#E6E6E6] px-12 py-12 mb-10 font_Inter">
                                <th></th>
                                <th className="px-4 py-3">Email</th>
                                <th className="px-4 py-3">Date</th>
                                <th className="px-4 py-3">Price</th>
                                <th className="px-4 py-3">TransactionID</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">

                        {
                            payments.map((payment, index) =>

                            <tr key={payment._id} className="text-gray-700 border-b last:border-none">
                                <th className="px-4 py-3 ">{index + 1}</th>
                                <td className="px-4 py-3 ">
                                    <div>
                                        <p className="font-semibold text-black">{payment.email}</p>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold ">{payment.date}</td>
                                <td className="px-4 py-3 text-ms font-semibold">{payment.price}</td>
                                <td className="px-4 py-3 text-ms font-semibold ">{payment.transactionId}</td>
                                <td className="px-4 py-3 text-ms font-semibold text-green-500">{payment.status}</td>
                                <td className="px-4 py-3 text-sm flex items-center gap-2">
                                    
                                    <button onClick={() => handleDeleteAppointment(payment)} className="text-white text-[14px] bg-[#B91C1C] p-3 rounded-[5px]">
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

export default MyHistory;