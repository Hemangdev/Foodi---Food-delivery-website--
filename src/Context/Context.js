import { createContext, useContext, useState } from "react";
import { data } from '../Data/menuData'


export const ShopContext = createContext()

const getAllCartItems = () => {
    let cart = {}
    for (let i = 1; i < data.length + 1; i++) {
        cart[i] = 0;
    }
    return cart
}

export function ShopContextProvider({ children }) {
    const [cartItems, setCartItems] = useState(getAllCartItems())

    //Logic for getting the total amount in the cart
    const totalCartAmount = () => {
        let totalAmt = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfor = data.find((pro) => pro.price === parseInt(item))
                totalAmt += cartItems[item] * itemInfor.price;
            }
        }
        return totalAmt;
    }
    
    // Calculate total cart amount
    for(const key in Object.keys(cartItems)){
        console.log(`${key} = ${cartItems[key]}`);
    }


    //Logic for adding to cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    //Logic for removing to cart
    const removeToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const allContextValue = { cartItems, addToCart, removeToCart, totalCartAmount }
    // console.log(cartItems);
    return <ShopContext.Provider value={allContextValue}>{children}</ShopContext.Provider>
}

// export function useShop() {
//      return(
//         useContext(ShopContext)
//      )
// }