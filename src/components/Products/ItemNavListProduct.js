import React from 'react';

const ItemNavListProduct = props => {
  const { title } = props.item

  return (
    <li className="nav-product__item">
      <a href="#f" className="nav-product__link">
        {title}
      </a>
    </li>
  );
}

export default ItemNavListProduct
