import React from 'react'
import { useSelector } from 'react-redux'
import './style.scss'

const CartIcon = () => {
  const totalCount = useSelector((store) => store.productInCart.list)

  return (
    <div className="cart__box-icon">
      <span className="cart__box-icon--icon icon-phone fal fa-shopping-cart" />
      <span className="cart__box-icon--number">{totalCount.length || 0}</span>
    </div>
  )
}

export default CartIcon
