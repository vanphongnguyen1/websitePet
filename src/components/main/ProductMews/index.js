import React, { useState } from 'react'
import {
  DATANAV,
  MEW,
  COLOR,
  dataAll,
  groupMews as group
 } from '../../dataConst'
import Products from '../../Products/Products'
import BoxHeading from '../../reuse/BoxHeading'
import { useHandleSort } from '../../customHooks'

const ProductMews = () => {
  const [isParentSort, setIsParentSort] = useState('')
  const data = useHandleSort({dataAll, group, isParentSort})

  return (
    <>
      <div className="product-mews">
        <div className="container">
            <BoxHeading title={MEW} color={COLOR} setIsParentSort={setIsParentSort}/>
            {
              DATANAV.map((item, index) => {
                if (item.title === MEW) {
                  return <Products
                    title={item.title}
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
    </>
  )
}

export default ProductMews
