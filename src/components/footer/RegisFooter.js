import React from 'react'
import InputFooter from './InputFooter'
import ItemNetwork from './ItemNetwork'
import { DATAICONTOOLTIP } from '../dataConst'

const RegisFooter = () => {
  return (
    <div className="footer__box">
      <h3 className="footer__title">ĐĂNG KÝ</h3>

      <div className="registration">
        <p className="registration__text">
          Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.
        </p>

        <InputFooter />
      </div>

      <div className="social-network">
        <ul>
          {DATAICONTOOLTIP.map((item, index) => {
            return <ItemNetwork key={index} item={item} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default RegisFooter
