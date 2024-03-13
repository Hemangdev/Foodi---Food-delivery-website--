import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Service from './Pages/Service';
import Offer from './Pages/Offer';
import Cart from './Pages/Cart';
import { ShopContextProvider } from './Context/Context';
import Contact from './Pages/Contact';


const App = () => {
  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/service' element={<Service />} />
            <Route path='/offers' element={<Offer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/contact' element ={<Contact />} />
          </Routes>
        </BrowserRouter> 
      </ShopContextProvider>


    </>
  )
}

export default App;