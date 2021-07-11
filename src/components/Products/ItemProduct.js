import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import  { groupDogs, groupMews, groupOther } from '../dataConst'
import './itemProduct.scss'

const ItemProduct = ({ item }) => {
  const {
    // id,
    // imagesID,
    // typeProductID,
    images,
    name,
    priceSale,
    price,
    lineage
  } = item
  const dataGroup = useSelector(state => state.groups)
  const [nameGroup, setNameGroup] = useState('')
  const salse = Number.parseInt((price - priceSale)/price*100)

  useEffect(() => {
    if (dataGroup.loading === 'success') {
      const result = dataGroup.list.find(item => item.id === lineage.groupID)
      setNameGroup(result.name)
    }
  }, [dataGroup, lineage])

  const urlImage = images.url.split('|')

  return (
    <div className="box">
      <img src={urlImage[0]} alt="sdds" className="box--img"/>
      { urlImage[1] && <img src={urlImage[1]} alt="sdds" className="box--img-sub"/>}

      <div className="box-text">
        <h3 className="box-text--title">
          {
            nameGroup === groupDogs ? 'Bán chó cảnh'
            : nameGroup === groupMews ? ' Bán mèo cảnh'
            : nameGroup === groupOther ? 'Bán thú kiểng'
            : 'Bán phụ kiện'
          }
        </h3>
        <p className="box-text--name">{name}</p>
        <p className="box-text--price">{priceSale.toLocaleString()} VNĐ</p>
        {
          priceSale < price && (
            <>
              <p className="box-text--price-default">
                {price.toLocaleString()} VNĐ
              </p>

              <span className="box-text--sale">
                { salse  + '%' }
              </span>
            </>
          )
        }
      </div>
    </div>
  )
}

export default ItemProduct
