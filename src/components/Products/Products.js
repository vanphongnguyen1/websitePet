import React from 'react'
import Slider from "react-slick"
import ItemProduct from './ItemProduct'
import NavListProduct from './NavListProduct'
import { Tablet, TabletHiden } from '../responsive'
import Buttom from '../reuse/Buttom'
import { Link } from 'react-router-dom'
import { DOG, MEW, ACCESSORIES } from '../dataConst'
import './products.scss'

// const DEVICE_SIZE = {
//   SMALL_PC: 991,
//   TABLET: 767
// }

const Products = props => {
  const { child, products, title} = props
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
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

  const newProducts = products.slice(0, 10)

  return (
    <div className="product">
      <div className="row">
        <TabletHiden>
          <div className="col-xl-2 col-lg-2">
            <NavListProduct child={child}/>
          </div>
        </TabletHiden>
        <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12">
          <div className="list-product">
            <TabletHiden>
              {
                newProducts.map(item => {
                  return(
                    <div className="box-item" key={item.id}>
                      <Link to={ `${item.group}/${item.url}` }
                      >
                        <ItemProduct item={item}/>
                      </Link>
                    </div>
                  )
                })
              }
            </TabletHiden>

              <Tablet>
                <Slider {...settings}>
                  {
                    newProducts.map(item => {
                      return(
                        <div className="box-item" key={item.id}>
                          <Link to={ `${item.group}/${item.url}` }
                          >
                            <ItemProduct item={item}/>
                          </Link>
                        </div>
                      )
                    })
                  }
                </Slider>
              </Tablet>
          </div>
        </div>
      </div>

      <div className="product__box-btn">
        <Link
          to={
            title === DOG
            ? '/dogs' : title === MEW
            ? '/mews' : title === ACCESSORIES
            ? '/accessories' : '/pet-other'
          }
        >
          <Buttom
            title="Xem tất cả"
            classType="btn--show-all"
            icon="fad fa-angle-double-right"
          />
        </Link>
      </div>
    </div>
  )
}

export default Products
