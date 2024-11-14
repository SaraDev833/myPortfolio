// import '../../index.css';
import { PiDownloadSimpleFill } from "react-icons/pi"
import "./banner.css"

const Banner = ({ animation }) => {

    return (
        <div className="max-w-full">
  <div style={{backgroundImage : 'url(/sara.jpg)' , backgroundRepeat:' no-repeat' , backgroundPosition: 'bottom' , objectFit:'cover'}} className=" w-full">
            <div className=" w-full pt-[80px]  pb-[100px] bg-darkNavy/60  m-0 ">

                <div className="w-full">
                    <div className="flex flex-col gap-3 items-center justify-center md:pt-12 lg:pt-0 four">
                        <div className="type">
                            <h2 className="text-[28px] font-medium font-Preahvihear text-center text-white typing"> <span className="text-lightPurple font-medium text-[28px] font-Preahvihear">Hello</span>  , I am Sara</h2>
                            <p className="font-Preahvihear font-normal text-[17px] text-slate-400  text-center">A Web Developer who will</p>
                            <h3 className="text-white font-normal font-Preahvihear text-[40px] leading-snug text-center ">
                                Transform your ideas into <br />
                                <span
                                    className={`text-[30px] font-normal font-Preahvihear   text-lightPurple border border-white rounded-[50%] p-[2px] transition-all duration-700 ease-in-out ${animation ? "opacity-100 translate-x-12 translate-y-4 p-[2px] transform rotate-45 duration-300" : "opacity-0 translate-x-10 transform"
                                        }`}
                                >
                                    stunning
                                </span> {" "}
                                websites
                            </h3>
                            <div className="w-full flex items-center justify-center  mt-5 ">
                                <button className="flex items-center justify-center cursor-pointer text-center px-4 py-2 bg-lightPurple text-white hover:bg-purple rounded-full gap-2 font-medium text-[14px] font-Preahvihear hover:text-slate-400 ">
                                    <PiDownloadSimpleFill />
                                    Download CV
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
                {/* <div className="relative md:w-[40%]">
                    <img src="/ex-1.png" className="w-full" alt="" />
                    <img src="/Vector.png" className="absolute top-6 md:right-[-50px] right-[100px]" alt="" />
                    <h2 className=" absolute top-[-30px] lg:top-[-6px] text-white lg:right-[-80%] md:right-[-100%] sm:right-[60%] right-[50%] font0medium font-Preahvihear text-[20px]"> Hello! i am a <span className="font-medium font-Preahvihear text-lightPurple text-[19px]">web developer</span></h2>
                </div> */}

            </div>

        </div>
        </div>
      

    );
};

export default Banner;