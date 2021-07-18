import React, { useState, useEffect, useMemo } from 'react'
import { Pagination } from 'antd';
import BoxHeading from "../../reuse/BoxHeading"
import PageTitle from '../../reuse/PageTitle'
import MyBackTop from '../../reuse/MyBackTop'
import { useHistory } from 'react-router-dom'
import ItemProduct from '../../Products/ItemProduct'
// import CartIcon from '../../Cart/CartIcon'
// import { MobileHiden } from '../../responsive'
import { useSelector } from 'react-redux'
import { handleSort } from '../../assets/js/handleSort'
import { removeAccents } from '../../assets/js/removeAccents'
import './style.scss'

const PageSearchAndTop = ({ match, products, title }) => {
  const history = useHistory()
  const [isParentSort, setIsParentSort] = useState('')
  // const newProduct = dataAll.filter(item => item.hot)
  // const data = useHandleSort({dataAll: newProduct, group: '', isParentSort})
  // const dataProductFetch = useSelector(state => state.products)
  // const [dataProducts, setDataProducts] = useState([])
  const dataGroup = useSelector(state => state.groups.list)
  const [pageDefault, setPageDefault] = useState(1)
  const [pageSizeDefault, setPageSizeDefault] = useState(16)
  const [dataPagination, setDataPagination] = useState([])

  // useEffect(() => {
  //   const newDataPeoducts = dataProductFetch.list.filter(item => item.isHot)
  //   setDataProducts(newDataPeoducts)

  // }, [dataProductFetch])

  const onShowSizeChange = (current, pageSize) => {
    setPageDefault(current)
    setPageSizeDefault(pageSize)
    window.scrollTo(0, 0)
  }

  const data = useMemo(() => {
    if (products.length) {
      return handleSort({dataAll: products, group: '', isParentSort})
    }
  }, [isParentSort, products])

  useEffect(() => {
    if (data) {
      const defaule = pageDefault * pageSizeDefault
      const newData = data.slice(defaule - pageSizeDefault, defaule)

      setDataPagination(newData)
    }
  }, [pageSizeDefault, pageDefault, data])

  return (
    <>
      <PageTitle match={match}/>

      <div className="product-hot">
        <div className="container">
          <div className="product-top">

            <BoxHeading
              title={title}
              color="#fba262"
              setIsParentSort={setIsParentSort}
            />

            <div className="row no-gutters">
              {
                dataPagination && (
                  dataPagination.map(item => {
                    return(
                      <div className="box-item col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6" key={item.id}>
                        <div
                          onDoubleClick={
                            () => history.push(`/${removeAccents(dataGroup.find(ele => ele.id === item.lineage.groupID).name)}/${removeAccents(item.lineage.name)}/${item.url}`)
                          }
                        >
                          <ItemProduct item={item}/>
                        </div>
                      </div>
                    )
                  })
                )
              }
            </div>
            {
              data && data.length >= pageSizeDefault && (
                <div className="list-product__pagination">
                  <Pagination
                    onChange={onShowSizeChange}
                    current={pageDefault}
                    total={data.length}
                    pageSize={pageSizeDefault}
                  />
                </div>
              )
            }
          </div>
        </div>
      </div>

      <MyBackTop />
{/* a {
  position: fixed;
    top: 50%;
    right: 3%;
} */}
      {/* <MobileHiden>
        <Link to="/cart">
          <CartIcon classType="cart-fixed"/>
        </Link>
      </MobileHiden> */}
    </>
  )
}

export default PageSearchAndTop
