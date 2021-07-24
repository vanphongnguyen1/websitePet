import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PageSearchAndTop from '../ProductTop/PageSearchAndTop'
import { removeAccents } from '../../assets/js/removeAccents'

const PageSearchProduct = ({ match }) => {
  const fetchDataProducts = useSelector((state) => state.products.list)
  const key = useSelector((state) => state.keySearchProduct.key)
  const [dataProducts, setDataProducts] = useState([])

  useEffect(() => {
    const newData = []
    fetchDataProducts.forEach((item) => {
      const removeName = removeAccents(item.name)
      if (removeName.indexOf(key) !== -1) {
        newData.push(item)
      }
    })
    setDataProducts(newData)
  }, [fetchDataProducts, key])

  return (
    <>
      <PageSearchAndTop
        products={dataProducts}
        match={match}
        title="Tìm kiếm sản phẩm"
      />
    </>
  )
}

export default PageSearchProduct
