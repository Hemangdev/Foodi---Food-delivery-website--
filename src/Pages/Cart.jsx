import React, { useContext } from 'react'
import { data } from '../Data/menuData'
import { ShopContext } from '../Context/Context'
import CartProduct from '../Components/CartProduct'

const Cart = () => {
    const { cartItems, totalCartAmount } = useContext(ShopContext)


    const totalAmount = totalCartAmount()
    console.log(totalAmount);

    const total = Object.values(cartItems).reduce((acc, qty) => acc + qty, 0)

    const isEmpty = Object.keys(cartItems).length === 0;

    return (

        <>
            <div className='max-w-[1240px] mx-auto h-screen p-4'>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                    {data.map((item) => {
                        if (cartItems[item.id] !== 0) {
                            return <CartProduct
                                name={item.name}
                                image={item.image}
                                price={item.price}
                                id={item.id}
                            />
                        }
                    })}
                </div>
                {isEmpty ? 'no item' : <div className='relative'>
                    <h1 className='text-2xl font-bold text-gray-700 mt-3 text-center md:text-4xl lg:5xl'>Total  Items  in Cart : {total}  <span className='text-[#39bd4a]'>Items</span></h1>
                    <h1 className='text-2xl font-bold text-gray-700 mt-3 text-center md:text-4xl lg:5xl'><span className='text-[#39bd4a]'>Total</span> Amount Rs : {totalAmount ? totalAmount : 'Not Defined'}</h1>
                </div>}
            </div>
        </>
    )
}

export default Cart