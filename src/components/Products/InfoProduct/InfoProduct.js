import React from 'react'
import { COLOR } from '../../dataConst'
import BoxHeading from '../../reuse/BoxHeading'
import BoxImages from './BoxImages'
import BoxInfo from './BoxInfo'
import SimilarProduct from './SimilarProduct'
import TabsInfoProduct from './TabsInfoProduct'

const InfoProduct = ({ item, url }) => {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
          <BoxImages imgs={item.images.url}/>
        </div>

        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
          <BoxInfo description={item.type_product.description} item={item} />
        </div>
      </div>

      <TabsInfoProduct idProduct={item.id} idGroup={item.lineage.groupID}/>

      <div className="similar-product">
        <div className="slider-small">
          <BoxHeading title="Sản phẩm tương tự" color={COLOR} url={url}/>
          <SimilarProduct lineage={item.lineageID} id={item.id} group={item.lineage.groupID}/>
        </div>
      </div>
    </div>
  )
}

export default InfoProduct
