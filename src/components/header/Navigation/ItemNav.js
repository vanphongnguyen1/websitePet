import React from 'react'
import NavDropdown from './NavDropdown'
import { NavLink } from 'react-router-dom'

const ItemMenu = props => {
  const { title, child, to } = props.item
  return (
    <>
      <li className={ child ? 'menu-child nav__item' : 'nav__item' }>
        <NavLink
          to={to}
          activeClassName="active"
          className="nav__link"
          exact
        >

          <span>{title}</span>

          {
            child && (
              <span className="nav__icon far fal fa-angle-down" />
            )
          }
        </NavLink>

        {
          child && (
            <NavDropdown child={child} to={to}/>
          )
        }
      </li>
    </>
  )
}

export default ItemMenu
