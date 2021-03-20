import React from 'react'
import Banner from './Slider'
import ProductTop from './ProductTop/ProducTop'
import ProductDogs from './ProductDogs'
import ProductMews from './ProductMews'
import ProductAccess from './ProductAccess'
import ProductOther from './PetsOther'
import News from './New/News'
import MyBackTop from '../reuse/MyBackTop'
import CartIcon from '../Cart/CartIcon'
import { MobileHiden } from '../responsive'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <Banner />
      <ProductTop />
      <ProductDogs />
      <ProductMews />
      <ProductAccess />
      <ProductOther />
      <News />
      <MyBackTop />

      <MobileHiden>
        <Link to="/cart">
          <CartIcon classType="cart-fixed"/>
        </Link>
      </MobileHiden>
    </>
  )
}

export default Main
