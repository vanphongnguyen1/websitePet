import React from 'react'

const itemProduct = ({ product }) => {
  const { name, price, count, subtotal } = product

  return (
    <div className="table__tr">
      <p className="table__td--name">{name}</p>

      <p className="table__td--price">{price.toLocaleString()} đ</p>

      <p className="table__td--count">{count}</p>

      <p className="table__td--totalPrice">{subtotal.toLocaleString()} đ</p>
    </div>
  )
}

export default itemProduct
