import React from 'react'
import Header from './header'
import Footer from './footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { routes } from '../routes'
import ScrollToTop from './reuse/ScrollToTop'
import './assets/layout.scss'
import 'antd/dist/antd.css'
import './assets/reset.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const PetShop = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />

          <Switch>
            {
              routes.map((item, index) => {
                return <Route
                  path={item.path}
                  exact={item.exact}
                  component={item.main}
                  key={index}
                />
              })
            }
          </Switch>

        <Footer />
      </Router>
    </>
  )
}

export default PetShop;
