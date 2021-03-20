import React from 'react'

const ListInfoAccessories = props => {
  const { description } = props

  return (
    <ul>
      {
        description.map((item, index) => {
          return (
            <li className="box-info__list--item" key={index}>
              <span className="box-info__list--item-icon far fa-check" />
              <span className="box-info__list--item-text">
                {item}
              </span>
            </li>
          )
        })
      }
    </ul>
  )
}

export default ListInfoAccessories
