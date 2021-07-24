import React from 'react'
import HeaderTop from './headerTop/HeaderTop'
import HeaderCenter from './headerCenter/HeaderCenter'
import Navigation from './Navigation/Navigation'
import { MobileHiden } from '../responsive'

const Header = () => {
  return (
    <>
      <HeaderTop />
      <HeaderCenter />

      <MobileHiden>
        <Navigation />
      </MobileHiden>
    </>
  )
}

export default Header
