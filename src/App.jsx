import './App.css'
import About from './Components/About/About'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import { useState, useEffect } from "react";
import Skill from './Components/Skills/Skill';
import Titile from './Components/Title/Titile';
import { useAnimation } from './Components/Animation';
import Projects from './Components/projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  const { animation } = useAnimation();
  return (
    <div className='w-fit sm:w-full custom-width'>
      <Navbar />
      <Banner animation={animation} />
      <About animation={animation} />
      <Skill />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
