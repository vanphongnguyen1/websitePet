import React from 'react'
import './buttom.scss'

const Buttom = props => {
  const {title, classType, icon, onClick} = props
  const CLASSBTN = [
    'btn--start',
    'btn--info',
    'btn--add',
    'btn--back-home',
    'btn--show-all',
    'btn--buy-now',
    'btn--order-modal'
  ]
  const passClassBtn = CLASSBTN.includes(classType) ? classType : ''

  return (
    <>
      <button className={`btn ${passClassBtn}`} onClick={onClick}>
        {title}
        {
          icon && <span className={icon} />
        }
      </button>
    </>
  )
}

export default Buttom
