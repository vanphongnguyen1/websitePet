import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PageSearchAndTop from './PageSearchAndTop'
import { PRODUCTHOT } from '../../dataConst'

const ShowTop = ({ match }) => {
  const dataProductFetch = useSelector(state => state.products)
  const [dataProducts, setDataProducts] = useState([])

  useEffect(() => {
    const newDataPeoducts = dataProductFetch.list.filter(item => item.isHot)
    setDataProducts(newDataPeoducts)
  }, [dataProductFetch])

  return (
    <>
      <PageSearchAndTop
        products={dataProducts}
        match={match}
        title={PRODUCTHOT}
      />
    </>
  )
}

export default ShowTop
