import React, { useState } from 'react'
import Slider from "react-slick"
import ItemProduct from "../../Products/ItemProduct"
import BoxHeading from "../../reuse/BoxHeading"
import Buttom from "../../reuse/Buttom"
import { dataAll, PRODUCTHOT } from '../../dataConst'
import { Link } from 'react-router-dom'
import { useHandleSort } from '../../customHooks'
import './style.scss'

const ProductTop = () => {
  const [isParentSort, setIsParentSort] = useState('')
  const data = useHandleSort({dataAll, group: '', isParentSort})

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  }

  return (
    <>
      <div className="product-hot">
        <div className="container">
          <div className="product-top">
            <BoxHeading title={PRODUCTHOT} color="#fba262" setIsParentSort={setIsParentSort}/>

            <Slider {...settings}>
              {
                data.map(item => {
                  return item.hot && (
                    <Link to={`${item.group}/${item.url}`}
                      key={item.id}
                    >
                      <ItemProduct item={item}/>
                    </Link>
                  )
                })
              }
            </Slider>

            <div className="product-top__box-btn">
              <Link to='/product-hot'>
                <Buttom title="Xem tất cả" classType="btn--show-all" icon="fad fa-angle-double-right"/>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ProductTop
