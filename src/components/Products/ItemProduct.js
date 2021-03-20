import React from 'react'
import './itemProduct.scss'

const ItemProductTop = props => {
  const { src, srcSub, name, price, title } = props.item

  return (
    <div className="box">
      <img src={src} alt="sdds" className="box--img"/>
      { srcSub && <img src={srcSub} alt="sdds" className="box--img-sub"/>}

      <div className="box-text">
        <h3 className="box-text--title">{title}</h3>
        <p className="box-text--name">{name}</p>
        <p className="box-text--price">{price.toLocaleString()} VNĐ</p>
      </div>
    </div>
  )
}

export default ItemProductTop
