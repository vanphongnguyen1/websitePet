import React, { useRef } from 'react'
import Nav from './Nav'
import './style.scss'

const Navigation = () => {
  const navRef = useRef(null)

  const handleNavigation = () => {
    const ele = navRef.current
    const innerWidth = window.innerWidth

    if (ele && innerWidth > 767) {
      if (window.scrollY > 180) {
        ele.classList.add('sroll-nav')
      } else {
        ele.classList.remove('sroll-nav')
      }
    }
  }

  window.addEventListener('scroll', handleNavigation)

  return (
    <div className="header-bottom" ref={navRef}>
      <div className="container">
        <Nav />
      </div>
    </div>
  )
}

export default Navigation
