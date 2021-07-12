import React, { useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { routes } from '../routes'
import ScrollToTop from './reuse/ScrollToTop'
import { useDispatch } from 'react-redux'
import { fetchProductsAll } from './redux/productSlice'
import { fetchGroups } from './redux/groupSlice'
import { fetchImages } from './redux/imagesSlice'
import './assets/layout.scss'
import 'antd/dist/antd.css'
import './assets/reset.scss'
import './assets/override.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const PetShop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductsAll())
    dispatch(fetchGroups())
    dispatch(fetchImages())
  }, [dispatch])

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
