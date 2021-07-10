import React, { useState, useEffect, useMemo } from 'react'
import BoxHeading from "../../reuse/BoxHeading"
import { PRODUCTHOT, DATANAV } from '../../dataConst'
import ShowAll from '../../Products/ShowAll'
import PageTitle from '../../reuse/PageTitle'
import MyBackTop from '../../reuse/MyBackTop'
// import { Link } from 'react-router-dom'
// import CartIcon from '../../Cart/CartIcon'
// import { MobileHiden } from '../../responsive'
import { useSelector } from 'react-redux'
import { handleSort } from '../../assets/js/handleSort'
import './style.scss'

const ShowTop = props => {
  const { match } = props
  const [isParentSort, setIsParentSort] = useState('')
  // const newProduct = dataAll.filter(item => item.hot)
  // const data = useHandleSort({dataAll: newProduct, group: '', isParentSort})
  const dataProductFetch = useSelector(state => state.products)
  const [dataProducts, setDataProducts] = useState([])

  useEffect(() => {
    const newDataPeoducts = dataProductFetch.list.filter(item => item.isHot)
    setDataProducts(newDataPeoducts)

  }, [dataProductFetch])

  const data = useMemo(() => {
    if (dataProductFetch.loading === 'success') {
      return handleSort({dataAll: dataProducts, group: '', isParentSort})
    }
  }, [isParentSort, dataProductFetch, dataProducts])

  const child = DATANAV.slice(1, 3)

  return (
    <>
      <PageTitle match={match}/>

      <div className="product-hot">
        <div className="container">
          <div className="product-top">

            <BoxHeading
              title={PRODUCTHOT}
              color="#fba262"
              setIsParentSort={setIsParentSort}
            />

            <ShowAll
              child={child}
              products={data ? data : []}
            />
          </div>
        </div>
      </div>

      <MyBackTop />

      {/* <MobileHiden>
        <Link to="/cart">
          <CartIcon classType="cart-fixed"/>
        </Link>
      </MobileHiden> */}
    </>
  )
}

export default ShowTop
