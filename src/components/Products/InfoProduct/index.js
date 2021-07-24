import React from 'react'
import InfoProduct from './InfoProduct'
import PageTitle from '../../reuse/PageTitle'
import MyBackTop from '../../reuse/MyBackTop'
import { useSelector } from 'react-redux'
import './style.scss'

const RootInfoProduct = (props) => {
  const { params } = props.match
  const dataProductFetch = useSelector((state) => state.products)

  return (
    <>
      <PageTitle params={params} />
      <div className="info-product">
        {dataProductFetch.loading === 'success' &&
          dataProductFetch.list.map((item) => {
            return (
              item.url === params.url && (
                <InfoProduct item={item} key={item.id} url={params.url} />
              )
            )
          })}
      </div>
      <MyBackTop />
    </>
  )
}

export default RootInfoProduct
