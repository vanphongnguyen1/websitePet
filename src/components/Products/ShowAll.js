import React, { useState,  useEffect } from 'react'
import ItemProduct from './ItemProduct'
import NavListProduct from './NavListProduct'
import { TabletHiden } from '../responsive'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeAccents } from '../assets/js/removeAccents'
import { Pagination } from 'antd';
import { fetchLineageToGroup } from '../redux/lineageSlice'
import './products.scss'

const ShowAll = ({ products }) => {
  const dispatch = useDispatch()
  const [dataPagination, setDataPagination] = useState([])
  const [listLineage, setListLineage] = useState([])
  const [pageDefault, setPageDefault] = useState(1)
  const [pageSizeDefault, setPageSizeDefault] = useState(30)

  const [dataShow, setDataShow] = useState([])
  const [idLineage, setIdLineage] = useState(0)

  const dataGroup = useSelector(state => state.groups.list)

  const onShowSizeChange = (current, pageSize) => {
    setPageDefault(current)
    setPageSizeDefault(pageSize)
  }

  const handleFetchLineage = id => {
    setIdLineage(id)

    if (id === 0) {
      setDataShow(products)
      return
    }

    const filterData = products.filter(item => item.lineageID === id)
    setDataShow(filterData)
  }

  useEffect(() => {
    setDataShow(products)
  }, [products])

  useEffect(() => {
    if (products.length) {
      const id = products[0].lineage.groupID
      dispatch(fetchLineageToGroup(id))
      .then(res => {
        setListLineage(res.payload);
      })
    }
  }, [dispatch, products])


  useEffect(() => {
    const defaule = pageDefault * pageSizeDefault
    const newData = dataShow.slice(defaule - pageSizeDefault, defaule)

    setDataPagination(newData)
  }, [pageSizeDefault, pageDefault, dataShow, idLineage])

  return (
    <div className="product">
      <div className="row">
        <TabletHiden>
          <div className="col-xl-2 col-lg-2">
            {
              listLineage.length > 0 && (
                <NavListProduct
                  listLineage={listLineage}
                  handleFetchLineage={handleFetchLineage}
                  idLineage={idLineage}
                />
              )
            }
          </div>
        </TabletHiden>
        <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12">
          <div className="list-product">
            <div className="row no-gutters">
              {
                dataPagination.length ?
                dataPagination.map(item => {
                  return(
                    <div className="box-item col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6" key={item.id}>
                      <Link
                        to={`${dataGroup.find(ele => ele.id === item.lineage.groupID).name}/${removeAccents(item.lineage.name)}/${item.url}`}
                      >
                        <ItemProduct item={item}/>
                      </Link>
                    </div>
                  )
                })
                : (
                  <div className="list-product__not-product">
                    <p className="list-product__not-product--text">Sản phẩm hết hàng</p>
                  </div>
                )
              }
            </div>

            {
              dataShow.length >= pageSizeDefault && (
                <div className="list-product__pagination">
                  <Pagination
                    onChange={onShowSizeChange}
                    current={pageDefault}
                    total={dataShow.length}
                    pageSize={pageSizeDefault}
                  />
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowAll
