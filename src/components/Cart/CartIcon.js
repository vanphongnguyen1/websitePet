import React from 'react'
import { useSelector } from 'react-redux'
import './style.scss'

const CartIcon = props => {
  const { classType } = props
  const countProduct = useSelector(store => store.addProductCart)
  const numberProduct = countProduct.length

  const handleScrollCart = () => {
    const ele = document.querySelector('.cart-fixed')
    const innerWidth = window.innerWidth

    if (ele && innerWidth > 767) {
      if (window.scrollY > 400 ) {
        ele.classList.add('visible')
      } else {
        ele.classList.remove('visible')
      }
    }
  }

  window.addEventListener('scroll', handleScrollCart)

  return (
    <div className={`cart__box-icon ${classType}`}>
      <span className="cart__box-icon--icon icon-phone fal fa-shopping-cart" />
      <span className="cart__box-icon--number">
        { numberProduct || 0}
      </span>
    </div>
  )
}

export default CartIcon
