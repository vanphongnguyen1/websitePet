import React from 'react'
import { TabletHiden } from '../responsive'
import CartIcon from './CartIcon'
import './style.scss'

const Cart = () => {
  return (
    <div className="cart">
      <TabletHiden>
        <span className="cart--text">Giỏ hàng</span>
      </TabletHiden>

      <CartIcon />
    </div>
  )
}

export default Cart
