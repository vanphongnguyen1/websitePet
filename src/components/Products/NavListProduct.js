import React from 'react';
import './navListProduct.scss'


const NavListProduct = ({ listLineage }) => {
  return (
    <>
      <div className="nav-product">
        <ul className="nav-product__list">
          {
            listLineage.map(item => {
              return (
                <li className="nav-product__item" key={item.id}>
                  <a href="#f" className="nav-product__link">
                    {item.name}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  );
}

export default NavListProduct;
