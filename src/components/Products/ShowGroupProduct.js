import React, { useState, useMemo } from 'react'
import BoxHeading from '../reuse/BoxHeading'
import Products from '../Products/Products'
import { handleSort } from '../assets/js/handleSort'
import { useSelector } from 'react-redux'

const ShowGroupProduct = ({ group, color, title }) => {
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
  }, [isParentSort, dataProductFetch, dataGroupFetch, group])

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <>
      <div className="product-group">
        <div className="container">
          <BoxHeading
            title={title}
            color={color}
            setIsParentSort={setIsParentSort}
          />

          <Products
            title={title}
            products={data ? data : [] }
          />
        </div>
      </div>
    </>
  )
}

export default ShowGroupProduct
