
import './Banner.css';


const Banner = () => {
  return (
    <div className="banner_bg banner-container">
      <div className="banner-content flex flex-col lg:flex-row items-center justify-around gap-10 lg:gap-6">
        <div className='w-full text-center lg:text-start lg:w-6/12'
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        >
            <h1 className="text-[35px] lg:text-[60px] font-bold text-white lg:leading-[85px] mb-2">Your Best Medical Help Center</h1>
            <p className=" text-[15px] lg:text-lg font-[600] lg:leading-[33px] text-[#F3F3F3] mb-6"> Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.
            </p>
            <button className='px-[20px] py-3 rounded-[3px] bg-[#F7A582] hover:bg-[#e08964] tracking-wide hover:tracking-wider transition-all delay-100 text-[#FFFFFF] text-[19px]'>All Service</button>
        </div>

        <div className='w-full lg:w-6/12 flex flex-col lg:flex-row items-center lg:relative -mt-0 lg:-mt-14'
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        >
            <div>
                <img src="https://i.ibb.co/k27Sp0h/Rectangle-20077.png" alt="Banner Image" className="w-full lg:w-[300px] h-auto lg:h-[220px] max-w-screen-lg mx-auto rounded-lg shadow-lg"  />
            </div>

            <div className=' lg:absolute lg:mt-[260px] lg:ml-[100px]'>
                <img src="https://i.ibb.co/2qV7M9z/Rectangle-20076.png" alt="Banner Image" className="w-full lg:w-[300px] h-auto lg:h-[220px] max-w-screen-lg mx-auto rounded-lg shadow-lg"  />
            </div>

            <div className='lg:absolute  lg:ml-[300px]'>

                <img src="https://i.ibb.co/hcnKrbW/Rectangle-20075.png" alt="Banner Image" className="w-full lg:w-[300px] h-auto lg:h-[220px] max-w-screen-lg mx-auto rounded-lg shadow-lg"   />
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Banner;
