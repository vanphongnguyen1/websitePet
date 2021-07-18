import React, { useEffect, useState } from 'react'
import Slider from "react-slick"
import ItemProduct from './ItemProduct'
import NavListProduct from './NavListProduct'
import { Tablet, TabletHiden } from '../responsive'
import Buttom from '../reuse/Buttom'
import { useHistory, Link } from 'react-router-dom'
import { DOG, MEW, ACCESSORIES } from '../dataConst'
import { useSelector } from 'react-redux'
import { removeAccents } from '../assets/js/removeAccents'
import { useDispatch } from 'react-redux'
import './products.scss'

const Products = ({ products, title }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [listLineage, setListLineage] = useState([])
  const [dataShow, setDataShow] = useState([])
  const [idLineage, setIdLineage] = useState(0)
  const dataGroup = useSelector(state => state.groups)
  const dataLineage = useSelector(state => state.lineages.list)

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

  useEffect(() => {
    if (products.length && dataLineage) {
      setDataShow(products)
      const id = products[0].lineage.groupID
      const filterLineage = dataLineage.filter(item => item.groupID === id)
      setListLineage(filterLineage);
    }
  }, [dispatch, products, dataLineage])


  const handleFetchLineage = id => {
    setIdLineage(id)

    if (id === 0) {
      setDataShow(products)
      return
    }
    const filterData = products.filter(item => item.lineageID === id)
    setDataShow(filterData)
  }

  const newProducts = dataShow.slice(0, 10)

  return (
    <div className="product">
      <div className="row">
        <TabletHiden>
          <div className="col-xl-2 col-lg-2">
            <NavListProduct
              listLineage={listLineage}
              handleFetchLineage={handleFetchLineage}
              idLineage={idLineage}
            />
          </div>
        </TabletHiden>

        <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12">
          <div className="list-product-home">
            <TabletHiden>
              { dataGroup.loading === 'success' &&
                newProducts.map(item => {
                  return(
                    <div className="box-item" key={item.id}>
                      <div
                        onDoubleClick={
                          () => history.push(`/${removeAccents(dataGroup.list.find(ele => ele.id === item.lineage.groupID).name)}/${removeAccents(item.lineage.name)}/${item.url}`)
                        }
                      >
                        <ItemProduct item={item}/>
                      </div>
                    </div>
                  )
                })
              }
            </TabletHiden>

            <Tablet>
              <Slider {...settings}>
                { dataGroup.loading === 'success' &&
                  newProducts.map(item => {
                    return(
                      <div className="box-item" key={item.id}>
                        <div
                          onDoubleClick={
                            () => history.push(`/${removeAccents(dataGroup.list.find(ele => ele.id === item.lineage.groupID).name)}/${removeAccents(item.lineage.name)}/${item.url}`)
                          }
                        >
                          <ItemProduct item={item}/>
                        </div>
                      </div>
                    )
                  })
                }
              </Slider>
            </Tablet>
          </div>
        </div>
      </div>

      {
        products.length > 10 && (
          <div className="product__box-btn">
            <Link
              to={
                title === DOG
                ? '/dogs' : title === MEW
                ? '/cats' : title === ACCESSORIES
                ? '/phu-kien' : '/pet-other'
              }
            >
              <Buttom
                title="Xem tất cả"
                classType="btn--show-all"
                icon="fad fa-angle-double-right"
              />
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Products
