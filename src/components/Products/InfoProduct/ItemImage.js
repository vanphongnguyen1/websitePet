import React from 'react'

const ItemImage = props => {
  const { item } = props

  return (
    <div className="info-product__box-img">
      <img src={item} alt="asd"/>
    </div>
  )
}

export default ItemImage
