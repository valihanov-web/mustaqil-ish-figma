import React from 'react'
import Shop from './components/Productdetailpage/Shop/Shop'
import Reviews from './components/Productdetailpage/Rewiev/Rewiev'
import Might from './components/Productdetailpage/Might/Might'
import Footer from './components/Footer/Footer'
import Category from './components/Categorypage/Category/Category'
import Cart from './components/cart/Cart'

const App = () => {
  return (
    <div>
      <Shop/>
      <Reviews/>
      <Might/>
      <Footer/>
      <Category/>
      <Cart/>
    </div>
  )
}

export default App
