import React from 'react'
import { NavLink } from 'react-router-dom'
import { removeAccents } from '../../assets/js/removeAccents'
import { useDispatch } from 'react-redux'
import { setStatusNavNew } from '../../redux/newAction'
import { setStatusService } from '../../redux/serviceSlice'

const NavDropdown = ({ child }) => {
  const dispatch = useDispatch()

  const handleClickNav = (id, title) => {
    if (child.length === 2) {
      dispatch(
        setStatusNavNew({
          id,
          title,
        }),
      )
    }

    if (child.length === 4) {
      dispatch(
        setStatusService({
          id,
          title,
        }),
      )
    }
  }

  return (
    <>
      <div className="drop-down">
        <ul className="drop-down__list">
          {child &&
            child.map((item, index) => {
              return (
                <li
                  className="drop-down__item"
                  key={index}
                  onClick={() => handleClickNav(index + 1, item.title)}
                >
                  <NavLink
                    to={`${
                      child.length === 2
                        ? '/news/' + removeAccents(item.title)
                        : child.length === 4
                        ? '/dich-vu/' + removeAccents(item.title)
                        : '/ho-tro'
                    }`}
                    className="drop-down__link"
                  >
                    {item.title}
                  </NavLink>
                </li>
              )
            })}
        </ul>
      </div>
    </>
  )
}

export default NavDropdown
