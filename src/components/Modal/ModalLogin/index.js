import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import './style.scss'

const ModalLogin = props => {
  const { isModal, setIsModal } = props
  const [isLogin, setIslogin] = useState(true)

  const handleCloseModal = () => {
    setIsModal(false)
  }

  return (
    <>
      <div className={ isModal ? 'modal-login visiteModal' : 'modal-login'}>
        <div className="modal__login">
          <h3 className="modal__login-title">
            {
              isLogin ?'Đăng nhập vào Website' : 'Đăng ký tài khoản'
            }
            <span className="modal__login-title--close far fa-times-circle" onClick={handleCloseModal}/>
          </h3>
          {
            isLogin && <Login setIslogin={setIslogin}/>
          }
          {
            !isLogin && <Register setIslogin={setIslogin}/>
          }
        </div>
      </div>
      <div className={ isModal ?'overllow visiteOverll' : 'overllow'} onClick={handleCloseModal}/>
    </>
  )
}

export default ModalLogin
