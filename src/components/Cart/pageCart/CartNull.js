import React from 'react'
import Buttom from '../../reuse/Buttom'
import { Link } from 'react-router-dom'

const CartNull = () => {
  return (
    <>
      <div className="cart-null">
        <Link to="/">
          <Buttom title="Quay lại cửa hàng" classType="btn--back-home"/>
        </Link>
      </div>
    </>
  )
}

export default CartNull
