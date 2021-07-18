import React, { useState } from 'react'
import InfoUser from './InfoUser'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setToken } from '../redux/loginSlice'
import { defaultState } from '../redux/productInCartSlice'
import OrderDone from './OrderDone'
import './style.scss'

const SettingUser = () => {
  const dispatch =  useDispatch()
  const history = useHistory()
  const [isCategory, setIsCategory] = useState(1)

  const handleLogout = () => {
    sessionStorage.clear()
    dispatch(setToken(null))
    dispatch(defaultState())
    history.push('/')
  }

  return (
    <div className="info-user">
      <div className="container">
        <h3 className="info-user__title">
          Tài khoản của bạn
        </h3>

        <div className="row">
          <div className="col-xl-2">
            <div className="info-user__box">
              <h6 className="title-list">Tài khoản</h6>
              <ul className="list-category">
                <li
                  className={`list-category__item ${isCategory === 1 ? 'category-action' : ''}`}
                  onClick={() => setIsCategory(1)}
                >
                  <span className="list-category__item--icon fas fa-user" />
                  Thông tin tài khoản
                </li>

                <li
                  className={`list-category__item ${isCategory === 2 ? 'category-action' : ''}`}
                  onClick={() => setIsCategory(2)}
                >
                  <span className="list-category__item--icon fas fa-list" />
                  Quản lý đơn hàng
                </li>

                <li className="list-category__item" onClick={handleLogout}>
                  <span className="list-category__item--icon fas fa-sign-out-alt" />
                  Đăng xuất
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-10">
            <div className="info-user__box">
              { isCategory === 1 && <InfoUser /> }
              { isCategory === 2 && <OrderDone /> }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingUser
