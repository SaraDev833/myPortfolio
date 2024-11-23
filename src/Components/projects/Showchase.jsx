import React from 'react'
import './Showcase.css';
import { MdOutlinePreview } from "react-icons/md";

const Showchase = ({ imageLeft, Title, image, detail }) => {
    return (
        <div className={`flex ${imageLeft ? 'md:flex-row flex-col ' : 'md:flex-row-reverse flex-col'} items-center`} style={{ width: '100%' }}>

            <div className="image_container ">
                <div className="box">
                    <img src={image} alt="Project Image" />
                    <div className="overlay flex items-center justify-center">
                        <button className="flex items-center justify-center gap-2 py-2 px-3 bg-lightPurple text-white rounded-md opacity-100 z-50">
                            <MdOutlinePreview className="text-[20px] text-white font-medium" />
                            <span className="text-[20px] font-medium font-Preahvihear text-white">Live</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Project Details */}
            <div className={`${imageLeft ? '-ml-2' : '-mr-2'} md:mt-16 mt-2`}>
                <div
                    style={{ height: 'auto' }}
                    className="detail flex flex-col lg:gap-3  gap-2 lg:p-6 p-3 rounded-lg backdrop-blur-lg  sm:w-[400px] md:w-[400px] lg:w-[400px]  md:bg-purple-200/20 drop-shadow-lg bg-indigo-500/20"
                >
                    <h2 className="text-white text-[14px]">{Title}</h2>
                    <p className="text-slate-200 text-[12px]">
                        {detail}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Showchase
