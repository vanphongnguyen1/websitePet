import React from 'react'
import Banner from './Slider'
import ProductTop from './ProductTop/ProducTop'
import ProductDogs from './ProductDogs'
import ProductMews from './ProductMews'
import ProductAccess from './ProductAccess'
import ProductOther from './PetsOther'
import News from './New/News'
import MyBackTop from '../reuse/MyBackTop'

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
    </>
  )
}

export default Main
