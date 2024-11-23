import React from 'react'
import Titile from '../Title/Titile'

const About = ({ animation }) => {
  return (
    <div className='container pt-[80px] about flex flex-col items-center justify-center gap-4 px-4' id='about'>
      <Titile text="About me" />
      <p className='sm:text-[18px] font-medium text-center font-Preahvihear mt-4 text-slate-300'>
        Hi, I'm  <span className='text-lightPurple text-[22px]'>Sara</span> , a full-stack web developer with a passion for building dynamic, user-centric websites. I specialize in crafting seamless front-end experiences with HTML, CSS, JavaScript, React, and Tailwind CSS, while also bringing functionality to life with back-end technologies like Laravel. With a focus on clean, responsive design and efficient, scalable code, I create websites that not only look great but work flawlessly. Whether it’s building interactive user interfaces or handling server-side logic, I’m dedicated to delivering high-performance digital solutions. Let’s bring your ideas to life!
      </p>
    </div>
  )
}

export default About
