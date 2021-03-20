import React, { useState } from 'react'
import ItemImage from './ItemImage'
import Slider from "react-slick"

const BoxImages = props => {
  const { imgs } = props

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div className="info-product__box">
      <Slider asNavFor={nav2} ref={slider => setNav1(slider)}>
        {
          imgs.map((item, index) => {
            return <ItemImage item={item} key={index}/>
          })
        }
      </Slider>

      <div className="slider-small">
        <Slider
              asNavFor={nav1}
              ref={slider => setNav2(slider)}
              slidesToShow={4}
              swipeToSlide={true}
              focusOnSelect={true}
              infinite={false}
            >
          {
            imgs.map((item, index) => {
              return (
                <div className="info-product__img-small" key={index}>
                  <ItemImage item={item}/>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default BoxImages
