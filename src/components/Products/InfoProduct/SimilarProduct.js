import React, { useEffect } from 'react'
import Slider from 'react-slick'
import { dataAll } from '../../dataConst'
import ItemProduct from '../ItemProduct'
import { Link } from 'react-router-dom'

const SimilarProduct = (props) => {
  const { group, id } = props
  const data = dataAll.filter(item => group === item.group && item.id !== id)
  const newData = data.slice(0, 10)

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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Slider {...settings}>
        {
          newData.map(item => {
            return group === item.group && (
              <Link to={`/${item.group}/${item.url}`}
                key={item.id}
              >
                <ItemProduct item={item}/>
              </Link>
            )
          })
        }
      </Slider>
    </>
  )
}

export default SimilarProduct
