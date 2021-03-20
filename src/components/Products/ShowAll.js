import React from 'react'
import ItemProduct from './ItemProduct'
import NavListProduct from './NavListProduct'
import { TabletHiden } from '../responsive'
import { Link } from 'react-router-dom'
import './products.scss'

const ShowAll = props => {
  const { child, products } = props

  return (
    <div className="product">
      <div className="row">
        <TabletHiden>
          <div className="col-xl-2 col-lg-2">
            {
              child && <NavListProduct child={child}/>
            }
          </div>
        </TabletHiden>
        <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12">
          <div className="list-product">
            <div className="row no-gutters">
              {
                products.map(item => {
                  return(
                    <div className="box-item col-md-3 col-sm-4 col-6" key={item.id}>
                      <Link to={`${item.group}/${item.url}`}>
                        <ItemProduct item={item}/>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowAll
