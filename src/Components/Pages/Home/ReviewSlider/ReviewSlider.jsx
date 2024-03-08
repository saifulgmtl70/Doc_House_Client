import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation } from 'swiper';
import { Autoplay, Navigation, } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import FontAwesome Icons
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft} from "react-icons/fa6";

// Use Swiper navigation
// SwiperCore.use([Navigation]);


const ReviewSlider = () => {

    
    return (
        <section className="px-20 lg:px-16 py-10">

            <div className="text-center mb-8"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            >
                <h2 className="text-[38px] text-[#0A0808] font-[700]">What Our Patients Says</h2>
                <p className="text-[16px] text-[#3B3A3A] px-0 lg:px-14 font-[400]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>

            
            <div  className=''>
                <Swiper 
                    spaceBetween={50}
                    className='relative'
                    slidesPerView={1}
                    modules={[Navigation,Autoplay]}
                    navigation={{
                    nextEl: ".button-next-slide",
                    prevEl: ".button-prev-slide"
                    }}
                // pagination={{ clickable: true }}
                    >


                    <SwiperSlide
                   
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
                            <div className='px-5 py-6 border rounded-[5px] w-full lg:w-[555px] h-auto lg:h-[292px] my-auto space-y-3'>
                                <div className='flex items-center justify-between'>
                                    <div className="flex items-center gap-5  my-3">
                                        <div>
                                            <img src="https://i.ibb.co/zQBb3hQ/patient-1.png" className='w-[60px] h-[60px] rounded-full' alt="" />
                                        </div>
                                        <div>
                                            <h4 className='text-[#3B3A3A] text-[20px] font-[700] leading-[25px]'>Awlad Hossain</h4>
                                            <p className='text-[#6C6B6B] text-[16px] font-[400]'>Product Designer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/WsXRfrn/qoute.png" alt="" />
                                    </div>
                                </div>

                                <p className='text-[18px] text-[#6C6B6B] font-[400] leading-[32px] px-8 lg:px-10 lg:py-5'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                            </div>


                            <div className='px-5 py-6 border hidden lg:block rounded-[3px] w-full lg:w-[555px] h-auto lg:h-[292px] space-y-3 my-auto'>

                                <div className='flex items-center justify-between'>
                                    <div className="flex items-center gap-5  my-3">
                                        <div>
                                            <img src="https://i.ibb.co/F7z3wf2/Patient-2.png" className='w-[60px] h-[60px] rounded-full' alt="" />
                                        </div>
                                        <div>
                                            <h4 className='text-[#3B3A3A] text-[20px] font-[700] leading-[25px]'>Farhana Hossain</h4>
                                            <p className='text-[#6C6B6B] text-[16px] font-[400]'>Brand Designer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/WsXRfrn/qoute.png" alt="" />
                                    </div>
                                </div>

                                <p className='text-[18px] text-[#6C6B6B] font-[400] leading-[32px] px-8 lg:px-10 lg:py-5'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                            </div>

                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">

                            <div className='px-5 py-6 border  rounded-[3px] w-full lg:w-[555px] h-auto lg:h-[292px] space-y-3 my-auto'>

                                <div className='flex items-center justify-between'>
                                    <div className="flex items-center gap-5  my-3">
                                        <div>
                                            <img src="https://i.ibb.co/F7z3wf2/Patient-2.png" className='w-[60px] h-[60px] rounded-full' alt="" />
                                        </div>
                                        <div>
                                            <h4 className='text-[#3B3A3A] text-[20px] font-[700] leading-[25px]'>Farhana Hossain</h4>
                                            <p className='text-[#6C6B6B] text-[16px] font-[400]'>Brand Designer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/WsXRfrn/qoute.png" alt="" />
                                    </div>
                                </div>

                                <p className='text-[18px] text-[#6C6B6B] font-[400] leading-[32px] px-8 lg:px-10 lg:py-5'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                            </div>

                            <div className='px-5 py-6 border hidden lg:block rounded-[5px] w-full lg:w-[555px] h-auto lg:h-[292px] my-auto space-y-3'>
                                <div className='flex items-center justify-between'>
                                    <div className="flex items-center gap-5  my-3">
                                        <div>
                                            <img src="https://i.ibb.co/zQBb3hQ/patient-1.png" className='w-[60px] h-[60px] rounded-full' alt="" />
                                        </div>
                                        <div>
                                            <h4 className='text-[#3B3A3A] text-[20px] font-[700] leading-[25px]'>Awlad Hossain</h4>
                                            <p className='text-[#6C6B6B] text-[16px] font-[400]'>Product Designer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/WsXRfrn/qoute.png" alt="" />
                                    </div>
                                </div>

                                <p className='text-[18px] text-[#6C6B6B] font-[400] leading-[32px] px-8 lg:px-10 lg:py-5'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
                            <div className='px-5 py-6 border rounded-[5px] w-full lg:w-[555px] h-auto lg:h-[292px] my-auto space-y-3'>
                                <div className='flex items-center justify-between'>
                                    <div className="flex items-center gap-5  my-3">
                                        <div>
                                            <img src="https://i.ibb.co/zQBb3hQ/patient-1.png" className='w-[60px] h-[60px] rounded-full' alt="" />
                                        </div>
                                        <div>
                                            <h4 className='text-[#3B3A3A] text-[20px] font-[700] leading-[25px]'>Awlad Hossain</h4>
                                            <p className='text-[#6C6B6B] text-[16px] font-[400]'>Product Designer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/WsXRfrn/qoute.png" alt="" />
                                    </div>
                                </div>

                                <p className='text-[18px] text-[#6C6B6B] font-[400] leading-[32px] px-8 lg:px-10 lg:py-5'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                            </div>


                            <div className='px-5 py-6 border hidden lg:block rounded-[3px] w-full lg:w-[555px] h-auto lg:h-[292px] space-y-3 my-auto'>

                                <div className='flex items-center justify-between'>
                                    <div className="flex items-center gap-5  my-3">
                                        <div>
                                            <img src="https://i.ibb.co/F7z3wf2/Patient-2.png" className='w-[60px] h-[60px] rounded-full' alt="" />
                                        </div>
                                        <div>
                                            <h4 className='text-[#3B3A3A] text-[20px] font-[700] leading-[25px]'>Farhana Hossain</h4>
                                            <p className='text-[#6C6B6B] text-[16px] font-[400]'>Brand Designer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/WsXRfrn/qoute.png" alt="" />
                                    </div>
                                </div>

                                <p className='text-[18px] text-[#6C6B6B] font-[400] leading-[32px] px-8 lg:px-10 lg:py-5'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">

                            <div className='px-5 py-6 border  rounded-[3px] w-full lg:w-[555px] h-auto lg:h-[292px] space-y-3 my-auto'>

                                <div className='flex items-center justify-between'>
                                    <div className="flex items-center gap-5  my-3">
                                        <div>
                                            <img src="https://i.ibb.co/F7z3wf2/Patient-2.png" className='w-[60px] h-[60px] rounded-full' alt="" />
                                        </div>
                                        <div>
                                            <h4 className='text-[#3B3A3A] text-[20px] font-[700] leading-[25px]'>Farha Hossain</h4>
                                            <p className='text-[#6C6B6B] text-[16px] font-[400]'>Brand Designer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/WsXRfrn/qoute.png" alt="" />
                                    </div>
                                </div>

                                <p className='text-[18px] text-[#6C6B6B] font-[400] leading-[32px] px-8 lg:px-10 lg:py-5'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                            </div>

                            <div className='px-5 py-6 border hidden lg:block rounded-[5px] w-full lg:w-[555px] h-auto lg:h-[292px] my-auto space-y-3'>
                                <div className='flex items-center justify-between'>
                                    <div className="flex items-center gap-5  my-3">
                                        <div>
                                            <img src="https://i.ibb.co/zQBb3hQ/patient-1.png" className='w-[60px] h-[60px] rounded-full' alt="" />
                                        </div>
                                        <div>
                                            <h4 className='text-[#3B3A3A] text-[20px] font-[700] leading-[25px]'>Awlad Hossain</h4>
                                            <p className='text-[#6C6B6B] text-[16px] font-[400]'>Product Designer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/WsXRfrn/qoute.png" alt="" />
                                    </div>
                                </div>

                                <p className='text-[18px] text-[#6C6B6B] font-[400] leading-[32px] px-8 lg:px-10 lg:py-5'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                            </div>

                        </div>
                    </SwiperSlide>



                    <div  className='button-prev-slide cursor-pointer absolute top-[50%] border border-[#F7A582] rounded-full -left-[35px] transform -translate-y-1/3  translate-x-2/3 z-10 w-[45px] h-[45px] text-2xl text-[#ff4301] bg-[#fff] hover:bg-[#F7A582] hover:text-[#fff] grid place-items-center'>
                        <FaChevronLeft  />
                    </div>

                    <div className='button-next-slide cursor-pointer absolute top-[50%] border border-[#F7A582] rounded-full right-0 transform -translate-y-5  -translate-x-2/3 z-10 w-[45px] h-[45px] text-2xl text-[#ff4301] bg-[#fff] hover:bg-[#F7A582] hover:text-[#fff] grid place-items-center'>
                        <FaChevronRight  />
                    </div>
                
                

                </Swiper>
            </div>

        </section>
    );
};

export default ReviewSlider;