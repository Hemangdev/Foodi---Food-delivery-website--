import React, { useContext } from 'react'
import { ShopContext } from '../Context/Context';

const CartProduct = ({ id, name, image, price }) => {
    const { removeToCart ,cartItems,addToCart } = useContext(ShopContext)
    const cartCount = cartItems[id]
    return (
        <>
                <div key={id} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img src={image} alt={name} className='w-full h-[200px] object-cover rounded-t-lg' />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{name}</p>
                        <p><span className='text-white p-2 rounded-xl bg-[#39bd4a]'>{price}</span></p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button onClick={() => removeToCart(id)} className='flex text-black border bg-white px-2 py-2 rounded-xl my-2 shadow-md hover:bg-[#39bd4a] hover:text-white'>Remove </button>
                        <button onClick={() => addToCart(id)} className='flex text-black border bg-white px-2 py-2 rounded-xl my-2 mx-2 shadow-md hover:bg-[#39bd4a] hover:text-white'>Add More</button>
                         
                    </div>
                    <div className='flex items-center justify-between px-2 my-3'>
                        {/* <button className='px-4 py-2 rounded-full bg-[#39bd4a] text-white font-bold' onClick={() => addToCart(id) }><i class="fa-solid fa-plus"></i></button> */}
                        <input type="text" className='' value={cartItems[id]} />
                        {/* <button className='px-4 py-2 rounded-full bg-[#39bd4a] text-white font-bold' onClick={() => removeToCart(id)}><i class="fa-solid fa-minus"></i></button> */}
                    </div>
                </div>
                {/* <div>
                    <p>Your Subtotal : </p>
                    <div className='flex justify-center items-center'>
                        <button>Continue Shopping</button>
                        <button>Proceed to Checkout</button>
                    </div>
                </div> */}
           
        </>
    )
}

export default CartProduct