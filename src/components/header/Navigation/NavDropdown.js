import React from 'react'
import { NavLink } from 'react-router-dom'

const NavDropdown = props => {
  const { child } = props
  // const { to } = props
  return (
    <>
      <div className="drop-down">
        <ul className="drop-down__list">
          {
            child && (
              child.map((item, index) => {
                return (
                  <li className="drop-down__item" key={index}>
                    <NavLink to='/a' className="drop-down__link">
                      { item.title }
                    </NavLink>
                  </li>
                )
              })
            )
          }
        </ul>
      </div>
    </>
  )
}

export default NavDropdown
