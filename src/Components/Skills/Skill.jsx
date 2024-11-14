import React from 'react'
import Titile from '../Title/Titile'
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { AiOutlineJavaScript } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { BiLogoPhp } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa6";
import { FaSass } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { DiBootstrap } from "react-icons/di";
import { TbBrandRedux } from "react-icons/tb";
const Skill = () => {

  const icons = [
    {
      id: 1,
      icon: <TiHtml5 />,
      name: 'HTML'
    }, {
      id: 2,
      icon: <IoLogoCss3 />,
      name: 'CSS'
    },
    {
      id: 3,
      icon: <AiOutlineJavaScript />,
      name: "Javascript"
    },
    {
      id: 4,
      icon: <RiTailwindCssFill />,
      name: 'Tailwind',
    },
    {
      id: 5,
      icon: <FaFigma />,
      name: 'Figma'

    },
    {
      id: 6,
      icon: <TbBrandRedux />,
      name: 'Redux'
    },
    {
      id: 7,
      icon: <FaReact />,
      name: 'React'

    },
    {
      id: 8,
      icon: <DiBootstrap />,
      name: 'Bootstrap'

    }, {
      id: 9,
      icon: <FaGithub />,
      name: 'Github'

    }, {
      id: 10,
      icon: <BiLogoPhp />,
      name: 'PHP'
    }, {
      id: 11,
      icon: <FaLaravel />,
      name: 'Laravel'
    }, {
      id: 12,
      icon: <FaSass />,
      name: 'Sass'
    },

  ]
  return (
    <div >
      <div className='container pt-16 mx-auto w-full px-4' id='skills'>
        <div className='flex flex-col items-center justify-center'>
          <Titile text="My Skills" />
          <div className="my-4">
            <p className='text-[20px] text-center font-normal font-Preahvihear text-white'>Skills & Technologies I Leverage to Deliver High-Quality, Scalable Solutions</p>
          </div>
        </div>
        <div className='flex flex-wrap w-full items-center justify-center' style={{ columnGap: '20px' }}>
          {
            icons.map(icon => {
              return (
                <div className=" flex flex-col  items-center justify-center h-[100px] w-[100px] my-6 rounded-lg hover:scale-105 transform linear duration-300 cursor-pointer" style={{ background: 'radial-gradient(circle, rgba(50,15,133,1) 0%, rgba(17,7,31,1) 100%)' }}>
                  <span className='text-3xl text-white text:hover:text-lightPurple hover:scale-75 transition-all linear duration-300'>
                    {icon.icon}
                  </span>
                  <p className='text-slate-300 font-Preahvihear font-medium '>{icon.name}</p>
                </div>
              )
            })
          }

        </div>
        <p className='text-center font-normal text-slate-300 text-lg font-Preahvihear my-3 text-[18px]'>Looking ahead, I am eager to expand my skill set by mastering Next.js, with a particular focus on building high-performance, scalable web applications. I am enthusiastic about applying my knowledge to real-world projects and collaborating with teams to deliver cutting-edge solutions. My goal is to continuously improve as a web developer, stay up-to-date with emerging technologies, and contribute to impactful, professional projects.</p>
      </div>

    </div>

  )
}

export default Skill
