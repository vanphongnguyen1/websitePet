import React from 'react'

const ModalInfoProduct = ({ item, count }) => {
  const { images, name, price } = item
  const listImages = images.url.split('|')

  return (
    <div className="my-modal__box">
      <div className="my-modal__box--name-img">
        <img src={listImages[0]} alt={name} className="my-modal__box--img"/>
        <div>
          <p className="my-modal__box--name">{name}</p>
          <p className="my-modal__box--price">{price.toLocaleString()} VNĐ</p>
          <p className="my-modal__box--count">Số lượng: {count}</p>
        </div>
      </div>

      <p className="my-modal__box--text">
        Bạn vui lòng nhập đúng số điện thoại để chúng
        tôi sẽ gọi xác nhận đơn hàng trước khi giao hàng. Xin cảm ơn!
      </p>
    </div>
  )
}

export default ModalInfoProduct
