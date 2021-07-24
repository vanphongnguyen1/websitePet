import React from 'react'
import { DATANAV } from '../../dataConst'
import { Mobile } from '../../responsive'
import HeaderSearch from '../headerCenter/HeaderSearch'
import ItemNav from './ItemNav'

const Nav = () => {
  return (
    <div className="nav">
      <Mobile>
        <div className="nav__box-mobile">
          <img
            src="https://dogily.vn/wp-content/uploads/2020/07/dogily-logo.png"
            alt="Logo Dogily"
            className="nav__box-mobile--img"
          />
          <HeaderSearch />
        </div>
      </Mobile>

      <ul className="nav__list">
        {DATANAV.map((item, index) => {
          return <ItemNav item={item} key={index} />
        })}
      </ul>
    </div>
  )
}

export default Nav
