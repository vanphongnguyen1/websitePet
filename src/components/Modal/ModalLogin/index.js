import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import { setStatusLogin } from '../../redux/statusLoginSlice'
import { useDispatch, useSelector } from 'react-redux'
import './style.scss'

const ModalLogin = props => {
  const dispatch = useDispatch()
  // const { isModal, setIsModal } = props
  const statusLogin = useSelector(state => state.statusLogin.status)
  const [isLogin, setIslogin] = useState(true)

  const handleCloseModal = () => {
    // setIsModal(false)
    dispatch(setStatusLogin(false))
  }

  return (
    <>
      <div className={ statusLogin ? 'modal-login visiteModal' : 'modal-login'}>
        <div className="modal__login">
          <h3 className="modal__login-title">
            {
              isLogin ? 'Đăng nhập vào Website' : 'Đăng ký tài khoản'
            }

            <span
              className="modal__login-title--close far fa-times-circle"
              onClick={handleCloseModal}
            />
          </h3>
          {
            isLogin && <Login setIslogin={setIslogin}/>
          }
          {
            !isLogin && <Register setIslogin={setIslogin}/>
          }
        </div>
      </div>

      <div
        className={ statusLogin ?'overllow visiteOverll' : 'overllow'}
        onClick={handleCloseModal}
      />
    </>
  )
}

export default ModalLogin
