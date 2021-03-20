import React, { useState } from 'react'
import BoxHeading from "../../reuse/BoxHeading"
import { dataAll, PRODUCTHOT, DATANAV } from '../../dataConst'
import ShowAll from '../../Products/ShowAll'
import { useHandleSort } from '../../customHooks'
import PageTitle from '../../reuse/PageTitle'
import MyBackTop from '../../reuse/MyBackTop'
import { Link } from 'react-router-dom'
import CartIcon from '../../Cart/CartIcon'
import { MobileHiden } from '../../responsive'
import './style.scss'

const ShowTop = props => {
  const { match } = props
  const [isParentSort, setIsParentSort] = useState('')
  const newProduct = dataAll.filter(item => item.hot)
  const data = useHandleSort({dataAll: newProduct, group: '', isParentSort})

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
              products={data}
            />
          </div>
        </div>
      </div>

      <MyBackTop />

      <MobileHiden>
        <Link to="/cart">
          <CartIcon classType="cart-fixed"/>
        </Link>
      </MobileHiden>
    </>
  )
}

export default ShowTop
