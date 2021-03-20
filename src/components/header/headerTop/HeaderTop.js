import React from 'react'
import { DATAICONTOOLTIP, DATACONTACT } from '../../dataConst'
import IconToolTip from './IconToolTip'
import ItemContact from './ItemContact'
import { TabletHiden } from '../../responsive'
import './style.scss'

const HeaderTop = () => {
  return (
    <>
      <TabletHiden>
        <div className="header-top">
          <div className="container" >
            <ul className="header-top__info">
              {
                DATACONTACT.map((item, index) => {
                  return <ItemContact key={index} item={item}/>
                })
              }

              <li className="header-top__item">
                {
                  DATAICONTOOLTIP.map((item, index) => {
                    return <IconToolTip item={item} key={index}/>
                  })
                }
              </li>
            </ul>
          </div>
        </div>
      </TabletHiden>
    </>
  )
}

export default HeaderTop
