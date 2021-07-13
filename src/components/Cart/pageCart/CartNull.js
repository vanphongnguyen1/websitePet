import React from 'react'
import Buttom from '../../reuse/Buttom'
import { useHistory } from 'react-router-dom'

const CartNull = () => {
  const history = useHistory()

  return (
    <>
      <div className="cart-null">
        <Buttom
          title="Quay lại cửa hàng"
          classType="btn--back-home"
          onClick={() => history.push('/')}
        />
      </div>
    </>
  )
}

export default CartNull
