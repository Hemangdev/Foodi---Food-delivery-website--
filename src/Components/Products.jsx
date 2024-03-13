import React, { useContext } from 'react'
import { ShopContext } from '../Context/Context';

const Products = ({id,name,price,image}) => {

    const { addToCart , cartItems } = useContext(ShopContext)

    const cartItemAmt = cartItems[id]

    return (
        <div key={id} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
            <img src={image} alt={name} className='w-full h-[200px] object-cover rounded-t-lg' />
            <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{name}</p>
                <p><span className='text-white p-2 rounded-xl bg-[#39bd4a]'>{price}</span></p>
            </div>
            <div className='flex justify-center items-center'>
                <button onClick={() => addToCart(id)} className='flex text-black border bg-white px-2 py-2 rounded-xl my-2 shadow-md hover:bg-[#39bd4a] hover:text-white'>Add to Cart {cartItemAmt > 0 && <p className=' ml-2 text-gray-500 font-semibold '>({cartItemAmt})</p>}</button>
            </div>
        </div>
    )
}

export default Products