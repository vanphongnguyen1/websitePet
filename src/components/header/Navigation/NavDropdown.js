import React from 'react'
import { NavLink } from 'react-router-dom'
import { removeAccents } from '../../assets/js/removeAccents'
import { useDispatch } from 'react-redux'
import { setStatusNavNew } from '../../redux/newAction'

const NavDropdown = ({ child }) => {
  const dispatch = useDispatch()

  const handleClickNav = (id, title) => {
    if (child.length === 2) {
      dispatch(setStatusNavNew({
        id,
        title
      }))
    }
  }

  return (
    <>
      <div className="drop-down">
        <ul className="drop-down__list">
          {
            child && (
              child.map((item, index) => {
                return (
                  <li className="drop-down__item" key={index}>
                    <NavLink
                      to={`/news/${removeAccents(item.title)}`}
                      className="drop-down__link"
                      onClick={() => handleClickNav(index + 1, item.title)}
                    >
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
