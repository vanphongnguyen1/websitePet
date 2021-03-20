import React from 'react'

const InputFooter = () => {
  return (
    <>
      <form className="registration__from">
        <div className="registration__gmail">
          <input type="email" placeholder="Email..." className="registration__input"/>
          <span className="registration__icon fa fa-paper-plane" />
        </div>
      </form>
    </>
  )
}

export default InputFooter
