import React from 'react'
import { useAnimation } from '../Animation'

const Titile = ({text}) => {
const {animation}= useAnimation();
  return (
    <div>
            <h1 className={`text-3xl  text-center text-white font-medium font-Preahvihear border-b border-lightPurple ${animation ? 'slide-in' : ''} `}>{text}</h1>
    </div>
  )
}

export default Titile
