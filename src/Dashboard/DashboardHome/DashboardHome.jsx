import { CiUser } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";
import useAuth from "../../Components/Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import Chart from 'react-apexcharts';


const DashboardHome = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    const chartOptions = {
        chart: {
            type: 'bar'
        },
        xaxis: {
            categories: ['Doctors', 'Patients', 'Appointments']
        },
        colors: ['#FF0034', '#7BB13C', '#FFBC34']
    };

    const pieOptions = {
        labels: ['Doctors', 'Patients', 'Appointments'],
        colors: ['#FF0034', '#7BB13C', '#FFBC34']
    };


    return (
        <div className="px-12 my-20 py-12">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mb-10">

                <div className=" bg-[#FFFFFF] p-6 rounded-[3px]">
                    <div className="flex items-center gap-3 pb-5 border-b-2 border-[#FF0034]">
                        <div className="bg-[#FFE6EB] p-4 rounded-md">
                            <CiUser className="text-[#FF0034] text-[23px]"/>
                        </div>
                        <div className="">
                            <h2 className="text-[23px] text-[#6C6B6B] font-extrabold">{stats.doctors}</h2>
                        </div>
                        
                    </div>
                    <p className="text-[17px] my-2 text-[#3B3A3A] font-bold">Doctor</p>
                </div>


                <div className=" bg-[#FFFFFF] p-6 rounded-[3px]">
                    <div className="flex items-center gap-3 pb-5 border-b-2 border-[#7BB13C]">
                        <div className="bg-[#F2F7EB] p-4 rounded-md">
                            <FaUserFriends className="text-[#7BB13C] text-[23px]"/>
                        </div>
                        <div className="">
                            <h2 className="text-[23px] text-[#6C6B6B] font-extrabold">{stats.patients}</h2>
                        </div>
                        
                    </div>
                    <p className="text-[17px] my-2 text-[#3B3A3A] font-bold">Patients</p>
                </div>

                <div className=" bg-[#FFFFFF] p-6 rounded-[3px]">
                    <div className="flex items-center gap-3 pb-5 border-b-2 border-[#FFBC34]">
                        <div className="bg-[#FFF8EB] p-4 rounded-md">
                            <FaFileContract className="text-[#FFBC34] text-[23px]"/>
                        </div>
                        <div className="">
                            <h2 className="text-[23px] text-[#6C6B6B] font-extrabold">{stats.appointments}</h2>
                        </div>
                        
                    </div>
                    <p className="text-[17px] my-2 text-[#3B3A3A] font-bold">Appointment</p>
                </div>

                
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                <div className=" bg-[#FFFFFF] p-6 rounded-[3px]">
                    <Chart options={chartOptions} series={[{ data: [stats.doctors, stats.patients, stats.appointments] }]} type="bar" />
                    <p className="text-[17px] my-2 text-[#3B3A3A] font-bold">Bar Chart</p>
                </div>
                <div className=" bg-[#FFFFFF] p-6 rounded-[3px]">
                    <Chart options={pieOptions} series={[stats.doctors, stats.patients, stats.appointments]} type="pie" />
                    <p className="text-[17px] my-2 text-[#3B3A3A] font-bold">Pie Chart</p>
                </div>
            </div>

        </div>
    );
};

export default DashboardHome;