import React, { useState, useMemo } from 'react'
import ModalLogin from '../Modal/ModalLogin'
import { setToken } from '../redux/loginSlice'
import { setStatusLogin } from '../redux/statusLoginSlice'
import { useSelector, useDispatch } from 'react-redux'
import { customAxiosApi } from '../reuse/CustomAxios'
import './style.scss'

const Login = () => {
  const dispatch = useDispatch()
  // const [isModal, setIsModal] = useState(false)
  const tokenId = useSelector(state => state.login.token)
  const statusLogin = useSelector(state => state.statusLogin.status)
  const [dataUser, setDataUser] = useState({})
  const [isModel, setIsModel] = useState(false)

  useMemo(() => {
    const id = sessionStorage.getItem('id')

    if (id || tokenId) {
      customAxiosApi.get(`users/${id || tokenId}`)
      .then(response => {
        const { data } = response.data
        dispatch(setToken(data.id))

        setDataUser(data)
      })
    }
  }, [tokenId, dispatch])

  const handleLogOut = () => {
    sessionStorage.clear()
    dispatch(setToken(null))
    setIsModel(false)
  }

  return (
    <>
      <div className="login">
        {
          tokenId ? (
            <>
              <div className="login__box" onClick={() => setIsModel(true)}>
                {
                  dataUser.avarta
                    ? <img alt="" src="aa" />
                    : <span className="login__icon fas fa-user-circle" />
                }

                <p className="login__text-name">
                  { dataUser.name }
                </p>
              </div>

              <div className={`module-user ${isModel && 'visit-module'}`}>
                <ul className="module-user__list">
                  <li className="module-user__item">
                    Setting
                  </li>

                  <li
                    className="module-user__item"
                    onClick={handleLogOut}
                  >
                    Log out
                  </li>
                </ul>
              </div>

              {
                isModel && (
                  <div
                    className="overlay"
                    onClick={() => setIsModel(false)}
                  />
                )
              }
            </>
          ) : (
            <div
              className="login__text"
              onClick={() => dispatch(setStatusLogin(true))}
            >
              Đăng nhập
            </div>
          )
        }
      </div>

      {
        statusLogin && (
          <ModalLogin />
        )
      }
    </>
  )
}

export default Login
