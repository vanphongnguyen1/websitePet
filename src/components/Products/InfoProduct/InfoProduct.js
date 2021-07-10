import React from 'react'
// import { infoProduct, COLOR } from '../../dataConst'
import { COLOR } from '../../dataConst'
import BoxHeading from '../../reuse/BoxHeading'
import BoxImages from './BoxImages'
import BoxInfo from './BoxInfo'
import SimilarProduct from './SimilarProduct'

const InfoProduct = props => {
  const { item, url } = props

  return (
    <div className="container">
      {/* {
        infoProduct.map((info, index) => {
          return info.lineageProductId === item.lineageId && (
            <div className="row" key={index}>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <BoxImages imgs={info.imgs}/>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <BoxInfo description={info.description} item={item} />
              </div>
            </div>
          )
        })
      } */}

      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <BoxImages imgs={item.images.url}/>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <BoxInfo description={item.type_product.description} item={item} />
        </div>
      </div>

      <div className="similar-product">
        <div className="slider-small">
          <BoxHeading title="Sản phẩm tương tự" color={COLOR} url={url}/>
          <SimilarProduct lineage={item.lineageID} id={item.id}/>
        </div>
      </div>
    </div>
  )
}

export default InfoProduct
