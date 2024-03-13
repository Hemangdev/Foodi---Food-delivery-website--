import React from 'react'

import heroImage from '../../Assests/Intersect.png';
import icon from '../../Assests/Polygon 1.png'
const Hero = () => {
  return (
    <>
      <div className='max-w-[1240px] h-full p-4 mx-auto '>
        <div className='flex w-full'>
          <div className='py-12 mt-12 '>
            <h1 className=' text-3xl font-bold md:text-5xl sm:text-4xl '>Dive into Delights</h1>
            <h1 className=' text-3xl font-bold md:text-5xl sm:text-4xl'>Of Delectable <span className='text-[#39bd4a]'>Food</span></h1>
            <p className=' text-gray-600 mt-2 text-xs md:text-xl sm:text-1xl'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
            <div className=' w-full flex'>
              <button className='bg-[#4ae960] text-white text-sm cursor-pointer rounded-full px-2 py-2 mt-2 md:px-4 md:py-4 md:font-semibold md:text-xl shadow-md'>Order Now</button>
              <button className='bg-white text-gray-500  text-sm  cursor-pointer rounded-full px-2 py-2 mt-2 ml-2 md:px-4 md:py-4 md:font-semibold md:text-xl shadow-lg'>Watch Video</button>
              <button className=' rounded-full flex items-center justify-center bg-white px-3 py-2 mt-2 ml-3 md:px-4 md:py-4 md:font-bold md:text-xl shadow-lg'><i class="fa-solid fa-play"></i></button>
            </div>
            {/* Boxes */}
          </div>
          <div className='w-[500px] hidden md:block'>
            <span className=' before:bg-[#4ae960] before:w-[400px] before:block before:absolute before:h-[400px] before:bottom-[41px] before:right-[29px] before:rounded-full relative inline-block md:before:hidden lg:before:block'> 
              <img className='hidden md:block relative' src={heroImage} alt="" />
            </span>
          </div>
        </div>

      </div>
    </>
  )
}

export default Hero