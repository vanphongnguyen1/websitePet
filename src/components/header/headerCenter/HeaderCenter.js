import React, { useState, useRef } from 'react'
import HeaderSearch from './HeaderSearch'
import Cart from '../../Cart'
import Login from '../../Login'
import { TabletHiden, MobileHiden, Mobile } from '../../responsive'
import Navigation from '../Navigation/Navigation'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setStatusLogin } from '../../redux/statusLoginSlice'
import Logo from '../../reuse/Logo'
import './style.scss'

const HeaderCenter = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [ isNavMobile, setIsNavMobile ] = useState(false)
  const navMobileRef = useRef(null)

  const handleNavigation = () => {
    const ele = navMobileRef.current
    const innerWidth = window.innerWidth

    if (ele && innerWidth <= 767) {
      if (window.scrollY > 80) {
        ele.classList.add('sroll-nav')

      } else {
        ele.classList.remove('sroll-nav')
      }
    }
  }

  window.addEventListener('scroll', handleNavigation)

  const handleShowNavMobile = () => {
    setIsNavMobile(true)
  }

  const handleHidenNavMobile = () => {
    setIsNavMobile(false)
  }

  const handleToCart = () => {
    const id = sessionStorage.getItem('id')
    if (id) {
      history.push('/cart')
    } else {
      dispatch(setStatusLogin(true))
    }
  }

  return (
    <>
      <div
        className="header-center"
        ref={navMobileRef}
      >
        <div className="container">
          <div className="row align-center">
            <Mobile>
              {
                isNavMobile && (
                  <>
                    <Navigation />
                    <span
                      className="close-nav-mobile far fa-arrow-left"
                      onClick={handleHidenNavMobile}
                    />

                    <span
                      className="follow"
                      onClick={handleHidenNavMobile}
                    />
                  </>
                )
              }
              <div className="col-sm-2 col-2">
                <span
                  className="nav-mobile far fa-bars"
                  onClick={handleShowNavMobile}
                />
              </div>
            </Mobile>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-8 col-8">
              <div className="header-center__box-logo">
                <Logo />
              </div>
            </div>

            <MobileHiden>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <HeaderSearch />
              </div>
            </MobileHiden>

            <div className="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-2">
              <div className="header-center__box">
                <div className="box-cart" onClick={handleToCart}>
                  <Cart />
                </div>

                <TabletHiden>
                  <Login />
                </TabletHiden>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderCenter
