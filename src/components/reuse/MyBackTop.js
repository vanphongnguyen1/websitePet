import React from 'react'
import { BackTop } from 'antd'
import './myBackTop.scss'

const MyBackTop = () => {
  return (
    <div className="back-top">
      <BackTop>
        <div className="back-top__box">
          <span className="back-top__box--text fas fa-arrow-alt-up" />
        </div>
      </BackTop>
    </div>
  )
}

export default MyBackTop
