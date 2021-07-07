import React from 'react'
import './itemProduct.scss'

const ItemProduct = ({ item }) => {
  const {
    // id,
    // imagesID,
    // typeProductID,
    images,
    name,
    priceSale
  } = item

  const urlImage = images.url.split('|')

  return (
    <div className="box">
      <img src={urlImage[0]} alt="sdds" className="box--img"/>
      { urlImage[1] && <img src={urlImage[1]} alt="sdds" className="box--img-sub"/>}

      <div className="box-text">
        <h3 className="box-text--title">{false || 'Bán cho cảnh'}</h3>
        <p className="box-text--name">{name}</p>
        <p className="box-text--Sale">{priceSale.toLocaleString()} VNĐ</p>
      </div>
    </div>
  )
}

export default ItemProduct
