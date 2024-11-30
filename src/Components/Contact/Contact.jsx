import React from 'react'
import Titile from '../Title/Titile'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
const Contact = () => {
    return (
        <div className='w-full' id='contact'>
            <div className='container py-16 mx-auto w-full px-4'>
                <div className="flex flex-col items-center justify-center">
                    <Titile text='Contact me' />
                    <div className="text-center mt-4">
                        <p className='font-medium  text-[18px] font-Preahvihear text-slate-300'>Whether you have a project in mind, need help with a development challenge, or just want to chat about tech, I’d love to hear from you! I’m always excited to connect with like-minded individuals and explore new opportunities. Reach out, and let’s bring your ideas to life!</p>
                    </div>
                    <div className="flex items-center justify-center mt-6 gap-4">
                        <a href="https://github.com/SaraDev833" target="_blank" rel="noreferrer" className="bg-slate-300 text-slate-800 font-medium py-2 px-4 rounded-lg hover:bg-slate-400 hover:scale-110 transition duration-300 ease-in-out"><IoLogoGithub /></a>
                        <a href="https://www.linkedin.com/in/sheak-sara/" target='_blank' className="bg-slate-300 text-slate-800 font-medium py-2 px-4 rounded-lg hover:bg-slate-400 transition duration-300 ease-in-out hover:scale-110"><FaLinkedin /></a>
                        <a href="mailto:sksara706@gmail.com?subject=Contact%20from%20Portfolio&body=Hello,%20I%20would%20like%20to%20get%20in%20touch." className="bg-slate-300 text-slate-800 font-medium py-2 px-4 rounded-lg hover:bg-slate-400 hover:scale-110 transition duration-300 ease-in-out"><CgMail /></a>
                    </div>
                    <div className="final flex-col flex justify-center items-center mt-3">
                        <p className='text-center font-medium font-Preahvihear text-slate-300'>Feel free to drop me a message anytime—I’m just a click away! You can reach me at <a href="mailto:sksara706@gmail.com" className='text-violet-500' style={{ textDecoration: 'none' }}>sksara706@gmail.com</a></p>
                        <span className='text-center font-medium font-Preahvihear text-slate-300 '>Looking forward to hearing from you and discussing how we can create something great together.</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact
