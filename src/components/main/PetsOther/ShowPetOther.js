import React, { useState, useMemo } from 'react'
import {
  DATANAV,
  PETSOTHER,
  COLOR,
  groupOther as group
} from '../../dataConst'
import BoxHeading from '../../reuse/BoxHeading'
import ShowAll from '../../Products/ShowAll'
import PageTitle from '../../reuse/PageTitle'
import MyBackTop from '../../reuse/MyBackTop'
// import { Link } from 'react-router-dom'
// import CartIcon from '../../Cart/CartIcon'
// import { MobileHiden } from '../../responsive'
import { useSelector } from 'react-redux'
import { handleSort } from '../../assets/js/handleSort'

const ShowPetOther = props => {
  const { match } = props
  const [isParentSort, setIsParentSort] = useState('')
  // const data = useHandleSort({dataAll, group, isParentSort})

  const dataGroupFetch = useSelector(state => state.groups)
  const dataProductFetch = useSelector(state => state.products)


  const data = useMemo(() => {
    const listData = dataProductFetch.list
    const listGroup = dataGroupFetch.list

    if (dataProductFetch.loading === 'success' && dataGroupFetch.loading === 'success') {
      const findGroup = listGroup.find(item => item.name === group)
      return handleSort({dataAll: listData, group: findGroup.id, isParentSort})
    }
  }, [isParentSort, dataProductFetch, dataGroupFetch])

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
                  products={data ? data : []}
                  key={index}
                />
              }
              return false
            })
          }
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

export default ShowPetOther
