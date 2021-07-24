import React, { useState } from 'react'
import Slider from 'react-slick'

const BoxImages = ({ imgs }) => {
  const listImages = imgs.split('|')

  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()
  return (
    <div className="info-product__box">
      <Slider asNavFor={nav2} ref={(slider) => setNav1(slider)}>
        {listImages.map((item, index) => {
          return (
            <div className="info-product__box-img" key={index}>
              <img
                src={item}
                alt="asd"
                className="info-product__box-img--show"
              />
            </div>
          )
        })}
      </Slider>

      <div className="slider-small">
        <Slider
          asNavFor={nav1}
          ref={(slider) => setNav2(slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          infinite={false}
        >
          {listImages.map((item, index) => {
            return (
              <div className="info-product__img-small" key={index}>
                <div className="info-product__box-img">
                  <img
                    src={item}
                    alt="asd"
                    className="info-product__box-img--list"
                  />
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default BoxImages
