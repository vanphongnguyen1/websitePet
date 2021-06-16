import React from 'react'
import Slider from "react-slick"
import { textBanner } from '../../dataConst'
import ItemBanner from './ItemBanner'
import '../../assets/override.scss'

const Banner = () => {
  const beforeChange = (index) => {
    const element = document.querySelector('.slick-active')
    const textInner = element.querySelector('.text-inner')
    const sale = element.querySelector('.sale')

    if (index === 0) {
      textInner.classList.remove('animation-bottom')
      sale.classList.remove('animation-left-mew')

      return;
    }

    if (index === 1) {
      textInner.classList.remove('animation-left-dog')
      sale.classList.remove('animation-right-dog')
      return ;
    }
  }

  const afterChange = (prev) => {
    const element = document.querySelector('.slick-active')
    const textInner = element.querySelector('.text-inner')
    const sale = element.querySelector('.sale')

    if (prev === 1) {
      textInner.classList.add('animation-left-dog')
      sale.classList.add('animation-right-dog')
      return ;
    }
    if (prev === 0) {
      textInner.classList.add('animation-bottom')
      sale.classList.add('animation-left-mew')
      return ;
    }
  };

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    afterChange,
    beforeChange,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 8000,
          pauseOnHover: true,
          afterChange : () => {},
          beforeChange: () => {}
        }
      },
    ]
  }

  return (
    <>
      <div className="banner">
        {/* <div className="container"> */}
          <Slider {...settings}>
            {
              textBanner && (
                textBanner.map((item, index) => {
                  return <ItemBanner item={item} key={index} index={index}/>
                })
              )
            }
          </Slider>
        {/* </div> */}
      </div>
    </>
  )
}

export default Banner
