import React, { useState } from 'react'
import {
  DATANAV,
  PETSOTHER,
  COLOR,
  dataAll,
  groupOther as group
} from '../../dataConst'
import BoxHeading from '../../reuse/BoxHeading'
import ShowAll from '../../Products/ShowAll'
import { useHandleSort } from '../../customHooks'
import PageTitle from '../../reuse/PageTitle'
import MyBackTop from '../../reuse/MyBackTop'
import { Link } from 'react-router-dom'
import CartIcon from '../../Cart/CartIcon'
import { MobileHiden } from '../../responsive'

const ShowPetOther = props => {
  const { match } = props
  const [isParentSort, setIsParentSort] = useState('')
  const data = useHandleSort({dataAll, group, isParentSort})

  return (
    <>
      <PageTitle match={match}/>

      <div className="product-other">
        <div className="container">
          <BoxHeading title={PETSOTHER} color={COLOR} setIsParentSort={setIsParentSort}/>
          {
            DATANAV.map((item, index) => {
              if (item.title === PETSOTHER) {
                return <ShowAll
                  child={item.child}
                  products={data}
                  key={index}
                />
              }
              return false
            })
          }
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

export default ShowPetOther
