import React from 'react'
import './navListProduct.scss'

const NavListProduct = ({ listLineage, handleFetchLineage, idLineage }) => {
  return (
    <>
      <div className="nav-product">
        <ul className="nav-product__list">
          <li
            className={`nav-product__item ${
              idLineage === 0 ? 'nav-active' : ''
            }`}
            onClick={() => handleFetchLineage(0)}
          >
            Tất Cả
          </li>
          {listLineage.map((item) => {
            return (
              <li
                className={`nav-product__item ${
                  idLineage === item.id ? 'nav-active' : ''
                }`}
                key={item.id}
                onClick={() => handleFetchLineage(item.id)}
                title={item.name}
              >
                {item.name}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default NavListProduct
