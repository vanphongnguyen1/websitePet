import React, { useState, useMemo } from 'react'
import {
  DATANAV,
  ACCESSORIES,
  COLOR,
  groupAccessories as group
} from '../../dataConst'
import BoxHeading from '../../reuse/BoxHeading'
import Products from '../../Products/Products'
import { handleSort } from '../../assets/js/handleSort'
import { useSelector } from 'react-redux'

const ProductAccess = () => {
  const [isParentSort, setIsParentSort] = useState('')
  const dataProductFetch = useSelector(state => state.products)
  const dataGroupFetch = useSelector(state => state.groups)

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
      <div className="product-access">
        <div className="container">
          <BoxHeading title={ACCESSORIES} color={COLOR} setIsParentSort={setIsParentSort}/>
          {
            DATANAV.map((item, index) => {
              if (item.title === ACCESSORIES) {
                return <Products
                  title={item.title}
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
    </>
  )
}

export default ProductAccess
