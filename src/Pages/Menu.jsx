import React, { useState, useContext } from 'react' 
import { data } from '../Data/menuData' 
import Products from '../Components/Products'

const Menu = () => {
  const [menu, setMenu] = useState(data)
  const [originalMenu] = useState(data)
  

  //Function for filtering the array
  const filterData = (cat) => {
    if (cat === 'all') {
      setMenu(originalMenu)
    } else {
      setMenu(originalMenu.filter((item) => item.category === cat))
    }
  }

  return (
    <>
      <div className='max-w-[1240px] mx-auto p-4 h-full my-12'>
        <h1 className='text-3xl font-bold md:text-5xl my-3'>Standout Dishes</h1>
        <h1 className='text-3xl font-bold md:text-5xl my-3'><span className='text-[#39bd4a]'>F</span>rom Our <span className='text-[#39bd4a]'>Menu</span></h1>
        <h1 className='text-1xl uppercase font-bold md:text-2xl text-center my-3 text-[#FF6868]'>Customers Favourites</h1>
        <div className='max-w=[300px] md:flex flex-row md:justify-evenly '>
          <button onClick={() => filterData('Starters')} className='bg-white text-black ml-2 mt-1 rounded-md px-2 py-1 text-sm md:px-3 md:py-3 md:text-lg shadow-lg hover:bg-[#39bd4a] duration-300 hover:text-white'>Starters</button>
          <button onClick={() => filterData('Fast Food')} className='bg-white text-black ml-2 mt-1 rounded-md px-2 py-1 text-sm md:px-3 md:py-3 md:text-lg shadow-lg hover:bg-[#39bd4a] duration-300 hover:text-white'>Fast Food</button>
          <button onClick={() => filterData('Main corse')} className='bg-white text-black ml-2 mt-1 rounded-md px-2 py-1 text-sm md:px-3 md:py-3 md:text-lg shadow-lg hover:bg-[#39bd4a] duration-300 hover:text-white'>Main course</button>
          <button onClick={() => filterData('Deserts')} className='bg-white text-black ml-2 mt-1 rounded-md px-2 py-1 text-sm md:px-3 md:py-3 md:text-lg shadow-lg hover:bg-[#39bd4a] duration-300 hover:text-white'>Deserts</button>
          <button onClick={() => filterData('Mocktails')} className='bg-white text-black ml-2 mt-1 rounded-md px-2 py-1 text-sm md:px-3 md:py-3 md:text-lg shadow-lg hover:bg-[#39bd4a] duration-300 hover:text-white'>Mocktails</button>
          <button onClick={() => filterData('all')} className='bg-white text-black ml-2 mt-1 rounded-md px-2 py-1 text-sm md:px-3 md:py-3 md:text-lg shadow-lg hover:bg-[#39bd4a] duration-300 hover:text-white'>All Items</button>

        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
          {menu.map((item, id) => {
            return <Products
            name={item.name}
            price={item.price}
            image={item.image}
            id={item.id}
            />
          })}
        </div>

      </div> 
    </>
  )
}

export default Menu