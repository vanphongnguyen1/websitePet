import React from 'react'
import { MobileHiden } from '../../responsive'
import './style.scss'

const ItemBanner = ({ item }) => {
  const { title, subTitle, url, imageUrl } = item
  return (
    <>
      <div className="banner-group">
        <div
          className="banner-group__bg"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <MobileHiden>
            <div
              className={
                !imageUrl.includes('slider-shop-1')
                  ? 'sale sale-dog'
                  : 'sale sale-mew'
              }
            >
              <img
                src={
                  imageUrl.includes('slider-shop-1')
                    ? 'http://mauweb.monamedia.net/petcare/wp-content/uploads/2019/11/sale-25.png'
                    : 'http://mauweb.monamedia.net/petcare/wp-content/uploads/2019/11/sale-30.png'
                }
                className="sale-dog__img"
                alt="asd"
              />
            </div>
            <div
              className={`text-inner ${
                !imageUrl.includes('slider-shop-1') ? 'dog' : 'mew'
              }`}
            >
              <h2 className="text-inner__title">{subTitle}</h2>
              <h1 className="text-inner__heading">{title}</h1>
              <p className="text-inner__heading-sub">
                Tiết kiệm cho những thứ quan trọng của bạn
              </p>
              <p className="text-inner__heading-sub2">
                Tại cửa hàng và trực tuyến
              </p>
              <a href={url} title={url} className="btn--start">
                Bắt đầu
              </a>
            </div>
          </MobileHiden>
        </div>
        {!imageUrl.includes('slider-shop-1') && <div className="overflow" />}
      </div>
    </>
  )
}

export default ItemBanner
