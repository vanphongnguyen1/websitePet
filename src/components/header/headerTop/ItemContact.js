import React from 'react'

const ItemContact = (props) => {
  const { text, iconHeader } = props.item

  return (
    <li className="header-top__item">
      <span
        className={
          iconHeader.includes('clock') || iconHeader.includes('phone')
            ? 'header-top__item--icon icon-phone'
            : 'header-top__item--icon'
        }
      >
        <i className={iconHeader} />
      </span>

      <span className="header-top__item--text">{text}</span>
    </li>
  )
}

export default ItemContact
