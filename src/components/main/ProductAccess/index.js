import React, { useState } from 'react'
import {
  DATANAV,
  ACCESSORIES,
  COLOR,
  dataAll,
  groupAccessories as group
} from '../../dataConst'
import BoxHeading from '../../reuse/BoxHeading'
import Products from '../../Products/Products'
import { useHandleSort } from '../../customHooks'

const ProductAccess = () => {
  const [isParentSort, setIsParentSort] = useState('')
  const data = useHandleSort({dataAll, group, isParentSort})

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

export default ProductAccess
