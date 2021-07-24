import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import ItemProduct from '../ItemProduct'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { removeAccents } from '../../assets/js/removeAccents'

const SimilarProduct = (props) => {
  const { lineage, id, group } = props
  const history = useHistory()
  const dataProductFetch = useSelector((state) => state.products.list)
  const dataGroup = useSelector((state) => state.groups)
  const [newData, setNewData] = useState([])

  useEffect(() => {
    const filterData = []

    dataProductFetch.forEach((item) => {
      if (item.id === id) return
      if (lineage === item.lineageID && item.id !== id) {
        filterData.unshift(item)
      } else if (group === item.lineage.groupID && filterData.length < 20) {
        filterData.push(item)
      }
    })
    setNewData(filterData)
  }, [dataProductFetch, lineage, id, group])
  // const newData = data.slice(0, 10)

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Slider {...settings}>
        {dataGroup.loading === 'success' &&
          newData.map((item) => {
            return (
              <div
                onDoubleClick={() =>
                  history.push(
                    `/${
                      dataGroup.list.find(
                        (ele) => ele.id === item.lineage.groupID,
                      ).name
                    }/${removeAccents(item.lineage.name)}/${item.url}`,
                  )
                }
                key={item.id}
                className="product-top__box"
              >
                <ItemProduct item={item} />
              </div>
            )
          })}
      </Slider>
    </>
  )
}

export default SimilarProduct
