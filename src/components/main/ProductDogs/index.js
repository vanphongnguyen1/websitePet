import React, { useState } from 'react'
import {
  DATANAV,
  dataAll,
  DOG,
  COLOR,
  groupDogs as group
} from '../../dataConst'
import BoxHeading from '../../reuse/BoxHeading'
import Products from '../../Products/Products'
import { useHandleSort } from '../../customHooks'

const ProductDogs = () => {
  const [isParentSort, setIsParentSort] = useState('')
  const data = useHandleSort({dataAll, group, isParentSort})

  return (
    <>
      <div className="product-dogs">
        <div className="container">
          <BoxHeading title={DOG} color={COLOR} setIsParentSort={setIsParentSort}/>
          {
            DATANAV.map((item, index) => {
              if (item.title === DOG) {
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

export default ProductDogs
