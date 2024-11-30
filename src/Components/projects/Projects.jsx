import React from 'react'
import Titile from '../Title/Titile'
import Showchase from './Showchase'



const Projects = () => {
  const Projects = [
    '/Project-1.png',
    '/Project-2.png',
    '/Project-3.png'
  ]
  return (
    <div id='projects'>
      <div className='container py-16 mx-auto w-full px-4' style={{ width: '--webkit-fill-available' }}>
        <div className="flex flex-col items-center justify-center ">
          <Titile text='My Projects' />
          <div className='flex flex-col md:gap-8 gap-8 mt-10'>
            <div className="flex md:flex-row flex-col ">
              <Showchase imageLeft
                Title='Laravel Project'
                detail='I developed a full-stack e-commerce website that showcases both front-end and back-end skills. The project features user authentication, allowing customers to securely log in, manage profiles, and make purchases. Users can easily browse products, add them to the cart, and complete transactions through an integrated payment system. On the back-end, I implemented functionality for adding, updating, and deleting products, along with admin privileges for managing the catalog. For the front-end, I used Tailwind CSS to create a sleek, responsive design that adapts seamlessly to any device.'
                image={Projects[0]}
                link = "https://ecommerce.saradevsolutions.com/"

              />
            </div>

            <div className="flex flex-row-reverse">
              <Showchase imageLeft={false}
                Title='React Dashboard'
                detail='I developed a responsive, data-driven dashboard using React, Formik, and Tailwind CSS to create a streamlined user experience. The dashboard features intuitive data management and visualization tools, with form handling seamlessly powered by Formik for smooth validation and submission. By leveraging Tailwind CSS, I ensured a sleek, fully responsive design that adapts flawlessly to all screen sizes.'
                image={Projects[1]}
                link = "https://data-vista-theta.vercel.app/"
              />
            </div>


            <div className="flex flex-row">
              <Showchase imageLeft

                Title='API Integration'
                detail='This project is a JavaScript-based web application that pulls data from a food API to display a variety of recipes and food-related information. By making real-time API calls, the app provides users with access to a rich selection of meals, ingredients, and cooking instructions. The interface is designed for easy navigation, allowing users to explore food options and discover new recipes.'
                image={Projects[2]}
                link = 'https://culinary-api.vercel.app/'
              />
            </div>
          </div>
          <div className=" flex-col flex justify-center items-center mt-5">
            <p className='text-center font-medium font-Preahvihear text-slate-300 '>As a passionate web developer, I’m constantly refining my skills and embracing new technologies to stay at the forefront of the ever-evolving web development landscape. These projects represent just a snapshot of what I’ve accomplished so far, but I’m actively practicing and exploring even more cutting-edge tools, frameworks, and best practices. My goal is to deliver even more dynamic, responsive, and user-centric web experiences, while continuously growing and adapting to the latest industry trends. The journey doesn’t stop here – I’m excited to push the boundaries of what’s possible and take on new challenges in the world of web development.</p>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Projects
