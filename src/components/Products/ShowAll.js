import React from 'react'
import ItemProduct from './ItemProduct'
import NavListProduct from './NavListProduct'
import { TabletHiden } from '../responsive'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './products.scss'

const ShowAll = props => {
  const { child, products } = props
  const dataGroup = useSelector(state => state.groups.list)
  // console.log(products);

  // products.forEach(item => { console.log(item.lineage.name);})

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
                      <Link
                        to={`${dataGroup.find(ele => ele.id === item.lineage.groupID).name}/${item.lineage.name}/${item.url}`}
                      >
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
