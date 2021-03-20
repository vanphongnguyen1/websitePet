import React from 'react'


const ItemText = props => {
  const { title } = props.ele

  return (
    <>
      <li className="footer__item">
        <a href="#a" className="footer__link">{title}</a>
      </li>
    </>
  )
}

export default ItemText
