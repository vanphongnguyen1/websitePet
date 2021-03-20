import React from 'react'
import Buttom from '../../reuse/Buttom'
import { MobileHiden } from '../../responsive'
import './style.scss'

const ItemBanner = props => {
  const { item, index } = props
  const { sale, title, heading, sub1, sub2, btn } = item
  return (
    <>
      <div className="banner-group">
        <div className={index === 0 ? 'banner-group__bg1' : 'banner-group__bg2'} >
          <MobileHiden>
            <div className={sale.includes('30') ? 'sale sale-dog' : 'sale sale-mew'}>
              <img src={sale} className="sale-dog__img" alt="asd" />
            </div>
            <div className={`text-inner ${sale.includes('30') ? 'dog' : 'mew'}`}>
              <h2 className="text-inner__title">{title}</h2>
              <h1 className="text-inner__heading">{heading}</h1>
              <p className="text-inner__heading-sub">{sub1}</p>
              <p className="text-inner__heading-sub2">{sub2}</p>
              <Buttom title={btn} classType="btn--start"/>
            </div>
          </MobileHiden>
        </div>
        {
         sale.includes('30') && <div className="overflow" />
        }
      </div>
    </>
  )
}

export default ItemBanner
