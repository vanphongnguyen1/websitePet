import React, { useState } from 'react'
import ModalLogin from '../Modal/ModalLogin'
import './style.scss'

const Login = () => {
  const [isModal, setIsModal] = useState(false)

  return (
    <>
      <div className="login">
        <div className="login--icon" onClick={() => setIsModal(true)}>
          Đăng nhập
        </div>
      </div>

      {
        isModal && (
          <ModalLogin isModal={isModal} setIsModal={setIsModal}/>
        )
      }
    </>
  )
}

export default Login
