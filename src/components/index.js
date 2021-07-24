import React, { useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { routes } from '../routes'
import ScrollToTop from './reuse/ScrollToTop'
import { useDispatch } from 'react-redux'
import { fetchProductsAll } from './redux/productSlice'
import { fetchGroups } from './redux/groupSlice'
import { fetchImages } from './redux/imagesSlice'
import { fetchGender } from './redux/genderSlice'
import { fetchLineageAll } from './redux/lineageSlice'
import { fetchSlider } from './redux/sliderSlice'
import './assets/layout.scss'
import 'antd/dist/antd.css'
import './assets/reset.scss'
import './assets/override.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const PetShop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSlider())
    dispatch(fetchProductsAll())
    dispatch(fetchGroups())
    dispatch(fetchImages())
    dispatch(fetchGender())
    dispatch(fetchLineageAll())
    window.scrollTo(0, 0)
  }, [dispatch])

  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />

        <Switch>
          <Redirect from="/tin-tuc" exact to="/news" />
          {routes.map((item, index) => {
            return (
              <Route
                path={item.path}
                exact={item.exact}
                component={item.main}
                key={index}
              />
            )
          })}
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default PetShop
