import React from 'react'
import { Link } from 'react-router-dom'
import './logo.scss'

const Logo = () => {
  return (
    <div className="box-logo">
      <Link to="/">
        <img
          src="https://dogily.vn/wp-content/uploads/2020/07/dogily-logo.png"
          alt="Logo"
          className="box-logo--logo"
        />
      </Link>
    </div>
  )
}

export default Logo
