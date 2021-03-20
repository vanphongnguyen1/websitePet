import React from 'react';
import ItemNavListProduct from './ItemNavListProduct';
import './navListProduct.scss'


const NavListProduct = props => {
  return (
    <>
      <div className="nav-product">
        <ul className="nav-product__list">
          {
            props.child.map((item, index) => {
              return <ItemNavListProduct item={item} key={index}/>
            })
          }
        </ul>
      </div>
    </>
  );
}

export default NavListProduct;
