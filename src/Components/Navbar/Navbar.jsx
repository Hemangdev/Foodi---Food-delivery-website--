import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/Context'
import { data } from '../../Data/menuData'

const Navbar = () => {
  const [navOpen, setOpenNav] = useState(false)
  const {cartItems} = useContext(ShopContext)
  const menuList = data;
  const[id] = menuList
 
  const cartTopCount = cartItems[id]
  // console.log(cartTopCount);

  return (
    <div className='max-w-[1240px] flex  justify-between items-center p-4 mx-auto '>
      <div className=' flex  items-center '>
        <div>
          <h1 className=' sm:text-2xl md:text-3xl lg:text-4xl cursor-pointer mx-2' onClick={() => setOpenNav(!navOpen)}><i className="fa-solid fa-bars text-[#39bd4a]"></i></h1>
        </div>
        <Link to='/' >
          <h1 className=' sm:text-2xl md:text-3xl lg:text-4xl mx-3'>
            <span className=' font-bold text-[#39DB4A]'>F</span>OODi
          </h1>
        </Link>

        <div className=' hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] mx-2'>
          <p className=' bg-[#39db4a] text-white  rounded-full p-2'>Dine-In</p>
          <p className=' p-2'>Takeaway</p>
        </div>
      </div>
      <div className='flex items-center gap-1 lg:p-1 px-2  w-[300px] sm:w-[400px]  lg:w-[500px] md:px-2 '>
         <p className='text-gray-600 font-semibold ml-1 hidden md:block md:mx-2 hover:text-[#39bd4a] cursor-pointer'><i class="fa-solid fa-envelope-open"></i>example@gmail.com</p>
         {/* <p className='text-gray-600 font-semibold ml-1'> <i class="fa-solid fa-phone-volume text-gray-600 hidden md:block md:mx-2"></i>+123456789</p> */}
         <p className='text-gray-600 font-semibold ml-1 hover:text-[#39bd4a] cursor-pointer'><i class="fa-solid fa-location-dot"></i>New York</p>
      </div>
      <Link to='/cart'> 
      <button className=' bg-[#4ae960] text-white hidden md:flex items-center p-3 rounded-full relative'>
        {/* <div className='w-[25px] h-[25px] absolute top-0 left-[3.9rem] bg-red-600 rounded-full'>{cartTopCount ? cartTopCount : '0'}</div> */}
        <i className="fa-solid fa-cart-arrow-down mr-2"></i>
        Cart
      </button>
      </Link>
     <Link to='/contact'>
     <button className='bg-[#4ae960]  text-white hidden md:flex md:ml-2 items-center p-3 rounded-full'>
        <i class="fa-solid fa-phone-volume text-white  mr-2"></i>
        Contact</button>
     </Link>
      {/* Mobile Menu */}
      {/* Overlay toggle effect when button is clicked */}
      {navOpen ? <div className=' bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

      {/* Side drawer */}
      <div className={navOpen ? ' fixed top-0 left-0 w-[300px] h-screen z-10 duration-300 bg-white' : ' fixed top-0 left-[-100%] w-[300px] h-screen z-10 duration-300 bg-white'}>
        <button onClick={() => setOpenNav(!navOpen)} className=' absolute top-4 right-4 cursor-pointer'><i class="fa-solid fa-x"></i></button>
        <Link to='/'> 
          <h1 className=' text-2xl p-3'> <span className=' font-bold text-[#39bd4a]'>F</span>OODi</h1>
        </Link>
        <nav>
          <ul className=' flex flex-col p-4 text-gray-800 cursor-pointer'>
            {/* <Link to='/menu'>
              <li className=' text-xl mr-2 flex py-4 items-center '><i class="fa-solid fa-bars text-[#39db4a] font-bold mr-2"></i> Menu</li>
            </Link> */}
            <Link to='/contact'>
              <li className=' text-xl mr-2 flex py-4 items-center'><i class="fa-solid fa-bell-concierge text-[#39db4a] font-bold mr-2"></i>Contact</li>
            </Link>
            <Link to='/offers'>
              <li className=' text-xl mr-2 flex py-4 items-center'><i class="fa-solid fa-envelope text-[#39db4a] font-bold mr-2"></i>Offers</li>
            </Link> 
            <Link to='/cart' >
            <li className=' text-xl mr-2 flex py-4 items-center'> <i class="fa-solid fa-cart-arrow-down text-[#39bd4a] mr-2  "> </i>Cart</li>
            
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar