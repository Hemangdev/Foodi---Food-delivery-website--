import React, { useState } from 'react'
import photo1 from '../Assests/no-data.png'

const Offer = () => {
   const [offers,setOffers] = useState(false)
   return (
      <>
         <div className='max-w-[1240px] h-screen mx-auto p-4'>

            
            <div className='w-full h-full md:max-w-[1240px] md:h-full'>

               <img className='' src={photo1} alt="" />
            {offers ? offers : <h1 className=' text-[#555555] text-2xl py-2 mt-3'><span className='text-[#39bd4a] font-bold'>OPPS!</span> No Offers Found...</h1>}
            </div>

         </div>
      </>
   )
}

export default Offer