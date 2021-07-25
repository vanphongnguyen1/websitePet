import React, { useState, useMemo } from 'react'
import ModalLogin from '../Modal/ModalLogin'
import { setToken, fetchUser } from '../redux/loginSlice'
import { setStatusLogin } from '../redux/statusLoginSlice'
import { fetchOrderofCart } from '../redux/ordersSlice'
import { fetchCartOfUser } from '../redux/cartsSlice'
import { fetchProductInCart, defaultState } from '../redux/productInCartSlice'
import { fetchProductDetailOrderAll } from '../redux/productDetailOrder'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './style.scss'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const tokenId = useSelector((state) => state.login.token)
  const statusLogin = useSelector((state) => state.statusLogin.status)
  const [dataUser, setDataUser] = useState({})
  const [isModel, setIsModel] = useState(false)

  useMemo(() => {
    const id = sessionStorage.getItem('id')

    if (id || tokenId) {
      dispatch(fetchUser(id || tokenId)).then((response) => {
        const data = response.payload

        dispatch(fetchCartOfUser(data.id)).then((res) => {
          const data = res.payload[0]
          dispatch(fetchOrderofCart(data.id))
          dispatch(fetchProductInCart(data.id))
          dispatch(fetchProductDetailOrderAll())
        })
        dispatch(setToken(data.id))
        setDataUser(data)
      })
    }
  }, [tokenId, dispatch])

  const handleLogOut = () => {
    sessionStorage.clear()
    history.push('/')
    dispatch(setToken(null))
    dispatch(defaultState())
    setIsModel(false)
  }

  const handleSetting = () => {
    history.push('/account')
    setIsModel(false)
  }

  return (
    <>
      <div className="login">
        {tokenId ? (
          <>
            <div className="login__box" onClick={() => setIsModel(true)}>
              {dataUser.avarta ? (
                <img src={dataUser.avarta} alt="avatar" />
              ) : (
                <span className="login__icon fas fa-user-circle" />
              )}

              <p className="login__text-name">{dataUser.name}</p>
            </div>

            <div className={`module-user ${isModel && 'visit-module'}`}>
              <ul className="module-user__list">
                <li className="module-user__item" onClick={handleSetting}>
                  Setting
                </li>

                <li className="module-user__item" onClick={handleLogOut}>
                  Log out
                </li>
              </ul>
            </div>

            {isModel && (
              <div className="overlay" onClick={() => setIsModel(false)} />
            )}
          </>
        ) : (
          <div
            className="login__text"
            onClick={() => dispatch(setStatusLogin(true))}
          >
            Đăng nhập
          </div>
        )}
      </div>

      {statusLogin && <ModalLogin />}
    </>
  )
}

export default Login
