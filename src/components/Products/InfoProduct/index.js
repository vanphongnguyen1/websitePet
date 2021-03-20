import React from 'react'
import { dataAll } from '../../dataConst'
import InfoProduct from './InfoProduct'
import PageTitle from '../../reuse/PageTitle'
import MyBackTop from '../../reuse/MyBackTop'
import { Link } from 'react-router-dom'
import CartIcon from '../../Cart/CartIcon'
import { MobileHiden } from '../../responsive'
import './style.scss'

const RootInfoProduct = props => {
  const { params } = props.match

  return (
    <>
      <PageTitle params={params}/>
      <div className="info-product">
        {
          dataAll.map(item => {
            return item.url === params.url && <InfoProduct item={item} key={item.id} url={params.url}/>
          })
        }
      </div>

      <MyBackTop />

      <MobileHiden>
        <Link to="/cart">
          <CartIcon classType="cart-fixed"/>
        </Link>
      </MobileHiden>
    </>
  )
}

export default RootInfoProduct
