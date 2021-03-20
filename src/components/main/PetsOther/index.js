import React, { useEffect, useState } from 'react'
import {
  DATANAV,
  PETSOTHER,
  COLOR,
  dataAll,
  groupOther as group
} from '../../dataConst'
import BoxHeading from '../../reuse/BoxHeading'
import Products from '../../Products/Products'
import { useHandleSort } from '../../customHooks'

const ProductOther = () => {
  const [isParentSort, setIsParentSort] = useState('')
  const data = useHandleSort({dataAll, group, isParentSort})

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="product-other">
        <div className="container">
          <BoxHeading title={PETSOTHER} color={COLOR} setIsParentSort={setIsParentSort}/>
          {
            DATANAV.map((item, index) => {
              if (item.title === PETSOTHER) {
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

export default ProductOther
