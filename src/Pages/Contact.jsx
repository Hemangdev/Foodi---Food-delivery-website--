import React, { useState } from 'react'
import photo1 from '../Assests/contact.png'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    
    const redirect =  useNavigate()
    const showAlert = () => {
        alert('This Feature enables on Live Website!')
    }
    const redirectToShop = () => {
     redirect('/')
    }
         

    return (
         <div className='max-w-[1240px] mx-auto p-4 h-full'>
            <div className='w-full h-full md:max-w-[1240px] md:h-screen mt-4'>
                <img className='w-[500px] h-[400px] md:w-[700px] md:h-[500px]' src={photo1} alt="" />
                <div className='flex justify-center items-center mt-4 mx-2 p-3'>
                    <button onClick={() => showAlert()} className='px-2 py-2 text-white bg-[#39bd4a] font-semibold shadow-lg rounded-md mx-4'>Contact Team</button>
                    <button onClick={() => redirectToShop()} className='px-2 py-2 text-[#555555] font-semibold shadow-lg rounded-md  '>Continue Shopping</button> 
                </div>
            </div>
         </div>
    )
}

export default Contact